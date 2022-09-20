"use strict";

let auctionsContent = [{
        name: "Bitcoin",
        shortName: "BTC",
        contentImage: "assets/btc.png",
        chartName: "assets/chart.png",
        MonthCashflowName: "MonthCashflow",
        OwnershipName: "Ownership",
        CommissionName: "Commission",
        FeeName: "Fee",
        chart: "assets/chart.png",
        MonthCashflow: "5 , 000",
        Ownership: "10",
        Commission: "0.10",
        Fee: "2",
        percentage: "%",
        usd: "USD",
    },
    {
        name: "Bitcoin",
        shortName: "BTC",
        contentImage: "assets/btc.png",
        chartName: "assets/chart.png",
        MonthCashflowName: "MonthCashflow",
        OwnershipName: "Ownership",
        CommissionName: "Commission",
        FeeName: "Fee",
        chart: "assets/chart.png",
        MonthCashflow: "5 , 000",
        Ownership: "10",
        Commission: "0.10",
        Fee: "2",
        percentage: "%",
        usd: "USD",
    },
    {
        name: "Bitcoin",
        shortName: "BTC",
        contentImage: "assets/btc.png",
        chartName: "assets/chart.png",
        MonthCashflowName: "MonthCashflow",
        OwnershipName: "Ownership",
        CommissionName: "Commission",
        FeeName: "Fee",
        chart: "assets/chart.png",
        MonthCashflow: "5 , 000",
        Ownership: "10",
        Commission: "0.10",
        Fee: "2",
        percentage: "%",
        usd: "USD",
    },
    {
        name: "Bitcoin",
        shortName: "BTC",
        contentImage: "assets/btc.png",
        chartName: "assets/chart.png",
        MonthCashflowName: "MonthCashflow",
        OwnershipName: "Ownership",
        CommissionName: "Commission",
        FeeName: "Fee",
        chart: "assets/chart.png",
        MonthCashflow: "5 , 000",
        Ownership: "10",
        Commission: "0.10",
        Fee: "2",
        percentage: "%",
        usd: "USD",
    },
];

function generateAuctionsContent() {
    let auctionsContentDiv = $(".auctions__items");

    for (let i = 0; i < auctionsContent.length; i++) {
        auctionsContentDiv.append(`<div class="auctions__item item col-xl-3 col-lg-6 col-12 mb-5 mb-xl-0 pb-5 pb-xl-0">
                                    <a href="auction-details.html">
                                        <div class="auctions__content">                             
                                        
                                            <div class="content__header">
                                                <div class="content__header__title">                                          
                                                    ${auctionsContent[i].name}                                         
                                                </div>

                                                <div class="content__header__icon">
                                                    <img class="" src="${auctionsContent[i].contentImage}" alt=""/>
                                                </div>

                                                <div class="content__header__title"">                                           
                                                    ${auctionsContent[i].shortName}                                          
                                                </div>
                                            </div>
                                        
                                            <div class="content__chart">
                                                <img src="${auctionsContent[i].chart}" alt="chart"/>
                                            </div>

                                            <div class="content__info">
                                                <div class="d-flex mb-4 justify-content-between">
                                                    <div class="content__info__title d-flex justify-content-between">
                                                        ${auctionsContent[i].MonthCashflowName}  
                                                    </div>
                                                    <div class="content__info__title d-flex justify-content-between">
                                                        
                                                    <div class="px-2"> ${auctionsContent[i].MonthCashflow}</div> <div class="currency ml-2">${auctionsContent[i].usd}</div>
                                                    </div>                     
                                                </div>

                                                <div class="d-flex mb-4 justify-content-between"">
                                                    <div class="content__info__title">
                                                        ${auctionsContent[i].OwnershipName}  
                                                    </div>
                                                    <div class="content__info__title d-flex justify-content-between">
                                                    <div class="px-2">${auctionsContent[i].Ownership}</div> <div class="percentage">${auctionsContent[i].percentage}</div>
                                                    </div>                     
                                                </div>

                                                <div class="d-flex mb-4 justify-content-between"">
                                                    <div class="content__info__title">
                                                        ${auctionsContent[i].CommissionName}  
                                                    </div>
                                                    <div class="content__info__title d-flex justify-content-between">
                                                        <div class="px-2">${auctionsContent[i].Commission}</div> <div class="percentage">${auctionsContent[i].percentage}</div>
                                                    </div>                     
                                                </div>
                                                
                                                <div class="d-flex justify-content-between"">
                                                    <div class="content__info__title">
                                                        ${auctionsContent[i].FeeName}  
                                                    </div>
                                                    <div class="content__info__title d-flex justify-content-between ">
                                                        <div class="px-2">${auctionsContent[i].Fee}</div> <div class="percentage">${auctionsContent[i].percentage}</div>
                                                    </div>                     
                                                </div>                                       
                                            </div>                                                         
                                        </div>
                                    </a>
                                </div>
                                `);
    }
}

