import React, { useState, useEffect } from "react";
import Chart from "chart.js";
import CardsTop from "./CardsTop";

export default function PieChartComponent({ chartData }) {
  const [showData, setShowData] = useState(chartData?.daily);

  var mychart;
  let data = {
    datasets: [
      {
        data: showData?.data,

        backgroundColor: chartData?.colors,
      },
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: chartData.labels,
  };
  React.useEffect(() => {
    if (showData) {
      const config = {
        type: "pie",
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Chart.js Doughnut Chart",
            },
          },
        },
      };
      let ctx = document
        .getElementById(`doughChart${showData.id}`)
        .getContext("2d");
      mychart = new Chart(ctx, config);
    }
  }, [showData]);
  const setDuration = (duration) => {
    if (chartData) {
      const { daily, weekly, monthly } = chartData;
      if (mychart) {
        mychart.destroy();
      }
      if (duration === "day's") {
        setShowData(daily);
      } else if (duration === "month's") {
        setShowData(monthly);
      } else if (duration === "week's") {
        setShowData(weekly);
      }
    }
  };
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl pb-4">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <CardsTop
            h1={chartData?.type}
            duration={showData?.duration}
            setFunction={setDuration}
            color={showData?.color}
          />
        </div>
        <div className="p-3 flex-auto justify-items-center align-items-center mt-10 mb-8">
          {/* Chart */}
          <div className="relative h-350-px sm:h-auto">
            <canvas id={`doughChart${showData?.id}`}></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
