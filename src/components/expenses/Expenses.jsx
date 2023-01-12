import React, { useState } from "react";
import ExpenseFilter from "../expensesFilter/ExpenseFilter";
import { ExpenseItem } from "../expense-Item/ExpenseItem";
import Chart from "../chart/CHart";

export const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const yearChangeHandler = (e) => {
    setSelectedYear(e.target.value);
  };
  const filteredItems = expenses.filter((element) => {
    const stringifiedYear = new Date(element.date).getFullYear().toString();

    return stringifiedYear === selectedYear;
  });



  return (
    <div>
      <ExpenseFilter value={selectedYear} onChange={yearChangeHandler} />
      <Chart expenses={filteredItems} />
      <ul className="Mainlist">
        {filteredItems.map((elem) => {
          return (
            <ExpenseItem
              title={elem.title}
              price={elem.price}
              date={elem.date}
              key={elem.title}
            />
          );
        })}
      </ul>{" "}
    </div>
  );
};