function generateAuctionsContentMobile() {
    let auctionsContentDiv = $(".auctions__items__mobile");

    for (let i = 0; i < auctionsContent.length; i++) {
        auctionsContentDiv.append(`<div class="auctions__item item col-12">
                                    <a href="auction-details.html">
                                        <div class="auctions__content">                             
                                        
                                            <div class="content__header">
                                                <div class="content__header__title">                                          
                                                    ${auctionsContent[i].name}                                         
                                                </div>

                                                <div class="content__header__icon">
                                                    <img class="" src="${auctionsContent[i].contentImage}" alt=""/>
                                                </div>

                                                <div class="content__header__title"">                                           
                                                    ${auctionsContent[i].shortName}                                          
                                                </div>
                                            </div>
                                        
                                            <div class="content__chart">
                                                <img src="${auctionsContent[i].chart}" alt="chart"/>
                                            </div>

                                            <div class="content__info">
                                                <div class="d-flex mb-4 justify-content-between">
                                                    <div class="content__info__title d-flex justify-content-between">
                                                        ${auctionsContent[i].MonthCashflowName}  
                                                    </div>
                                                    <div class="content__info__title d-flex justify-content-between">
                                                        
                                                    <div class="px-2"> ${auctionsContent[i].MonthCashflow}</div> <div class="currency ml-2">${auctionsContent[i].usd}</div>
                                                    </div>                     
                                                </div>

                                                <div class="d-flex mb-4 justify-content-between"">
                                                    <div class="content__info__title">
                                                        ${auctionsContent[i].OwnershipName}  
                                                    </div>
                                                    <div class="content__info__title d-flex justify-content-between">
                                                    <div class="px-2">${auctionsContent[i].Ownership}</div> <div class="percentage">${auctionsContent[i].percentage}</div>
                                                    </div>                     
                                                </div>

                                                <div class="d-flex mb-4 justify-content-between"">
                                                    <div class="content__info__title">
                                                        ${auctionsContent[i].CommissionName}  
                                                    </div>
                                                    <div class="content__info__title d-flex justify-content-between">
                                                        <div class="px-2">${auctionsContent[i].Commission}</div> <div class="percentage">${auctionsContent[i].percentage}</div>
                                                    </div>                     
                                                </div>
                                                
                                                <div class="d-flex justify-content-between"">
                                                    <div class="content__info__title">
                                                        ${auctionsContent[i].FeeName}  
                                                    </div>
                                                    <div class="content__info__title d-flex justify-content-between ">
                                                        <div class="px-2">${auctionsContent[i].Fee}</div> <div class="percentage">${auctionsContent[i].percentage}</div>
                                                    </div>                     
                                                </div>                                       
                                            </div>                                                         
                                        </div>
                                    </a>
                                </div>
                                `);
    }
}

function auctionScroll() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        stagePadding: 40,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
}

$(document).ready(function () {

    generateAuctionsContent();

    generateAuctionsContentMobile();

    auctionScroll();

});