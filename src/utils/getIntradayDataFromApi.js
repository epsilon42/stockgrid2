export const getIntradayDataFromApi = async symbol => {
  // const url = new URL("https://intraday.worldtradingdata.com/api/v1/intraday");
  const url = new URL("https://www.goninon.net/stockgrid/intraday/");

  let params = {
    symbol
    // api_token: `${process.env.REACT_APP_WORLD_TRADING_DATA_API}`,
    // interval: "1",
    // range: "7"
  };
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  try {
    let response = await fetch(url, { method: "GET" });
    // console.log(response);
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
