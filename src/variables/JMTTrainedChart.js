var JMTJson = require('./JMTAUTOLTD_data_old_1_year.json');


var JMTDates = JMTJson.map(function(object){
    return object["Date"]
    
})

var JMTAverage = JMTJson.map(function(object){
    return Math.round(object["Average"]*100)/100
    
})

const JMTSTEELChart = {
    data: canvas => {
        let ctx = canvas.getContext("2d");

        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

        gradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
        gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); 
        gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); 

        return{
            labels:JMTDates,
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
                  data: JMTAverage
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
                suggestedMax: 0.8,
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


const JMTCurrPrice  = Math.round(JMTJson[JMTJson.length-1]["Average"]*100)/100;




module.exports = {
    JMTSTEELChart,
    JMTCurrPrice
};






