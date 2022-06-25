import React, { useState, createContext } from "react";
import axios from "axios";
import { baseURL } from "./apis";
export const ReposContext = createContext();
const ReposProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [comparisonResults, setComparisonResults] = useState([]);
  const [loeder , setLoeder]=useState(false)

  const handleSearch = (e) => {
    e.preventDefault();
    setResults([]);
    setLoeder(true)
    axios
      .get(`${baseURL}/search/repositories?q=${searchValue}`)
      .then((response) => {
        setResults(response.data.items);
        setLoeder(false)
      });
  }; 

   const handleComparisonResults=(comparisonId)=>{
    const filterResults= results.filter((items)=> items.id === comparisonId)
    setComparisonResults([...comparisonResults,filterResults[0]])

   } 



   const handleDeleteRepo = (comparisonId) => {
    let filterResults = comparisonResults.filter((item) => {
      return item.id !== comparisonId;
    });
    setComparisonResults(filterResults);
  };
  return (
    <ReposContext.Provider
      value={{
        results,
        setResults,
        searchValue,
        setSearchValue,
        handleSearch,
        comparisonResults,
        setComparisonResults,
        loeder,
        handleComparisonResults,
        handleDeleteRepo
      }}
    >
      {children}
    </ReposContext.Provider>
  );
};
export default ReposProvider;
