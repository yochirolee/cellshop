import React from "react";
import { useContext } from "react";
import { MockupContext } from "../../../context/mockupContext";
import './battery.css';

export default function Battery() {
  
  const [mockupIphone,setMockupIphone]=useContext(MockupContext);


  const HandleBatteryChange = (batPercent) => {
    
        const auxMockup={...mockupIphone};
        auxMockup.battery=batPercent;
        setMockupIphone({...auxMockup});

  
  };
  return mockupIphone ? (
    <div className="battery-container">
      <div className="form-control battery">
        <input
          onChange={(e) => HandleBatteryChange(e.target.value)} 
          id="battery-slider"
          name="battery"
          type="range"
          min="40"
          max="100"
          defaultValue={mockupIphone.battery}
          step="1"
        />
        <div className="battery-text">
          <span>{mockupIphone.battery}% </span>
          <span> Bateria</span>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
