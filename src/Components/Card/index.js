import React, { useContext } from "react";
import { ReposContext } from "../../Context";
import Spinner from "../Spinner";
import "./style.css";
const Card = () => {
  const { results, loeder } = useContext(ReposContext);
  console.log("results", results);
  console.log(loeder);
  return (
    <div className="parent">
      {loeder ? (
        <Spinner />
      ) : (
        results.map((items, index) => {
          return (
            <div class="main">
              <div class="card">
                <h2>{items.full_name}</h2>
                <div class="text2">{items.description}</div>
                <h1>{items.language}</h1>
                <button className="btn-add">Add </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Card;
