import React, { useState, useEffect } from "react";
import Chart from "chart.js";
import CardsTop from "./CardsTop";

export default function SingleLineChart({ chartData, light }) {
  const [showData, setShowData] = useState(chartData?.daily);
  var myline;

  // const labels =showData.labels
  // for (let i = 0; i < labels.length; i++) {
  //   let numb = Math.random() * 10;
  //   dataset.push(numb);
  // }
  console.log({ chartData, light });
  const data = {
    labels: showData.labels,
    datasets: [
      {
        // labels: false,
        data: showData.data1,
        borderColor: showData.color,
        backgroundColor: showData.color1,
        fill: true,
      },
    ],
  };
  //////////////////////////////////////////////
  useEffect(() => {
    const config = {
      type: "line",
      data: data,
      options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false,
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem) {
              return tooltipItem.yLabel;
            },
          },
        },
        scales: {
          yAxes: [
            {
              stacked: true,
            },
          ],
        },
      },
    };
    var ctx = document
      .getElementById(`single-line-chart-${showData.id}`)
      .getContext("2d");
    myline = new Chart(ctx, config);
  }, [showData]);
  const setDuration = (duration) => {
    if (chartData) {
      const { daily, weekly, monthly } = chartData;
      if (myline) {
        myline.destroy();
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
  console.log({ light });
  return (
    <>
      <div
        className={
          !light
            ? "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl bg-blueGray-700"
            : "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl bg-white"
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <CardsTop
            h1={chartData?.type}
            duration={showData?.duration}
            setFunction={setDuration}
            color={showData?.color}
            dark={!light ? true : false}
          />
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id={`single-line-chart-${showData.id}`}></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
