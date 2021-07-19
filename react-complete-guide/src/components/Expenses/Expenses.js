import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  // set up state to track currently selected year
  const [selectedYear, setSelectedYear] = useState("2021");

  // use a function to capture the state of the selected year
  const saveSelectValueHandler = (expectedCurrentValue) => {
    setSelectedYear(expectedCurrentValue);
  };

  // filter through the list of expenses before using map to render all the expenses to the screen
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYear={selectedYear}
        onSaveSelectValue={saveSelectValueHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />

      {/* If the first condition on the left is met, then AND will return the expression on the right */}
      {/* {filteredExpenses.length === 0 && <p>No Expenses Found.</p>} */}
    </Card>
  );
}

export default Expenses;
