import axios from "axios";
import React, { useEffect } from "react";
import Chart from "react-apexcharts";

export const options = {
    series: [{
    name: 'highest',
    data: [{
        x: 1996,
        y: 3220
      },
      {
        x: 1997,
        y: 5240
      },
      {
        x: 1998,
        y: 3290
      },
      {
        x: 1999,
        y: 4420
      },
      {
        x: 2000,
        y: 6480
      },
      {
        x: 2001,
        y: 8340
      },
      {
        x: 2002,
        y: 5250
      },
      {
        x: 2003,
        y: 3160
      },
      {
        x: 2004,
        y: 4180
      },
      {
        x: 2005,
        y: 6300
      },
      {
        x: 2006,
        y: 3550
      },
      {
        x: 2007,
        y: 7660
      },
      {
        x: 2008,
        y: 9370
      },
      {
        x: 2009,
        y: 4520
      },
      {
        x: 2010,
        y: 6770
      },
      {
        x: 2011,
        y: 8830
      },
      {
        x: 2012,
        y: 5440
      },
      {
        x: 2013,
        y: 3260
      },
      {
        x: 2014,
        y: 2890
      },
      {
        x: 2015,
        y: 3340
      }
    ]
  }, {
    name: 'least',
    data: [
      {
        x: 1996,
        y: 1620
      },
      {
        x: 1997,
        y: 900
      },
      {
        x: 1998,
        y: 2330
      },
      {
        x: 1999,
        y: 3770
      },
      {
        x: 2000,
        y: 2350
      },
      {
        x: 2001,
        y: 5245
      },
      {
        x: 2002,
        y: 3980
      },
      {
        x: 2003,
        y: 2200
      },
      {
        x: 2004,
        y: 2560
      },
      {
        x: 2005,
        y: 3230
      },
      {
        x: 2006,
        y: 880
      },
      {
        x: 2007,
        y: 2060
      },
      {
        x: 2008,
        y: 5580
      },
      {
        x: 2009,
        y: 2290
      },
      {
        x: 2010,
        y: 4450
      },
      {
        x: 2011,
        y: 3180
      },
      {
        x: 2012,
        y: 5232
      },
      {
        x: 2013,
        y: 1660
      },
      {
        x: 2014,
        y: 790
      },
      {
        x: 2015,
        y: 840
      }
    ]
  }],
    chart: {
    type: 'area',
    height: 350
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  
  title: {
    // text: 'Area with Negative Values',
    align: 'left',
    style: {
      fontSize: '14px'
    }
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    tickAmount: 4,
    floating: false,
  
    labels: {
      style: {
        colors: '#8e8da4',
      },
      offsetY: -7,
      offsetX: 0,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false
    }
  },
  fill: {
    opacity: 0.5
  },
  tooltip: {
    x: {
      format: "yyyy",
    },
    fixed: {
      enabled: false,
      position: 'topRight'
    }
  },
  grid: {
    yaxis: {
      lines: {
        offsetX: -30
      }
    },
    padding: {
      left: 20
    }
  }, colors: ["#43a047", "#ff0000"]
  };


  export const baroptions={
    series: [{
        name: 'Net Profit',
        data: [44, 30, 54, 76, 51, 68, 43, 60, 66]
      }],
      
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              type: "vertical",
              inverseColors: true,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              colorStops: [
                {
                  offset: 0,
                  color: "#e65100",
                  opacity:0.7
                },
                {
                  offset: 100,
                  color: "#0d47a1",
                  
                  opacity: 1,
                },],
            //   stops: [30, 90, 100]
            }
          },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
      ,
      colors: ["#0d47a1"]
    
    };
  


export default function ApexChart(){

    //------------------line chart----------------------
     
    // const [options,setOptions]=useState({
    //       chart: {
    //         id: "basic-bar"
    //       }, colors: ["#f44336", "#247BA0"],
    //       xaxis: {
    //         categories: []
    //       },
    //             yaxis: [
    //               {
    //                 axisTicks: {
    //                   show: true,
    //                 },
    //                 axisBorder: {
    //                   show: true,
    //                   color: '#ff0000'
    //                 },
    //                 labels: {
    //                   style: {
    //                     colors: '#ff0000',
    //                   }
    //                 },
    //                 title: {
    //                   text: "Income (lakhs)",
    //                   style: {
    //                     color: '#ff0000',
    //                   }
    //                 },
    //                 tooltip: {
    //                   enabled: true
    //                 }
    //               },
    //               {
    //                 seriesName: 'Income',
    //                 opposite: true,
    //                 axisTicks: {
    //                   show: true,
    //                 },
    //                 axisBorder: {
    //                   show: true,
    //                   color: '#00E396'
    //                 },
    //                 labels: {
    //                   style: {
    //                     colors: '#00E396',
    //                   }
    //                 },
    //                 title: {
    //                   text: "Previous Income (lakhs)",
    //                   style: {
    //                     color: '#00E396',
    //                   }
    //                 },
    //               },
    //               {
    //                 seriesName: 'Age',
    //                 opposite: true,
    //                 axisTicks: {
    //                   show: true,
    //                 },
    //                 axisBorder: {
    //                   show: true,
    //                   color: '#FEB019'
    //                 },
    //                 labels: {
    //                   style: {
    //                     colors: '#FEB019',
    //                   },
    //                 },
    //                 stroke: {
    //                  curve: 'straight'
    //                 },
    //                 title: {
    //                   text: "Age",
    //                   style: {
    //                     color: '#FEB019',
    //                   }
    //                 }
    //               },
    //             ],
    //       stroke: {
    //         curve: 'straight'
    //       },
    //       title: {
    //         text: 'Fundamental Analysis of Employee',
    //         align: 'left'
    //       },
    //       subtitle: {
    //         text: 'Age/Salary Movements',
    //         align: 'left'
    //       }, colors: ["#ff0000", "#43a047","#247BA0"]
    //     })
  
    //     const [series,setSeries]=useState([
    //       {
    //         name: "prev_salary",
    //         type:'bar',
    //         data: [],
    //         color:"#ff0000"
    //       },
    //       {
    //         name: "emp_salary",
    //         type:'bar',
    //         data: [],
    //         color: "#247BA0"
    //       }
    //       // ,
    //       // {
    //       //   name: "emp_age",
    //       //   type:'bar',
    //       //   data: [],
    //       //   color: "#247BA0"
    //       // },
    //   ])

  
  
  //------------------------pie chart------------------------------
  
       
      
      
        
        
  
  //------------------------------getting values---------------------------------
  
      
        }          