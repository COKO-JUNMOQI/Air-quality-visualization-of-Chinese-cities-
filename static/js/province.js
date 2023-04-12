//时间模块
function time(){//编写获取时间的函数
    var date = new Date();//创建JS自带的Date日期对象
  
    var year = date.getFullYear();//获取年
  
    var month = date.getMonth()+1;//获取月，注意其范围是0~30，使用时需要加1
    month=month<10?"0"+month:month;
  
    var day = date.getDate();//获取日
    day=day<10?"0"+day:day;
  
    var weekday = "日一二三四五六".charAt(date.getDay());//获取周
  
    var hour = date.getHours();//获取小时
    hour=hour<10?"0"+hour:hour;
  
    var minute = date.getMinutes();//获取分钟
    minute=minute<10?"0"+minute:minute;
    
    var second = date.getSeconds();//获取秒
                second =second <10?"0"+second :second ;
  
    var current = year+"-"+month+"-"+day+" 星期"+weekday+" "+hour+":"+minute+":"+second;
    console.log(current);//在控制台打印当前时间
    document.getElementById("timespan").innerHTML=current;//获取对应ID标签的对象，将变量current显示在对应位置
      }
      time();
      setInterval("time()",1000);




(function(){
    var myChart=echarts.init(document.querySelector(".no4"));
    var option;

    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
        grid:{
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "0%",
            containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['海南','广东', '云南', '黑龙江', '西藏', '福建'],
          axisLabel:{
            interval:0,
            rotate:0,
            textStyle: {
              color: 'rgb(221, 228, 220)',  //更改坐标轴文字颜色
              fontSize : 14      //更改坐标轴文字大小
            },
            }
        },
        yAxis: {
          type: 'value',
          axisLabel:{
            interval:0,
            rotate:0,
            textStyle: {
              color: 'rgb(221, 228, 220)',  //更改坐标轴文字颜色
              fontSize : 14      //更改坐标轴文字大小
            },
            }
        },
        series: [
          {
            name: '省内空气优秀率',
            data: [0.8127, 0.7801, 0.7322, 0.7147, 0.6542, 0.6147],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            },
            color:'rgba(115, 188, 211, 0.795)'
          }
        ]
      };

    option && myChart.setOption(option);
    window.addEventListener('resize',function(){
        myChart.resize();
    })
})();

