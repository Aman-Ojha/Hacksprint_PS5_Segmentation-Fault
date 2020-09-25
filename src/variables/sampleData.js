import{
    AxisBankChart,
    AxisBankChart2,
    AxisCurrPrice
  } from '../variables/AxisTrainedCharts.js'
  import{
    ICICIBankChart,
    ICICIBankChart2,
    ICICICurrPrice
  } from '../variables/ICICITrainedChart.js'
  import{
    KotakBankChart,
    KotakBankChart2,
    KotakCurrPrice
  } from '../variables/KotakTrainedChart.js'
  import{
    JindalBankChart,
    JindalBankChart2,
    JindalCurrPrice
  } from '../variables/JindalTrainedChart.js'
  import{
    JSWBankChart,
    JSWBankChart2,
    JSWCurrPrice
  } from '../variables/JSWTrainedChart.js'
  import{
    TATASTEELChart,
    TATASTEEKBankChart2,
    TATASTEELCurrPrice
  } from '../variables/TATASTEELTrainedChart.js'
  import{
    JMTSTEELChart,
    JMTSTEELChart2,
    JMTCurrPrice
  } from '../variables/JMTTrainedChart.js'
  import{
    MarutiChart,
    MarutiChart2,
    MarutiCurrPrice
  } from '../variables/MarutiTrainedChart.js'
  import{
    TATAMOTORSChart,
    TATAMOTORSChart2,
    TATAMOTORSCurrPrice
  } from '../variables/TATAMOTORSTrainedChart.js'
  
const sampleData = [
    {
        name : "Axis Bank",
        symbol:'AXISBANK',
        chart1: AxisBankChart,
        chart2: AxisBankChart2,
        currPrice: AxisCurrPrice
    },
    {
        name : "ICICI Bank",
        symbol:'ICICIBANK',
        chart1: ICICIBankChart,
        chart2: ICICIBankChart2,
        currPrice: ICICICurrPrice
    },
    {
        name : "Kotak Mahindra Bank",
        symbol:'KOTAKBANK',
        chart1: KotakBankChart,
        chart2: KotakBankChart2,
        currPrice: KotakCurrPrice
    },
    {
        name : "Jindal Steel and Power",
        symbol:'JINDALSTEL',
        chart1: JindalBankChart,
        chart2: JindalBankChart2,
        currPrice: JindalCurrPrice
    },
    {
        name : "JSW Steel",
        symbol:' JSWSTEEL',
        chart1: JSWBankChart,
        chart2: JSWBankChart2,
        currPrice: JSWCurrPrice
    },
    {
        name : "Tata Steel Ltd.",
        symbol:'TATASTEEL',
        chart1: TATASTEELChart,
        chart2: TATASTEEKBankChart2,
        currPrice: TATASTEELCurrPrice
    },
    {
        name : "Jmt Auto",
        symbol:' JMTAUTOLTD',
        chart1: JMTSTEELChart,
        chart2: JMTSTEELChart2,
        currPrice: JMTCurrPrice
    },
    {
        name : "Maruti Suzuki",
        symbol:'MARUTI',
        chart1: MarutiChart,
        chart2: MarutiChart2,
        currPrice: MarutiCurrPrice
    },
    {
        name : "Tata Motors",
        symbol:'TATAMOTORS',
        chart1: TATAMOTORSChart,
        chart2: TATAMOTORSChart2,
        currPrice: TATAMOTORSCurrPrice
    },
    
]

export default sampleData