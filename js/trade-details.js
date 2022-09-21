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

let itemInfo = [{
    image: "assets/tesla.png",
    name: "TSLA",
    num: "82",
    amount: "842.70",
    percentage: "18.24(2.21%)",
    calculate: " 830.1x25",
    range: "818",
    volume: "28.241M",
    avarage: "29.04M",
    market: "83.7M",
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
                <div class="price-chart__data__value"> 
                    ${priceChart[i].price}                                         
                </div>

                <div class="price-chart__data__value">  
                    ${priceChart[i].quantity}
                </div>        
                
                <div class="price-chart__data-percentage" style="width: ${rendomPercentage()}%"></div>

            </div>                
        `;

      priceChartScrollableContainer.append(dataElement);
    }
  }
}

function renderInfo() {
  let test = $(".trade-details__section--middle");

  for (let i = 0; i < itemInfo.length; i++) {

    test.append(`<div class="info">

                    <div class="info__header">

                      <div class="info__header__image">
                        <img src="${itemInfo[i].image}" />       
                      </div>

                      <div class="info__header__name">
                        ${itemInfo[i].name}                    
                      </div>

                      <div class="info__header__num">
                        ${itemInfo[i].num}                    
                                        
                      </div>

                      <div class="info__header__icon">
                        <img src="./assets/more.svg" alt="logo" />                                     
                      </div>

                    </div>

                    <div class="info__first-section">

                      <div class="d-flex align-items-baseline mt-2">

                        <div class="info__amount pe-2">
                          ${itemInfo[i].amount}
                        </div>

                        <div class="info__currency"> USD</div>    

                      </div>

                      <div class="info__percentage mb-4"> ${itemInfo[i].percentage} </div>
              
                    </div>

                    <div class="d-flex justify-content-between align-items-center p-3">

                      <div class="info__calculate info__calculate--blue">
                        ${itemInfo[i].calculate}
                      </div>

                      <div class="info__calculate info__calculate--red">
                        ${itemInfo[i].calculate}                
                      </div>
                    
                    </div>

                    <div class="info__range">

                      <div class="info__range__days row align-items-center">
                        <div class="col-4 info__range__num"> ${itemInfo[i].range} </div>
                        <div class="col-4 info__range__text">DAY'S RANGE</div>
                        <div class="col-4 info__range__num"> ${itemInfo[i].range} </div>                 
                      </div>

                      <div class="info__range__week row align-items-center">
                        <div class="col-4 info__range__num"> ${itemInfo[i].range} </div>
                        <div class="col-4 info__range__text">52WK RANGE</div>
                        <div class="col-4 info__range__num"> ${itemInfo[i].range} </div>                 
                      </div>

                    </div>

                    <div class="info__stats">
                      <div class="info__stats__title">Key stats</div>

                      <div class="d-flex align-items-center justify-content-between pb-2">
                        <div class="info__stats__data info__stats__data--left">VOLUME</div>
                        <div class="info__stats__data info__stats__data--right"> ${itemInfo[i].volume} </div>
                      </div>

                      <div class="d-flex  justify-content-between pb-2">
                        <div class="info__stats__data info__stats__data--left">AVARAGE VOLUME</div>
                        <div class="info__stats__data info__stats__data--right"> ${itemInfo[i].avarage} </div>
                      </div>

                      <div class="d-flex  justify-content-between pb-2">
                        <div class="info__stats__data info__stats__data--left">MARKET CAPITALIZATION</div>
                        <div class="info__stats__data info__stats__data--right"> ${itemInfo[i].market} </div>
                      </div>

                      <div class="d-flex  justify-content-between pb-2">
                        <div class="info__stats__data info__stats__data--left">DIVIDENTS</div>
                        <div class="info__stats__data info__stats__data--right"> - </div>
                      </div>
                      
                    </div>

                    <div class="info__earnings">
                      <div class="info__earnings__title">Earnings Next: Oct 19</div>

                    </div>
              </div>                 
    `);
  }
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
          break;
        case "swiperight":
          scrollableContainer.style.transform = "translateX(0)";
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