(function(){
    var myChart=echarts.init(document.querySelector(".no1"));

    var uploadedDataURL = "../static/js/zhejiang.json"; //浙江省

$.get(uploadedDataURL, function (geoJson) {
  echarts.registerMap("浙江", geoJson); //注册地图
  var geoCoordMap = {
    杭州市: [119.47, 29.9],
    宁波市: [121.539029, 29.736103],
    温州市: [120.61, 27.85],
    绍兴市: [120.701386, 29.74081],
    湖州市: [119.92, 30.7],
    嘉兴市: [120.78, 30.58],
    金华市: [119.94, 29.1],
    衢州市: [118.8, 28.84],
    舟山市: [122.1, 30.07],
    台州市: [121.08, 28.78],
    丽水市: [119.5, 28.07],
  };
  var data = [
    {
      name: "杭州市",
      value: 43,
    },
    {
      name: "宁波市",
      value: 44,
    },
    {
      name: "温州市",
      value: 53,
    },
    {
      name: "绍兴市",
      value: 58,
    },
    {
      name: "湖州市",
      value: 41,
    },
    {
      name: "嘉兴市",
      value: 14,
    },
    {
      name: "金华市",
      value: 56,
    },
    {
      name: "衢州市",
      value: 52,
    },
    {
      name: "舟山市",
      value: 9,
    },
    {
      name: "台州市",
      value: 32,
    },
    {
      name: "丽水市",
      value: 27,
    },
  ];
  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name];
      if (geoCoord) {
        res.push(geoCoord.concat(data[i].value));
      }
    }
    return res;
  };
  zjMapOption = {
        tooltip: {
            trigger: 'item',
            formatter: function(data) {
                return res = '<div><p>近5年AQI平均值：' + data.value[2] + '</p></div>'
            },
        },
        visualMap: {
        type: "continuous",
        calculable: true,
        show: false,
        realtime: false,
        inRange: {
            color: "#F4A460",
            borderColor: "white", //边框颜色
            borderWidth: 10,
        },
        },
        geo: {
        map: "浙江",
        label: {
            normal: {
            show: true,
            color: "white",
            },
            emphasis: {
            show: true,
            color: "black",
            },
        },
        regions: [      //对不同的区块进行着色
				            {
				              name: '杭州市', //区块名称
				              itemStyle: {
				                  normal: {
				                      areaColor: 'rgba(3, 102, 192, 0.849)'
				                  },
				              }
				            },{
				              name: '舟山市', //区块名称
				              itemStyle: {
				                  normal: {
				                      areaColor: 'rgba(3, 192, 35, 0.849)'
				                  }
				              }
				            },{
				              name: '温州市', //区块名称
				              itemStyle: {
				                  normal: {
				                      areaColor: 'rgba(3, 192, 88, 0.849)'
				                  }
				              }
				            },{
				              name: '宁波市', //区块名称
				              itemStyle: {
				                  normal: {
				                      areaColor: 'rgba(3, 192, 142, 0.849)'
				                  }
				              }
				            },{
				              name: '衢州市', //区块名称
				              itemStyle: {
				                  normal: {
				                      areaColor: 'rgba(3, 192, 170, 0.849)'
				                  }
				              }
				            },{
				              name: '台州市', //区块名称
				              itemStyle: {
				                  normal: {
				                      areaColor: 'rgba(3, 192, 170, 0.849)'
				                  }
				              }
				            },{
				            name: '丽水市',
				            itemStyle: {
				                normal: {
				                    areaColor: 'rgba(3, 192, 190, 0.849)'
				                }
				            }
				        },{
                            name: '嘉兴市', //区块名称
                            itemStyle: {
                                normal: {
                                    areaColor: 'rgba(3, 162, 192, 0.849)'
                                }
                            }
                          },
                          {
                            name: '金华市', //区块名称
                            itemStyle: {
                                normal: {
                                    areaColor: 'rgba(3, 132, 192, 0.849)'
                                }
                            }
                          },{
                            name: '湖州市', //区块名称
                            itemStyle: {
                                normal: {
                                    areaColor: 'rgba(3, 102, 192, 0.849)'
                                }
                            }
                          },{
                            name: '绍兴市', //区块名称
                            itemStyle: {
                                normal: {
                                    areaColor: 'rgba(3, 62, 192, 0.849)'
                                }
                            }
                          },],
        itemStyle: {
            normal: {
            areaColor: "#dedede",
            borderColor: "white",
            borderWidth: 1,
            },
            emphasis: {
            //地图选中（地图鼠标悬浮）
            label: {
                show: true,
            },
            areaColor: "#FFD700",
            },
        },
        left: "10%",
        right: "10%",
        top: "3%",
        bottom: "3%",
        },
        series: [
        {
            name: "近5年AQI平均值",
            mapType: "浙江", // 自定义扩展图表类型
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "circle",
            data: convertData(data),
            symbolSize: 15,
            label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false,
            },
            },
            itemStyle: {
            normal: {
                borderColor: "white",
                borderWidth: 2,
            },
            emphasis: {
                color: "#5ccbb1",
            },
            },
        },
        ],
    };
    myChart.setOption(zjMapOption, true);
    });



    window.addEventListener('resize',function(){
        myChart.resize();
    })
})();

