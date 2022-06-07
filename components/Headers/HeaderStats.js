import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats({ forStock }) {
  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12 gr-bg" >
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle={forStock ? "volume" : "TRAFFIC"}
                  statTitle="350,897"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron={
                    forStock ? "Since last week" : "Since last month"
                  }
                  statIconName="far fa-chart-bar"
                  statIconColor={forStock ? "bg-red-500" : "bg-orange-500"}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle={forStock ? "New Buyers" : "New Users"}
                  statTitle="2,356"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-users"
                  statIconColor={
                    forStock ? "bg-lightBlue-500" : "bg-orange-500"
                  }
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle={forStock ? "holding" : "Stocks"}
                  statTitle="924"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron={
                    forStock ? "Since last week" : "Since last month"
                  }
                  statIconName="fas fa-chart-pie"
                  statIconColor={forStock ? "bg-red-500" : "bg-pink-500"}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron={
                    forStock ? "Since last week" : "Since last month"
                  }
                  statIconName="fas fa-percent"
                  statIconColor={forStock ? "bg-pink-500" : "bg-lightBlue-500"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
