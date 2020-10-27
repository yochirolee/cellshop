import React, { useState } from "react";


import { iPhoneList } from "../assets/data/iphonesList";
import IphoneMockup from "../components/iphoneMockup";
import SelectModel from "../components/add/selectModel/selectModel";

export default function Add() {
  const [iPhones] = useState(iPhoneList);
 

  return (
    <section>
      <div className="premium-section-container">
        <div className="premium-products-container">
          <div className="premium-advisor">
            <h5>Vende tu Iphone con Nosotros</h5>
          </div>

          <IphoneMockup />

          <div className="add-product-card">
            <SelectModel iPhonesList={iPhones} />
          </div>
        </div>
      </div>
    </section>
  );
}
