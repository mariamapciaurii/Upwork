"use strict";

let fundingContent = {
  chartImage: "assets/chart.png",
  items: [
    {
      itemImage: "assets/btc-fund.png",
      itemName: "Bitcoin",
      itemSubName: "BCT",
      itemPrice: "7 024",
      itemUsd: "USD",
      itemAmount: "12",
      itemBalance: "433.12B",
      itemAllocation: "100",
      percentage: "%",
    },
    {
      itemImage: "assets/btc-fund.png",
      itemName: "GST",
      itemSubName: "GST",
      itemPrice: "16 500",
      itemUsd: "EUR",
      itemAmount: "2",
      itemBalance: "433.12B",
      itemAllocation: "100",
      percentage: "%",
    },
    {
      itemImage: "assets/btc-fund.png",
      itemName: "DogeCoin",
      itemSubName: "DGC",
      itemPrice: "4 140",
      itemUsd: "USD",
      itemAmount: "25",
      itemBalance: "433.12B",
      itemAllocation: "100",
      percentage: "%",
    },
    {
      itemImage: "assets/btc-fund.png",
      itemName: "Etherium",
      itemSubName: "ETH",
      itemPrice: "21 200",
      itemUsd: "USD",
      itemAmount: "42",
      itemBalance: "433.12B",
      itemAllocation: "100",
      percentage: "%",
    },
  ],
};

let depositContent = {
  itemName: "Bitcoin >",
  itemComment: "BTC wallet",
  qrImage: "assets/btc-qr.png",
  btAddressName: "BTC address",
  btAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
  copyImage: "assets/copy-icon.svg",
  comment: "only send Bitcoin (BTC) to this address",
  infoIcon: "assets/info.svg",
};

let withdrawContent = {
  itemName: "Bitcoin >",
  amount: "amount",
  amountNum: "0",
  amounValue: "BTC",
  cad: "CAD",
  swapIcon: "assets/swap.svg",
  percentage25: "25%",
  percentage50: "50%",
  percentage75: "75%",
  percentage100: "100%",
  balanceName: "Balance",
  balanceValue: "0.001 BTC  = 12 CAD",
  minimumWithdrawl: "Minimum Withdrawl",
  minimumWithdrawlValue: "0.000001 BTC = 0.5 CAD",
  maxWithdrawl: "Maximum Withdrawl",
  maxWithdrawlValue: "0.001 BTC = 12 CAD",
  withdrawlFee: "Withdrawl Fee",
  withdrawlFeeValue: "0.0000001 BTC = 0.01 CAD",
  option: "RI Account or  Withdrawl Adress",
  arrowDown: "assets/arrow-down.svg",
};

function renderChart() {
  let chartAssetsContainer = $(".chart__assets__items");
  let chartImageContainer = $(".chart__image");
  let chartImageSrc = fundingContent.chartImage;
  let chartImage = `<img src="${chartImageSrc}" alt="chartImage"/>`;

  let chartIconsContainer = $(".chart__assets__icons");

  chartImageContainer.append(chartImage);

  let chartAssetsHeader = `<div class="chart__assets__row chart__assets__row--header">
                                <div class="funding__items">
                                    <div class="funding__item">
                                        Name
                                    </div>

                                    <div class="funding__item">
                                        Price
                                    </div>

                                    <div class="funding__item">
                                        Amount
                                    </div>

                                    <div class="funding__item">
                                        Balance
                                    </div>

                                    <div class="funding__item">
                                        Allocation
                                    </div>
                                </div>
                           </div>`;

  chartAssetsContainer.append(chartAssetsHeader);

  for (let i = 0; i < fundingContent.items.length; i++) {
    chartAssetsContainer.append(`<div class="chart__assets__row">
                            
                                      <div class="funding__items">

                                            <div class="funding__item">
                                                    
                                                 <div class="funding__items__title">
                                                    ${fundingContent.items[i].itemName}
                                                </div>

                                                <div class="funding__item__subname">
                                                    ${fundingContent.items[i].itemSubName} 
                                                </div>                                                    
                                 
                                            </div>
                                   
                                              <div class="funding__item">
                                                  ${fundingContent.items[i].itemPrice}
                                                  <div class="funding__item__usd">
                                                      ${fundingContent.items[i].itemUsd}
                                                  </div>                                                      
                                              </div>
  
                                              <div class="funding__item">
                                                  ${fundingContent.items[i].itemAmount}
                                              </div>
  
                                              <div class="funding__item">
                                                  ${fundingContent.items[i].itemBalance}
                                                  <div class="funding__item__usd">
                                                      ${fundingContent.items[i].itemUsd}
                                                  </div>                                                   
                                              </div>
  
                                              <div class="funding__item">
                                                  ${fundingContent.items[i].itemAllocation}
  
                                                  <div class="funding__item__percentage">
                                                      ${fundingContent.items[i].percentage}
                                                  </div>                                                   
                                              </div>
                                        
                                      </div>                 
                                  `);
  }

  for (let i = 0; i < fundingContent.items.length; i++) {
    chartIconsContainer.append(`<div class="chart__assets__icon">
        <img src="${fundingContent.items[i].itemImage}" alt="${fundingContent.items[i].itemName}"/>
    `);
  }
}

