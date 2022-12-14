"use strict";

let auctionsDetails = [
  {
    name: "Bitcoin",
    shortName: "BTC",
    contentImage: "assets/btc.png",
    commencmentName: "Commencment",
    commencmentDate: "Jan 12 , 2023",
    expieryName: "Expiery",
    expieryDate: "Feb 12 , 2023",
    chartName: "assets/chart.png",
    highestBidName: "Highest Bid",
    highestBid: "$ 1 , 300",
    OwnershipName: "Ownership",
    Ownership: "10",
    CommissionName: "Commission",
    Commission: "0.10",
    MonthCashflowName: "MonthCashflow",
    FeeName: "Fee",
    Fee: "2",
    chart: "assets/chart.png",
    MonthCashflow: "5 , 000",
    percentage: "%",
    usd: "USD",
  },
];

let marketCup = [
  {
    marketCupName: "Market Cap",
    infoIcon: "assets/info.svg",
    marketCupNum: "$ 405,659,707.515",
    greenStatIcon: "",
    statValue: "0.22%",
  },
];

let volume = [
  {
    volumeName: "Volume",
    infoIcon: "assets/info.svg",
    hours: "24h",
    marketCupNum: "$ 26,322,785.441",
    redStatIcon: "",
    statValue: "33.56%",
    volumeAverage: "0.6493",
  },
];

let supply = [
  {
    supplyName: "Circulating Supply",
    infoIcon: "assets/info.svg",
    approvedIcon: "assets/approved.svg",
    shortName: "BTC",
    statValue: "91%",
    supplyNum: "19,322,785.441",
    maxSupplyName: "Max Supply",
    maxSupplyNum: "21,000,000",
    totalSupplyName: "Total Supply",
    totalSupplyNum: "19,127,368",
  },
];

