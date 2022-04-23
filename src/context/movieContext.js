import React, { createContext, useState } from "react";
export const movieContex = React.createContext({});

const ProviderContexMovie = (props) => {
  const [Active, setActive] = useState(false);

  return (
    <movieContex.Provider
      value={{
          //................................states
        Active: Active,
      
        //.......................................updater
        
        ActiveHandler: () => {
          setActive(true);
        },
        disActiveHandler: () => {
          setActive(false);
        },
        //............................

      }}
    >
      {props.children}
    </movieContex.Provider>
  );
};
export default ProviderContexMovie;
