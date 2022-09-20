"use strict";

let marketContent = [{
    image: "assets/apple.png",
    name: "Apple",
    subName: "AAPL",
    balance: "10",
    allocations: "10",
    price: "160.00",
    d5: "2.21",
    value: "1, 600.00",
  },
  {
    image: "assets/apple.png",
    name: "Apple",
    subName: "AAPL",
    balance: "10",
    allocations: "10",
    price: "160.00",
    d5: "2.21",
    value: "1, 600.00",
  },

];

let priceChart = [{
    price: "23,169.1",
    quantity: "0.191117671",
  },

  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
  },
  {
    price: "23,169.1",
    quantity: "0.191117671",
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

                                    <div class="market__item">
                                                                       
                                    </div>

                                    <div class="market__item">
                                                                         
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

  for (let i = 0; i < marketContent.length; i++) {
    //Scrollable market data
    marketScrollableContainer.append(`<div class="trade-chart__assets__row">

    <div class="trade-market__items">

            <div class="market__item">
                ${marketContent[i].balance}
                <div class="market__item--purple px-2">
                  Shares                                                                                            
                </div>
            </div>

            <div class="market__item">
                ${marketContent[i].allocations}
                <div class="market__item--purple px-2">
                  %                                                                                           
                </div>
            </div>

            <div class="market__item">
                ${marketContent[i].price} 
                <div class="market__item--purple px-2">
                  USD                                                                                          
                </div>                                                  
            </div>

            <div class="market__item market__item--green">
                ${marketContent[i].d5}
                <div class="market__item--purple px-2">
                  %                                                                                           
                </div>                                              
            </div> 

            <div class="market__item">
                ${marketContent[i].value}
                <div class="market__item--purple px-2">
                  USD                                                                                          
                </div>                                                  
            </div> 

            <div class="market__item justify-content-center market__item--riverse">
              <img src="./assets/asset-icon.svg" alt="logo" />
            </div> 

            <div class="market__item justify-content-center market__item--top">
              <img src="./assets/top.svg" alt="logo" />
            </div>                                                
        </div>                 
    `);

    //Fixed market data
    marketFixedContainer.append(`<div class="trade-chart__assets__row">

                                      <div class="trade-market__items">                                              

                                            <div class="market__item">

                                                <img src="${marketContent[i].image}" />

                                                <div>
                                                  <div class="market__item__name">
                                                    ${marketContent[i].name}
                                                  </div>

                                                  <div class="market__item__subname">
                                                    ${marketContent[i].subName}
                                                  </div>
                                                </div>
                                            
                                            </div>                                   
                                      </div>                 
                                  `);
  }
}

function renderPrice() {
  let priceChartScrollableContainer = $(".price-chart__content__scrollable");

  //Price chart
  for (let i = 0; i < priceChart.length; i = i + 1) {
    console.log("index", i, priceChart[i]);

    if (i === 5) {
      priceChartScrollableContainer.append(`<div class="price-chart__spread">
                                    
                                              Spread: 2.3 0.010% 
                                                     
                                             </div>                
    `);
    } else {
      let dataElement = `
            <div class="price-chart__data">                 
                <div> 
                    ${priceChart[i].price}                                         
                </div>

                <div>  
                    ${priceChart[i].quantity}
                </div>        
                
                <div class="price-chart__data-percentage" style="width: ${rendomPercentage()}%"></div>

            </div>                
        `;

      priceChartScrollableContainer.append(dataElement);
    }
  }
}

function renderInfo(){

}

function rendomPercentage() {
  return Math.floor(Math.random() * 101);
}

function renderSwiper() {

  var scrollableContainer = document.querySelector(".trade-details__container");

  // create a simple instance
  // by default, it only adds horizontal recognizers
  var hammerSwipe = new Hammer(scrollableContainer);

  if (isMobile) {
    hammerSwipe.on("swipeleft swiperight", (event) => {
      switch (event.type) {
        case "swipeleft":
          scrollableContainer.style.transform = "translateX(-104%)";

          console.log("left");
          break;
        case "swiperight":
          scrollableContainer.style.transform = "translateX(0)";
          console.log("right");
          break;
      }
    });
  }

}

$(document).ready(function () {
  renderMarket();
  renderPrice();
  renderSwiper();
  renderInfo();
});