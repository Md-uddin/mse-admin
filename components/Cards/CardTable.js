import React from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import { AiOutlineArrowUp } from "react-icons/ai";
// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardTable({ color, data }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-xl " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                {/* {console.log(data)} */}
                {data.heading}
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {data?.th?.map((h, i) => (
                  <th
                    key={i}
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                    }
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.stocks.map((stock, i) => (
                <tr
                  key={i}
                  onClick={() => {
                    Router.push("/stocks/virat");
                  }}
                  className={
                    color === "light" ? "h-bg-grey-100" : "h-bg-grey-900"
                  }
                >
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    <img
                      src={stock.img}
                      className="h-12 w-12 bg-white rounded-full border"
                      alt="..."
                    ></img>{" "}
                    <span
                      className={
                        "ml-3 font-bold " +
                        +(color === "light"
                          ? "text-blueGray-600"
                          : "text-white")
                      }
                    >
                      {stock.name}
                    </span>
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    &#8377;{stock.lastPrice}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    &#8377;{stock.initialPrice}
                  </td>

                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {stock.league}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {data.savedData ? stock.undate : `${stock.vol}k`}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex">
                      {stock.admin.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt="..."
                          className={
                            "w-10 h-10 rounded-full border-2 border-blueGray-50 shadow "
                          }
                          style={i > 0 ? { marginLeft: "-16px" } : {}}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2">60%</span>
                      <div className="relative w-full">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                          <div
                            style={{ width: "60%", background: "#32a88f" }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center "
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                    <TableDropdown data={data.action} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {data.stocks.length >= 6 && (
          <button className="view-more-btn">
            {" "}
            <AiOutlineArrowUp />
            view more
          </button>
        )}
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
