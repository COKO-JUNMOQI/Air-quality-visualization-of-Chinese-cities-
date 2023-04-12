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
      "浦东",
      "闵行",
      "青浦",
      "徐汇",
      "浦东新区",
      "静安",
      "宝山",
      "金山",
      "普陀",
      "杨浦",
    ],
    axisLabel: {
      margin: 100,
      fontSize: 14,
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
      data: [39, 40, 41, 41, 42, 43, 46, 46, 48, 51].map((item, i) => {
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
        color: "#e2e2e2",
        fontSize: 14,
        offset: [10, 0],
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
  
  window.addEventListener('resize',function(){
    myChart.resize();
  })

})();


(function(){
  var myChart=echarts.init(document.querySelector(".no6"));
  var option;


  
  var dataSH = [
    [1, 91, 45, 125, 0.82, 34, 23, "良"],
    [2, 65, 27, 78, 0.86, 45, 29, "良"],
    [3, 83, 60, 84, 1.09, 73, 27, "良"],
    [4, 109, 81, 121, 1.28, 68, 51, "轻度污染"],
    [5, 106, 77, 114, 1.07, 55, 51, "轻度污染"],
    [6, 109, 81, 121, 1.28, 68, 51, "轻度污染"],
    [7, 106, 77, 114, 1.07, 55, 51, "轻度污染"],
    [8, 89, 65, 78, 0.86, 51, 26, "良"],
    [9, 53, 33, 47, 0.64, 50, 17, "良"],
    [10, 80, 55, 80, 1.01, 75, 24, "良"],
    [11, 117, 81, 124, 1.03, 45, 24, "轻度污染"],
    [12, 99, 71, 142, 1.1, 62, 42, "良"],
    [13, 95, 69, 130, 1.28, 74, 50, "良"],
    [14, 116, 87, 131, 1.47, 84, 40, "轻度污染"],
    [15, 108, 80, 121, 1.3, 85, 37, "轻度污染"],
    [16, 134, 83, 167, 1.16, 57, 43, "轻度污染"],
    [17, 79, 43, 107, 1.05, 59, 37, "良"],
    [18, 71, 46, 89, 0.86, 64, 25, "良"],
    [19, 97, 71, 113, 1.17, 88, 31, "良"],
    [20, 84, 57, 91, 0.85, 55, 31, "良"],
    [21, 87, 63, 101, 0.9, 56, 41, "良"],
    [22, 104, 77, 119, 1.09, 73, 48, "轻度污染"],
    [23, 87, 62, 100, 1, 72, 28, "良"],
    [24, 168, 128, 172, 1.49, 97, 56, "中度污染"],
    [25, 65, 45, 51, 0.74, 39, 17, "良"],
    [26, 39, 24, 38, 0.61, 47, 17, "优"],
    [27, 39, 24, 39, 0.59, 50, 19, "优"],
    [28, 93, 68, 96, 1.05, 79, 29, "良"],
    [29, 188, 143, 197, 1.66, 99, 51, "中度污染"],
    [30, 174, 131, 174, 1.55, 108, 50, "中度污染"],
    [31, 187, 143, 201, 1.39, 89, 53, "中度污染"],
  ];
  
  var schema = [
    { name: "date", index: 0, text: "日" },
    { name: "AQIindex", index: 1, text: "AQI指数" },
    { name: "PM25", index: 2, text: "PM2.5" },
    { name: "PM10", index: 3, text: "PM10" },
    { name: "CO", index: 4, text: "一氧化碳（CO）" },
    { name: "NO2", index: 5, text: "二氧化氮（NO2）" },
    { name: "SO2", index: 6, text: "二氧化硫（SO2）" },
  ];
  
  var itemStyle = {
    normal: {
      opacity: 0.8,
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowColor: "rgba(0, 0, 0, 0.5)",
    },
  };
  
  option = {
  
    color: ["#dd4444", "#fec42c", "#80F1BE"],
    legend: {
      y: "top",
      data: [ "上海"],
      textStyle: {
        color: "#fff",
        fontSize: 16,
      },
    },
    grid: {
      x: "10%",
      x2: 150,
      y: "18%",
      y2: "10%",
    },
    tooltip: {
      padding: 10,
      backgroundColor: "#fff",
      borderColor: "#777",
      borderWidth: 1,
      formatter: function (obj) {
        var value = obj.value;
        return (
          '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
          obj.seriesName +
          " " +
          value[0] +
          "日：" +
          value[7] +
          "</div>" +
          schema[1].text +
          "：" +
          value[1] +
          "<br>" +
          schema[2].text +
          "：" +
          value[2] +
          "<br>" +
          schema[3].text +
          "：" +
          value[3] +
          "<br>" +
          schema[4].text +
          "：" +
          value[4] +
          "<br>" +
          schema[5].text +
          "：" +
          value[5] +
          "<br>" +
          schema[6].text +
          "：" +
          value[6] +
          "<br>"
        );
      },
    },
    xAxis: {
      type: "value",
      name: "日期",
      nameGap: 16,
      nameTextStyle: {
        color: "#fff",
        fontSize: 14,
      },
      max: 31,
      splitLine: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "#777",
        },
      },
      axisTick: {
        lineStyle: {
          color: "#777",
        },
      },
      axisLabel: {
        formatter: "{value}",
        textStyle: {
          color: "#fff",
        },
      },
    },
    yAxis: {
      type: "value",
      name: "AQI指数",
      nameLocation: "end",
      nameGap: 20,
      nameTextStyle: {
        color: "#fff",
        fontSize: 16,
      },
      axisLine: {
        lineStyle: {
          color: "#777",
        },
      },
      axisTick: {
        lineStyle: {
          color: "#777",
        },
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: "#fff",
        },
      },
    },
    visualMap: [
      {
        left: "right",
        top: "10%",
        dimension: 2,
        min: 0,
        max: 250,
        itemWidth: 30,
        itemHeight: 120,
        calculable: true,
        precision: 0.1,
        text: ["圆形大小：PM2.5"],
        textGap: 10,
        textStyle: {
          color: "#fff",
        },
        inRange: {
          symbolSize: [10, 70],
        },
        outOfRange: {
          symbolSize: [10, 70],
          color: ["rgba(255,255,255,.2)"],
        },
        controller: {
          inRange: {
            color: ["#c23531"],
          },
          outOfRange: {
            color: ["#444"],
          },
        },
      },
      {
        left: "right",
        bottom: "2%",
        dimension: 6,
        min: 0,
        max: 50,
        itemHeight: 120,
        calculable: true,
        precision: 0.1,
        text: ["明暗：二氧化硫"],
        textGap: 10,
        textStyle: {
          color: "#fff",
        },
        inRange: {
          colorLightness: [1, 0.5],
        },
        outOfRange: {
          color: ["rgba(255,255,255,.2)"],
        },
        controller: {
          inRange: {
            color: ["#c23531"],
          },
          outOfRange: {
            color: ["#444"],
          },
        },
      },
    ],
    series: [

      {
        name: "上海",
        type: "scatter",
        itemStyle: itemStyle,
        data: dataSH,
      },

    ],
  };
  



  option && myChart.setOption(option);
  window.addEventListener('resize',function(){
    myChart.resize();
  })
})();







