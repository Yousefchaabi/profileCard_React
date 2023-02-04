import React from "react";
import Content from "./Content";
import Image from "./Assets/avatar.png";

function Profile({ info, sayHi }) {
  console.log("data :", info);
  return (
    <div>
      {sayHi("Youssef Chaabi")}
      {info.map((elt, index) => (
        <Content {...elt} key={index}>
          <img src={Image} alt=""></img>
        </Content>
      ))}
    </div>
  );
}

export default Profile;
