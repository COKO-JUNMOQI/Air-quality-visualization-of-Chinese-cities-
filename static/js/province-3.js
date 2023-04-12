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
      "清远市",
      "云浮市",
      "河源市",
      "韶关市",
      "肇庆市",
      "茂名市",
      "广州市",
      "湛江市",
      "梅州市",
      "珠海市",
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
      data: [12, 18, 20, 20, 28, 29, 32, 33, 36, 42].map((item, i) => {
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


  
  var dataGZ = [
    [1, 26, 37, 27, 1.163, 27, 13, "优"],
    [2, 85, 62, 71, 1.195, 60, 8, "良"],
    [3, 78, 38, 74, 1.363, 37, 7, "良"],
    [4, 21, 21, 36, 0.634, 40, 9, "优"],
    [5, 41, 42, 46, 0.915, 81, 13, "优"],
    [6, 56, 52, 69, 1.067, 92, 16, "良"],
    [7, 64, 30, 28, 0.924, 51, 2, "良"],
    [8, 55, 48, 74, 1.236, 75, 26, "良"],
    [9, 76, 85, 113, 1.237, 114, 27, "良"],
    [10, 91, 81, 104, 1.041, 56, 40, "良"],
    [11, 84, 39, 60, 0.964, 25, 11, "良"],
    [12, 64, 51, 101, 0.862, 58, 23, "良"],
    [13, 70, 69, 120, 1.198, 65, 36, "良"],
    [14, 77, 105, 178, 2.549, 64, 16, "良"],
    [15, 109, 68, 87, 0.996, 74, 29, "轻度污染"],
    [16, 73, 68, 97, 0.905, 51, 34, "良"],
    [17, 54, 27, 47, 0.592, 53, 12, "良"],
    [18, 51, 61, 97, 0.811, 65, 19, "良"],
    [19, 91, 71, 121, 1.374, 43, 18, "良"],
    [20, 73, 102, 182, 2.787, 44, 19, "良"],
    [21, 73, 50, 76, 0.717, 31, 20, "良"],
    [22, 84, 94, 140, 2.238, 68, 18, "良"],
    [23, 93, 77, 104, 1.165, 53, 7, "良"],
    [24, 99, 130, 227, 3.97, 55, 15, "良"],
    [25, 146, 84, 139, 1.094, 40, 17, "轻度污染"],
    [26, 113, 108, 137, 1.481, 48, 15, "轻度污染"],
    [27, 81, 48, 62, 1.619, 26, 3, "良"],
    [28, 56, 48, 68, 1.336, 37, 9, "良"],
    [29, 82, 92, 174, 3.29, 0, 13, "良"],
    [30, 106, 116, 188, 3.628, 101, 16, "轻度污染"],
    [31, 118, 50, 0, 1.383, 76, 11, "轻度污染"],
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
      data: [ "广州"],
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
        name: "广州",
        type: "scatter",
        itemStyle: itemStyle,
        data: dataGZ,
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

    var uploadedDataURL = "../static/js/guangdong.json";


var geoCoordMap = {
  广州市: [113.507649675, 23.3200491021],
  东莞市: [113.863433991, 22.9430238154],
  中山市: [113.422060021, 22.5451775145],
  云浮市: [111.750945959, 22.9379756855],
  佛山市: [113.034025635, 23.0350948405],
  惠州市: [114.41065808, 23.1135398524],
  揭阳市: [116.079500855, 23.3479994669],
  梅州市: [116.126403098, 24.304570606],
  汕头市: [116.588650288, 23.2839084533],
  汕尾市: [115.572924289, 22.9787305002],
  江门市: [112.678125341, 22.2751167835],
  河源市: [114.913721476, 23.9572508505],
  深圳市: [114.025973657, 22.5960535462],
  清远市: [113.040773349, 23.9984685504],
  湛江市: [110.165067263, 21.2574631038],
  潮州市: [116.830075991, 23.7618116765],
  珠海市: [113.262447026, 22.1369146461],
  肇庆市: [112.37965337, 23.5786632829],
  茂名市: [110.931245331, 21.9682257188],
  阳江市: [111.777009756, 21.9715173045],
  韶关市: [113.594461107, 24.8029603119],
};
var customerBatteryCityData = [
  { name: "阳江市", value: 57 },
  { name: "茂名市", value: 29 },
  { name: "广州市", value: 32 },
  { name: "河源市", value: 20 },
  { name: "湛江市", value: 33 },
  { name: "潮州市", value: 58 },
  { name: "东莞市", value: 53 },
  { name: "深圳市", value: 53},
  { name: "清远市", value: 12 },
  { name: "韶关市", value: 20 },
  { name: "云浮市", value: 18 },
  { name: "惠州市", value: 52 },
  { name: "汕头市", value: 48 },
  { name: "揭阳市", value: 67 },
  { name: "中山市", value: 56 },
  { name: "肇庆市", value: 28 },
  { name: "珠海市", value: 42 },
  { name: "汕尾市", value: 57 },
  { name: "江门市", value: 53},
  { name: "梅州市", value: 36 },
  { name: "佛山市", value: 49 },
];
$.getJSON(uploadedDataURL, function (geoJson) {
  echarts.registerMap("广东", geoJson);
  option = {

    tooltip: {
      // borderWidth: 0,
      trigger: "item",
      show: true,
      enterable: true,
      textStyle: {
        fontSize: 20,
        color: "#fff",
      },
      backgroundColor: "rgba(0,2,89,0.8)",
      formatter: "{b}<br />{c}",
    },
    geo: [
      {
        map: "广东",
        aspectScale: 0.9,
        roam: false, // 是否允许缩放
        zoom: 1.2, // 默认显示级别
        layoutSize: "95%",
        layoutCenter: ["55%", "50%"],
        itemStyle: {
          normal: {
            areaColor: {
              type: "linear-gradient",
              x: 0,
              y: 400,
              x2: 0,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(37,108,190,0.3)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(15,169,195,0.3)", // 50% 处的颜色
                },
              ],
              global: true, // 缺省为 false
            },
            borderColor: "#4ecee6",
            borderWidth: 1,
          },
          emphasis: {
            areaColor: {
              type: "linear-gradient",
              x: 0,
              y: 300,
              x2: 0,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(37,108,190,1)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(15,169,195,1)", // 50% 处的颜色
                },
              ],
              global: true, // 缺省为 false
            },
          },
        },
        emphasis: {
          itemStyle: {
            areaColor: "#0160AD",
          },
          label: {
            show: 0,
            color: "#fff",
          },
        },
        zlevel: 3,
      },
      {
        map: "广东",
        aspectScale: 0.9,
        roam: false, // 是否允许缩放
        zoom: 1.2, // 默认显示级别
        layoutSize: "95%",
        layoutCenter: ["55%", "50%"],
        itemStyle: {
          normal: {
            borderColor: "rgba(192,245,249,.6)",
            borderWidth: 2,
            shadowColor: "#2C99F6",
            shadowOffsetY: 0,
            shadowBlur: 120,
            areaColor: "rgba(29,85,139,.2)",
          },
        },
        zlevel: 2,
        silent: true,
      },
      {
        map: "广东",
        aspectScale: 0.9,
        roam: false, // 是否允许缩放
        zoom: 1.2, // 默认显示级别
        layoutSize: "95%",
        layoutCenter: ["55%", "51.5%"],
        itemStyle: {
          // areaColor: '#005DDC',
          areaColor: "rgba(0,27,95,0.4)",
          borderColor: "#004db5",
          borderWidth: 1,
        },
        zlevel: 1,
        silent: true,
      },
    ],
    series: [
      {
        geoIndex: 0,
        // coordinateSystem: 'geo',
        showLegendSymbol: true,
        type: "map",
        roam: true,
        label: {
          normal: {
            show: false,
            textStyle: {
              color: "#fff",
            },
          },
          emphasis: {
            show: false,
            textStyle: {
              color: "#fff",
            },
          },
        },

        itemStyle: {
          normal: {
            borderColor: "#2ab8ff",
            borderWidth: 1.5,
            areaColor: "#12235c",
          },
          emphasis: {
            areaColor: "#2AB8FF",
            borderWidth: 0,
            color: "red",
          },
        },
        map: "广东", // 使用
        data: customerBatteryCityData,
        // data: this.difficultData //热力图数据   不同区域 不同的底色
      },
      {
        type: "lines",
        zlevel: 5,
        effect: {
          show: false,
          // period: 4, //箭头指向速度，值越小速度越快
          // trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
          // symbol: 'arrow', //箭头图标
          // symbol: imgDatUrl,
          symbolSize: 5, // 图标大小
        },
        lineStyle: {
          width: 17, // 尾迹线条宽度
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: "rgb(199,145,41)", // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: "rgb(199,145,41)", // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: "rgb(223,176,32)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgb(223,176,32)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgb(199,145,41)", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          opacity: 1, // 尾迹线条透明度
          curveness: 0, // 尾迹线条曲直度
        },
        label: {
          show: 0,
          position: "end",
          formatter: "245",
        },
        silent: true,
        data: lineData(),
      },
      {
        type: "scatter",
        coordinateSystem: "geo",
        geoIndex: 0,
        zlevel: 5,
        label: {
          show: false,
          position: "bottom",
          formatter: (params) => this.data[params.dataIndex].value,
          padding: [4, 8],
          backgroundColor: "#003F5E",
          borderRadius: 5,
          borderColor: "#67F0EF",
          borderWidth: 1,
          color: "#67F0EF",
        },
        symbol: "diamond",
        symbolSize: [17, 8],
        itemStyle: {
          color: "#ffd133",
          opacity: 1,
        },
        silent: true,
        data: scatterData(),
      },
      {
        type: "scatter",
        coordinateSystem: "geo",
        geoIndex: 0,
        zlevel: 4,
        label: {
          formatter: "{b}",
          position: "bottom",
          color: "#fff",
          fontSize: 12,
          distance: 10,
          show: true,
        },
        symbol: "diamond",
        symbolSize: [17, 8],
        itemStyle: {
          // color: '#F7AF21',
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: "rgb(199,145,41)", // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: "rgb(199,145,41)", // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: "rgb(223,176,32)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgb(223,176,32)", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "rgb(199,145,41)", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          opacity: 1,
          // shadowColor: '#fff',
          // shadowBlur: 5,
          // shadowOffsetY: 2
        },
        silent: true,
        data: scatterData2(),
      },
      // {
      //   type: 'effectScatter',
      //   coordinateSystem: 'geo',
      //   geoIndex: 0,
      //   symbol: 'circle',
      //   symbolSize: 4,
      //   showEffectOn: 'render',
      //   rippleEffect: {
      //     brushType: 'fill',
      //     scale: 10
      //   },
      //   hoverAnimation: true,
      //   label: {
      //     // formatter: (p) => {
      //     //   console.log(p, 99999)
      //     //   return p.data[2]
      //     // },
      //     formatter: '{b}',
      //     position: 'bottom',
      //     color: '#fff',
      //     fontSize: 14,
      //     distance: 10,
      //     show: true
      //   },
      //   itemStyle: {
      //     color: '#bacac6'
      //   },
      //   zlevel: 5,
      //   data: this.scatterData2
      // }
    ],
  };
  myChart.setOption(option);
});

