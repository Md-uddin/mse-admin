import React from "react";
import Admin from "layouts/Admin.js";
import SingleBarChart from "components/Cards/SingleBar";
import Doughnut from "components/Cards/Doughnut";
import CardLineChart from "components/Cards/CardLineChart";
import PieChartComponent from "components/Cards/PieChart";
import CardBarChart from "components/Cards/CardBarChart";
import TransactionTable from "components/Cards/TransactionTable";


// #F1F1F1, #202020, #7E909A, #1C4E80, #A5D8DD, #EA6A47, #0091D5
///////////for bars///////
export const barDatad = {
  type: "Deposite",

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
    color: "#257da8",
    data: [13, 78, 56, 34, 100, 45, 49],
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
    color: "#257da8",
    data: [150, 178, 156, 134, 202, 145, 109],
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
    color: "#257aa8",
    data: [523, 688, 756, 834, 1009, 455, 749],
    duration: "month's",
    id: 4,
  },
};
export const barDataw = {
  type: "withdraw",

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
    color: "#ad3776",
    data: [13, 78, 56, 34, 100, 45, 49],
    duration: "day's",
    id: 4,
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
    color: "#ad3776",
    data: [150, 178, 156, 134, 202, 145, 109],
    duration: "week's",
    id: 5,
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
    color: "#a31c59",
    data: [523, 688, 756, 834, 1009, 455, 749],
    duration: "month's",
    id: 6,
  },
};
export const barDatabuy = {
  type: ["Buy Orders", ""],

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
    color: "#25a17e",
    data: [13, 78, 56, 34, 100, 45, 49],
    duration: "day's",
    id: 11,
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
    color: "#257da8",
    data: [150, 178, 156, 134, 202, 145, 109],
    duration: "week's",
    id: 12,
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
    color: "#257aa8",
    data: [523, 688, 756, 834, 1009, 455, 749],
    duration: "month's",
    id: 14,
  },
};
export const barDatasold = {
  type: ["Sell Order's", ""],

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
    color: "#ba3434",
    data: [13, 78, 56, 34, 100, 45, 49],
    duration: "day's",
    id: 14,
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
    color: "#ad3776",
    data: [150, 178, 156, 134, 202, 145, 109],
    duration: "week's",
    id: 15,
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
    color: "#a31c59",
    data: [523, 688, 756, 834, 1009, 455, 749],
    duration: "month's",
    id: 16,
  },
};
//////////doughnut////
export const depositePie = {
  type: ["Deposite", ""],
  colors: ["#202020", "#7E909A", "#1C4E80", "#A5D8DD"],
  labels: ["FII's", "DII's", "playerX", "playerY"],
  daily: {
    data: [10, 20, 30, 60],
    duration: "day's",
    color: "#257aa8",
    id: 1,
  },
  weekly: {
    data: [20, 50, 120, 70],
    duration: "week's",
    color: "#257aa8",
    id: 2,
  },
  monthly: {
    data: [80, 70, 130, 90],
    duration: "month's",
    color: "#257aa8",
    id: 3,
  },
};
export const WithdrawPie = {
  type: ["Withdraw", ""],
  colors: ["#1C4E80", "#A5D8DD", "#EA6A47", "#0091D5"],
  labels: ["FII's", "DII's", "playerX", "playerY"],

  daily: {
    data: [30, 20, 30, 60],
    duration: "day's",
    color: "#a31c59",
    id: 4,
  },
  weekly: {
    data: [120, 50, 10, 70],
    duration: "week's",
    color: "#a31c59",
    id: 5,
  },
  monthly: {
    data: [20, 170, 30, 90],
    duration: "month's",
    color: "#a31c59",
    id: 6,
  },
};
export const buyedPie = {
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
export const soldPie = {
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
export const DepositeWithdrawLine = {
  type: ["Deposite vs withdraw ", ""],
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
      "month-1",
      "month-2",
      "month-3",
      "month-4",
      "month-5",
      "moth-6",
      "month-7",
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
export const overallPie = {
  type: ["Deposite vs Withdraw", ""],
  labels: ["Deposite", "Withdraw"],
  colors: ["#1a4999", "#991a60"],
  daily: {
    data: [30, 60],
    duration: "day's",
    color: "#a31c59",
    id: 10,
  },
  weekly: {
    data: [120, 70],
    duration: "week's",
    color: "#a31c59",
    id: 11,
  },
  monthly: {
    data: [201, 190],
    duration: "month's",
    color: "#a31c59",
    id: 12,
  },
};

//////double bars //////////////////////////////////
export const buysell = {
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
    // color2: "#ba3434",
    color2: "#a8484c",
    // color1: "#0b875a",
    color1: "#4dbf9d",
    color: "#257aa8",

    data1: [65, 78, 66, 44, 56, 67, 75],
    data2: [42, 68, 86, 74, 56, 60, 87],
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
    ],
    // color2: "#ba3434",
    color2: "#a8484c",
    // color1: "#0b875a",
    color1: "#4dbf9d",
    color: "#257aa8",

    data2: [65, 78, 66, 44, 56, 67, 75],
    data1: [46, 68, 86, 74, 56, 60, 87],
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
    // color2: "#ba3434",
    color2: "#a8484c",
    // color1: "#0b875a",
    color1: "#4dbf9d",
    color: "#257aa8",

    data1: [165, 78, 66, 144, 56, 167, 75],
    data2: [48, 168, 86, 174, 56, 160, 87],
    duration: "month's",
    id: 3,
  },
};

////////////////table data////////////////////////////////
export const savedData = {
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
export const transactionData = {
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
 const index = () => {
  return (
    <Admin>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <SingleBarChart barData={barDatad} />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <Doughnut chartData={depositePie} />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-4/12 px-4">
          <Doughnut chartData={WithdrawPie} />
        </div>
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <SingleBarChart barData={barDataw} />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart chartData={DepositeWithdrawLine} light={true} />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <PieChartComponent chartData={overallPie} />
        </div>
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <SingleBarChart barData={barDatabuy} />
        </div>
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <SingleBarChart barData={barDatasold} />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <Doughnut chartData={buyedPie} />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <Doughnut chartData={soldPie} />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          {/* <PieChartComponent chartData={BuyWithdrawPie} /> */}
          <CardBarChart chartData={buysell} />
        </div>
        <div className="w-full xl:w-10/12 px-4">
          {/* <PieChartComponent chartData={BuySellPie} /> */}
          <TransactionTable data={savedData} />
        </div>
        <div className="w-full xl:w-10/12 px-4 mt-4">
          {/* <PieChartComponent chartData={BuySellPie} /> */}
          <TransactionTable data={transactionData} />
        </div>
      </div>
    </Admin>
  );
};

export default index;
