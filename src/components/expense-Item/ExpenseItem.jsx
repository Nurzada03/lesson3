import React from "react";
import "./ExpenseItem.css";
export const ExpenseItem = ({ title, date, price }) => {
  return (
    <div className="list">
      <div className="innerList">
        <p className="dateContainer">{new Date(date).toString()}</p>
        <p className="innerListP">{title}</p>
      </div>
      <div className="secondContainer">
        <p>{price} som</p>
      </div>
    </div>
  );
};