(function(){
  var myChart=echarts.init(document.querySelector(".no5"));
  var option;
  var index = 0;
var colorList = ["#0f0", "#ff0", "#ffc000", "#f00", "#a42c9b", "#662831"];
var baccolor = [
  "rgb(249,131,104)",
  "rgb(249,107,104)",
  "rgb(34,195,170)",
  "rgb(66,164,245)",
];
option = {
  grid:{
    left: "0%",
    top: "0%",
    right: "10%",
    bottom: "0%",
    containLabel: true
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    show: false,
  },

  toolbox: {
    show: true,
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "value",

    splitLine: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
  },
  yAxis: {
    
    type: "category",
    inverse: true,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisPointer: {
      label: {
        show: true,
        margin: 30,
      },
    },
    data: [
      "舟山市",
      "嘉兴市",
      "丽水市",
      "台州市",
      "湖州市",
      "杭州市",
      "宁波市",
      "衢州市",
      "温州市",
      "金华市",
    ],
    axisLabel: {
      margin: 100,
      fontSize: 13,
      align: "left",
      color: "white",
      rich: {
        a1: {
          color: "#fff",
          backgroundColor: baccolor[0],
          width: 30,
          height: 25,
          align: "center",
          borderRadius: 5,
        },
        a2: {
          color: "#fff",
          backgroundColor: baccolor[1],
          width: 30,
          height: 25,
          align: "center",
          borderRadius: 5,
        },
        a3: {
          color: "#fff",
          backgroundColor: baccolor[2],
          width: 30,
          height: 25,
          align: "center",
          borderRadius: 5,
        },
        b: {
          color: "#fff",
          backgroundColor: baccolor[3],
          width: 30,
          height: 25,
          align: "center",
          borderRadius: 5,
        },
      },
      formatter: function (params) {
        if (index == 10) {
          index = 0;
        }
        index++;
        if (index - 1 < 3) {
          return ["{a" + index + "|" + index + "}" + "  " + params].join("\n");
        } else {
          return ["{b|" + index + "}" + "  " + params].join("\n");
        }
      },
    },
  },
  series: [
    {
      z: 2,
      name: "AQI",
      type: "bar",
      data: [9, 14, 27, 32, 41, 43, 44, 52, 53, 56].map((item, i) => {
        var colors = "";
        if (item < 50) {
          colors = colorList[0];
        } else if (item < 100) {
          colors = colorList[1];
        } else if (item < 150) {
          colors = colorList[2];
        } else if (item < 200) {
          colors = colorList[3];
        } else {
          colors = colorList[4];
        }
        /*switch (item){
        			case item < 50:
        			    colors = colorList[0]
        				break;
        			case 50 <= item < 100:
        			    colors = colorList[1]
        				break;
        			case item < 150:
        			    colors = colorList[2]
        				break;
        			case item < 200:
        			    colors = colorList[3]
        				break;
        			case item >=  100:
        			    colors = colorList[4]
        				break;
        			default:
        				break;
        		}*/
        itemStyle = {
          color: colors,
        };
        return {
          value: item,
          itemStyle: itemStyle,
        };
      }),
      label: {
        show: true,
        position: "right",
        fontSize: 14,
        offset: [10, 0],
        color: "#e2e2e2",
      },
    },
  ],
};


  
  option && myChart.setOption(option);
  window.addEventListener('resize',function(){
    myChart.resize();
  })
})();

