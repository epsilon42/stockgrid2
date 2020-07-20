// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import slugify from "slugify";
// Initialize Firebase
const app = firebase.initializeApp({
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_FIREBASE_DATABASE_URL}`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
  measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}`,
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email } = userAuth;
    const createdAt = new Date();

    // console.log(userAuth);
    // console.log(additionalData);

    try {
      // console.log(email);
      await userRef.set({
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// export const setDisplayNameOnFirebase = async (uid, displayName) => {
//   const userRef = firestore.doc(`users/${uid}`);
//   console.log("AAA");
//   try {
//     console.log("CCC");
//     await userRef.update({
//       displayName: "change ffs"
//     });
//   } catch (error) {
//     console.log("DDD");
//     console.log(error);
//   }
// };

export const updateMasterStockList = async (data) => {
  const listRef = firestore.doc(`stocks/fullList`);
  const filteredData = data.filter((item) => item.name !== "N/A");

  try {
    await listRef.set({
      data: filteredData,
    });
    console.log("Updated master stock list");
  } catch (error) {
    console.log("error updating master list", error.message);
  }
};

export const getMasterStockList = async () => {
  const listRef = firestore.doc(`stocks/fullList`);
  try {
    const snapShot = await listRef.get();
    if (snapShot.exists) {
      // console.log(snapShot.data().data);
      return snapShot.data().data;
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.log("error retrieving master list", error.message);
  }
};

export const updatePortfolioStocksOnFirebase = async (
  portfolioKey,
  newStocksList
) => {
  const portfolioRef = firestore.doc(`portfolios/${portfolioKey}`);
  try {
    await portfolioRef.update({
      stocks: newStocksList,
    });
  } catch (error) {
    console.log("error updating portfolio with new stocks", error.message);
  }
};

export const addNewPortfolioOnFirebase = async (name, owner) => {
  var newPortfolioRef = firestore.collection("portfolios").doc();

  const data = {
    icon: "portfolio",
    key: newPortfolioRef.id,
    slug: slugify(name.toLowerCase()),
    name,
    owner,
    stocks: [],
  };

  try {
    await newPortfolioRef.set(data);
    return { id: newPortfolioRef.id, data };
  } catch (error) {
    console.log("error adding new portfolio", error.message);
  }
};

export const deletePortfolioOnFirebase = async (portfolioKey, owner) => {
  // console.log(portfolioKey, owner);
  // remove from users/:userid/portfolioKeys array
  const userRef = firestore.doc(`users/${owner}`);
  const snapShot = await userRef.get();
  // console.log(userRef.data().portfolioKeys);

  const oldPortfolioKeys = await snapShot.data().portfolioKeys;
  const newPortfolioKeys = oldPortfolioKeys.filter((e) => e !== portfolioKey);

  try {
    await userRef.update({
      portfolioKeys: newPortfolioKeys,
    });
  } catch (err) {
    console.error(err);
  }

  const portfolioRef = firestore.doc(`portfolios/${portfolioKey}`);
  try {
    await portfolioRef.delete();
  } catch (err) {
    console.error(err);
  }
};

export const addPortfolioKeyToUserOnFirebase = async (uid, portfolioId) => {
  // console.log(uid, portfolioKey);

  // INTERESTING SYNTAX PROVIDED BY VSC BELOW SEEMS TO WORK (but not using it because i want to reuse userRef)
  // const userData = await (await firestore.doc(`users/${uid}`).get()).data();
  // console.log(userData);

  const userRef = firestore.doc(`users/${uid}`);
  const userData = (await userRef.get()).data();
  const newPortfolioKeys = [...userData.portfolioKeys, portfolioId];

  try {
    await userRef.update({ portfolioKeys: newPortfolioKeys });
    return newPortfolioKeys;
  } catch (error) {
    console.log(`Error setting new portfolio keys for user ${uid}`, error);
  }
};

export const firestore = firebase.firestore();

export default app;
