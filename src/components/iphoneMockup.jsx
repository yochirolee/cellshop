import React, { useState, useContext } from "react";
import { useEffect } from "react";
import Pictures from "../components/add/pictures/pictures";
import { MockupContext } from "../context/mockupContext";
import battery100 from "../assets/img/bat100.svg";
import battery80 from "../assets/img/bat80.svg";
import battery50 from "../assets/img/bat50.svg";

import storage100 from "../assets/img/storage.svg";
import sim1 from "../assets/img/sim1.svg";

export default function IphoneMockup() {
  const [mockupIphone] = useContext(MockupContext);
  const [activeItem, setActiveItem] = useState([]);
  const [activeStorage, setActiveStorage] = useState([]);

  useEffect(() => {
    if (mockupIphone) {
      setActiveItem(mockupIphone.data.find((item) => item.isActive === true));
      setActiveStorage(
        mockupIphone.storage.find((storage) => storage.isActive === true)
      );
    }
  }, [mockupIphone]);

  return (
    <div className="card-container">
      {mockupIphone ? (
        <div className="premium-product-card">
          <Pictures picture={activeItem.picture} />
          <div className="product-card-body">
            <div className="product-name">
              <h5>
                {mockupIphone.model}

                <div className="product-price">${mockupIphone.price}</div>
              </h5>  <div className="iphone-state-container icons">
                  <span>{mockupIphone.condition}</span>
                </div>
              <div className="icons-container">
          
                <div className="iphone-battery-state icons">
                  <span>{mockupIphone.battery}%</span>
                  <img
                    src={
                      mockupIphone.battery > 90
                        ? battery100
                        : mockupIphone.battery > 70
                        ? battery80
                        : battery50
                    }
                  ></img>
                </div>
                <div className="iphone-sim-state icons">
                  <span>{mockupIphone.sim}</span>
                  <img className="sim-state-img" src={sim1}></img>
                </div>
                <div className="iphone-storage icons">
                  <span>{activeStorage.storage}GB</span>
                  <img className="storage-img" src={storage100}></img>
                </div>
              </div>
            
            </div>
          </div>
          <button type="submit" className="btn btn-submit">
            Publicar
          </button>
        </div>
      ) : (
        <div>
          <div className="premium-product-card">
            <Pictures picture={activeItem.picture} />
            <div className="product-card-body">
              <div className="product-name-home">
                <span>Bienvenido, por favor</span>
                <span>Seleccione el modelo a vender</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