(function(){
    var myChart=echarts.init(document.querySelector(".no1"));

    var uploadedDataURL = "../static/js/shanghai.json";



    function showProvince() {


    // myChart.showLoading();

    $.get(uploadedDataURL, function (geoJson) {
        // myChart.hideLoading();

        echarts.registerMap("上海", geoJson);

        myChart.setOption(
        (option = {

            visualMap: {
            min: 0,
            max: 100,
            left: "left",
            top: "bottom",
            text: ["高", "低"], // 文本，默认为数值文本
            calculable: true,
            inRange: {
                color: ["yellow", "lightskyblue", "orangered"],
            },
            textStyle: {
                color: "#ffffff",
            },
            },
            series: [
            {
                type: "map",
                mapType: "上海",
                label: {
                  normal: {
                    show: true,
                    color: "rgb(78, 78, 78)",
                    fontSize:11,

                    },
                emphasis: {
                    textStyle: {
                    color: "#fff",
                    },
                },
                },
                itemStyle: {
                normal: {
                    borderColor: "#389BB7",
                    areaColor: "#fff",
                },
                emphasis: {
                    areaColor: "#389BB7",
                    borderWidth: 0,
                },
                },
                animation: false,
                data: [
                {
                    name: "宝山区",
                    value: 42,
                    label: {
                    normal: {
                        show: false,
                    },
                    },
                },
                {
                    name: "长宁区",
                    value: 44,
                    label: {
                    normal: {
                        show: false,
                    },
                    },
                },
                {
                    name: "普陀区",
                    value: 46,
                },
                {
                    name: "静安区",
                    value: 46,
                },
                {
                    name: "杨浦区",
                    value: 44,
                    label: {
                    normal: {
                        show: false,
                    },
                    },
                },
                {
                    name: "徐汇区",
                    value: 46,
                },
                {
                    name: "松江区",
                    value: 49,
                },
                {
                    name: "奉贤区",
                    value: 49,
                },
                {
                    name: "金山区",
                    value: 45,
                },
                {
                    name: "闵行区",
                    value: 43,
                },
                {
                    name: "浦东新区",
                    value: 49,
                },
                {
                    name: "青浦区",
                    value: 44,
                },
                {
                    name: "嘉定区",
                    value: 49,
                },
                {
                    name: "虹口区",
                    value: 39,
                },
                {
                    name: "黄浦区",
                    value: 43,
                },

                ],
                // animationDurationUpdate: 1000,
                // animationEasingUpdate: 'quinticInOut'
            },
            ],
        })
        );
    });
    }

    var currentIdx = 0;

    showProvince();


    



    window.addEventListener('resize',function(){
        myChart.resize();
    })
})();