function renderDeposit() {
  let depositContainer = $(".deposit");

  depositContainer.prepend(`<div class="funding__items__content--right">
                                            <div class="funding__buttons">
                                                <div class="funding__button-wrapper">
                                                    <button class="funding__button funding__button__deposit">
                                                        DEPOSIT
                                                    </button>
                                                </div>

                                                <div class="funding__button-wrapper">                                            
                                                    <button class="funding__button funding__button__withdraw" id="#test">
                                                        WITHDRAW
                                                    </button>
                                                </div>
                                            </div>

                                            <div class="deposit__section">

                                                <div class="deposit__section__mobile_class">
                                                    <div class="deposit__section__title">
                                                        ${depositContent.itemName}
                                                    </div>

                                                    <div class="deposit__section__subtitle">
                                                        ${depositContent.itemComment}
                                                    </div>
                                                </div>

                                                <div class="deposit__section__qr">
                                                    <div class="deposit__section__qr-image">                                                                                       
                                                        <img src="${depositContent.qrImage}" alt="qrImage"/>
                                                    </div>  
                                                
                                                    <div class="deposit__section__address">
                                                        <div class="d-flex address__container pb-2">
                                                            <div class="address__container__name">
                                                                ${depositContent.btAddressName}
                                                            </div>

                                                            <div class="address__container__copy-img">
                                                                <img src="${depositContent.copyImage}" alt="copyIcon"/>
                                                            </div>
                                                        </div>

                                                        <div class="address__container__address">                                                      
                                                            ${depositContent.btAddress}
                                                        </div>
                                                    </div> 
                                                </div>  

                                                <div class="deposit__section__comment">
                                                    <img src="${depositContent.infoIcon}" alt="infoIcon"/>
                                                    <div>  
                                                        ${depositContent.comment}
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="withdraw__section">
                                                <div>
                                                <div class="deposit__section__mobile_class">
                                                    <div class="withdraw__section__title">
                                                        ${withdrawContent.itemName}
                                                    </div>

                                                    <div class="withdraw__section__subtitle">
                                                        ${withdrawContent.amount}
                                                    </div>
                                                </div>
                                                
                                                <div class="amount__container">
                                                    <div class="amount__container__num px-2">
                                                        ${withdrawContent.amountNum}
                                                    
                                                    </div>
                                                    <div class="amount__container__value">
                                                        ${withdrawContent.amounValue}
                                                    </div>

                                                    <div class="amount__container__cad_content">                                           
                                                        <img src="${withdrawContent.swapIcon}" alt="swapIcon"/>
                                                        <div class="amount__container__cad">                                                 
                                                            ${withdrawContent.cad}
                                                        </div> 
                                                    </div>
                                                </div>

                                                <div class="percentage__container">
                                                    <div class="percentage__container__item">
                                                        ${withdrawContent.percentage25}
                                                    </div>

                                                    <div class="percentage__container__item">
                                                        ${withdrawContent.percentage50}
                                                    </div>

                                                    <div class="percentage__container__item">
                                                        ${withdrawContent.percentage75}
                                                    </div>

                                                    <div class="percentage__container__item">
                                                        ${withdrawContent.percentage100}
                                                    </div>
                                                </div>

                                                <div class="withdraw__section__select">                                                                                                   
                                                    <div class="text-white px-2"> To </div>

                                                    <div class="option__option px-2">
                                                        ${withdrawContent.option}                                                   
                                                    </div>

                                                    <div>
                                                        <img src="${withdrawContent.arrowDown}" alt="arrow"/>                                                        
                                                    </div>                                                                                                                                  
                                                </div>

                                                <div>
                                                    <div class="withdraw__content">
                                                        <div class="withdraw__content__title">
                                                            ${withdrawContent.balanceName}
                                                        </div>
                                                        
                                                        <div class="withdraw__content__value">
                                                            ${withdrawContent.balanceValue}
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="withdraw__content">
                                                        <div class="withdraw__content__title">
                                                            ${withdrawContent.minimumWithdrawl}
                                                        </div>

                                                        <div class="withdraw__content__value">
                                                            ${withdrawContent.minimumWithdrawlValue}
                                                        </div>
                                                    </div>

                                                    <div class="withdraw__content">
                                                        <div class="withdraw__content__title">
                                                            ${withdrawContent.maxWithdrawl}
                                                        </div>

                                                        <div class="withdraw__content__value">
                                                            ${withdrawContent.maxWithdrawlValue}
                                                        </div>
                                                    </div>

                                                    <div class="withdraw__content">
                                                        <div class="withdraw__content__title">
                                                            ${withdrawContent.withdrawlFeeValue}
                                                        </div>

                                                        <div class="withdraw__content__value">
                                                            ${withdrawContent.withdrawlFee}
                                                        </div>
                                                    </div>
                                                </div>                    
                                            </div>  
                                        </div>                 
                                </div>
                                `);
}

function fundingButtons() {
  $(".deposit__section").show();
  $(".withdraw__section").hide();

  $(".funding__button__withdraw").click(function () {
    // Then show div on click.
    $(".deposit__section").hide();
    $(".withdraw__section").show();
  });
  $(".funding__button__deposit").click(function () {
    // Then show div on click.
    $(".deposit__section").show();
    $(".withdraw__section").hide();
  });

  $(".funding__button__withdraw").on("click", function () {
    //then remove selected class.
    $(".funding__button").removeClass("funding__button__deposit");
  });

  $(".funding__button").on("click", function () {
    //then remove and add selected class.
    $(".funding__button").removeClass("selected");
    $(this).addClass("selected");
  });
}

$(document).ready(function () {
  renderChart();
  renderDeposit();
  fundingButtons();
});

var scrollableContainer = document.querySelector(".funding__container");

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

// listen to events...
