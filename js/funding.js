"use strict";

let fundingContent = {
    chartImage: "assets/chart.png",
    items: [{
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
            itemImage: "assets/bnb.png",
            itemName: "Bitcoin",
            itemSubName: "GST",
            itemPrice: "16 500",
            itemUsd: "EUR",
            itemAmount: "2",
            itemBalance: "433.12B",
            itemAllocation: "100",
            percentage: "%",
        },
        {
            itemImage: "assets/doge.png",
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
            itemImage: "assets/dot.png",
            itemName: "Etherium",
            itemSubName: "ETH",
            itemPrice: "21 200",
            itemUsd: "USD",
            itemAmount: "42",
            itemBalance: "433.12B",
            itemAllocation: "100",
            percentage: "%",
        },
        {
            itemImage: "assets/eth.png",
            itemName: "Etherium",
            itemSubName: "ETH",
            itemPrice: "21 200",
            itemUsd: "USD",
            itemAmount: "42",
            itemBalance: "433.12B",
            itemAllocation: "100",
            percentage: "%",
        },
        {
            itemImage: "assets/binance.png",
            itemName: "Etherium",
            itemSubName: "ETH",
            itemPrice: "21 200",
            itemUsd: "USD",
            itemAmount: "42",
            itemBalance: "433.12B",
            itemAllocation: "100",
            percentage: "%",
        },
        {
            itemImage: "assets/tesla.png",
            itemName: "Etherium",
            itemSubName: "ETH",
            itemPrice: "21 200",
            itemUsd: "USD",
            itemAmount: "42",
            itemBalance: "433.12B",
            itemAllocation: "100",
            percentage: "%",
        },
        {
            itemImage: "assets/xrx.png",
            itemName: "Etherium",
            itemSubName: "ETH",
            itemPrice: "21 200",
            itemUsd: "USD",
            itemAmount: "42",
            itemBalance: "433.12B",
            itemAllocation: "100",
            percentage: "%",
        },
        {
            itemImage: "assets/binance.png",
            itemName: "Etherium",
            itemSubName: "ETH",
            itemPrice: "21 200",
            itemUsd: "USD",
            itemAmount: "42",
            itemBalance: "433.12B",
            itemAllocation: "100",
            percentage: "%",
        },
        {
            itemImage: "assets/binance.png",
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

let modalContent = [
    {
        name: "Bitcoin",
        subName: "BTC",
        image: "assets/btc-fund.png",
        numBTC: "0.00015",
        numCAD: "15.6",
    },
    {
        name: "Etherium",
        subName: "ETH",
        image: "assets/eth.png",
        numBTC: "0.00015",
        numCAD: "15.6",
    },
    {
        name: "Tether",
        subName: "USDT",
        image: "assets/teth.png",
        numBTC: "0.00015",
        numCAD: "15.6",
    },
    {
        name: "Tesla",
        subName: "BTC",
        image: "assets/inu.png",
        numBTC: "0.00015",
        numCAD: "15.6",
    },
    {
        name: "Binance",
        subName: "BNB",
        image: "assets/binance.png",
        numBTC: "0.00015",
        numCAD: "15.6",
    },
    {
        name: "XRP",
        subName: "XRP",
        image: "assets/xrx.png",
        numBTC: "0.00015",
        numCAD: "15.6",
    },
    {
        name: "Solana",
        subName: "SOL",
        image: "assets/sol.png",
        numBTC: "0.00015",
        numCAD: "15.6",
    },
    {
        name: "Dogecoin",
        subName: "DOGE",
        image: "assets/doge.png",
        numBTC: "0.00015",
        numCAD: "15.6",
    },
    {
        name: "Tesla",
        subName: "BTC",
        image: "assets/teth.png",
        numBTC: "0.00015",
        numCAD: "15.6",
    },
    {
        name: "Tron",
        subName: "TRXS",
        image: "assets/bnb.png",
        numBTC: "0.00015",
        numCAD: "15.6",
    },
   
    {
        name: "Tesla",
        subName: "BTC",
        image: "assets/polig.png",
        numBTC: "0.00015",
        numCAD: "15.6",
    },
    {
        name: "Tesla",
        subName: "BTC",
        image: "assets/teth.png",
        numBTC: "0.00015",
        numCAD: "15.6",
    },
];

function renderChart() {
    let chartAssetsContainer = $(".funding__assets__items");
    let chartImageContainer = $(".funding__chart");

    let chartImageSrc = fundingContent.chartImage;

    let chartImage = `<img src="${chartImageSrc}" alt="chartImage"/>`;

    let chartIconsContainer = $(".funding__assets__icons");

    let assetsSection = $(".funding__assets");

    chartImageContainer.append(chartImage);

    let chartAssetsHeader = `<div class="funding__assets__row funding__assets__row--header">
                                  <div class="assets__items">
                                                                     
                                      <div class="assets__item">
                                          Name
                                      </div>
  
                                      <div class="assets__item">
                                          Price
                                      </div>
  
                                      <div class="assets__item">
                                          Amount
                                      </div>
  
                                      <div class="assets__item">
                                          Balance
                                      </div>
  
                                      <div class="assets__item">
                                          Allocation
                                      </div>                                  
                                  </div>
                             </div>`;

    assetsSection.prepend(chartAssetsHeader);

    // chartAssetsContainer.append(chartAssetsHeader);

    for (let i = 0; i < fundingContent.items.length; i++) {
        chartAssetsContainer.append(`<div class="funding__assets__row">
                              
                                        <div class="assets__items">
  
                                              <div class="assets__item assets__item--clickable" data-toggle="modal" data-target="#myModal" type="button">
                                                      
                                                   <div class="assets__items__title">
                                                    ${fundingContent.items[i].itemName}
                                                  </div>
  
                                                  <div class="assets__item__subname">
                                                    ${fundingContent.items[i].itemSubName} 
                                                      
                                                  </div>                                                    
                                   
                                              </div>
                                     
                                                <div class="assets__item">
                                                   ${fundingContent.items[i].itemPrice}
                                                    <div class="assets__item__usd">
                                                        USD
                                                    </div>                                                      
                                                </div>
    
                                                <div class="assets__item">
                                                   ${fundingContent.items[i].itemAmount}
                                                </div>
    
                                                <div class="assets__item">
                                                    ${fundingContent.items[i].itemBalance}
                                                    <div class="assets__item__usd">
                                                        USD
                                                    </div>                                                   
                                                </div>
    
                                                <div class="assets__item">
                                                    ${fundingContent.items[i].itemAllocation}
    
                                                    <div class="assets__item__percentage">
                                                        %
                                                    </div>                                                   
                                                </div>                                              
                                        </div>                 
                                    `);

        chartIconsContainer.append(`<div class="funding__assets__icon">
                                        <img src="${fundingContent.items[i].itemImage}" alt="${fundingContent.items[i].name}"/>
                                    </div>
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

                                                    <div class="text-white px-2 select__to"> To </div>

                                                    <select class="form-select order__input" aria-label="Default select example">
                                                        <option class="option__option" selected> ${withdrawContent.option} </option>
                                                        <option value="1">${withdrawContent.option}</option>
                                                        <option value="2">${withdrawContent.option}</option>
                                                        <option value="3">${withdrawContent.option}</option>
                                                    </select>
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

function renderModal() {
    let assets = $(".assets__search__items");

    for (let i = 0; i < modalContent.length; i++) {
        assets.append(`<div class="assets__search__item"> 
                        <div class="row assets__search__row">
                            <div class="col-6 assets__item--left">

                                <div class="assets__image"> 
                                    <img src="${modalContent[i].image} " alt="assetImage"/>
                                </div>

                                <div class="assets__name">
                                    <div class="assets__name__main">${modalContent[i].name}</div>
                                    <div class="assets__name__secondary">${modalContent[i].subName}</div>
                                </div>
                            </div> 

                            <div class="col-6 assets__item--right">

                                <div class="assets__name__main">
                                    ${modalContent[i].numBTC} BTC
                                </div>

                                <div class="assets__name__secondary"> ${modalContent[i].numCAD} CAD </div>
                            </div> 
                        </div>                                                             
                     </div>                 
            `);
    }
}

function clickableItem() {

    $(".assets__item--clickable").click(function () {
        $(".modal-body__main").show();
    });

}

var arrow;
var arrowTop;

$(document).ready(function () {
    renderChart();
    renderDeposit();
    fundingButtons();
    clickableItem();
    renderModal();

    arrow = document.querySelector(".funding__items__assets--mobile");
    arrowTop = document.querySelector(".funding__assets__title--mobile")
    let listItems = $(".funding__assets__items__scrollable");
    let headerItems = $(".funding__assets__row--header");

    // listItems.scrollLeft = 120;

    headerItems.scroll(function ($event) {
        if ($event) {
            let scrollLeft = this.scrollLeft;
            listItems.scrollLeft(scrollLeft);
        }
    });

    listItems.scroll(function ($event) {
        if ($event) {
            let scrollLeft = this.scrollLeft;
            headerItems.scrollLeft(scrollLeft);
        }
    });
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

                arrow.classList.add("activiosa");
                arrowTop.classList.add("top__arrow");

                break;

            case "swiperight":
                scrollableContainer.style.transform = "translateX(0)";

                arrow.classList.remove("activiosa");
                arrowTop.classList.remove("top__arrow");

                break;
        }
    });

}