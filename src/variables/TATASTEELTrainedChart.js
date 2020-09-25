var TATASTEELJson = require('./TATASTEEL_data_old_1_year.json');
var TATASTEELPredJson = require('./pred/tatasteel_pred.json');



var TATASTEELDates = TATASTEELJson.map(function(object){
    return object["Date"]
    
})

var TATASTEELAverage = TATASTEELJson.map(function(object){
    return Math.round(object["Average"]*100)/100
    
})

const TATASTEEKBankChart2 = {
  data: canvas => {
      let ctx = canvas.getContext("2d");

      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

      gradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
      gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); 
      gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); 

      return{
          labels: ["20 Apr","21 Apr","22 Apr","23 Apr","24 Apr","25 Apr","26 Apr","27 Apr","28 Apr","29 Apr","30 Apr","1 May","2 May","3 May","4 May","5 May","6 May","7 May","8 May","9 May",],
          datasets: [
              {
                label: "Axis Bank Average Unit",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: "#00d6b4",
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: "#00d6b4",
                pointBorderColor: "rgba(255,255,255,0)",
                pointHoverBackgroundColor: "#00d6b4",
                pointBorderWidth: 1,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 0,
                data: TATASTEELPredJson["values"]
              }
            ]
      };
  },
  options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      elements: {
        point:{
            radius: 0
        }
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              display:false,
              // drawBorder: false,
              // color: "rgba(29,140,248,0.0)",
              // zeroLineColor: "transparent"
            },
            ticks: {
              suggestedMin: 580,
              suggestedMax: 450,
              padding: 20,
              fontColor: "#9e9e9e"
            }
          }
        ],
  
        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              display: false,
              // drawBorder: false,
              // color: "rgba(0,242,195,0.1)",
              // zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e"
            }
          }
        ]
      }
    }
}

const TATASTEELChart = {
    data: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
      gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
      gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
  
      return {
        labels: TATASTEELDates,
        datasets: [
          {
            label: "Data",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 0,
            data: TATASTEELAverage
          }
        ]
      };
    },
    options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          backgroundColor: "#f5f5f5",
          titleFontColor: "#333",
          bodyFontColor: "#666",
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        responsive: true,
        scales: {
          yAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(29,140,248,0.0)",
                zeroLineColor: "transparent"
              },
              ticks: {
                suggestedMin: 0,
                suggestedMax: 25,
                padding: 20,
                fontColor: "#9a9a9a"
              }
            }
          ],
          xAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(29,140,248,0.1)",
                zeroLineColor: "transparent"
              },
              ticks: {
                padding: 20,
                fontColor: "#9a9a9a"
              }
            }
          ]
        }
      }
}



const  TATASTEELCurrPrice  = Math.round(TATASTEELJson[TATASTEELJson.length-1]["Average"]*100)/100;


module.exports = {
    TATASTEELChart,
    TATASTEEKBankChart2,
    TATASTEELCurrPrice
};




