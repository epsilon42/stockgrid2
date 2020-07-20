import chunk from "lodash/chunk";

export const getStockDataFromApi = async symbols => {
  let allResponse = [];

  const bundles = chunk(symbols, 20);

  for (const bundle of bundles) {
    // const url = new URL("https://api.worldtradingdata.com/api/v1/stock");
    const url = new URL("https://www.goninon.net/stockgrid/stockdata/");

    let params = {
      symbol: bundle
      // api_token: `${process.env.REACT_APP_WORLD_TRADING_DATA_API}`
    };
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, params[key])
    );
    try {
      let response = await fetch(url, { method: "GET" });
      response = await response.json();
      // console.log("Finished bundle: ", bundle);
      allResponse.push(response);
    } catch (err) {
      console.log(err);
    }
  }
  return allResponse.map(res => res.data).flat();
};
