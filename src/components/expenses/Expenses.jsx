import React from "react";

import { ExpenseItem } from "../expense-Item/ExpenseItem";

export const Expenses = ({ expenses }) => {
  return (
    <ul className="Mainlist">
      {expenses.map((elem) => {
        return (
          <ExpenseItem
            title={elem.title}
            price={elem.price}
            date={elem.date}
            key={elem.title}
          />
        );
      })}
    </ul>
  );
};