function generateAuctionInternalPage() {
  let auctionInternalDiv = $(".auctions-details__content");

  for (let i = 0; i < auctionsDetails.length; i++) {
    auctionInternalDiv.append(`<div class="row">                                
                                    <div class="scrolling-block col-12 col-lg-5 col-xl-4">

                                        <div class="auctions-details__left">

                                            <div class="auctions-details__image">
                                                <img src="${auctionsDetails[i].contentImage}" alt=""/>
                                            </div>

                                            <div class="auctions-details__name">

                                                <div lass="auctions-details__name-long">                                          
                                                    ${auctionsDetails[i].name}                                         
                                                </div>                                       
                                                <div lass="auctions-details__name-short">                                          
                                                    ${auctionsDetails[i].shortName}                                          
                                                </div> 

                                            </div>

                                            <div class="bid-button-wrapper">
                                                                                          
                                                <input class="bid-button d-flex align-items-center justify-content-center "btn btn-info btn-lg" type="button" value="Bid" data-toggle="modal" data-target="#myModal">
                                                                                                                             
                                                <!-- Modal -->
                                                <div class="modal fade" id="myModal" role="dialog">
                                                    <div class="modal-dialog">
                                                    
                                                        <!-- Modal content-->
                                                
                                                        <div class="modal-content">

                                                            <div class="modal-body__main">

                                                                <div class="modal-header">

                                                                    <h4 class="modal-title">Bid</h4>

                                                                </div>

                                                                <div class="modal-body">
                                                                    <div class="modal__input">
                                                                        <input type="text" value="10.000" >
                                                                        <div class="modal__input__usd">USD</div>
                                                                    </div>

                                                                    <div class="modal-body__content">
                                                                        <div>Fee</div>

                                                                        <div>
                                                                           $ ${auctionsDetails[i].Fee}                                                                  
                                                                        </div>                                                      
                                                                    </div>
   
                                                                    <div class="modal-body__content">
                                                                        <div>owvnership</div>

                                                                        <div>
                                                                            ${auctionsDetails[i].Ownership} %                                                                  
                                                                        </div>                                                      
                                                                    </div>

                                                                    <div class="modal-body__content">
                                                                        <div>Comision/Trade</div>

                                                                        <div>
                                                                            ${auctionsDetails[i].Commission} %                                    
                                                                        </div>                                                      
                                                                    </div>

                                                                    <div class="bid-button-wrapper modal-body__submit">
                                                                        <input class="bid-button" type="submit" value="Submit" >                                                            
                                                                    </div>

                                                                </div>

                                                                <div class="modal-footer">
                                                                    <div>Highest bid:</div>

                                                                    <div>
                                                                         ${auctionsDetails[i].highestBid}                                                                                                                                                                                                                                     
                                                                    </div>
                                                                </div>
                                                         
                                                            </div>

                                                            <div class="modal-body__success">
                                              
                                                                <div class="check-container">

                                                                    <div class="check-background">
                                                                        <img src="./assets/success.svg" alt="logo" />                                                                                                     
                                                                    </div>

                                                                    <div class="check-container__title">
                                                                        Your bid was submitted
                                                                    </div>

                                                                    <div class="check-container__paragraph">
                                                                        To change your bid, you can submit a new bid and the old one would be automatically cancelled.
                                                                    </div>
                                                
                                                                </div>
                                                              
                                                            </div>

                                                        </div>
                                                        
                                                    </div>
                                                                    
                                                </div>
                                                                                                              
                                            </div>
                                    
                                            <div class="auctions-details__footer">
                                                <div class="auctions-details__footer__left">

                                                    <div class="auctions-details__title">
                                                        ${auctionsDetails[i].commencmentName}                                                    
                                                    </div>
                                                    <div class="auctions-details__value">
                                                        ${auctionsDetails[i].commencmentDate}                                                                                                         
                                                    </div>
                                                </div>

                                                <div class="auctions-details__footer__right">
                                                    <div class="auctions-details__title">
                                                        ${auctionsDetails[i].expieryName}                                                                                                                                                              
                                                    </div>
                                                    <div class="auctions-details__value">
                                                        ${auctionsDetails[i].expieryDate}                                                                                                                                                              
                                                    </div>
                                                </div>

                                            </div>
                                    
                                        </div>

                                    </div>
                         
                                    <div class="scrolling-block col-12 col-lg-7 col-xl-8">
                                        <div class="auctions-details__right mt-0 mt-sm-5 mt-lg-0">

                                            <div class="auctions-details__chart">
                                                <img src="${auctionsDetails[i].chart}" alt="chart" />
                                            </div>

                                            <div class="auctions-details__list">

                                                <div class="auctions-details__list__item">

                                                    <div class="auctions-details__list__title">
                                                        ${auctionsDetails[i].highestBidName}                                                                                                                                                                
                                                    </div>

                                                    <div class="auctions-details__list__value">
                                                        ${auctionsDetails[i].highestBid}                                                                                                                                                                 
                                                    </div>

                                                </div>

                                                <div class="auctions-details__list__item">

                                                    <div class="auctions-details__list__title">
                                                        ${auctionsDetails[i].OwnershipName}                                                                                                                                                                                                                       
                                                    </div>

                                                    <div class="auctions-details__list__value">
                                                        ${auctionsDetails[i].Ownership}
                                                        ${auctionsDetails[i].percentage}                                                                                                                                                                                                                                                                                                                                
                                                    </div>

                                                </div>

                                                <div class="auctions-details__list__item">

                                                    <div class="auctions-details__list__title">
                                                        ${auctionsDetails[i].CommissionName}                                                                                                                                                                                                                                                                              
                                                    </div>

                                                    <div class="auctions-details__list__value">
                                                        ${auctionsDetails[i].Commission}
                                                        ${auctionsDetails[i].percentage}                                                                                                                                                                                                                                                                                                                                
                                                    </div>

                                                </div>

                                                <div class="auctions-details__list__item">

                                                    <div class="auctions-details__list__title">
                                                        ${auctionsDetails[i].FeeName}                                                                                                                                                                                                                                                                                                                                 
                                                    </div>

                                                    <div class="auctions-details__list__value">
                                                        ${auctionsDetails[i].Fee}
                                                        ${auctionsDetails[i].percentage}                                                                                                                                                                                                                                                                                                                                
                                                    </div>

                                                </div>

                                            </div>

                                            <div class="auctions-details__info d-none d-md-flex">
                                            
                                                <div class="row w-100">

                                                    <div class="col-xl-4 col-6 auctions-details__info__market">

                                                        <div class="d-flex mb-2">
                                                            <div class="auctions-details__info__title">
                                                                ${marketCup[i].marketCupName} 
                                                            </div>
                                                            <img class="px-2" src="${marketCup[i].infoIcon} " alt=""/>
                                                        </div>

                                                        <div class="auctions-details__info__value mb-2">
                                                            ${marketCup[i].marketCupNum} 
                                                        </div>

                                                        <div class="auctions-details__info__pos-value">
                                                            <span class="triangle pe-2"> &#9650 </span>
                                                            ${marketCup[i].statValue} 
                                                        </div>
                                                                
                                                    </div>

                                                    <div class="col-xl-4 col-6 auctions-details__info__volume">
                                                        <div class="d-flex mb-2">
                                                            <div class="auctions-details__info__title">
                                                                ${volume[i].volumeName} 
                                                            </div>

                                                            <div class="auctions-details__info__hours mx-2 px-1">
                                                                ${volume[i].hours} 
                                                            </div>

                                                            <img class="px-2" src="${volume[i].infoIcon} " alt=""/>
                                                        </div>

                                                        <div class="auctions-details__info__value mb-2">
                                                            ${volume[i].marketCupNum} 
                                                        </div>

                                                        <div class="auctions-details__info__neg-value">
                                                            <span class="triangle pe-2"> &#9660 </span>
                                                            ${volume[i].statValue} 
                                                        </div>

                                                        <div class="d-flex mt-2 mt-md-4">
                                                            <div class="auctions-details__info__title">
                                                                ${marketCup[i].marketCupName} /
                                                            </div>

                                                            <div class="auctions-details__info__title">
                                                                ${volume[i].volumeName} 
                                                            </div>
                                                        </div>

                                                        <div class="auctions-details__info__value">
                                                            ${volume[i].volumeAverage} 
                                                        </div>
                                                    
                                                    </div>

                                                    <div class="col-xl-4 col-8 mt-4 mt-sm-0 auctions-details__info__supply">
                                                        <div class="d-flex mb-2">

                                                            <div class="auctions-details__info__title">
                                                                ${supply[i].supplyName} 
                                                            </div>

                                                            <img class="px-2" src="${supply[i].infoIcon} " alt=""/>
                                                            <img class="approved-icon" src="${supply[i].approvedIcon} " alt=""/>
                                                            
                                                        </div>
                               
                                                        <div class="d-flex">
                                                            <div class="auctions-details__info__value">
                                                                ${supply[i].supplyNum}
                                                            </div>

                                                            <div class="auctions-details__info__value px-2">
                                                                ${supply[i].shortName} 
                                                            </div>

                                                            <div class="auctions-details__info__title">
                                                                ${supply[i].statValue} 
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="auctions-details__info__calc">
                                                            <span class=" auctions-details__info__calc-perent">
                                                                <span class=""></span>
                                                            </span>
                                                        </div>
                                                      
                                                        <div class="d-flex mt-4">
                                                            <div class="auctions-details__info__value">
                                                                ${supply[i].maxSupplyName} 
                                                                <img class="px-2" src="${supply[i].infoIcon} " alt=""/>

                                                            </div>
                                                            <div class="auctions-details__info__title">
                                                                ${supply[i].maxSupplyNum} 
                                                            </div>
                                                        </div>

                                                        <div class="d-flex">
                                                            <div class="auctions-details__info__value">
                                                                ${supply[i].totalSupplyName} 
                                                                <img class="px-2" src="${supply[i].infoIcon} " alt=""/>

                                                            </div>
                                                            <div class="auctions-details__info__title">
                                                                ${supply[i].totalSupplyNum} 
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        
                                            <div class="auctions-details__info d-flex d-md-none">
                                            
                                                <div class="row">

                                                    <div class="col-6 auctions-details__info__market">

                                                        <div class="d-flex mb-2">
                                                            <div class="auctions-details__info__title">
                                                                ${marketCup[i].marketCupName} 
                                                            </div>
                                                            <img class="px-2" src="${marketCup[i].infoIcon} " alt=""/>
                                                        </div>

                                                        <div class="auctions-details__info__value mb-2">
                                                            ${marketCup[i].marketCupNum} 
                                                        </div>

                                                        <div class="auctions-details__info__pos-value">
                                                            <span class="triangle pe-2"> &#9650 </span>
                                                            ${marketCup[i].statValue} 
                                                        </div>
                                                                
                                                    </div>

                                                    <div class="col-6 auctions-details__info__volume">
                                                        <div class="d-flex mb-2">
                                                            <div class="auctions-details__info__title">
                                                                ${volume[i].volumeName} 
                                                            </div>

                                                            <div class="auctions-details__info__hours mx-2 px-1">
                                                                ${volume[i].hours} 
                                                            </div>

                                                            <img class="px-2" src="${volume[i].infoIcon} " alt=""/>
                                                        </div>

                                                        <div class="auctions-details__info__value mb-2">
                                                            ${volume[i].marketCupNum} 
                                                        </div>

                                                        <div class="auctions-details__info__neg-value">
                                                            <span class="triangle pe-2"> &#9660 </span>
                                                            ${volume[i].statValue} 
                                                        </div>                                                    
                                                    </div>

                                                    <div class="col-6 mt-sm-0 auctions-details__info__supply">
                                                        <div class="d-flex mb-2">

                                                            <div class="auctions-details__info__title">
                                                                ${supply[i].supplyName} 
                                                            </div>

                                                            <img class="px-2" src="${supply[i].infoIcon} " alt=""/>
                                                            <img class="approved-icon" src="${supply[i].approvedIcon} " alt=""/>
                                                            
                                                        </div>
                               
                                                        <div class="d-flex">
                                                            <div class="auctions-details__info__value">
                                                                ${supply[i].supplyNum}
                                                            </div>

                                                            <div class="auctions-details__info__value px-2">
                                                                ${supply[i].shortName} 
                                                            </div>

                                                            <div class="auctions-details__info__title">
                                                                ${supply[i].statValue} 
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="auctions-details__info__calc">
                                                            <span class=" auctions-details__info__calc-perent">
                                                                <span class=""></span>
                                                            </span>
                                                        </div>
                                                      
                                                        <div class="d-flex mt-4">
                                                            <div class="auctions-details__info__value">
                                                                ${supply[i].maxSupplyName} 
                                                                <img class="px-2" src="${supply[i].infoIcon} " alt=""/>

                                                            </div>
                                                            <div class="auctions-details__info__title">
                                                                ${supply[i].maxSupplyNum} 
                                                            </div>
                                                        </div>

                                                        <div class="d-flex">
                                                            <div class="auctions-details__info__value">
                                                                ${supply[i].totalSupplyName} 
                                                                <img class="px-2" src="${supply[i].infoIcon} " alt=""/>

                                                            </div>
                                                            <div class="auctions-details__info__title">
                                                                ${supply[i].totalSupplyNum} 
                                                            </div>
                                                        </div>
                                                        
                                                    </div>

                                                    <div class="col-6 auctions-details__info__cap"> 
                                                        <div class="d-flex">
                                                            <div class="auctions-details__info__title">
                                                                ${marketCup[i].marketCupName} /
                                                            </div>

                                                            <div class="auctions-details__info__title">
                                                                ${volume[i].volumeName} 
                                                            </div>
                                                        </div>

                                                        <div class="auctions-details__info__value">
                                                            ${volume[i].volumeAverage} 
                                                        </div>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>   
                                </div>`);
  }
}

