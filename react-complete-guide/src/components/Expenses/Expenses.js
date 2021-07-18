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

  // filter through the list of expenses before using map to render all the expenses to the screen
  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === selectedYear);

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYear={selectedYear}
        onSaveSelectValue={saveSelectValueHandler}
        // onNewValueFilter={}
      />
      {filteredExpenses.map(expense => (
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