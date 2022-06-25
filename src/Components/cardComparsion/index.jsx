import React, { useContext } from "react";
import { ReposContext } from "../../Context";
import "./style.css";
const CardComparsion = () => {
  const { comparisonResults, handleDeleteRepo } = useContext(ReposContext);

  return (
    <div className="all">
      {comparisonResults.leght === 0 ? (
        <h1>" You should Search to see your Comparison</h1>
      ) : (
        comparisonResults.map((item, index) => {
          return (
            <div className="containers" key={index}>
              <div className="cards">
                <div className="card-header">
                  <img src={item.owner.avatar_url} alt="ballons" />
                </div>
                <div className="card-body">
                  <a
                    href={item.svn_url}
                    target="_blank"
                   
                    rel="noreferrer"
                  >
                    {item.full_name}
                  </a>
                  <div className="card-item-info">
                    <div>
                      <span>stars:</span>
                      <span>{item.stargazers_count}</span>
                    </div>
                    <div>
                      <span>forks:</span>
                      <span>{item.forks_count}</span>
                    </div>

                    <div>
                      <span>issues:</span>
                      <span>{item.open_issues_count}</span>
                    </div>
                    <div>
                      {" "}
                      <span>Creation Date:</span>
                      <span>{item.created_at.substr(0, 10)}</span>
                    </div>
                    <div>
                      {" "}
                      <span>Last Update:</span>
                      <span>{item.updated_at.substr(0, 10)}</span>
                    </div>
                    <div>
                      {" "}
                      <span>Language:</span>
                      <span>{item.language}</span>
                    </div>
                    <div>
                      <span>License Type:</span>
                      <span>
                        {item.license === null ? "null" : item.license.name}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        handleDeleteRepo(item.id);
                      }}
                    >
                      Remove repo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default CardComparsion;
