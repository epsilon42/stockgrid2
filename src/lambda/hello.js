import fetch from "node-fetch";

exports.handler = async function (event, context) {
  try {
    const response = await fetch(
      `https://api.worldtradingdata.com/api/v1/history?symbol=BHP.AX&api_token=${process.env.REACT_APP_WORLD_TRADING_DATA_API}`
    );
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.json();

    return {
      statusCode: 200,
      // body: data.value
      // if you want to return whole json string
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: err.message, // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
};