(function(){
  var myChart=echarts.init(document.querySelector(".no2"));
  var option;

  var option = {

    tooltip: {
      trigger: "axis",
    },
    color: [
      "#c23531",
      "#2f4554",
      "#61a0a8",
      "#c23531",
      "#2f4554",
      "#61a0a8",
      "#c23531",
      "#2f4554",
      "#61a0a8",
    ],
    legend: {
      data: [
        "2014-PM2.5",
        "2014-AQI",
        "2014-PM10",
        "2015-PM2.5",
        "2015-AQI",
        "2015-PM10",
        "2016-PM2.5",
        "2016-AQI",
        "2016-PM10",
      ],
      textStyle:{
        color:'white',
      }
    },
    grid: {
      left: "3%",
      top:"30%",
      right: "4%",
      bottom: "0%",
      containLabel: true,
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      axisLabel:{
        interval:0,
        rotate:0,
        textStyle: {
          color: 'rgb(221, 228, 220)',  //更改坐标轴文字颜色
          fontSize : 14      //更改坐标轴文字大小
        },
        }
    },
    yAxis: {
      type: "value",
      axisLabel:{
        interval:0,
        rotate:0,
        textStyle: {
          color: 'rgb(221, 228, 220)',  //更改坐标轴文字颜色
          fontSize : 14      //更改坐标轴文字大小
        },
        }
    },
    series: [
      {
        name: "2014-PM2.5",
        type: "line",
        stack: "总量",
        data: [92, 130, 83, 55, 54, 48, 75, 56, 59, 103, 86, 58],
      },
      {
        name: "2014-AQI",
        type: "line",
        stack: "总量",
        data: [118, 158, 115, 90, 85, 74, 105, 83, 84, 132, 116, 87],
      },
      {
        name: "2014-PM10",
        type: "line",
        stack: "总量",
        data: [104, 115, 121, 89, 82, 27, 33, 31, 35, 68, 102, 81],
      },
      {
        name: "2015-PM2.5",
        type: "line",
        stack: "总量",
        data: [89, 83, 78, 63, 50, 52, 52, 40, 41, 60, 100, 134],
      },
      {
        name: "2015-AQI",
        type: "line",
        stack: "总量",
        data: [118, 116, 112, 93, 80, 81, 77, 64, 63, 87, 121, 167],
      },
      {
        name: "2015-PM10",
        type: "line",
        stack: "总量",
        data: [70, 65, 122, 83, 73, 45, 44, 47, 43, 54, 39, 68],
      },
      {
        name: "2016-PM2.5",
        type: "line",
        stack: "总量",
        data: [60, 46, 84, 58, 49, 53, 59, 40, 47, 70, 90, 105],
      },
      {
        name: "2016-AQI",
        type: "line",
        stack: "总量",
        data: [88, 68, 116, 90, 80, 80, 84, 62, 69, 102, 121, 133],
      },
      {
        name: "2016-PM10",
        type: "line",
        stack: "总量",
        data: [50, 45, 93, 87, 66, 42, 33, 37, 40, 49, 94, 66],
      },
    ],
  };
  
  option && myChart.setOption(option);
  window.addEventListener('resize',function(){
    myChart.resize();
  })

})();


