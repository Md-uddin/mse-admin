import React from "react";
import Admin from "layouts/Admin.js";
import SingleBarChart from "components/Cards/SingleBar";
import Doughnut from "components/Cards/Doughnut";
import CardLineChart from "components/Cards/CardLineChart";
import PieChartComponent from "components/Cards/PieChart";
import CardBarChart from "components/Cards/CardBarChart";
import TransactionTable from "components/Cards/TransactionTable";
import CardTable from "components/Cards/CardTable";

const StocksData = () => {
  ///////////for bars///////
  const mostBuyed = {
    type: "Most buyed Stocks",

    daily: {
      labels: [
        "Virat kholi",
        "ms Dhoni",
        "Sachin Tendulkar",
        "Rohit sharma",
        "Sourav Ganguly",
        " Yuvraj Singh",
        "Suresh Raina",
        "Rohit sharma",
        "Sourav Ganguly",
        " Yuvraj Singh",
        "Suresh Raina",
      ],
      color: "#51c4b1",
      data: [13, 78, 34, 100, 45, 49, 56, 34, 100, 45, 49],
      duration: "day's",
      id: 1,
    },
    weekly: {
      labels: [
        "Virat kholi",
        "ms Dhoni",
        "Sachin Tendulkar",
        "Rohit sharma",
        "Sourav Ganguly",
        " Yuvraj Singh",
        "Suresh Raina",
        "Rohit sharma",
        "Sourav Ganguly",
        " Yuvraj Singh",
        "Suresh Raina",
      ],
      color: "#51c4b1",
      data: [150, 178, 156, 134, 202, 145, 150, 178, 156, 134, 109],
      duration: "week's",
      id: 2,
    },
    monthly: {
      labels: [
        "Virat kholi",
        "ms Dhoni",
        "Sachin Tendulkar",
        "Rohit sharma",
        "Sourav Ganguly",
        " Yuvraj Singh",
        "Suresh Raina",
        "Rohit sharma",
        "Sourav Ganguly",
        " Yuvraj Singh",
        "Suresh Raina",
      ],
      color: "#257aa8",
      data: [523, 688, 756, 834, 1009, 455, 523, 688, 756, 834, 749],
      duration: "month's",
      id: 4,
    },
  };
  const mostSold = {
    type: "Most Sold Stocks",

    daily: {
      labels: [
        "Virat kholi",
        "ms Dhoni",
        "Sachin Tendulkar",
        "Rohit sharma",
        "Sourav Ganguly",
        " Yuvraj Singh",
        "Suresh Raina",
        "Rohit sharma",
        "Sourav Ganguly",
        " Yuvraj Singh",
        "Suresh Raina",
      ],
      color: "#9c4b6a",
      data: [13, 78, 34, 100, 45, 49, 100, 45, 49, 56, 34],
      duration: "day's",
      id: 11,
    },
    weekly: {
      labels: [
        "Virat kholi",
        "ms Dhoni",
        "Sachin Tendulkar",
        "Rohit sharma",
        "Sourav Ganguly",
        " Yuvraj Singh",
        "Suresh Raina",
        "Rohit sharma",
        "Sourav Ganguly",
        " Yuvraj Singh",
        "Suresh Raina",
      ],
      color: "#9c4b6a",
      data: [150, 178, 150, 178, 156, 134, 109, 156, 134, 202, 145],
      duration: "week's",
      id: 12,
    },
    monthly: {
      labels: [
        "Virat kholi",
        "ms Dhoni",
        "Sachin Tendulkar",
        "Rohit sharma",
        "Sourav Ganguly",
        " Yuvraj Singh",
        "Suresh Raina",
        "Rohit sharma",
        "Sourav Ganguly",
        " Yuvraj Singh",
        "Suresh Raina",
      ],
      color: "#9c4b6a",
      data: [523, 455, 523, 688, 756, 834, 749, 688, 756, 834, 1009],
      duration: "month's",
      id: 14,
    },
  };

  //////////doughnut////
  const stocksBuyed = {
    type: "Most purchased stock's",
    colors: [
      "#35de87",
      "#de35a3",
      "#deae35",
      "#de3546",
      "#35de87",
      "#de35a3",
      "#deae35",
      "#de3546",
    ],
    labels: [
      "virat kholi",
      "Sachin Tendulkar",
      "MS Dhoni",
      "Sourav Ganguly",
      "virat kholi",
      "Sachin Tendulkar",
      "MS Dhoni",
      "Sourav Ganguly",
    ],
    daily: {
      data: [10, 30, 60, 20, 10, 20, 30, 60],
      duration: "day's",
      color: "#257aa8",
      id: 1,
    },
    weekly: {
      data: [20, 50, 20, 50, 120, 70, 120, 70],
      duration: "week's",
      color: "#257aa8",
      id: 2,
    },
    monthly: {
      data: [80, 70, 130, , 70, 130, 90, 160],
      duration: "month's",
      color: "#257aa8",
      id: 3,
    },
  };
  const stocksSold = {
    type: "Most Sold stock's",
    colors: [
      "#35de87",
      "#de35a3",
      "#deae35",
      "#35de87",
      "#de35a3",
      "#deae35",
      "#de3546",
      "#de3546",
    ],
    labels: [
      "virat kholi",
      "Sachin Tendulkar",
      "MS Dhoni",
      "Sourav Ganguly",
      "virat kholi",
      "Sachin Tendulkar",
      "MS Dhoni",
      "Sourav Ganguly",
    ],
    daily: {
      data: [10, 30, 60, 20, 10, 20, 30, 60],
      duration: "day's",
      color: "#257aa8",
      id: 5,
    },
    weekly: {
      data: [20, 50, 20, 50, 120, 70, 120, 70],
      duration: "week's",
      color: "#257aa8",
      id: 6,
    },
    monthly: {
      data: [80, 70, 130, , 70, 130, 90, 160],
      duration: "month's",
      color: "#257aa8",
      id: 7,
    },
  };
  const buyedPie = {
    type: ["Holding's", ""],
    colors: ["#4fc281", "#4fc292", "#4fc292", "#0b875a"],
    labels: ["FII's", "DII's", "playerX", "playerY"],
    daily: {
      data: [10, 20, 30, 60],
      duration: "day's",
      color: "#257aa8",
      id: 11,
    },
    weekly: {
      data: [120, 50, 10, 70],
      duration: "week's",
      color: "#257aa8",

      id: 15,
    },
    monthly: {
      data: [80, 70, 130, 90],
      duration: "month's",
      color: "#257aa8",
      id: 13,
    },
  };
  const soldPie = {
    type: ["Sold Stocks", ""],
    colors: ["#b03543", "#b03568", "#b03543", "#b03568"],
    labels: ["FII's", "DII's", "playerX", "playerY"],

    daily: {
      data: [30, 20, 30, 60],
      duration: "day's",
      color: "#a31c59",
      id: 14,
    },
    weekly: {
      data: [120, 50, 10, 70],
      duration: "week's",
      color: "#a31c59",
      id: 15,
    },
    monthly: {
      data: [20, 170, 30, 90],
      duration: "month's",
      color: "#a31c59",
      id: 16,
    },
  };
  ////////////for line chart
  const DepositeWithdrawLine = {
    type: ["Overview", ""],
    data1Name: "Deposite",
    data2Name: "Withdraw",
    daily: {
      labels: [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ],
      color1: "#1a4999",
      color2: "#991a60",
      color: "#257aa8",

      data1: [65, 78, 66, 44, 56, 67, 75],
      data2: [40, 68, 86, 74, 56, 60, 87],
      duration: "day's",
      id: 1,
    },
    weekly: {
      labels: [
        "week-1",
        "week-2",
        "week-3",
        "week-4",
        "week-5",
        "week-6",
        "week-7",
        "week-8",
      ],
      color1: "#1a4999",
      color2: "#991a60",
      color: "#257aa8",

      data2: [65, 78, 66, 44, 56, 67, 75],
      data1: [40, 68, 86, 74, 56, 60, 87],
      duration: "week's",
      id: 2,
    },
    monthly: {
      labels: [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ],
      color1: "#1a4999",
      color2: "#991a60",
      color: "#257aa8",

      data1: [165, 78, 66, 144, 56, 167, 75],
      data2: [40, 168, 86, 174, 56, 160, 87],
      duration: "month's",
      id: 3,
    },
  };
  ////////pie chart //////
  const stocksFollowed = {
    type: "Most Followed stock's",
    labels: [
      "virat kholi",
      "Sachin Tendulkar",
      "MS Dhoni",
      "Sourav Ganguly",
      "virat kholi",
      "Sachin Tendulkar",
      "MS Dhoni",
      "Sourav Ganguly",
    ],
    colors: [
      "#F1F1F1","#202020","#7E909A","#1C4E80","#A5D8DD","#EA6A47","#0091D5",
      "#1a4999",
    ],
    daily: {
      data: [10, 30, 60, 20, 10, 20, 30, 60],
      duration: "day's",
      color: "#a31c59",
      id: 10,
    },
    weekly: {
      data: [120, 50, 20, 50, 120, 70, 120, 70],
      duration: "week's",
      color: "#a31c59",
      id: 11,
    },
    monthly: {
      data: [201, 80, 70, 130, , 70, 130, 190],
      duration: "month's",
      color: "#a31c59",
      id: 12,
    },
  };
  const stocksWatchListed = {
    type: "Top watchListed stock's",
    labels: [
      "virat kholi",
      "Sachin Tendulkar",
      "MS Dhoni",
      "Sourav Ganguly",
      "virat kholi",
      "Sachin Tendulkar",
      "MS Dhoni",
      "Sourav Ganguly",
    ],
    colors: [
      "#1a4999",
      "#de35a3",
      "#deae35",
      "#de3546",
      "#de3546",
      "#991a60",
      "#1a4999",
      "#de35a3",
    ],
    daily: {
      data: [10, 30, 60, 20, 10, 20, 30, 60],
      duration: "day's",
      color: "#a31c59",
      id: 20,
    },
    weekly: {
      data: [120, 50, 20, 50, 120, 70, 120, 70],
      duration: "week's",
      color: "#a31c59",
      id: 21,
    },
    monthly: {
      data: [201, 80, 70, 130, , 70, 130, 190],
      duration: "month's",
      color: "#a31c59",
      id: 22,
    },
  };

  //////double bars //////////////////////////////////
  const buysell = {
    type: ["Orders", ""],
    data1Name: "Buy Orders",
    data2Name: "Sell Orders",
    daily: {
      labels: [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ],
      color2: "#ba3434",
      color1: "#0b875a",
      color: "#257aa8",

      data1: [65, 78, 66, 44, 56, 67, 75],
      data2: [40, 68, 86, 74, 56, 60, 87],
      duration: "day's",
      id: 1,
    },
    weekly: {
      labels: [
        "week-1",
        "week-2",
        "week-3",
        "week-4",
        "week-5",
        "week-6",
        "week-7",
        "week-8",
      ],
      color2: "#ba3434",
      color1: "#0b875a",
      color: "#257aa8",

      data2: [65, 78, 66, 44, 56, 67, 75],
      data1: [40, 68, 86, 74, 56, 60, 87],
      duration: "week's",
      id: 2,
    },
    monthly: {
      labels: [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ],
      color2: "#ba3434",
      color1: "#0b875a",
      color: "#257aa8",

      data1: [165, 78, 66, 144, 56, 167, 75],
      data2: [40, 168, 86, 174, 56, 160, 87],
      duration: "month's",
      id: 3,
    },
  };

  ////////////////table data////////////////////////////////
  const savedData = {
    savedData: true,
    heading: "Stocks Transaction",
    th: ["stocks", "Price", "Type", "Volume", "User name", "status", "Remarks"],
    daily: {
      list: [
        {
          img: "/img/player.png",
          name: "virat kholi",
          data1: "103",
          type: ["SELL", "#b80f0f"],
          volume: "63",
          data3: "Iron man",
          status: ["completed", "#00bf7c"],
          data5: "-",

          // admin: ["/img/admin.png", "/img/admin2.png"],
        },
        {
          img: "/img/player.png",
          name: "virat kholi",
          data1: "103",
          type: ["SELL", "#b80f0f"],
          volume: "105",
          data3: "Iron man",
          status: ["Failed", "#b80f0f"],
          data5: "Due to insufficient wallet balance", // admin: ["/img/admin.png"],
        },
        {
          img: "/img/player.png",
          name: "virat kholi",
          data1: "103",
          type: ["BUY", "#00bf7c"],
          volume: "105",
          data3: "Iron man",
          status: ["completed", "#00bf7c"],
          data5: "-", // admin: ["/img/admin.png"],
        },
        {
          img: "/img/player.png",
          name: "virat kholi",
          data1: "103",
          type: ["SELL", "#b80f0f"],
          volume: "105",
          data3: "Iron man",
          status: ["Failed", "#b80f0f"],
          data5: "Due to insufficient wallet balance", // admin: ["/img/admin.png", "/img/admin2.png"],
        },
        {
          img: "/img/player.png",
          name: "virat kholi",
          data1: "103",
          type: ["SELL", "#b80f0f"],
          volume: "63",
          data3: "Iron man",
          status: ["Pending", "#b36814"],
          data5: "UnExpected Error occured", // admin: ["/img/admin.png", "/img/admin2.png"],
        },
        {
          img: "/img/player.png",
          name: "virat kholi",
          data1: "103",
          type: ["BUY", "#00bf7c"],
          volume: "63",
          data3: "Iron man",
          status: ["completed", "#00bf7c"],
          data5: "-", // admin: ["/img/admin.png", "/img/admin2.png"],
        },
      ],
      duration: "day's",
      color: "#00ad9c",
    },
    weekly: {
      list: [
        {
          img: "/img/player.png",
          name: "virat kholi",
          data1: "103",
          type: ["SELL", "#b80f0f"],
          volume: "568",
          data3: "Iron man",
          status: ["completed", "#00bf7c"],
          data5: "-",

          // admin: ["/img/admin.png", "/img/admin2.png"],
        },
        {
          img: "/img/player.png",
          name: "virat kholi",
          data1: "103",
          type: ["SELL", "#b80f0f"],
          volume: "568",
          data3: "Iron man",
          status: ["Failed", "#b80f0f"],
          data5: "Due to insufficient wallet balance", // admin: ["/img/admin.png"],
        },
        {
          img: "/img/player.png",
          name: "virat kholi",
          data1: "103",
          type: ["BUY", "#00bf7c"],
          volume: "568",
          data3: "Iron man",
          status: ["completed", "#00bf7c"],
          data5: "-", // admin: ["/img/admin.png"],
        },

        {
          img: "/img/player.png",
          name: "virat kholi",
          data1: "103",
          type: ["BUY", "#00bf7c"],
          volume: "568",
          data3: "Iron man",
          status: ["completed", "#00bf7c"],
          data5: "-", // admin: ["/img/admin.png", "/img/admin2.png"],
        },
        {
          img: "/img/player.png",
          name: "virat kholi",
          data1: "103",
          type: ["SELL", "#b80f0f"],
          volume: "63",
          data3: "Iron man",
          status: ["completed", "#00bf7c"],
          data5: "-",

          // admin: ["/img/admin.png", "/img/admin2.png"],
        },
        {
          img: "/img/player.png",
          name: "virat kholi",
          data1: "103",
          type: ["SELL", "#b80f0f"],
          volume: "63",
          data3: "Iron man",
          status: ["Failed", "#b80f0f"],
          data5: "Due to insufficient wallet balance", // admin: ["/img/admin.png"],
        },
      ],
      duration: "week's",
      color: "#00ad9c",
    },
    monthly: {
      list: [
        {
          img: "/img/player.png",
          name: "virat kholi",
          data1: "103",
          type: ["SELL", "#b80f0f"],
          volume: "451",
          data3: "Iron man",
          status: ["Failed", "#b80f0f"],
          data5: "Due to insufficient wallet balance", // admin: ["/img/admin.png", "/img/admin2.png"],
        },
        {
          img: "/img/player.png",
          name: "virat kholi",
          data1: "103",
          type: ["SELL", "#b80f0f"],
          volume: "451",
          data3: "Iron man",
          status: ["Pending", "#b36814"],
          data5: "UnExpected Error occured", // admin: ["/img/admin.png", "/img/admin2.png"],
        },
        {
          img: "/img/player.png",
          name: "virat kholi",
          data1: "103",
          type: ["BUY", "#00bf7c"],
          volume: "451",
          data3: "Iron man",
          status: ["completed", "#00bf7c"],
          data5: "-", // admin: ["/img/admin.png"],
        },
        {
          img: "/img/player.png",
          name: "virat kholi",
          data1: "103",
          type: ["SELL", "#b80f0f"],
          volume: "451",
          data3: "Iron man",
          status: ["Failed", "#b80f0f"],
          data5: "Due to insufficient wallet balance", // admin: ["/img/admin.png", "/img/admin2.png"],
        },
        {
          img: "/img/player.png",
          name: "virat kholi",
          data1: "103",
          type: ["SELL", "#b80f0f"],
          volume: "63",
          data3: "Iron man",
          status: ["Pending", "#b36814"],
          data5: "UnExpected Error occured", // admin: ["/img/admin.png", "/img/admin2.png"],
        },
        {
          img: "/img/player.png",
          name: "virat kholi",
          data1: "103",
          type: ["BUY", "#00bf7c"],
          volume: "63",
          data3: "Iron man",
          status: ["completed", "#00bf7c"],
          data5: "-", // admin: ["/img/admin.png", "/img/admin2.png"],
        },
      ],
      duration: "month's",
      color: "#00ad9c",
    },
  };
  const transactionData = {
    savedData: true,
    heading: "Wallet Transactions",
    th: ["User", "Amount", "Type", "date/time", "status", "Method", "Remark"],
    daily: {
      list: [
        {
          img: "/img/Admin2.png",
          name: "Iron Man",
          data1: "103",
          type: ["Withdraw", "#b80f0f"],
          data3: "30-03-2022/05:06 pm",
          status: ["completed", "#00bf7c"],
          data4: "Gpay/upi",
          data5: "-",

          // admin: ["/img/admin.png", "/img/admin2.png"],
        },
        {
          img: "/img/Admin2.png",
          name: "Iron Man",
          data1: "103",
          type: ["Withdraw", "#b80f0f"],
          data3: "30-03-2022/05:06 pm",
          status: ["Failed", "#b80f0f"],
          data4: "Paytm/upi",
          data5: "Due to insufficient wallet balance", // admin: ["/img/admin.png"],
        },
        {
          img: "/img/Admin2.png",
          name: "Iron Man",
          data1: "103",
          type: ["Deposite", "#00bf7c"],
          data3: "30-03-2022/05:06 pm",
          status: ["completed", "#00bf7c"],
          data4: "Paytm/upi",
          data5: "-", // admin: ["/img/admin.png"],
        },
        {
          img: "/img/Admin.png",
          name: "Iron Man",
          data1: "103",
          type: ["Withdraw", "#b80f0f"],
          data3: "30-03-2022/05:06 pm",
          status: ["Failed", "#b80f0f"],
          data4: "Paytm/upi",
          data5: "Due to insufficient wallet balance", // admin: ["/img/admin.png", "/img/admin2.png"],
        },
        {
          img: "/img/Admin.png",
          name: "Iron Man",
          data1: "103",
          type: ["Withdraw", "#b80f0f"],
          data3: "30-03-2022/05:06 pm",
          status: ["Pending", "#b36814"],
          data4: "Gpay/upi",
          data5: "UnExpected Error occured", // admin: ["/img/admin.png", "/img/admin2.png"],
        },
        {
          img: "/img/Admin.png",
          name: "Iron Man",
          data1: "103",
          type: ["Deposite", "#00bf7c"],
          data3: "30-03-2022/05:06 pm",
          status: ["completed", "#00bf7c"],
          data4: "Gpay/upi",
          data5: "-", // admin: ["/img/admin.png", "/img/admin2.png"],
        },
      ],
      duration: "day's",
      color: "#00ad9c",
    },
    weekly: {
      list: [
        {
          img: "/img/Admin.png",
          name: "Iron Man",
          data1: "103",
          type: ["Withdraw", "#b80f0f"],
          data3: "30-03-2022/05:06 pm",
          status: ["completed", "#00bf7c"],
          data4: "Phone pay/upi",
          data5: "-",

          // admin: ["/img/admin.png", "/img/admin2.png"],
        },
        {
          img: "/img/Admin.png",
          name: "Iron Man",
          data1: "103",
          type: ["Withdraw", "#b80f0f"],
          data3: "30-03-2022/05:06 pm",
          status: ["Failed", "#b80f0f"],
          data4: "Phone pay/upi",
          data5: "Due to insufficient wallet balance", // admin: ["/img/admin.png"],
        },
        {
          img: "/img/Admin.png",
          name: "Iron Man",
          data1: "103",
          type: ["Deposite", "#00bf7c"],
          data3: "30-03-2022/05:06 pm",
          status: ["completed", "#00bf7c"],
          data4: "Phone pay/upi",
          data5: "-", // admin: ["/img/admin.png"],
        },

        {
          img: "/img/Admin.png",
          name: "Iron Man",
          data1: "103",
          type: ["Deposite", "#00bf7c"],
          data3: "30-03-2022/05:06 pm",
          status: ["completed", "#00bf7c"],
          data4: "Phone pay/upi",
          data5: "-", // admin: ["/img/admin.png", "/img/admin2.png"],
        },
        {
          img: "/img/Admin.png",
          name: "Iron Man",
          data1: "103",
          type: ["Withdraw", "#b80f0f"],
          data3: "30-03-2022/05:06 pm",
          status: ["completed", "#00bf7c"],
          data4: "Phone pay/upi",
          data5: "-",

          // admin: ["/img/admin.png", "/img/admin2.png"],
        },
        {
          img: "/img/Admin2.png",
          name: "Iron Man",
          data1: "103",
          type: ["Withdraw", "#b80f0f"],
          data3: "30-03-2022/05:06 pm",
          status: ["Failed", "#b80f0f"],
          data4: "Phone pay/upi",
          data5: "Due to insufficient wallet balance", // admin: ["/img/admin2.png"],
        },
      ],
      duration: "week's",
      color: "#00ad9c",
    },
    monthly: {
      list: [
        {
          img: "/img/Admin2.png",
          name: "Iron Man",
          data1: "103",
          type: ["Withdraw", "#b80f0f"],
          data3: "30-03-2022/05:06 pm",
          status: ["Failed", "#b80f0f"],
          data4: "Gpay/upi",
          data5: "Due to insufficient wallet balance", // admin: ["/img/admin2.png", "/img/admin2.png"],
        },
        {
          img: "/img/Admin.png",
          name: "Iron Man",
          data1: "103",
          type: ["Withdraw", "#b80f0f"],
          data3: "30-03-2022/05:06 pm",
          status: ["Pending", "#b36814"],
          data4: "Gpay/upi",
          data5: "UnExpected Error occured", // admin: ["/img/admin.png", "/img/admin2.png"],
        },
        {
          img: "/img/Admin.png",
          name: "Iron Man",
          data1: "103",
          type: ["Deposite", "#00bf7c"],
          data3: "30-03-2022/05:06 pm",
          status: ["completed", "#00bf7c"],
          data4: "Gpay/upi",
          data5: "-", // admin: ["/img/admin.png"],
        },
        {
          img: "/img/Admin.png",
          name: "Iron Man",
          data1: "103",
          type: ["Withdraw", "#b80f0f"],
          data3: "30-03-2022/05:06 pm",
          status: ["Failed", "#b80f0f"],
          data4: "HDFC/NEFT",
          data5: "Due to insufficient wallet balance", // admin: ["/img/admin.png", "/img/admin2.png"],
        },
        {
          img: "/img/Admin.png",
          name: "Iron Man",
          data1: "103",
          type: ["Withdraw", "#b80f0f"],
          data3: "30-03-2022/05:06 pm",
          status: ["Pending", "#b36814"],
          data4: "HDFC/NEFT",
          data5: "UnExpected Error occured", // admin: ["/img/admin.png", "/img/admin2.png"],
        },
        {
          img: "/img/Admin.png",
          name: "Iron Man",
          data1: "103",
          type: ["Deposite", "#00bf7c"],
          data3: "30-03-2022/05:06 pm",
          status: ["completed", "#00bf7c"],
          data4: "Gpay/upi",
          data5: "-", // admin: ["/img/admin.png", "/img/admin2.png"],
        },
      ],
      duration: "month's",
      color: "#00ad9c",
    },
  };
  const livedata = {
    heading: "Live Stocks",
    th: [
      "stocks",
      "last price",
      "initail price",
      "league",
      "volume",
      "admin",
      "popularity",
      "",
    ],
    stocks: [
      {
        img: "/img/player.png",
        name: "virat kholi",
        lastPrice: "103",
        initialPrice: "63",
        vol: "168",
        league: "I.P.L",
        admin: ["/img/admin.png", "/img/admin2.png"],
      },
      {
        img: "/img/player.png",
        name: "virat kholi",
        lastPrice: "103",
        initialPrice: "63",
        vol: "168",
        league: "I.P.L",
        admin: ["/img/admin.png", "/img/admin2.png"],
      },
      {
        img: "/img/player.png",
        name: "virat kholi",
        lastPrice: "103",
        initialPrice: "63",
        vol: "168",
        league: "I.P.L",
        admin: ["/img/admin.png"],
      },
      {
        img: "/img/player.png",
        name: "virat kholi",
        lastPrice: "103",
        initialPrice: "63",
        vol: "168",
        league: "I.P.L",
        admin: ["/img/admin.png"],
      },
      {
        img: "/img/player.png",
        name: "virat kholi",
        lastPrice: "103",
        initialPrice: "63",
        vol: "168",
        league: "I.P.L",
        admin: ["/img/admin.png", "/img/admin2.png"],
      },
      {
        img: "/img/player.png",
        name: "virat kholi",
        lastPrice: "103",
        initialPrice: "63",
        vol: "168",
        league: "I.P.L",
        admin: ["/img/admin.png", "/img/admin2.png"],
      },
    ],
    action: [{ li: "unlist" }, { li: "remove" }],
  };
  const stockData = {
    savedData: true,
    heading: "Saved Stocks",
    th: [
      "stocks",
      "last price",
      "initail price",
      "league",
      ,
      "unlist date",
      "admin",
      "pre-booked",
      "",
    ],
    stocks: [
      {
        img: "/img/player.png",
        name: "virat kholi",
        lastPrice: "103",
        league: "I.P.L",
        initialPrice: "63",
        undate: "17-03-2025",
        admin: ["/img/admin.png", "/img/admin2.png"],
      },
      {
        img: "/img/player.png",
        name: "virat kholi",
        lastPrice: "103",
        league: "I.P.L",
        initialPrice: "63",
        undate: "17-03-2025",
        admin: ["/img/admin.png"],
      },
      {
        img: "/img/player.png",
        name: "virat kholi",
        lastPrice: "103",
        league: "I.P.L",
        initialPrice: "63",
        undate: "17-03-2025",
        admin: ["/img/admin.png"],
      },
      {
        img: "/img/player.png",
        name: "virat kholi",
        lastPrice: "103",
        league: "I.P.L",
        initialPrice: "63",
        undate: "17-03-2025",
        admin: ["/img/admin.png", "/img/admin2.png"],
      },
      {
        img: "/img/player.png",
        name: "virat kholi",
        lastPrice: "103",
        league: "I.P.L",
        initialPrice: "63",
        undate: "17-03-2025",
        admin: ["/img/admin.png", "/img/admin2.png"],
      },
      {
        img: "/img/player.png",
        name: "virat kholi",
        lastPrice: "103",
        league: "I.P.L",
        initialPrice: "63",
        undate: "17-03-2025",
        admin: ["/img/admin.png", "/img/admin2.png"],
      },
    ],

    action: [
      { li: "Edit stock", alias: "/stocks/edit/3" },
      { li: "remove" },
      { li: "list stock" },
    ],
  };
  const popularStock = {
    heading: "Top Perfoming stocks",
    th: [
      "stocks",
      "last price",
      "initail price",
      "league",
      "volume",
      "admin",
      "popularity",
      "",
    ],
    stocks: [
      {
        img: "/img/player.png",
        name: "virat kholi",
        lastPrice: "103",
        initialPrice: "63",
        vol: "168",
        league: "I.P.L",
        admin: ["/img/admin.png", "/img/admin2.png"],
      },
      {
        img: "/img/player.png",
        name: "virat kholi",
        lastPrice: "103",
        initialPrice: "63",
        vol: "168",
        league: "I.P.L",
        admin: ["/img/admin.png", "/img/admin2.png"],
      },
      {
        img: "/img/player.png",
        name: "virat kholi",
        lastPrice: "103",
        initialPrice: "63",
        vol: "168",
        league: "I.P.L",
        admin: ["/img/admin.png"],
      },
      {
        img: "/img/player.png",
        name: "virat kholi",
        lastPrice: "103",
        initialPrice: "63",
        vol: "168",
        league: "I.P.L",
        admin: ["/img/admin.png"],
      },
      {
        img: "/img/player.png",
        name: "virat kholi",
        lastPrice: "103",
        initialPrice: "63",
        vol: "168",
        league: "I.P.L",
        admin: ["/img/admin.png", "/img/admin2.png"],
      },
      {
        img: "/img/player.png",
        name: "virat kholi",
        lastPrice: "103",
        initialPrice: "63",
        vol: "168",
        league: "I.P.L",
        admin: ["/img/admin.png", "/img/admin2.png"],
      },
    ],
    action: [{ li: "unlist" }, { li: "remove" }],
  };
  const NonPopularStock = {
    savedData: true,
    heading: "Non-performing Stocks",
    th: [
      "stocks",
      "last price",
      "initail price",
      "league",
      ,
      "unlist date",
      "admin",
      "pre-booked",
      "",
    ],
    stocks: [
      {
        img: "/img/player.png",
        name: "virat kholi",
        lastPrice: "103",
        league: "I.P.L",
        initialPrice: "63",
        undate: "17-03-2025",
        admin: ["/img/admin.png", "/img/admin2.png"],
      },
      {
        img: "/img/player.png",
        name: "virat kholi",
        lastPrice: "103",
        league: "I.P.L",
        initialPrice: "63",
        undate: "17-03-2025",
        admin: ["/img/admin.png"],
      },
      {
        img: "/img/player.png",
        name: "virat kholi",
        lastPrice: "103",
        league: "I.P.L",
        initialPrice: "63",
        undate: "17-03-2025",
        admin: ["/img/admin.png"],
      },
      {
        img: "/img/player.png",
        name: "virat kholi",
        lastPrice: "103",
        league: "I.P.L",
        initialPrice: "63",
        undate: "17-03-2025",
        admin: ["/img/admin.png", "/img/admin2.png"],
      },
    ],

    action: [
      { li: "Edit stock", alias: "/stocks/edit/3" },
      { li: "remove" },
      { li: "list stock" },
    ],
  };
  return (
    <Admin>
      <div className="flex flex-wrap">
        {/* <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <SingleBarChart barData={barDatad} />
        </div> */}
        {/* <div className="w-full xl:w-4/12 px-4">
          <Doughnut chartData={stocksBuyed} />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <PieChartComponent chartData={stocksFollowed} />
        </div> */}
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <SingleBarChart barData={mostBuyed} showXdata={true} />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <Doughnut chartData={stocksFollowed} />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <SingleBarChart barData={mostSold} showXdata={true} />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <PieChartComponent chartData={stocksWatchListed} />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable data={livedata} />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable data={stockData} color="dark" />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable data={popularStock} />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable data={NonPopularStock} color="dark" />
        </div>
      </div>
    </Admin>
  );
};

export default StocksData;
