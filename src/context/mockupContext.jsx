import React, { useState, createContext } from "react";

export const MockupContext = createContext();
export const MockupProvider = (props) => {
  const [mockupIphone, setMockupIphone] = useState(null);


  return (
    <MockupContext.Provider value={[mockupIphone, setMockupIphone]}>
      {props.children}
    </MockupContext.Provider>
  );
};