export const getHistoricalDataFromApi = async symbol => {
  // const url = new URL("https://api.worldtradingdata.com/api/v1/history");
  const url = new URL("https://www.goninon.net/stockgrid/history/");

  let params = {
    symbol
    // api_token: `${process.env.REACT_APP_WORLD_TRADING_DATA_API}`
  };
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  try {
    let response = await fetch(url, { method: "GET" });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
