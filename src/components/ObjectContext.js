import React, { createContext, useState, useContext } from "react";
const ObjectContext = createContext();
export const ObjectProvider = ({ children }) => {
  let x = {
    MainButtons: {
      Set_index_Value: 0
    },
    step: 1
  };  
  const [screenObj, setScreenObj] = useState(x);
  return (
    <ObjectContext.Provider value={{ screenObj, setScreenObj }}>
      {children}
    </ObjectContext.Provider>
  );
};
export const useScreenObj = () => {
  return useContext(ObjectContext);
};
