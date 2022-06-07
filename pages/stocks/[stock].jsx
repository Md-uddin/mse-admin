import StocksChart from "components/Cards/SingleLineChart";
import React from "react";
import Admin from "layouts/Admin.js";
import CardBarChart from "components/Cards/CardBarChart";
import Doughnut from "components/Cards/Doughnut";
import StockDetails from "components/Cards/StockDetails";
import LineChart from "components/Cards/LIneChart";

const stockDetail = () => {
  
  const buyedPie = {
    type: "Holding's",
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

  const buysell = {
    type: "Orders",
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
   const stockPrice = {
     type: ["Stock Price", ""],
     dataName: "Stock Name",
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
       color: "#257aa8",

       data: [65, 78, 66, 44, 56, 67, 75],
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
       color2: "#991a60",
       color: "#257aa8",

       data: [40, 68, 86, 74, 56, 60, 87],
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
       color2: "#991a60",
       color: "#257aa8",

       data: [165, 78, 66, 144, 56, 167, 75],
       duration: "month's",
       id: 3,
     },
   };
   return (
     <Admin forStock={true}>
       <div className="flex flex-wrap">
         <div className="w-full xl:w-8/12 px-4">
           <StockDetails />
         </div>
         <div className="w-full xl:w-4/12 px-4">
           <CardBarChart chartData={buysell} />
         </div>
       </div>
       <div className="flex flex-wrap mt-4">
         <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 ">
         <LineChart chartData={stockPrice} light={true}/>
         </div>
         <div className="w-full xl:w-4/12 mb-12 xl:mb-0 ">
           {/* <CardPageVisits /> */}
           <Doughnut chartData={buyedPie} />
         </div>
       </div>
     </Admin>
   );
};

export default stockDetail;

