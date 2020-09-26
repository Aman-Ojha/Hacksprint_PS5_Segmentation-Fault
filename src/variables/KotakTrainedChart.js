var KotakBankJson = require('./KOTAKBANK_data_old_1_year.json');
var KotakPredJson = require('./pred/kotak_pred.json');

var color1Data = KotakPredJson["values"].slice(0,11);
// color1Data.push(NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,)
var color2Data = KotakPredJson["values"].slice(10,20);
color2Data.unshift(NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN);

var KotakBankDates = KotakBankJson.map(function(object){
    return object["Date"]
    
})

var KotakBankAverage = KotakBankJson.map(function(object){
    return Math.round(object["Average"]*100)/100
    
})

const KotakBankChart2 = {
  data: canvas => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    return {
      labels: ["20 Apr","21 Apr","22 Apr","23 Apr","24 Apr","25 Apr","26 Apr","27 Apr","28 Apr","29 Apr","30 Apr","1 May","2 May","3 May","4 May","5 May","6 May","7 May","8 May","9 May",],
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
          data: color1Data
        },
        {
          label: "Predicted Values",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: "#f76d05",
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: "#f76d05",
          pointBorderColor: "rgba(247, 109, 5, 1)",
          pointHoverBackgroundColor: "#1f8ef1",
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 0,
          data: color2Data
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
              suggestedMin: 1370,
              suggestedMax: 1420,
              padding: 20,
              fontColor: "#9a9a9a"
            }
          }
        ],
        xAxes: [
          {
            barPercentage: 1.6,
            gridLines: {
              display: 0,
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

const KotakBankChart = {
    data: canvas => {
        let ctx = canvas.getContext("2d");

        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
        gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); 
        gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); 

        return{
            labels: KotakBankDates,
            datasets: [
                {
                  label: "My First dataset",
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
                  data: KotakBankAverage
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
                drawBorder: false,
                color: "rgba(29,140,248,0.0)",
                zeroLineColor: "transparent"
              },
              ticks: {
                suggestedMin: 600,
                suggestedMax: 1400,
                padding: 20,
                fontColor: "#9e9e9e"
              }
            }
          ],
    
          xAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                display: 0,
                drawBorder: false,
                color: "rgba(0,242,195,0.1)",
                zeroLineColor: "transparent"
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


const KotakCurrPrice  = Math.round(KotakBankJson[KotakBankJson.length-1]["Average"]*100)/100;


module.exports = {
    KotakBankChart,
    KotakBankChart2,
    KotakCurrPrice
};






