import React, { useContext } from "react";
import "./storage.css";
import Storage from "./storage";
import { MockupContext } from "../../../context/mockupContext";

export default function Storages() {
  const [mockupIphone, setMockupIphone] = useContext(MockupContext);

  const ChangeActive = (id) => {
    const auxMockup = { ...mockupIphone };
    auxMockup.storage.map((storage) => {
      storage.isActive = false;
      if (storage.id === id) {
        storage.isActive = true;
      } 
      return setMockupIphone({...auxMockup});
    });
    
  };

  return (
    <div className="storages-container">
      {mockupIphone ? (
        mockupIphone.storage.map((storage) => (
          <Storage
            storage={storage}
            key={storage.id}
            ChangeActive={ChangeActive}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