(function(){
  var myChart=echarts.init(document.querySelector(".no6"));
  var option;

 
  var option = {
    visualMap: {
      min: 0,
      max: 20,
      dimension: 1,
      orient: 'vertical',
      right: 10,
      top: 'center',
      text: ['HIGH', 'LOW'],
      calculable: true,
      inRange: {
        color: ['#f2c31a', 'red']
      },
      textStyle: {
        color: "rgba(255, 255, 255, 1)"
      },
      right:0
    },
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'cross'
      }
    },
    grid:{
      right: "22%",

    },
    xAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: 'white',
          }
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: 'white',
          }
        },
      }
    ],
    series: [
      {
        
        type: 'scatter',
        symbolSize: 5,
        data: [['65', '6'], ['97', '6'], ['67', '6'], ['36', '5'], ['35', '7'],
        ['10', '5'], ['19', '5'], ['25', '5'], ['39', '6'], ['30', '6'], ['34', '6'],
        ['37', '6'], ['28', '5'], ['57', '6'], ['41', '6'], ['47', '6'], ['17', '4'],
        ['11', '4'], ['44', '4'], ['17', '4'], ['4', '4'], ['12', '4'], ['28', '4'],
        ['23', '5'], ['11', '4'], ['22', '4'], ['42', '6'], ['29', '5'], ['31', '6'], 
        ['35', '6'], ['36', '5'],['6', '2'], ['16', '2'], ['24', '4'], ['27', '2'], ['7', '2'], ['21', '4'], 
        ['25', '3'], ['54', '5'], ['99', '7'], ['153', '5'], ['96', '4'], ['42', '2'], ['60', '2'], ['30', '2'],
        ['46', '2'], ['48', '2'], ['17', '3'], ['43', '3'], ['24', '2'], ['37', '2'], ['9', '2'], ['14', '2'], 
        ['53', '2'], ['94', '2'], ['57', '2'], ['14', '2'], ['6', '2'], ['28', '2'], ['53', '2'], ['30', '2'], 
        ['13', '2'],['49', '11'], ['37', '10'], ['48', '11'], ['53', '12'], ['56', '12'], ['45', '12'], ['32', '11'],
         ['26', '11'], ['41', '16'], ['49', '18'], ['43', '12'], ['31', '12'], ['39', '13'], ['46', '16'], ['38', '13'], ['24', '10'], ['24', '11'], ['19', '12'],
         ['17', '11'], ['16', '8'], ['7', '7'], ['8', '7'], ['15', '7'], ['17', '9'], ['29', '10'], ['19', '7'], ['18', '7'], ['18', '8'], ['27', '13'], ['41', '11'],
          ['12', '7'],['31', '7'], ['45', '8'], ['34', '6'], ['33', '7'], ['45', '8'], ['22', '7'], ['13', '6'], ['17', '6'], ['20', '7'], ['23', '7'], ['25', '7'], ['20', '7'], 
          ['21', '7'], ['26', '6'], ['40', '8'], ['17', '7'], ['21', '6'], ['29', '6'], 
          ['31', '7'], ['18', '6'], ['21', '6'], ['22', '5'], ['4', '5'], ['9', '6'], ['18', '6'], ['21', '6'], ['11', '6'], ['10', '6'], ['16', '6'], ['27', '7'], 
          ['30', '7'],['13', '12'], ['27', '14'], ['56', '14'], ['36', '6'], ['12', '9'], ['21', '12'], ['14', '11'], ['27', '13'], ['47', '19'], ['75', '17'], ['44', '12'], ['27', '8'], ['35', '10'], ['57', '10'], ['57', 
          '7'], ['12', '6'], ['28', '7'], ['28', '6'], ['7', '8'], ['8', '7'], ['6', '8'], ['23', '9'], ['83', '8'], ['51', '11'], ['20', '9'], ['29', '10'], ['15', '10'], 
          ['32', '13'], ['20', '9'], ['10', '9'], ['9', '8'],['43', '13'], ['38', '17'], ['36', '17'], ['30', '12'], ['38', '18'], ['37', '15'], ['45', '21'], ['43', '19'], ['55', '14'], ['52', '23'], ['49', '17'], ['66', '19'],
           ['72', '24'], ['93', '15'], ['44', '9'], ['35', '16'], ['79', '11'], ['43', '11'], ['28', '15'], ['19', '10'], ['21', '8'], ['23', '8'], ['32', '16'], ['53', '12'], ['32', '10'], ['25', '13'], ['22', '12'], ['36', '12'], ['41', '9'],
            ['28', '14'], ['21', '9'],['72', '6'], ['81', '5'], ['61', '5'], ['45', '4'], ['25', '5'], ['15', '5'], ['21', '5'], ['22', '6'], ['35', '5'], ['35', '7'], ['43', '8'], ['52', '6'], ['64', '6'], ['69', '4'], ['28', '5'], ['47', '5'], ['13', '3'], ['28', '4'],
             ['48', '4'], ['26', '4'], ['11', '4'], ['15', '5'], ['26', '5'], ['28', '5'], ['14', '4'], ['32', '4'], ['30', '5'], ['24', '4'], ['26', '5'], ['41', '6'],
              ['34', '4'],['87', '5'], ['60', '6'], ['51', '9'], ['34', '5'], ['42', '4'], ['8', '4'], ['20', '5'], ['39', '6'], ['39', '7'], ['31', '6'], ['32', '7'], ['26', '7'], ['29', '6'], ['45', '6'], ['30', '6'], ['32', '8'], ['11', '4'], ['24', '4'], ['51', '4'], 
              ['14', '4'], ['7', '4'], ['12', '4'], ['20', '5'], ['12', '5'], ['11', '4'], ['26', '4'], ['33', '8'], ['12', '4'], ['13', '5'], ['24', '6'], ['26', '4'],
              ['22', '4'], ['35', '4'], ['29', '4'], ['25', '5'], ['31', '5'], ['17', '4'], ['14', '5'], ['9', '5'], ['10', '5'], ['12', '4'], ['14', '4'], ['13', '4'], ['14', '4'], ['12', '4'], ['14', '5'], ['13', '5'], ['10', '4'], ['27', '5'], ['27', '5'], ['14', '4'],
               ['23', '5'], ['18', '5'], ['4', '4'], ['5', '4'], ['8', '4'], ['17', '4'], ['14', '4'], ['9', '4'], ['15', '4'], ['16', '4'], ['13', '4'],
               ['16', '5'], ['22', '11'], ['43', '14'], ['48', '6'], ['20', '8'], ['46', '12'], ['42', '12'], ['56', '15'], ['90', '13'], ['107', '14'], ['121', '8'], ['79', '6'], ['114', '5'], ['84', '5'], ['80', '8'], ['70', '5'], ['21', '4'], ['24', '6'], ['47', '4'], ['70', '9'],
                ['91', '9'], ['71', '7'], ['78', '9'], ['113', '7'], ['92', '6'], ['40', '11'], ['16', '5'], ['32', '9'], ['65', '7'], ['65', '4'], ['35', '4'],
                ['49', '8'], ['40', '9'], ['59', '13'], ['59', '9'], ['55', '10'], ['31', '9'], ['20', '7'], ['27', '10'], ['24', '13'], ['35', '14'], ['49', '15'], ['37', '14'], ['46', '8'], ['58', '9'], ['66', '9'], ['47', '12'], ['5', '6'], ['21', '6'], ['36', '6'], ['22', '6'], 
                ['4', '6'], ['6', '6'], ['14', '6'], ['21', '9'], ['12', '6'], ['26', '7'], ['33', '9'], ['36', '10'], ['22', '11'], ['36', '11'], ['48', '6']
        ]
      }
    ]
  };



  option && myChart.setOption(option);
  window.addEventListener('resize',function(){
    myChart.resize();
  })
})();









