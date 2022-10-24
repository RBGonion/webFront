import React from "react";
import Card from "./Card";

const CardList = (props) => {
  return (
    <div className="card-container">
      {props.fetchData.map((elem) => {
        return (
          <Card
            key={elem.id}
            id={elem.id}
            name={elem.name}
            email={elem.email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
