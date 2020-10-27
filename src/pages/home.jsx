import React from 'react';

import '../assets/css/styles.css';


export default function Home(){


    return (
    
    <section>
      <div class="premium-section-container">
        <div class="premium-products-container">
          <div class="premium-advisor">
              <h5>Productos de Vendedores Premium</h5>
            </div>
         
          <div class="premium-product-card">
            <div class="product-picture">
              <img src="./img/iphone11-green-select-2019.png" />
            </div>
            <div class="product-card-body">
              <div class="product-name"><h5>Iphone 11</h5></div>
              <div class="product-price">$499</div>
              <div class="product-state-container">
                <div class="phone-state">Usado</div>
                <div class="phone-sim-state">Con Gevey</div>
                <div class="phone-battery-state">87%</div>
              </div>

              <button class="btn btn-show-more">Ver Mas...</button>
            </div>
          </div>

          <div class="premium-product-card">
            <div class="product-picture">
              <img src="./img/iphone12max.jpg" />
            </div>
            <div class="product-card-body">
              <div class="product-name"><h5>Iphone 12 Pro Max</h5></div>
              <div class="product-price">$799</div>
              <div class="product-state-container">
                <div class="phone-state">Nuevo</div>
                <div class="phone-sim-state">Libre de Fabrica</div>
                <div class="phone-battery-state">98%</div>
              </div>

              <button class="btn btn-show-more">Ver Mas...</button>
            </div>
          </div>

          <div class="premium-product-card">
            <div class="product-picture">
              <img src="./img/iphone12.jpg" />
            </div>
            <div class="product-card-body">
              <div class="product-name"><h5>Iphone 12</h5></div>
              <div class="product-price">$699</div>
              <div class="product-state-container">
                <div class="phone-state">Nuevo</div>
                <div class="phone-sim-state">Libre de Fabrica</div>
                <div class="phone-battery-state">98%</div>
              </div>

              <button class="btn btn-show-more">Ver Mas...</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}