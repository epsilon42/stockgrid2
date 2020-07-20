import React, { useEffect, useState } from "react";
import app, { firestore } from "./firebase/firebase";
import slugify from "slugify";

export const AuthContext = React.createContext();

const convertArrayToObject = (array, key) =>
  array.reduce(
    (obj, item) => ({
      ...obj,
      [item[key]]: item
    }),
    {}
  );

const getFirebaseUserData = user => {
  var docRef = firestore.collection("users").doc(user.uid);

  return docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        return doc.data();
      } else {
        // console.log("getFirebaseUserData: No such document!");
        return null;
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
};

const getFirebasePortfolioContents = async portfolioKeys => {
  const portfolioContents = await Promise.all(
    portfolioKeys.map(key => {
      var docRef = firestore.collection("portfolios").doc(key);

      return docRef
        .get()
        .then(function(doc) {
          if (doc.exists) {
            // return { key, ...doc.data() };
            return {
              key: key,
              slug: slugify(doc.data().name.toLowerCase()),
              ...doc.data()
            };
          } else {
            console.log("getFirebasePortfolioContents: No such document!");
            return null;
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    })
  );

  return convertArrayToObject(portfolioContents, "slug");
};

export const AuthProvider = ({ children }) => {
  // const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [portfolioKeys, setPortfolioKeys] = useState(null);
  const [portfolioContents, setPortfolioContents] = useState(null);
  const [isDoingStuff, setIsDoingStuff] = useState(false);
  const [isNewPortfolio, setIsNewPortfolio] = useState(false);

  useEffect(() => {
    app.auth().onAuthStateChanged(async user => {
      if (user) {
        if (!isDoingStuff) {
          let firebaseUserData = await getFirebaseUserData(user);
          if (!firebaseUserData) {
            firebaseUserData = await getFirebaseUserData(user);
          }
          setDisplayName(firebaseUserData.displayName);
          setPortfolioKeys(firebaseUserData.portfolioKeys);
          setPortfolioContents(
            await getFirebasePortfolioContents(firebaseUserData.portfolioKeys)
          );
          setCurrentUser(user);

          // setIsLoadingUser(false);
        }
      } else {
        setCurrentUser(null);
        setDisplayName(null);
        setPortfolioKeys(null);
        setPortfolioContents(null);
      }
    });
  }, [isDoingStuff]);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        displayName,
        setDisplayName,
        portfolioKeys,
        setPortfolioKeys,
        portfolioContents,
        setPortfolioContents,
        // isLoadingUser,
        setIsDoingStuff,
        isNewPortfolio,
        setIsNewPortfolio
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
