"use strict";

let marketContent = [{
    image: "assets/btc-fund.png",
    id: 1,
    name: "Bitcoin",
    subName: "BCT",
    price: "$ 20,024,55",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$195,124,885,463",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "19,150,437 BTC",
  },
  {
    image: "assets/eth.png",
    id: 2,
    name: "Etherium",
    subName: "ETH",
    price: "$ 1,724,55",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$40,828,792,185",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "19,150,437 ETH",
  },
  {
    image: "assets/teth.png",
    id: 3,
    name: "Tether",
    subName: "USDT",
    price: "7 024 $",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$386,912,352,868",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "67,883,333,USDT",
  },
  {
    image: "assets/usd.png",
    id: 4,
    name: "USD Coin",
    subName: "USDC",
    price: "1.00 $",
    item1h: "0.02 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$6,372,680,481",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "161,337,261 BNB",
  },
  {
    image: "assets/bnb.png",
    id: 5,
    name: "BNB",
    subName: "BNB",
    price: "7 024 $",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$11,112,500,075",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "341,376,261 BNB",
  },
  {
    image: "assets/binance.png",
    id: 6,
    name: "Binance",
    subName: "BUSD",
    price: "7 024 $",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$1,305,425,201",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "204,066,515 BUSD",
  },
  {
    image: "assets/xrx.png",
    id: 7,
    name: "XRP",
    subName: "XRP",
    price: "7 024 $",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$ 40,595,000",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "066,515 BUSD",
  },
  {
    image: "assets/btc-fund.png",
    id: 8,
    name: "Etherium",
    subName: "ETH",
    price: "7 024 $",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$ 40,595,000",
    volume: "$ 31,00",
    supply: "19,00",
  },
  {
    image: "assets/ada.png",
    id: 9,
    name: "Cardano",
    subName: "ADA",
    price: "7 024 $",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$ 40,595,000",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "19,00",
  },
  {
    image: "assets/sol.png",
    id: 10,
    name: "Solana",
    subName: "SOL",
    price: "7 024 $",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$ 40,595,000",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "19,00",
  },
  {
    image: "assets/dot.png",
    id: 11,
    name: "Tolkadot",
    subName: "DOT",
    price: "7 024 $",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$ 40,595,000",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "19,00",
  },
  {
    image: "assets/doge.png",
    id: 12,
    name: "Docegoin",
    subName: "DOGE",
    price: "7 024 $",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$ 40,595,000",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "19,00",
  },
  {
    image: "assets/polig.png",
    id: 13,
    name: "Poligon",
    subName: "ETH",
    price: "7 024 $",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$ 40,595,000",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "19,00",
  },
  {
    image: "assets/inu.png",
    id: 14,
    name: "Shiba Inu",
    subName: "SIB",
    price: "7 024 $",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$ 40,595,000",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "19,00",
  },
  {
    image: "assets/tron.png",
    id: 15,
    name: "Tron",
    subName: "TRXS",
    price: "7 024 $",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$ 40,595,000",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "19,00",
  },
  {
    image: "assets/inu.png",
    id: 16,
    name: "Shiba Inu",
    subName: "SIB",
    price: "7 024 $",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$ 40,595,000",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "19,00",
  },
  {
    image: "assets/btc-fund.png",
    id: 17,
    name: "Bitcoin",
    subName: "BCT",
    price: "$ 20,024,55",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$ 40,595,000",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "19,00",
  },
  {
    image: "assets/eth.png",
    id: 18,
    name: "Etherium",
    subName: "ETH",
    price: "$ 1,724,55",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$ 40,595,000",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "19,00",
  },
  {
    image: "assets/teth.png",
    id: 19,
    name: "Tether",
    subName: "USDTS",
    price: "7 024 $",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$ 40,595,000",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "19,00",
  },
  {
    image: "assets/btc-fund.png",
    id: 20,
    name: "Bitcoin",
    subName: "BCT",
    price: "$ 20,024,55",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$ 40,595,000",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "19,00",
  },
  {
    image: "assets/eth.png",
    id: 21,
    name: "Etherium",
    subName: "ETH",
    price: "$ 1,724,55",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$ 40,595,000",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "19,00",
  },
  {
    image: "assets/teth.png",
    id: 22,
    name: "Tether",
    subName: "USDTS",
    price: "7 024 $",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$ 40,595,000",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "19,00",
  },
  {
    image: "assets/teth.png",
    id: 23,
    name: "Tether",
    subName: "USDTS",
    price: "7 024 $",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$ 40,595,000",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "19,00",
  },
  {
    image: "assets/tron.png",
    id: 24,
    name: "Tether",
    subName: "USDTS",
    price: "7 024 $",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$ 40,595,000",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "19,00",
  },
  {
    image: "assets/teth.png",
    id: 25,
    name: "Tether",
    subName: "USDTS",
    price: "7 024 $",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$ 40,595,000",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "19,00",
  },
  {
    image: "assets/eth.png",
    id: 26,
    name: "Tether",
    subName: "USDTS",
    price: "7 024 $",
    item1h: "0.30 %",
    item24h: "1.95 %",
    item7d: "4.95 %",
    marketCup: "$ 40,595,000",
    volume: "$ 31,00",
    volumeData: "2,020,843 BTC",
    supply: "19,00",
  },

];

