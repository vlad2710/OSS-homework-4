import React, { Component } from "react";

const users = [
  {
    key: 1,
    name: "Joe",
    isAdmin: true,
  },
  {
    key: 2,
    name: "Kolia",
    isAdmin: false,
  },
  {
    key: 3,
    name: "Vlad",
    isAdmin: true,
  },
  {
    key: 4,
    name: "Sergey",
    isAdmin: true,
  },
  {
    key: 5,
    name: "Kolawole",
    isAdmin: false,
  },
  {
    key: 6,
    name: "Bill Gates",
    isAdmin: false,
  },
];

const User = ({ user }) => {
  if (user.isAdmin) {
    return <p>{user.name + "👑"}</p>;
  } else {
    return <p>{user.name}</p>;
  }
};

export default class UserList extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>User List</h2>
        {users.map((item) => {
          if (item.isAdmin) {
            return <User user={item} />;
          } else {
            return <User user={item} />;
          }
        })}
      </div>
    );
  }
}
