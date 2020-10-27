import React, { useContext } from "react";
import Color from "./color";
import { MockupContext } from '../../../context/mockupContext'

export default function Colors() {
  const [mockupIphone, setMockupIphone] = useContext(MockupContext);

  const ChangeActive = (id) => {
    const auxMockup = { ...mockupIphone };
    auxMockup.data.map((item) => {
      item.isActive = false;
      if (item.id === id) {
        item.isActive = true;
      }
      return  setMockupIphone((pre) => auxMockup);
    });

   
  };

  return (
    <div className="colors-container">
      {mockupIphone.data ? (
        mockupIphone.data.map((item) => (
          <Color item={item} key={item.id} ChangeActive={ChangeActive} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