function renderMarket() {
  let marketScrollableContainer = $(".chart__assets__items");

  let marketFixedContainer = $(".chart__assets__items__fixed");

  let marketScrolableHeader = `<div class="chart__assets__row chart__assets__row--header">
                                <div class="market__items">
                              
                                    <div class="market__item">
                                        Price
                                    </div>

                                    <div class="market__item">
                                        1h %
                                    </div>

                                    <div class="market__item">
                                        24h %
                                    </div>

                                    <div class="market__item">
                                        7d %
                                    </div>

                                    <div class="market__item">
                                        Market Cup

                                        <div class="market__item__info_icon"> 
                                            <img src="./assets/info.svg" alt="logo" />     
                                        </div>                                       
                                    </div>

                                    <div class="market__item">
                                        Volume(24h)

                                        <div class="market__item__info_icon"> 
                                            <img src="./assets/info.svg" alt="logo" />     
                                        </div>
                                    </div>

                                    <div class="market__item">
                                        Circulating supply

                                        <div class="market__item__info_icon"> 
                                            <img src="./assets/info.svg" alt="logo" />     
                                        </div>
                                    </div>

                                </div>
                           </div>`;

  let marketFixedHeader = `<div class="chart__assets__row chart__assets__row--header">
                            <div class="market__items">
                          
                                <div class="market__item market__item--id">
                                  #
                                </div>

                                <div class="market__item">
                                    Name
                                </div>     

                            </div>
                      </div>`;

  marketScrollableContainer.append(marketScrolableHeader);
  marketFixedContainer.append(marketFixedHeader);

  for (let i = 0; i < marketContent.length; i++) {
    marketScrollableContainer.append(`<div class="chart__assets__row">
                     
                                      <div class="market__items">                                         
                                              <div class="market__item market__item--green">
                                                  ${marketContent[i].price}                                                                                             
                                              </div>
  
                                              <div class="market__item market__item--green">
                                                  ${marketContent[i].item1h}
                                              </div>
  
                                              <div class="market__item">
                                                  ${marketContent[i].item24h}                                                   
                                              </div>
  
                                              <div class="market__item market__item--red">
                                                  ${marketContent[i].item7d}                                                
                                              </div> 

                                              <div class="market__item">
                                                  ${marketContent[i].marketCup}                                                
                                              </div>    
                                              
                                              <div class="market__item market__item__volume">
                                                <div> 
                                                    ${marketContent[i].volume} 
                                                </div>

                                                <div class="market__item__volume_bottom"> 
                                                    ${marketContent[i].volumeData}                                                 
                                                </div>
                                                                                                
                                              </div>  

                                              <div class="market__item">
                                                  ${marketContent[i].supply}                                                                                           
                                              </div> 
                                      </div>                 
                                  `);
  }

  for (let i = 0; i < marketContent.length; i++) {
    marketFixedContainer.append(`<div class="chart__assets__row">

                                      <div class="market__items">
 
                                              <div class="market__item market__item--id">
                                                  ${marketContent[i].id}                                                                                                
                                              </div>

                                              <a href="./trade-details.html">

                                                <div class="market__item market__item__link">

                                                    <img src="${marketContent[i].image}" />

                                                    ${marketContent[i].name}
                                                    ${marketContent[i].subName}
                                                
                                                </div>
                                            </a>

                                      </div>                 
                                  `);
  }
}

$(document).ready(function () {

  renderMarket();

  let scrollableContainer = $(".trade__market__content--left");
  let chartContaienr = $(".chart__image");

  scrollableContainer.scroll(function () {
    let scrollTop = this.scrollTop;

    if (scrollTop > 0) {
      chartContaienr.slideUp();
    }

    if (scrollTop === 0) {
      chartContaienr.slideDown();
    }
  });

});