function modalPages() {
  $(".modal-body__success").hide();

  $(".modal-body__submit").click(function () {
    // Then show div on click.
    $(".modal-body__main").hide();
    $(".modal-body__success").show();
  });

  let template = null;

  $(".modal").on("show.bs.modal", function (event) {
    template = $(this).html();
  });

  $(".modal").on("hidden.bs.modal", function (e) {
    $(this).html(template);

    $(".modal-body__submit").click(function () {
      // Then show div on click.
      $(".modal-body__main").hide();
      $(".modal-body__success").show();
    });
  });
}

var scrollingBlocks;
var swipeIcon;
var auctionDetailsFooter;

$(document).ready(function () {
  generateAuctionInternalPage();
  modalPages();

  scrollingBlocks = document.querySelectorAll(".scrolling-block");
  swipeIcon = document.querySelector(".auctions-details__swipe-icon");
  auctionDetailsFooter = document.querySelector(".auctions-details__footer");
});

var scrollableContainer = document.querySelector(".auctions-details__content");

// create a simple instance
// by default, it only adds horizontal recognizers
var hammerSwipe = new Hammer(scrollableContainer);

if (isMobile) {
  hammerSwipe.get("swipe").set({
    direction: Hammer.DIRECTION_ALL,
    threshold: 1,
    velocity: 0.1,
  });

  hammerSwipe.on("swipeup swipedown", (event) => {
    switch (event.type) {
      case "swipeup":
        // scrollingBlocks[0].style.transform = "translateY(0)";
        // scrollingBlocks[1].style.transform = "translateY(0)";
        swipeIcon.classList.add("active");

        scrollingBlocks.forEach((element) => {
          element.classList.add("activiosa");
        });

        auctionDetailsFooter.classList.add("auctions-details__footer--hidden");

        break;

      case "swipedown":
        // scrollingBlocks[0].style.transform = "translateY(0)";
        // scrollingBlocks[1].style.transform = "translateY(100%)";

        swipeIcon.classList.remove("active");

        auctionDetailsFooter.classList.remove(
          "auctions-details__footer--hidden"
        );

        scrollingBlocks.forEach((element) => {
          element.classList.remove("activiosa");
        });

        break;
    }
  });
}