// 动态计算柱形图的高度（定一个max）
function lineMaxHeight() {
  const maxValue = Math.max(
    ...customerBatteryCityData.map((item) => item.value)
  );
  return 0.9 / maxValue;
}
// 柱状体的主干
function lineData() {
  return customerBatteryCityData.map((item) => {
    return {
      coords: [
        geoCoordMap[item.name],
        [
          geoCoordMap[item.name][0],
          geoCoordMap[item.name][1] + item.value * lineMaxHeight(),
        ],
      ],
    };
  });
}
// 柱状体的顶部
function scatterData() {
  return customerBatteryCityData.map((item) => {
    return [
      geoCoordMap[item.name][0],
      geoCoordMap[item.name][1] + item.value * lineMaxHeight(),
    ];
  });
}
// 柱状体的底部
function scatterData2() {
  return customerBatteryCityData.map((item) => {
    return {
      name: item.name,
      value: geoCoordMap[item.name],
    };
  });
}


    

    



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
      value: 8,
    },
    {
      name: "PM10",
      value: 14,
    },
    {
      name: "O3",
      value: 19,
    },
    {
      name: "NO2",
      value: 18,
    },
    {
      name: "SO2",
      value: 6,
    },
    {
      name: "CO",
      value: 0.8,
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
        data: [1, 11, 9, 8, 15, 24,23, 14, 9, 2, 2, 0],
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
        data: [7, 15, 13, 13, 21, 28, 31, 24, 19, 14,5, 7],
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
        data: [6, 4,4, 5, 6, 4, 8, 10, 10, 12, 3, 7],
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