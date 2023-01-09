import React from "react";
import { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import Button from "../UI/button/Button";
import "./Newexpense.css";

const NewExpense = ({ onNewExpenseAdd }) => {
  const [showForm, setShowform] = useState(false);

  const showExpenseForm = () => {
    setShowform((prevState) => {
      return !prevState;
    });
  };

  return (
    <div>
      {showForm ? (
        <ExpenseForm
          onShowForm={showExpenseForm}
          onExpenseAdd={onNewExpenseAdd}
        />
      ) : (
        <div className="btnContainer">
          <Button
            title="Добавить новый расход"
            onClick={showExpenseForm}
            btnStyle="btnStyle"
          />
        </div>
      )}
    </div>
  );
};

export default NewExpense;