(function(){
  var myChart=echarts.init(document.querySelector(".no3"));
  var option;



  var timeData = [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
  ];
  
  /*timeData = timeData.map(function (str) {
      return str.replace('2009/', '');
  });*/
  
  option = {
    title: {
      text: "PM2.5-PM10年度周期关系图",

      x: "center",
      textStyle: {
        fontSize: 20,
        color: "rgba(255, 255, 255, 1)"
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        animation: false,
      },
    },
    legend: {
      data: ["PM2.5", "PM10"],
      x: "left",
    },

    axisPointer: {
      link: { xAxisIndex: "all" },
    },
    dataZoom: [
      {
        show: true,
        realtime: true,
        start: 0,
        end: 100,
        xAxisIndex: [0, 1],
      },
      {
        type: "inside",
        realtime: true,
        start: 30,
        end: 70,
        xAxisIndex: [0, 1],
      },
    ],
    grid: [
      {
        left: 50,
        right: 50,
        height: "30%",
      },
      {
        left: 50,
        right: 50,
        top: "55%",
        height: "30%",
      },
    ],
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLine: { onZero: true },
        data: timeData,
        axisLabel:{
          textStyle: {
            color: "rgb(221, 228, 220)",
          },
        }
      },
      {
        gridIndex: 1,
        type: "category",
        boundaryGap: false,
        axisLine: { onZero: true },
        data: timeData,
        position: "top",
        axisLabel:{
          textStyle: {
            color: "rgb(221, 228, 220)",
          },
        }
      },
    ],
    yAxis: [
      {
        name: "PM2.5",
        type: "value",
        max: 300,
        axisLabel:{
          textStyle: {
            color: "rgb(221, 228, 220)",
          },
        }
      },
      {
        gridIndex: 1,
        name: "PM10",
        type: "value",
        inverse: true,
        axisLabel:{
          textStyle: {
            color: "rgb(221, 228, 220)",
          },
        }
      },
    ],
    series: [
      {
        name: "2014-PM2.5",
        type: "line",
        smooth: true,
        stack: "总量",
        symbolSize: 4,
        hoverAnimation: false,
        lineStyle: { normal: { color: "#2ec7c9" } },
        areaStyle: { normal: { color: "#2ec7c9", opacity: 0.3 } },
        itemStyle: { normal: { areaStyle: { type: "default" } } },
        data: [92, 130, 83, 55, 54, 48, 75, 56, 59, 103, 86, 58],
      },
      {
        name: "2015-PM2.5",
        type: "line",
        smooth: true,
        stack: "总量",
        symbolSize: 4,
        hoverAnimation: false,
        lineStyle: { normal: { color: "#b6a2de" } },
        areaStyle: { normal: { color: "#b6a2de", opacity: 0.3 } },
        itemStyle: { normal: { areaStyle: { type: "default" } } },
        data: [89, 83, 78, 63, 50, 52, 52, 40, 41, 60, 100, 134],
      },
      {
        name: "2016-PM2.5",
        type: "line",
        smooth: true,
        stack: "总量",
        symbolSize: 4,
        hoverAnimation: false,
        lineStyle: { normal: { color: "#ffb980" } },
        areaStyle: { normal: { color: "#ffb980", opacity: 0.3 } },
        itemStyle: { normal: { areaStyle: { type: "default" } } },
        data: [60, 46, 84, 58, 49, 53, 59, 40, 47, 70, 90, 105],
      },
  
      {
        name: "2014-PM10",
        type: "line",
        smooth: true,
        stack: "堆叠",
        xAxisIndex: 1,
        yAxisIndex: 1,
        symbolSize: 4,
        hoverAnimation: false,
        lineStyle: { normal: { color: "#2ec7c9" } },
        areaStyle: { normal: { color: "#2ec7c9" } },
        itemStyle: { normal: { areaStyle: { type: "default" } } },
        data: [104, 115, 121, 89, 82, 27, 33, 31, 35, 68, 102, 81],
      },
      {
        name: "2015-PM10",
        type: "line",
        smooth: true,
        stack: "堆叠",
        xAxisIndex: 1,
        yAxisIndex: 1,
        symbolSize: 4,
        hoverAnimation: false,
        lineStyle: { normal: { color: "#b6a2de" } },
        areaStyle: { normal: { color: "#b6a2de" } },
        itemStyle: { normal: { areaStyle: { type: "default" } } },
        data: [70, 65, 122, 83, 73, 45, 44, 47, 43, 54, 39, 68],
      },
      {
        name: "2016-PM10",
        type: "line",
        smooth: true,
        stack: "堆叠",
        xAxisIndex: 1,
        yAxisIndex: 1,
        symbolSize: 4,
        hoverAnimation: false,
        lineStyle: { normal: { color: "#ffb980" } },
        areaStyle: { normal: { color: "#ffb980" } },
        itemStyle: { normal: { areaStyle: { type: "default" } } },
        data: [50, 45, 93, 87, 66, 42, 33, 37, 40, 49, 94, 66],
      },
    ],
  };
  

  option && myChart.setOption(option);
  window.addEventListener('resize',function(){
    myChart.resize();
  })
})();


$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});