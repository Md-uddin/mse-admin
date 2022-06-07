import React, { useState, usEffect } from "react";
import Chart from "chart.js";
import CardsTop from "./CardsTop";

export default function CardLineChart({ chartData, light }) {
  const [showData, setShowData] = useState(chartData?.daily);
  var myline;
  React.useEffect(() => {
    const { data1, data2, color1, color2, labels } = showData;
    var config = {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: chartData.data1Name,
            backgroundColor: color1,
            borderColor: color1,
            data: data1,
            fill: false,
          },
          {
            label: chartData.data2Name,
            fill: false,
            backgroundColor: color2,
            borderColor: color2,
            data: data2,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: !light ? "white" : "grey",
        },
        legend: {
          labels: {
            fontColor: !light ? "white" : "grey",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: !light ? "rgba(255,255,255,.7)" : "rgba(0,0,0,0.6)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: !light ? "rgba(33, 37, 41, 0.3)" : "black",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: !light ? "rgba(255,255,255,.7)" : "grey",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: !light ? "white" : "grey",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: !light ? "rgba(255, 255, 255, 0.15)" : "grey",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document
      .getElementById(`double-line-chart${showData.id}`)
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
  return (
    <>
      <div
        className={
          !light
            ? "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700 text-white rounded-xl "
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
            <canvas id={`double-line-chart${showData.id}`}></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
