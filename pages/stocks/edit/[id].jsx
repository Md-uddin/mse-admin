import React from "react";
import Admin from "layouts/Admin.js";
import styles from "../../../styles/stock.module.scss";
import { AiFillCamera } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import { BiSave } from "react-icons/bi";
import Router from "next/router";
const EditStock = () => {
  return (
    <div className="flex flex-wrap mt-24">
      <div className={styles.box}>
        <div className={styles.img}>
          <img src="/img/player.png" className="w-full h-full" />
          <span className={styles.camera}>
            <AiFillCamera />
          </span>
        </div>
        <div className={styles.row}>
          <input className={styles.input} placeholder="stock name*" />
          <input
            className={styles.input}
            placeholder="stock price*"
            type="number"
          />
        </div>
        <div className={styles.row}>
          <input
            className={styles.input}
            placeholder="stock volume*"
            type="number"
          />
          <input className={styles.input} placeholder="League*" />
        </div>
        <div className={styles.row}>
          <button
            className={styles.save}
            onClick={() => {
              Router.push("/admin/stocks");
            }}
          >
            {" "}
            <BiSave className={styles.icon} />
            save
          </button>
          <button
            onClick={() => {
              Router.push("/admin/stocks");
            }}
          >
            <BsUpload className={styles.icon} /> upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditStock;

EditStock.layout = Admin;
