import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const changeYearHandler = (year) => {
    console.log(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeYear={changeYearHandler} />
      {props.expenses.map((item, index) => (
        <ExpenseItem
          key={index}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
