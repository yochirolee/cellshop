import React, { useState, useContext } from "react";
import Colors from "../colors/colors";
import "./selectModel.css";
import { MockupContext } from "../../../context/mockupContext";
import Storages from "../storages/storages";
import Battery from "../battery/battery";

export default function SelectModel({
  iPhonesList,
  GetActive,
  HandleActiveStorage,
  HandleBattery,
}) {
  const [iphones] = useState(iPhonesList);
  const [mockupIphone, setMockupIphone] = useContext(MockupContext);

  const HandleOnChange = (e) => {
    const auxMockup = { ...mockupIphone };
    switch (e.target.name) {
      case "sim":
        auxMockup.sim = e.target.value;
        break;
      case "price":
        auxMockup.price = e.target.value;
        break;
      case "condition":
        auxMockup.condition = e.target.value;
        break;
      default:
        setMockupIphone(auxMockup);
    }

    setMockupIphone(auxMockup);
  };

  const HandleSelected = async (e) => {
    await SearchIphoneSelected(e.target.value).then((iPhoneSelected) => {
      if (iPhoneSelected != null) {
        iPhoneSelected.data[0].isActive = true;
        iPhoneSelected.storage[0].isActive = true;

        setMockupIphone(iPhoneSelected);
      }
    });
  };

  const SearchIphoneSelected = async (e) => {
    const iPhoneSelected = await iphones.find((ip) => ip.id === parseInt(e));
    return iPhoneSelected;
  };

  return (
    <div>
      <select onChange={(e) => HandleSelected(e)}>
        <option value="none" selected disabled hidden>
          Select an Option
        </option>
        {iphones.map((iphone) => (
          <option key={iphone.id} id={iphone.id} value={iphone.id}>
            {iphone.model}
          </option>
        ))}
      </select>

      {mockupIphone ? (
        <div className="components-container">
          <select name="condition" required="true" onChange={HandleOnChange}>
            <option value="none" selected disabled hidden>
              Select an Option
            </option>
            <option>Nuevo en Caja</option>
            <option>Nuevo sin Caja</option>
            <option>Bien Cuidado</option>
            <option>Regular</option>
            <option>Roto</option>
          </select>

          <select
            name="sim"
            required="true"
            text="select"
            onChange={HandleOnChange}
          >
            <option value="none" selected disabled hidden>
              Select an Option
            </option>
            <option>Libre de Fabrica</option>
            <option>Con Gevey Temporal</option>
            <option>Con Gevey</option>
            <option>Bypass</option>
          </select>
          <input
            type="number"
            className="price"
            placeholder="Precio de Venta"
            maxLength="6"
            name="price"
            onChange={HandleOnChange}
          ></input>

          <Colors mockupIphone={mockupIphone} GetActive={GetActive} />
          <Battery mockupIphone={mockupIphone} HandleBattery={HandleBattery} />
          <Storages
            ListStorages={mockupIphone.storage}
            HandleActiveStorage={HandleActiveStorage}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
