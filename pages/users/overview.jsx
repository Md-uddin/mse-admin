import React from "react";
import Admin from "layouts/Admin.js";
import SingleBarChart from "components/Cards/SingleBar";
import Doughnut from "components/Cards/Doughnut";
import CardLineChart from "components/Cards/CardLineChart";
import PieChartComponent from "components/Cards/PieChart";
import CardBarChart from "components/Cards/CardBarChart";
import LineChart from "components/Cards/LineChart";
import SingleLineChart from "components/Cards/SingleLineChart";

const StocksData = () => {
  ///////////for bars///////

  const barDatad = {
    type: "New Users Signup",

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
  const Usersprofit = {
    type: "Users profit ",
    label: "profit in ₹k",
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
      color: "#44b897",
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
      ],
      color: "#44b897",
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
      color: "#44b897",
      data: [523, 688, 756, 834, 1009, 455, 749],
      duration: "month's",
      id: 14,
    },
  };
  const UsersLoses = {
    type: "Users Loses",
    label: "losses in ₹k",
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
      color: "#a13b66",
      data: [13, 78, 56, 34, 100, 45, 49],
      duration: "day's",
      id: 21,
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
      color: "#a13b66",
      data: [150, 178, 156, 134, 202, 145, 109],
      duration: "week's",
      id: 22,
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
      color: "#a13b66",
      data: [523, 688, 756, 834, 1009, 455, 749],
      duration: "month's",
      id: 24,
    },
  };
  const Ratingbar = {
    type: "User's Rating",
    label:"rating",
    daily: {
      labels: ["1-star", "2-star", "3-star", "4-star", "5-star"],
      color: "#257da8",
      data: [13, 78, 56, 34, 100, 45, 49],
      duration: "day's",
      id: 31,
    },
    weekly: {
      labels: ["1-star", "2-star", "3-star", "4-star", "5-star"],
      color: "#257da8",
      data: [150, 178, 156, 134, 202, 145, 109],
      duration: "week's",
      id: 32,
    },
    monthly: {
      labels: ["1-star", "2-star", "3-star", "4-star", "5-star"],
      color: "#257aa8",
      data: [523, 688, 756, 834, 1009, 455, 749],
      duration: "month's",
      id: 34,
    },
  };
  //////////doughnut////

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

  ////////////for line chart
  const DepositeWithdrawLine = {
    type: "Users profit vs Loses",
    data1Name: "Profits",
    data2Name: "Loses",
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
  const overallRating = {
    type: ["Overall rating", ""],
    dataName: "feedbacks",
    //  data2Name: "Withdraw",
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
      color2: "#991a60",
      color: "#6c1da1",

      data: [1.2, 2.5, 3.4, 4.2, 4.4, 3.4, 3.2],
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
      ],
      color2: "#991a60",
      color: "#6c1da1",

      data: [4.2, 4.4, 3.4, 1.2, 2.5, 3.4, 3.2],
      duration: "week's",
      id: 12,
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
      color2: "#991a60",
      color: "#6c1da1",

      data: [4.4, 3.4, 1.2, 2.5, 4.2, 3.4, 3.2],
      duration: "month's",
      id: 13,
    },
  };
  ////////pie chart //////
  const UsersInProfit = {
    type: "Most Profitable Users",
    labels: [
      "Player X",
      "PLayer Y",
      "PLyaer Z",
      "Player 1",
      "Player 2",
      "Player 5",
      "Player 8",
      "Player 1",
    ],
    colors: [
      "#F1F1F1",
      "#202020",
      "#7E909A",
      "#1C4E80",
      "#A5D8DD",
      "#EA6A47",
      "#0091D5",
      "#1a4999",
    ],
    daily: {
      data: [10, 30, 60, 20, 10, 20, 30, 60],
      duration: "day's",
      color: "#a31c59",
      id: 1,
    },
    weekly: {
      data: [120, 50, 20, 50, 120, 70, 120, 70],
      duration: "week's",
      color: "#a31c59",
      id: 2,
    },
    monthly: {
      data: [201, 80, 70, 130, 140, 70, 130, 190],
      duration: "month's",
      color: "#a31c59",
      id: 3,
    },
  };
  const UesrsInLoses = {
    type: "Most Loosed Users",
    labels: [
      "Player X",
      "PLayer Y",
      "PLyaer Z",
      "Player 1",
      "Player 2",
      "Player 5",
      "Player 8",
      "Player 1",
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
      data: [10, 20, 30, 60, 10, 30, 60, 20],
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
      data: [201, 80, 70, 130, 120, 70, 130, 190],
      duration: "month's",
      color: "#a31c59",
      id: 12,
    },
  };

  ////////////////table data////////////////////////////////

  const newUsers = {
    type: "Active User's",
    // data1Name: "Deposite",
    // data2Name: "Withdraw",
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
      color1: "#526cbf",
      color2: "#991a60",
      color: "#1a4999",

      data1: [65, 78, 66, 44, 56, 67, 75],
      // data2: [40, 68, 86, 74, 56, 60, 87],
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
      color1: "#526cbf",
      color2: "#991a60",
      color: "#1a4999",

      // data2: [65, 78, 66, 44, 56, 67, 75],
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
      color1: "#526cbf",
      color2: "#991a60",
      color: "#1a4999",

      data1: [165, 78, 66, 144, 56, 167, 75],
      // data2: [40, 168, 86, 174, 56, 160, 87],
      duration: "month's",
      id: 3,
    },
  };
  //////bars double////////////////////////////////////////////////
  const UsersActiveandall = {
    type: "Overall Users vs Active Users",
    data1Name: "OverAll User's",
    data2Name: "Active Users",
    small: false,
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
      color1: "#3950a3",
      color2: "#42b1c7",
      color: "#257aa8",

      data1: [65, 78, 78, 84, 86, 97, 105],
      data2: [40, 68, 76, 34, 56, 60, 87],
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
      color1: "#3950a3",
      color2: "#42b1c7",
      color: "#257aa8",

      data1: [105, 178, 186, 194, 196, 207, 215],
      data2: [140, 168, 186, 174, 156, 160, 187],
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
      color1: "#3950a3",
      color2: "#42b1c7",
      color: "#257aa8",

      data1: [215, 348, 366, 374, 386, 397, 405],
      data2: [140, 268, 86, 274, 56, 260, 87],
      duration: "month's",
      id: 3,
    },
  };
  return (
    <Admin>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <SingleBarChart barData={barDatad} />
        </div>
        <div className="w-full xl:w-6/12 px-4">
          <SingleLineChart chartData={newUsers} light={true} />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-6/12 px-4">
          <CardBarChart chartData={UsersActiveandall} />
        </div>
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardLineChart chartData={DepositeWithdrawLine} light={true} />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <SingleBarChart barData={Usersprofit} />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <Doughnut chartData={UsersInProfit} />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-4/12 px-4">
          <Doughnut chartData={UesrsInLoses} />
        </div>
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <SingleBarChart barData={UsersLoses} />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 ">
          <LineChart chartData={overallRating} light={true} />
        </div>
        <div className="w-full xl:w-4/12 mb-12 xl:mb-0 ">
          <SingleBarChart barData={Ratingbar} showXdata={true} />
        </div>
      </div>
    </Admin>
  );
};

export default StocksData;
