import React, { useContext } from "react";
import { ReposContext } from "../../Context";
import Spinner from "../Spinner";
import "./style.css";
const Card = () => {
  const { results, loeder,handleComparisonResults } = useContext(ReposContext);
 

  return (
    <div className="parent">
      {loeder ? (
        <Spinner />
      ) : (
        results.map((items, index) => {
          return (
            <div key={index} className="main">
              <div className="card">
                <h2>{items.full_name}</h2>
                <div className="text2">{items.description}</div>
                <h1>{items.language}</h1>
                <button className="btn-add" onClick={()=>{handleComparisonResults(items.id)}}>Add </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Card;
