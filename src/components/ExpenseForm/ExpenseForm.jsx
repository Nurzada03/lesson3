import React from "react";
import { useState } from "react";
import Button from "../UI/button/Button";
import FormInput from "../UI/Input/FormInput";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const enabled = title.length > 0 && date.length > 0 && price.length > 0;
  const cancelHandler = (event) => {
    event.preventDefault();
    props.onShowForm();
  };
  const saveHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title,
      date,
      price,
      id: Math.random(),
    };

    props.onExpenseAdd(expenseData);

    setTitle("");
    setPrice("");
    setDate("");
  };
  const titleInputChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const priceInputChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  const dateInputChangeHandler = (e) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <div className="input-container">
        <FormInput
          id="name"
          labelName="Название"
          inputType="text"
          placeholder="Введите название ..."
          styleLabel="styleLabel"
          styleInput="styleInput"
          value={title}
          onChange={titleInputChangeHandler}
        />

        <FormInput
          labelName="Колличество денег"
          inputType="number"
          id="price"
          styleLabel="styleLabel"
          styleInput="styleInput"
          value={price}
          onChange={priceInputChangeHandler}
        />
      </div>
      <div className="dataForm">
        <FormInput
          labelName="Дата"
          inputType="date"
          placeholder="дд.мм.гггг"
          id="date"
          styleLabel="styleLabel"
          styleInput="styleInput"
          value={date}
          onChange={dateInputChangeHandler}
        />
      </div>
      <div className="btnForm">
        <Button title="Отмена" onClick={cancelHandler} btnStyle="btn" />
        <Button
          title="Сохранить"
          btnStyle="btn"
          onClick={saveHandler}
          disabled={!enabled}
        />
      </div>
    </div>
  );
};

export default ExpenseForm;