(function(){
  var myChart=echarts.init(document.querySelector(".no2"));
  var option;

  var ydata = [
    {
      name: "PM2.5",
      value: 30,
    },
    {
      name: "PM10",
      value: 41,
    },
    {
      name: "O3",
      value: 123,
    },
    {
      name: "NO2",
      value: 16,
    },
    {
      name: "SO2",
      value: 5,
    },
    {
      name: "CO",
      value: 1,
    },
    
  ];
  var color = [
    "#8d7fec",
    "#5085f2",
    "#e75fc3",
    "#f87be2",
    "#f2719a",
    "#fca4bb",
    
  ];
  var xdata = [
    "PM2.5",
    "PM10",
    "O3",
    "NO2",
    "SO2",
    "CO",
  ];
  
  option = {
  
    color: color,
    legend: {
      orient: "vartical",
      x: "left",
      top: "center",
      left: "70%",
      bottom: "0%",
      data: xdata,
      itemWidth: 8,
      itemHeight: 8,
      itemGap: 16,
      textStyle: {
        color: "#fff",
        fontSize: 16,
      },
      formatter: function (name) {
        return "" + name;
      },
    },
    series: [
      {
        type: "pie",
        clockwise: false, //饼图的扇区是否是顺时针排布
        minAngle: 2, //最小的扇区角度（0 ~ 360）
        radius: ["40%", "70%"],
        center: ["30%", "50%"],
        avoidLabelOverlap: false,
        itemStyle: {
          //图形样式
          normal: {
            borderColor: "#ffffff",
            borderWidth: 6,
          },
        },
        label: {
          normal: {
            show: false,
            position: "center",
            formatter: "{text|{b}}\n{c} ({d}%)",
            rich: {
              text: {
                color: "#FFF",
                fontSize: 14,
                align: "center",
                verticalAlign: "middle",
                padding: 8,
              },
              value: {
                color: "#8693F3",
                fontSize: 24,
                align: "center",
                verticalAlign: "middle",
              },
            },
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: 24,
            },
          },
        },
        data: ydata,
      },
    ],
  };
  myChart.setOption(option);
  
  setTimeout(function () {
    myChart.on("mouseover", function (params) {
      if (params.name == ydata[0].name) {
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: 0,
        });
      } else {
        myChart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: 0,
        });
      }
    });
  
    myChart.on("mouseout", function (params) {
      myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: 0,
      });
    });
    myChart.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: 0,
    });
  }, 1000);
  


  option && myChart.setOption(option);
  window.addEventListener('resize',function(){
      myChart.resize();
  })
})();



