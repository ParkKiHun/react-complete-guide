import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enterExpenseData,
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const clickHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandle = () => {
    setIsEditing(false);
  };

  let expenseContents = <button onClick={clickHandler}>New Add Expense</button>;

  if (isEditing) {
    expenseContents = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandle}
      />
    );
  }

  return <div className="new-expense">{expenseContents}</div>;
};

export default NewExpense;
