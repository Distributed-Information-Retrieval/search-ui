/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react';
import { getDocs } from '../services/docs';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (query) => {
    setLoading(true);
    const data = await getDocs(query);
    setResults(data);
    setLoading(false);
  };

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
