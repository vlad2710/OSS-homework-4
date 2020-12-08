import React, { Component } from "react";
import "./TodoList.css";

const todos = [
  {
    key: 1,
    status: "start",
    text: "Learn english",
  },
  {
    key: 2,
    status: "done",
    text: "Watch a new movie",
  },
  {
    key: 3,
    status: "inProgress",
    text: "Make a post on Instagram",
  },
  {
    key: 4,
    status: "done",
    text: "Learn React",
  },
  {
    key: 5,
    status: "inProgress",
    text: "Do home task",
  },
  {
    key: 6,
    status: "start",
    text: "Go shopping",
  },
];

const Todo = (props) => {
  if (props.todos.status === "done") {
    return <div className={props.todos.status}>{props.todos.text}</div>;
  } else if (props.todos.status === "start") {
    return <div className={props.todos.status}>{props.todos.text}</div>;
  } else {
    return <div>{props.todos.text}</div>;
  }
};

export default class TodoList extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Todo</h2>
        {todos.map((item) => {
          return <Todo key={item.key} todos={item} />;
        })}
      </div>
    );
  }
}
