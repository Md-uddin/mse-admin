import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import { DepositeWithdrawLine } from "pages/cash";
// layout for page

import Admin from "layouts/Admin.js";
import SingleLineChart from "components/Cards/SingleLineChart";
import Doughnut from "components/Cards/Doughnut";
import PolarChart from "components/Cards/PolarChart";

export default function siteOverview() {
  //////double bars //////////////////////////////////
  const buysell = {
    type: "Orders",
    data1Name: "Buy Orders",
    data2Name: "Sell Orders",
    small: true,
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
      // color2: "#ba3434",
      color2: "#a8484c",
      // color1: "#0b875a",
      color1: "#4dbf9d",
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
      // color2: "#ba3434",
      color2: "#a8484c",
      // color1: "#0b875a",
      color1: "#4dbf9d",
      color: "#257aa8",

      data1: [165, 78, 66, 144, 56, 167, 75],
      data2: [40, 168, 86, 174, 56, 160, 87],
      duration: "month's",
      id: 3,
    },
  };
  const Grossandnetprofit = {
    type: "Gross vs Net profit",
    data1Name: "Net profit",
    data2Name: "Gross profit",
    small: true,
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
      color2: "#4ead91",
      // color1: "#0b875a",
      color1: "#2e418c",
      color: "#257aa8",

      data1: [65, 78, 66, 44, 56, 67, 75],
      data2: [40, 68, 86, 74, 56, 60, 87],
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
      // color2: "#ba3434",
      color2: "#4ead91",
      // color1: "#0b875a",
      color1: "#2e418c",
      color: "#257aa8",

      data2: [65, 78, 66, 44, 56, 67, 75],
      data1: [40, 68, 86, 74, 56, 60, 87],
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
      // color2: "#ba3434",
      color2: "#4ead91",
      // color1: "#0b875a",
      color1: "#2e418c",
      color: "#257aa8",

      data1: [165, 78, 66, 144, 56, 167, 75],
      data2: [40, 168, 86, 174, 56, 160, 87],
      duration: "month's",
      id: 13,
    },
  };
  /////////line-filled chart////////////////////////////////
  const newUsers = {
    type: "Revenue",
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
      color1: "#257aa8",
      color2: "#593e94",
      color: "#257aa8",

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
      color1: "#257aa8",
      color2: "#991a60",
      color: "#257aa8",

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
      color1: "#257aa8",
      color2: "#991a60",
      color: "#257aa8",

      data1: [165, 78, 66, 144, 56, 167, 75],
      // data2: [40, 168, 86, 174, 56, 160, 87],
      duration: "month's",
      id: 3,
    },
  };
  //////double line chart////////////////////////////////////////////////////////////////
  const netProfitvsExpense = {
    type: ["Net Profit vs Expenses ", ""],
    data1Name: "Net Profit",
    data2Name: "Expenses",
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
      color1: "#42abb3",
      color2: "#593e94",
      color: "#257aa8",

      data1: [44, 56, 67, 75, 65, 78, 66],
      data2: [40, 68, 86, 74, 56, 60, 87],
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
      color1: "#42abb3",
      color2: "#593e94",
      color: "#257aa8",

      data2: [65, 78, 66, 44, 56, 67, 75],
      data1: [56, 60, 87, 40, 68, 86, 74],
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
      color1: "#42abb3",
      color2: "#593e94",
      color: "#257aa8",

      data1: [165, 78, 56, 167, 75, 86, 174],
      data2: [40, 168, 56, 66, 144, 160, 87],
      duration: "month's",
      id: 13,
    },
  };
  //////////doughnut////
  const Expenditures = {
    type: ["Expenses", ""],
    colors: ["#202020", "#7E909A", "#1C4E80", "#A5D8DD"],
    labels: ["Marketing", "Fixed cost", "Events", "advertisements"],
    daily: {
      data: [30, 60, 65, 20],
      duration: "day's",
      color: "#257aa8",
      id: 1,
    },
    weekly: {
      data: [20, 50, 120, 60],
      duration: "week's",
      color: "#257aa8",
      id: 2,
    },
    monthly: {
      data: [80, 70, 130, 80],
      duration: "month's",
      color: "#257aa8",
      id: 3,
    },
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart chartData={DepositeWithdrawLine} light={true} />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart chartData={buysell} />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-4/12 px-4">
          <PolarChart chartData={Expenditures} />
        </div>
        <div className="w-full xl:w-8/12 px-4">
          <SingleLineChart chartData={newUsers} light={true} />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart chartData={netProfitvsExpense} light={true} />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart chartData={Grossandnetprofit} stacked={true} />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}

siteOverview.layout = Admin;
