"use strict";

let fundingContent = {
  chartImage: "assets/portfolio-chart.png",
  items: [
    {
      image: "assets/btc-fund.png",
      name: "Bitcoin",
      subName: "BCT",
      price: "7 024",
      pamount: "12",
      balance: "433.12B",
      allocation: "100",
      pl: "100",
    },
    {
      image: "assets/doge.png",
      name: "Bitcoin",
      subName: "BCT",
      price: "7 024",
      pamount: "12",
      balance: "433.12B",
      allocation: "100",
      pl: "100",
    },
    {
      image: "assets/dot.png",
      name: "Bitcoin",
      subName: "BCT",
      price: "7 024",
      pamount: "12",
      balance: "433.12B",
      allocation: "100",
      pl: "100",
    },
    {
      image: "assets/eth.png",
      name: "Bitcoin",
      subName: "BCT",
      price: "7 024",
      pamount: "12",
      balance: "433.12B",
      allocation: "100",
      pl: "100",
    },
    {
      image: "assets/inu.png",
      name: "Bitcoin",
      subName: "BCT",
      price: "7 024",
      pamount: "12",
      balance: "433.12B",
      allocation: "100",
      pl: "100",
    },
    {
      image: "assets/tesla.png",
      name: "Bitcoin",
      subName: "BCT",
      price: "7 024",
      pamount: "12",
      balance: "433.12B",
      allocation: "100",
      pl: "100",
    },
    {
      image: "assets/teth.png",
      name: "Bitcoin",
      subName: "BCT",
      price: "7 024",
      pamount: "12",
      balance: "433.12B",
      allocation: "100",
      pl: "100",
    },
    {
      image: "assets/btc-fund.png",
      name: "Bitcoin",
      subName: "BCT",
      price: "7 024",
      pamount: "12",
      balance: "433.12B",
      allocation: "100",
      pl: "100",
    },
    {
      image: "assets/btc-fund.png",
      name: "Bitcoin",
      subName: "BCT",
      price: "7 024",
      pamount: "12",
      balance: "433.12B",
      allocation: "100",
      pl: "100",
    },
    {
      image: "assets/btc-fund.png",
      name: "Bitcoin",
      subName: "BCT",
      price: "7 024",
      pamount: "12",
      balance: "433.12B",
      allocation: "100",
      pl: "100",
    },
  ],
};

let cashflow = [
  {
    image: "assets/cashflow-chart.png",
    value: "$ 10 , 000",
  },
];

let contractContent = [
  {
    chart: "assets/contract-chart.png",
    image: "assets/cotract-image.png",
    name: "Etherium",
    subName: "ETH",
    days: "26 days",
    transaction: "0.04",
    volume: "10,000",
    revenue: "$ 150.59",
  },
  {
    chart: "assets/contract-chart.png",
    image: "assets/cotract-image.png",
    name: "Etherium",
    subName: "ETH",
    days: "26 days",
    transaction: "0.04",
    volume: "10,000",
    revenue: "$ 150.59",
  },
  {
    chart: "assets/contract-chart.png",
    image: "assets/cotract-image.png",
    name: "Etherium",
    subName: "ETH",
    days: "26 days",
    transaction: "0.04",
    volume: "10,000",
    revenue: "$ 150.59",
  },
  {
    chart: "assets/contract-chart.png",
    image: "assets/cotract-image.png",
    name: "Etherium",
    subName: "ETH",
    days: "26 days",
    transaction: "0.04",
    volume: "10,000",
    revenue: "$ 150.59",
  },
  {
    chart: "assets/contract-chart.png",
    image: "assets/cotract-image.png",
    name: "Etherium",
    subName: "ETH",
    days: "26 days",
    transaction: "0.04",
    volume: "10,000",
    revenue: "$ 150.59",
  },
  {
    chart: "assets/contract-chart.png",
    image: "assets/cotract-image.png",
    name: "Etherium",
    subName: "ETH",
    days: "26 days",
    transaction: "0.04",
    volume: "10,000",
    revenue: "$ 150.59",
  },
  {
    chart: "assets/contract-chart.png",
    image: "assets/cotract-image.png",
    name: "Etherium",
    subName: "ETH",
    days: "26 days",
    transaction: "0.04",
    volume: "10,000",
    revenue: "$ 150.59",
  },
  {
    chart: "assets/contract-chart.png",
    image: "assets/cotract-image.png",
    name: "Etherium",
    subName: "ETH",
    days: "26 days",
    transaction: "0.04",
    volume: "10,000",
    revenue: "$ 150.59",
  },
];

