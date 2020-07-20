const INITIAL_STATE = {
  portfolioKeys: ["aaa", "bbb", "ccc"],
  portfolioContents: {
    aaa: {
      name: "Watchlist",
      stocks: [
        "AMC.AX",
        "ANZ.AX",
        "BHP.AX",
        "BXB.AX",
        "CBA.AX",
        "CSL.AX",
        "GMG.AX",
        "IAG.AX",
        "MQG.AX",
        "NAB.AX",
        "NCM.AX",
        "RIO.AX",
        "SCG.AX",
        "SUN.AX",
        "TLS.AX",
        "TCL.AX",
        "WES.AX",
        "WBC.AX",
        "WPL.AX",
        "WOW.AX"
      ],
      owner: "Andrew",
      icon: "watchlist"
    },
    bbb: {
      name: "Portfolio 1",
      stocks: ["ANZ.AX", "CBA.AX"],
      owner: "Andrew",
      icon: "portfolio"
    },
    ccc: {
      name: "Portfolio 2",
      stocks: ["ALU.AX", "WTC.AX"],
      owner: "Andrew",
      icon: "portfolio"
    },
    ddd: {
      name: "Someone elses portfolio",
      stocks: ["BAL.AX"],
      owner: "user1234",
      icon: "portfolio"
    }
  }
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
