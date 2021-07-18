import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  // set up state to track currently selected year
  const [selectedYear, setSelectedYear] = useState("2020");

  // use a function to capture the state of the selected year
  const saveSelectValueHandler = (expectedCurrentValue) => {
    setSelectedYear(expectedCurrentValue);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYear={selectedYear}
        onSaveSelectValue={saveSelectValueHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
