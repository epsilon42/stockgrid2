import React, { useState, useEffect } from "react";
import Plotly from "react-plotly.js";
import ClipLoader from "react-spinners/ClipLoader";
import "./SymbolGraph.style.scss";

const defaultConfig = {
  displaylogo: false,
  displayModeBar: false
};
const defaultLayout = {
  // hovermode: "closest",

  margin: {
    l: 1,
    t: 0,
    b: 32,
    r: 32
  },
  autosize: true,
  style: {
    width: "100%",
    height: "100%"
  },
  paper_bgcolor: "#0f162d",
  plot_bgcolor: "#0f162d",
  showlegend: false,
  spikedistance: 1000,
  // hoverdistance: 10,
  xaxis: {
    showspikes: true,
    spikethickness: 2,
    // spikemode: "toaxis+across+marker",
    // spikesnap: 'cursor',
    fixedrange: true,
    showticklabels: false,
    showline: true,
    showgrid: true,
    linecolor: "#1f2a50",
    type: "category",
    categoryorder: "category ascending",
    zeroline: false
    // hoverformat: ""
  },
  yaxis: {
    fixedrange: true,
    showticklabels: false,
    showgrid: true,
    zeroline: false,
    showline: true,
    linecolor: "#1f2a50"
  }
};

// const oneDayLayout = {
//   // hovermode: "closest",

//   margin: {
//     l: 1,
//     t: 0,
//     b: 32,
//     r: 32
//   },
//   autosize: true,
//   style: {
//     width: "100%",
//     height: "100%"
//   },
//   paper_bgcolor: "#0f162d",
//   plot_bgcolor: "#0f162d",
//   showlegend: false,
//   spikedistance: 1000,
//   // hoverdistance: 10,
//   xaxis: {
//     showspikes: true,
//     spikethickness: 2,
//     // spikemode: "toaxis+across+marker",
//     // spikesnap: 'cursor',
//     fixedrange: true,
//     showticklabels: false,
//     showline: true,
//     showgrid: true,
//     linecolor: "#1f2a50",
//     type: "date",
//     zeroline: false
//     // hoverformat: ""
//   },
//   yaxis: {
//     fixedrange: true,
//     showticklabels: false,
//     showgrid: true,
//     zeroline: false,
//     showline: true,
//     linecolor: "#1f2a50"
//   }
// };

const LoadingContainer = () => (
  <div className="LoadingContainer">
    <span className="LoadingText">
      <ClipLoader color={"#ffffff"} />
    </span>
  </div>
);

const SymbolGraph = ({ historicalData, intradayData }) => {
  const [data, setData] = useState(null);
  // const [layout, setLayout] = useState(defaultLayout);
  const [currentDateRange, setCurrentDateRange] = useState("1d");
  // const [config, setConfig] = useState(defaultConfig);

  const [processedHistoricalData, setProcessedHistoricalData] = useState(null);
  const [processedOneDayData, setProcessedOneDayData] = useState(null);
  const [processedSevenDayData, setProcessedSevenDayData] = useState(null);

  // const [frames, setFrames] = useState([]);

  const setter = dateRange => {
    if (dateRange === "1d") {
      setCurrentDateRange("1d");
      setData(processedOneDayData);
      // setLayout(oneDayLayout);
    }
    if (dateRange === "7d") {
      setCurrentDateRange("7d");
      setData(processedSevenDayData);
      // setLayout(defaultLayout);
    }
    if (dateRange === "max") {
      setCurrentDateRange("max");
      setData(processedHistoricalData);
      // setLayout(defaultLayout);
    }
  };

  useEffect(() => {
    if (historicalData) {
      const xAxis = Object.keys(historicalData.history).map(item => item);
      const yAxis = Object.keys(historicalData.history).map(
        item => historicalData.history[item].close
      );
      const defaultData = [
        {
          x: xAxis,
          y: yAxis,
          type: "scatter",
          mode: "lines",
          line: {
            color: "#87b5dc",
            width: 1
          },
          marker: { color: "white" },
          hovertemplate: "Price: $%{y:.2f}<br>Date: %{x}<extra></extra>",
          hoverlabel: {
            align: "left",
            bgcolor: "#1f2a50",
            bordercolor: "#1f2a50",
            font: {
              family: "Lato",
              size: 24,
              color: "white"
            }
          }
        }
      ];
      setProcessedHistoricalData(defaultData);
    }
  }, [historicalData]);

  useEffect(() => {
    if (intradayData) {
      const mostRecentDay = Object.keys(intradayData.intraday)[0].slice(0, 10);

      const xAxisOneDay = Object.keys(intradayData.intraday).filter(
        item => item.slice(0, 10) === mostRecentDay
      );
      const yAxisOneDay = Object.keys(intradayData.intraday)
        .filter(item => item.slice(0, 10) === mostRecentDay)
        .map(item => intradayData.intraday[item].close);

      const xAxisSevenDay = Object.keys(intradayData.intraday).map(
        item => item
      );
      const yAxisSevenDay = Object.keys(intradayData.intraday).map(
        item => intradayData.intraday[item].close
      );
      const oneDayData = [
        {
          x: xAxisOneDay,
          y: yAxisOneDay,
          type: "scatter",
          mode: "lines",
          line: {
            color: "#87b5dc",
            width: 1
          },
          marker: { color: "white" },
          hovertemplate: "Price: $%{y:.2f}<br>Date: %{x}<extra></extra>",
          hoverlabel: {
            align: "left",
            bgcolor: "#1f2a50",
            bordercolor: "#1f2a50",
            font: {
              family: "Lato",
              size: 24,
              color: "white"
            }
          }
        }
      ];
      const sevenDayData = [
        {
          x: xAxisSevenDay,
          y: yAxisSevenDay,
          type: "scatter",
          mode: "lines",
          line: {
            color: "#87b5dc",
            width: 1
          },
          marker: { color: "white" },
          hovertemplate: "Price: $%{y:.2f}<br>Date: %{x}<extra></extra>",
          hoverlabel: {
            align: "left",
            bgcolor: "#1f2a50",
            bordercolor: "#1f2a50",
            font: {
              family: "Lato",
              size: 24,
              color: "white"
            }
          }
        }
      ];
      setProcessedOneDayData(oneDayData);
      setProcessedSevenDayData(sevenDayData);
    }
  }, [intradayData]);

  useEffect(() => {
    setData(processedOneDayData);
  }, [processedOneDayData]);

  return (
    <div className="SymbolGraph">
      {data ? (
        <Plotly
          data={data}
          layout={defaultLayout}
          config={defaultConfig}
          useResizeHandler={true}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <LoadingContainer />
      )}
      <div className="buttons">
        <button
          className={`${currentDateRange === "1d" && "active"}`}
          onClick={() => setter("1d")}
        >
          1D
        </button>
        <button
          className={`${currentDateRange === "7d" && "active"}`}
          onClick={() => setter("7d")}
        >
          7D
        </button>
        <button
          className={`${currentDateRange === "max" && "active"}`}
          onClick={() => setter("max")}
        >
          MAX
        </button>
      </div>
    </div>
  );
};

export default SymbolGraph;
