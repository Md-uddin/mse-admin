import React from "react";
import styles from "./stock.module.scss";
import Router from "next/Router";
const StockDetails = () => {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl pb-4">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center flex-row justify-content-center">
            <div className="relative  flex-grow flex-1">
              <h2 className="text-blueGray-700 text-xl font-semibold">
                Virat Kholi
              </h2>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                &#8377; 122.65{" "}
                <span className="text-red-500 text-sm my-auto"> -3.5%</span>
              </h2>
            </div>
            <div className="relative  ">
              <button
                className={styles.btng}
                onClick={() => {
                  Router.push("/stocks/edit/2");
                }}
              >
                edit player
              </button>
            </div>
            <div className="relative  ">
              <button className={styles.btnb}>unlist player</button>
            </div>
            <div className="relative  ">
              <button className={styles.btnr}>Remove player</button>
            </div>
          </div>
        </div>
        <div className="p-3 flex-auto justify-items-center align-items-center">
          {/* Chart */}
          <div className={styles.table}>
            <div className={styles.mainrow}>
              <div className={styles.row}>
                <h2> Total Volume</h2> <span>355k</span>
              </div>
              <div className={styles.row}>
                <h2> Current Price</h2> <span>122.65</span>
              </div>
              <div className={styles.row}>
                <h2>52 weeks high</h2> <span>210.6</span>
              </div>
            </div>
            <div className={styles.mainrow}>
              <div className={styles.row}>
                <h2> 52 weeks low</h2> <span>126.7</span>
              </div>
              <div className={styles.row}>
                <h2> initial price</h2> <span>130</span>
              </div>
              <div className={styles.row}>
                <h2>Stock P/E</h2> <span>26%</span>
              </div>
            </div>
            <div className={styles.mainrow}>
              <div className={styles.row}>
                <h2> metric 1</h2> <span>126.7</span>
              </div>
              <div className={styles.row}>
                <h2>metric-3</h2> <span>26%</span>
              </div>
              <div className={styles.row}>
                <h2> metric-2</h2> <span>130</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StockDetails;
