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
      "北京市",
      "张家口市",
      "沧州市",
      "承德市",
      "天津市",
      "邯郸市",
      "唐山市",
      "衡水市",
      "保定市",
      "邢台市",
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
      data: [30, 31, 32, 32, 33, 44, 45, 48, 52, 52].map((item, i) => {
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
  var uploadedDataURL = "../static/js/tianjin.json"; 

  $.get(uploadedDataURL, function (geoJson) {
    echarts.registerMap("天津", geoJson); //注册地图
    var geoCoordMap = {
        和平: [117.2, 39.12],
        河东: [117.22, 39.12],

        南开: [117.15, 39.13],

        红桥: [117.15, 39.17],
        塘沽: [117.65, 39.02],
        汉沽: [117.8, 39.25],
        大港: [117.45, 38.83],
        东丽: [117.3, 39.08],
        西青: [117, 39.13],
        津南: [117.38, 38.98],
        北辰: [117.13, 39.22],
        武清: [117.03, 39.38],
        宝坻: [117.3, 39.72],
        宁河: [117.82, 39.33],
        静海: [116.92, 38.93],
        蓟县: [117.4, 40.05],
    };
    var data = [
        { name: "和平", value: 32 },
        { name: "河东", value: 33 },
        { name: "河西", value: 36 },
        { name: "南开", value: 34 },
        { name: "河北", value: 40 },
        { name: "红桥", value: 34 },
        { name: "塘沽", value: 34 },

        { name: "大港", value: 34 },
        { name: "东丽", value: 32 },
        { name: "西青", value: 38 },
        { name: "津南", value: 33 },
        { name: "北辰", value: 32 },
        { name: "武清", value: 34 },
        { name: "宝坻", value: 35 },
        { name: "宁河", value: 34 },
        { name: "静海", value: 32 },
        { name: "蓟县", value: 38 },
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
          map: "天津",
          label: {
            normal: {
              show: true,
              color: "white",
              fontSize:11
              },
              emphasis: {
              show: true,
              color: "black",
              },
          },
          regions: [      //对不同的区块进行着色
                              {
                                name: '宝坻区', //区块名称
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(3, 102, 192, 0.849)'
                                    },
                                }
                              },{
                                name: '宁河区', //区块名称
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(3, 192, 35, 0.849)'
                                    }
                                }
                              },{
                                name: '滨海新区', //区块名称
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(3, 192, 88, 0.849)'
                                    }
                                }
                              },{
                                name: '津南区', //区块名称
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(3, 192, 142, 0.849)'
                                    }
                                }
                              },{
                                name: '静海区', //区块名称
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(3, 192, 170, 0.849)'
                                    }
                                }
                              },{
                                name: '西青区', //区块名称
                                itemStyle: {
                                    normal: {
                                        areaColor: 'rgba(3, 192, 170, 0.849)'
                                    }
                                }
                              },{
                              name: '东丽区',
                              itemStyle: {
                                  normal: {
                                      areaColor: 'rgba(3, 192, 190, 0.849)'
                                  }
                              }
                          },{
                              name: '北辰区', //区块名称
                              itemStyle: {
                                  normal: {
                                      areaColor: 'rgba(3, 162, 192, 0.849)'
                                  }
                              }
                            },
                            {
                              name: '武清区', //区块名称
                              itemStyle: {
                                  normal: {
                                      areaColor: 'rgba(3, 132, 192, 0.849)'
                                  }
                              }
                            },{
                              name: '西青区', //区块名称
                              itemStyle: {
                                  normal: {
                                      areaColor: 'rgba(3, 102, 192, 0.849)'
                                  }
                              }
                            },{
                              name: '河西区', //区块名称
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
              mapType: "天津", // 自定义扩展图表类型
              type: "scatter",
              coordinateSystem: "geo",
              symbol: "circle",
              data: convertData(data),
              symbolSize: 9,
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
  var myChart=echarts.init(document.querySelector(".no6"));
  var option;

  var dataBJ = [
    [1, 55, 9, 56, 0.46, 18, 6, "良"],
    [2, 25, 11, 21, 0.65, 34, 9, "优"],
    [3, 56, 7, 63, 0.3, 14, 5, "良"],
    [4, 33, 7, 29, 0.33, 16, 6, "优"],
    [5, 42, 24, 44, 0.76, 40, 16, "优"],
    [6, 82, 58, 90, 1.77, 68, 33, "良"],
    [7, 74, 49, 77, 1.46, 48, 27, "良"],
    [8, 78, 55, 80, 1.29, 59, 29, "良"],
    [9, 267, 216, 280, 4.8, 108, 64, "重度污染"],
    [10, 185, 127, 216, 2.52, 61, 27, "中度污染"],
    [11, 39, 19, 38, 0.57, 31, 15, "优"],
    [12, 41, 11, 40, 0.43, 21, 7, "优"],
    [13, 64, 38, 74, 1.04, 46, 22, "良"],
    [14, 108, 79, 120, 1.7, 75, 41, "轻度污染"],
    [15, 108, 63, 116, 1.48, 44, 26, "轻度污染"],
    [16, 33, 6, 29, 0.34, 13, 5, "优"],
    [17, 94, 66, 110, 1.54, 62, 31, "良"],
    [18, 186, 142, 192, 3.88, 93, 79, "中度污染"],
    [19, 57, 31, 54, 0.96, 32, 14, "良"],
    [20, 22, 8, 17, 0.48, 23, 10, "优"],
    [21, 39, 15, 36, 0.61, 29, 13, "优"],
    [22, 94, 69, 114, 2.08, 73, 39, "良"],
    [23, 99, 73, 110, 2.43, 76, 48, "良"],
    [24, 31, 12, 30, 0.5, 32, 16, "优"],
    [25, 42, 27, 43, 1, 53, 22, "优"],
    [26, 154, 117, 157, 3.05, 92, 58, "中度污染"],
    [27, 234, 185, 230, 4.09, 123, 69, "重度污染"],
    [28, 160, 120, 186, 2.77, 91, 50, "中度污染"],
    [29, 134, 96, 165, 2.76, 83, 41, "轻度污染"],
    [30, 52, 24, 60, 1.03, 50, 21, "良"],
    [31, 46, 5, 49, 0.28, 10, 6, "优"],
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
      data: ["北京"],
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
      backgroundColor: "#FFF",
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
        name: "北京",
        type: "scatter",
        itemStyle: itemStyle,
        data: dataBJ,
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

    var uploadedDataURL = "../static/js/beijing.json";



    function showProvince() {


    // myChart.showLoading();

    $.get(uploadedDataURL, function (geoJson) {
        // myChart.hideLoading();

        echarts.registerMap("北京", geoJson);

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
                mapType: "北京",
                label: {
                  normal: {
                    show: true,
                    color: "blue",
                    fontSize:9
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
                    name: "东城区",
                    value: 32,
                    label: {
                    normal: {
                        show: false,
                    },
                    },
                },
                {
                    name: "西城区",
                    value: 29,
                    label: {
                    normal: {
                        show: false,
                    },
                    },
                },
                {
                    name: "海淀区",
                    value: 32,
                },
                {
                    name: "朝阳区",
                    value: 29,
                },
                {
                    name: "石景山区",
                    value: 33,
                    label: {
                    normal: {
                        show: false,
                    },
                    },
                },
                {
                    name: "大兴区",
                    value: 32,
                },
                {
                    name: "门头沟区",
                    value: 29,
                },
                {
                    name: "昌平区",
                    value: 32,
                },
                {
                    name: "通州区",
                    value: 30,
                },
                {
                    name: "房山区",
                    value: 31,
                },
                {
                    name: "丰台区",
                    value: 29,
                },
                {
                    name: "顺义区",
                    value: 28,
                },
                {
                    name: "怀柔区",
                    value: 27,
                },
                {
                    name: "密云区",
                    value: 25,
                },
                {
                    name: "延庆区",
                    value: 21,
                },
                {
                    name: "平谷区",
                    value: 32,
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


$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});