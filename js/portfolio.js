"use strict";

let assetsContent = [{
    image: "assets/btc-fund.png",
    name: "Apple",
    subName: "AAPL",
    balance: "10",
    allocations: "10",
    price: "160.00",
    d5: "2.21",
    value: "1, 600.00",
  },
  {
    image: "assets/btc-fund.png",
    name: "Apple",
    subName: "AAPL",
    balance: "10",
    allocations: "10",
    price: "160.00",
    d5: "2.21",
    value: "1, 600.00",
  },

];

function renderMarket() {
  let marketScrollableContainer = $(".trade__assets__items");
  let marketFixedContainer = $(".assets__items__fixed");

  let marketScrolableHeader = `<div class="trade-chart__assets__row trade-chart__assets__row--header">
                                <div class="trade-market__items">
                              
                                    <div class="market__item">
                                        Balance
                                    </div>

                                    <div class="market__item">
                                        Allocations
                                    </div>

                                    <div class="market__item">
                                        Price
                                    </div>

                                    <div class="market__item">
                                        5D
                                    </div>

                                    <div class="market__item">
                                        Esitmated Value                                   
                                    </div>
                                
                                </div>
                           </div>`;

  let marketFixedHeader = `<div class="trade-chart__assets__row trade-chart__assets__row--header">
                            <div class="trade-market__items">
                        
                               <div class="market__item">
                                   Assets
                               </div>     

                           </div>
                      </div>`;

  marketScrollableContainer.append(marketScrolableHeader);
  marketFixedContainer.append(marketFixedHeader);

  for (let i = 0; i < assetsContent.length; i++) {

    //Scrollable market data

    marketScrollableContainer.append(`<div class="trade-chart__assets__row">

    <div class="trade-market__items">

            <div class="market__item">
                ${assetsContent[i].balance}
                <div class="market__item--purple px-2">
                  Shares                                                                                            
                </div>
            </div>

            <div class="market__item">
                ${assetsContent[i].allocations}
                <div class="market__item--purple px-2">
                  %                                                                                           
                </div>
            </div>

            <div class="market__item">
                ${assetsContent[i].price} 
                <div class="market__item--purple px-2">
                  USD                                                                                          
                </div>                                                  
            </div>

            <div class="market__item market__item--green">
                ${assetsContent[i].d5}
                <div class="market__item--purple px-2">
                  %                                                                                           
                </div>                                              
            </div> 

            <div class="market__item">
                ${assetsContent[i].value}
                <div class="market__item--purple px-2">
                  USD                                                                                          
                </div>                                                  
            </div>                                                 
        </div>                 
    `);

    //Fixed market data
    marketFixedContainer.append(`<div class="trade-chart__assets__row">

                                      <div class="trade-market__items">                                              

                                            <div class="market__item">

                                                <img src="${assetsContent[i].image}" />

                                                <div>
                                                  <div class="market__item__name">
                                                    ${assetsContent[i].name}
                                                  </div>

                                                  <div class="market__item__subname">
                                                    ${assetsContent[i].subName}
                                                  </div>
                                                </div>
                                            
                                            </div>                                   
                                      </div>                 
                                  `);
  }
}


$(document).ready(function () {
  renderMarket();
  renderPrice();
  renderInfo();
});