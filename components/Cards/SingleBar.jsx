import React, { useState, useEffect } from "react";
import Chart from "chart.js";
import CardsTop from "./CardsTop";

export default function SingleBarChart({ barData, showXdata }) {
  const [showData, setShowData] = useState(barData.daily);
  var mychart;
  React.useEffect(() => {
    const { labels, data, color } = showData;
    console.log(labels, showData);
    let config = {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: barData?.label ? barData.label : "order in ₹k",
            backgroundColor: color,
            borderColor: "#ed64a6",
            data: data,
            fill: false,
            barThickness: showXdata ? 40 : 60,
            // barPercentage: 0.5,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "black",
              },
              display: showXdata,
              scaleLabel: {
                display: false,
                // labelString: "Month",
              },
              gridLines: {
                borderDash: [1],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              // stacked:true,
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document
      .getElementById(`bar-chart-${showData.id}`)
      .getContext("2d");

    mychart = new Chart(ctx, config);
  }, [showData]);
  const setDuration = (duration) => {
    console.log("setDuration", duration);
    if (mychart) {
      console.log({ mychart });
      mychart.destroy();
    }
    if (duration === "day's") {
      setShowData(barData.daily);
    } else if (duration === "month's") {
      setShowData(barData.monthly);
    } else if (duration === "week's") {
      setShowData(barData.weekly);
    }
  };
  console.log(showData);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <CardsTop
            h1={barData.type}
            duration={showData.duration}
            setFunction={setDuration}
            color={showData.color}
          />
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id={`bar-chart-${showData.id}`}></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
