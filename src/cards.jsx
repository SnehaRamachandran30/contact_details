import React from "react";

function Cards(prop) {
  return (
    <div className="card">
      <div className="top">
        <h2>{prop.name}</h2>
        <img src={prop.imgURL} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p>{prop.phone}</p>
        <p>{prop.email}</p>
      </div>
    </div>
  );
}

export default Cards;
