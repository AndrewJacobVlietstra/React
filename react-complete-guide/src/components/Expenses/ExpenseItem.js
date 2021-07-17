import React, { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title); //useState hook, return an array with 2 elements, 1st is value, 2nd is function for updating value
  // const [count, setCount] = useState(0); //useState hook, return an array with 2 elements, 1st is value, 2nd is function for updating value

  // function clickHandler() {
  //   setTitle('Updated!');
  //   console.log(title);
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;