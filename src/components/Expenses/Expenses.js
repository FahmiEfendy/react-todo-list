import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

export default function Expenses(props) {
  const expenses = props.items;

  const [year, setYear] = useState("2020");
  const changeYearFilterHandler = (expenseFilter) => {
    setYear(expenseFilter.year);
  };

  const filteredExpenses = expenses.filter((expenses) => {
    return expenses.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={year}
        onChangeYearFilter={changeYearFilterHandler}
      />
      <ExpensesList items={filteredExpenses} />
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />*/}
    </Card>
  );
}
