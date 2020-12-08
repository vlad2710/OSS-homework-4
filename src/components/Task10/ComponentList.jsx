import React, { Component } from "react";
import './ComponentList.css'

const notifications = [
  {
    key: 1,
    text: "Welcome user101",
    notificationType: "info",
  },
  {
    key: 2,
    text: "You have been banned",
    notificationType: "error",
  },
  {
    key: 3,
    text: "New friend request",
    notificationType: "info",
  },
  {
    key: 4,
    text: "You are about to exceed your usage limit",
    notificationType: "warning",
  },
  {
    key: 5,
    text: "Free trial will soon expire",
    notificationType: "warning",
  },
  {
    key: 6,
    text: "Token expired",
    notificationType: "error",
  },
];

const Info = ({ text }) => <p className="info">{text}</p>;
const Warning = ({ text }) => <p className="warning">{text}</p>;
const Error = ({ text }) => <p className="error">{text}</p>;

function Notification({ notice }) {
  switch (notice.notificationType) {
    case "info":
      return <Info text={notice.text} />;
    case "warning":
      return <Warning text={notice.text} />;
    case "error":
      return <Error text={notice.text} />;
  }
}

export default class ComponentList extends Component {
  render() {
    return (
      <div>
        <h2>User List</h2>
        {notifications.map((item) => {
          return <Notification key={item.key} notice={item} />;
        })}
      </div>
    );
  }
}