(function(){
  var myChart=echarts.init(document.querySelector(".no3"));
  var option;

  option = {

    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
        label: {
          show: true,
        },
      },
    },
    grid: {
      left: "4%",
      top: "18%",
      right: "5%",
      bottom: "12%",
    },
    legend: {
      data: ["2020年低PM2.5天数", "2021年低PM2.5天数", "同比增长"],
      top: "4%",
      textStyle: {
        color: "#1FC3CE",
        fontSize: 14,
      },
    },
    xAxis: {
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
      axisLine: {
        show: true, //隐藏X轴轴线
        lineStyle: {
          color: "#3d5269",
          width: 1,
        },
      },
      axisTick: {
        show: true, //隐藏X轴刻度
        alignWithLabel: true,
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "rgb(221, 228, 220)", //X轴文字颜色
          fontSize: 14,
        },
        interval: 0,
        rotate: 30,
      },
    },
    yAxis: [
      {
        type: "value",
        name: "天数",
        nameTextStyle: {
          color: "rgb(221, 228, 220)",
          fontSize: 14,
        },
        splitLine: {
          show: true,
          lineStyle: {
            width: 1,
            color: "#3d5269",
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "rgb(221, 228, 220)",
            fontSize: 14,
          },
        },
      },
      {
        type: "value",
        name: "同比增长",
        nameTextStyle: {
          color: "rgb(221, 228, 220)",
          fontSize: 14,
        },
        position: "right",
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: "#396A87",
            width: 2,
          },
        },
        axisLabel: {
          show: true,
          formatter: "{value} ", //右侧Y轴文字显示
          textStyle: {
            color: "rgb(221, 228, 220)",
            fontSize: 14,
          },
        },
      },
    ],
    series: [
      {
        name: "2020年低PM2.5天数",
        type: "bar",
        barWidth: 18,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#00FFFF",
              },
              {
                offset: 1,
                color: "#0080FF",
              },
            ]),
          },
        },
        data: [6, 10, 13, 4, 4, 8, 11, 16, 14, 23, 17, 7],
      },
      {
        name: "2021年低PM2.5天数",
        type: "bar",
        barWidth: 18,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#E29052",
              },
              {
                offset: 1,
                color: "#FA5A53",
              },
            ]),
          },
        },
        data: [3, 11, 4, 12, 11, 16, 24, 20, 17, 25, 9, 4],
      },
      {
        name: "同比增长",
        type: "line",
        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
        showAllSymbol: true, //显示所有图形。
        symbol: "circle", //标记的图形为实心圆
        symbolSize: 6, //标记的大小
        itemStyle: {
          //折线拐点标志的样式
          color: "#26D9FF",
          borderColor: "#26D9FF",
          width: 2,
          shadowColor: "#26D9FF",
          shadowBlur: 2,
        },
        lineStyle: {
          color: "#26D9FF",
          width: 2,
          shadowBlur: 2,
        },
        data: [-3, 1,-9, 8, 7, 8, 13, 4, 3, 2, -8, -3],
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