function renderChart() {
  let chartAssetsContainer = $(".portfolio__assets__items");
  let chartImageContainer = $(".portfolio__chart");

  let chartImageSrc = fundingContent.chartImage;

  let chartImage = `<img src="${chartImageSrc}" alt="chartImage"/>`;

  let chartIconsContainer = $(".portfolio__assets__icons");

  let superTesl = $(".portfolio__assets");

  chartImageContainer.append(chartImage);

  let chartAssetsHeader = `<div class="portfolio__assets__row portfolio__assets__row--header">
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

                                    <div class="assets__item">
                                      P/L
                                  </div>

                                </div>
                           </div>`;

  superTesl.prepend(chartAssetsHeader);

  // chartAssetsContainer.append(chartAssetsHeader);

  for (let i = 0; i < fundingContent.items.length; i++) {
    chartAssetsContainer.append(`<div class="portfolio__assets__row">
                            
                                      <div class="assets__items">

                                            <div class="assets__item">
                                                    
                                                 <div class="assets__items__title">
                                                    ${fundingContent.items[i].name}
                                                </div>

                                                <div class="assets__item__subname">
                                                    ${fundingContent.items[i].subName} 
                                                </div>                                                    
                                 
                                            </div>
                                   
                                              <div class="assets__item">
                                                  ${fundingContent.items[i].price}
                                                  <div class="assets__item__usd">
                                                      USD
                                                  </div>                                                      
                                              </div>
  
                                              <div class="assets__item">
                                                  ${fundingContent.items[i].pamount}
                                              </div>
  
                                              <div class="assets__item">
                                                  ${fundingContent.items[i].balance}
                                                  <div class="assets__item__usd">
                                                      USD
                                                  </div>                                                   
                                              </div>
  
                                              <div class="assets__item">
                                                  ${fundingContent.items[i].allocation}
  
                                                  <div class="assets__item__percentage">
                                                      %
                                                  </div>                                                   
                                              </div>

                                              <div class="assets__item">
                                                ${fundingContent.items[i].pl}

                                                <div class="assets__item__percentage">
                                                    %
                                                </div>                                                   
                                            </div>
                                      </div>                 
                                  `);

    chartIconsContainer.append(`<div class="portfolio__assets__icon">
                                  <img src="${fundingContent.items[i].image}" alt="${fundingContent.items[i].name}"/>
                              `);
  }
}

function renderCashflow() {
  let CashflowContent = $(".cashflow");

  for (let i = 0; i < cashflow.length; i++) {
    CashflowContent.append(`<div class="row cashflow__content">

                              <div class="d-flex justify-content-between">
                                <div class="cashflow__title">
                                   Cashflow
                                </div>

                                <div class="row weeks align-items-center">
                                  <div class="col-3 week week--purple">2W</div>
                                  <div class="col-3 week">4W</div>
                                  <div class="col-3 week">6W</div>
                                  <div class="col-3 week">7W</div>
                                </div>
                              </div>

                              <div class="cashflow__value">
                                ${cashflow[i].value}
                              </div>

                              <div class="cashflow__chart">
                                <img src="${cashflow[i].image}" alt=""/>                   
                              </div>   
                                   
                            </div>`);
  }
}

function renderContract() {
  let CashflowContent = $(".contracts__container");

  for (let i = 0; i < contractContent.length; i++) {
    CashflowContent.append(`<div class="contracts__item">
                              <div class="row">
    
                                <div class="col-6">

                                  <div class="d-flex pt-2">

                                    <div class="contracts__item__image d-flex justify-content-center align-items-center p-2">
                                      <img src="${contractContent[i].image}" alt=""/>                                 
                                    </div>

                                    <div class="d-flex flex-column">

                                      <div class="contracts__item__name">
                                        ${contractContent[i].name}                                 
                                      </div>

                                      <div class="d-flex contracts__item__component">

                                        <div class="pe-3">
                                          ${contractContent[i].subName}                      
                                        </div>

                                        <div>
                                          ${contractContent[i].days}                                       
                                        </div>

                                      </div> 
                                      
                                    </div>  
                                  </div>

                                  <div class="p-2 py-1">

                                    <div class="d-flex justify-content-between align-items-center">

                                      <div class="contracts__numbers pb-1">
                                        ${contractContent[i].transaction}
                                      </div>

                                      <div class="contracts__text">
                                        % / Transaction                              
                                      </div>

                                    </div>
                                                    
                                    <div class="d-flex justify-content-between align-items-center">

                                      <div class="contracts__numbers">
                                        ${contractContent[i].volume}                      
                                      </div>

                                      <div class="contracts__text">
                                        Monthly Volume                                             
                                      </div>
                                      
                                    </div>

                                  </div>
                                  
                                </div>

                                <div class="border-line"></div>
                                                          
                                <div class="contract__chart col-6">

                                  <div class="p-2">

                                    <img src="${contractContent[i].chart}" alt=""/> 
                                  
                                  </div>

                                  <div class="d-flex align-items-center justify-content-between p-2 px-3">

                                    <div class="contract__revenue__title">
                                      Total Revenue
                                    </div>
                                    
                                    <div class="contract__revenue__value">
                                      ${contractContent[i].revenue}                      
                                    </div>

                                  </div>    

                                </div>   

                              </div>  

                            </div>`);
  }
}

function portfolioButtons() {
  if (isMobile) {
    $(".portfolio__section--left").show();
    $(".portfolio--right").hide();

    $(".portfolio__button--crypto").addClass("selected");

    $(".portfolio__button--crypto").click(function () {
      // Then show div on click.
      $(".portfolio--right").hide();
      $(".portfolio__section--left").show();

      //then remove selected class.
      $(".portfolio__button--contract").removeClass("selected");
      $(this).addClass("selected");
    });

    $(".portfolio__button--contract").click(function () {
      // Then show div on click.
      $(".portfolio--right").show();
      $(".portfolio__section--left").hide();

      //then remove and add selected class.
      $(".portfolio__button--crypto").removeClass("selected");
      $(this).addClass("selected");
    });
  }
}

$(document).ready(function () {
  renderChart();
  renderCashflow();
  renderContract();
  portfolioButtons();

  let scrollableContainer = $(".contracts__container");
  let chartContaienr = $(".cashflow");

  if (isMobile) {
    scrollableContainer.scroll(function () {
      let scrollTop = this.scrollTop;

      if (scrollTop > 120) {
        chartContaienr.slideUp();
      }

      if (scrollTop === 0) {
        chartContaienr.slideDown();
      }
    });
  }

  let listItems = $(".portfolio__assets__items__scrollable");
  let headerItems = $(".portfolio__assets__row--header");

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
