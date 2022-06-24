import React, { useState, createContext } from "react";
import axios from "axios";
import { baseURL } from "./apis";
export const ReposContext = createContext();
const ReposProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [comparisonResuls, setComparisonResuls] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setResults([]);
    axios
      .get(`${baseURL}/search/repositories?q=${searchValue}`)
      .then((response) => {
        setResults(response.data.items);
      });
  };
  return (
    <ReposContext.Provider
      value={{
        results,
        setResults,
        searchValue,
        setSearchValue,
        handleSearch,
        comparisonResuls,
        setComparisonResuls,
      }}
    >
      {children}
    </ReposContext.Provider>
  );
};
export default ReposProvider;
