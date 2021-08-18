import React from "react";
import ExpensesDate from "../Expenses/ExpensesDate";
import Card from "../UI/Card";
import "./ExpensesItem.css";

const ExpensesItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // const eventHandler = () => {
  //   setTitle("updated!!");
  //   console.log(title);
  // };
  return (
    <li>
      <Card className="expense-item">
        <ExpensesDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpensesItem;
