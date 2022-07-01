import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

export default function Expenses(props) {
  const expenses = props.items;

  const [year, setYear] = useState("2020");
  const changeYearFilterHandler = (expenseFilter) => {
    setYear(expenseFilter.year);
  };
  console.log(year);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={year}
        onChangeYearFilter={changeYearFilterHandler}
      />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  );
}
