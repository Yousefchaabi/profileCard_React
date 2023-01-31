import React from "react";
import Content from "./Content";

function Profile({ info, sayHi }) {
  console.log("data :", info);
  return (
    <div>
      {sayHi("Youssef Chaabi")}
      {info.map((elt, index) => (
        <Content {...elt} key={index}></Content>
      ))}
    </div>
  );
}

export default Profile;
