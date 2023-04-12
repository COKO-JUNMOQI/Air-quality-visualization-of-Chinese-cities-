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
  
var daydata=['88', '128', '92', '55', '71', '49', '36', '48', '69', '62', '64', '64', '53', '83', '71', '71', '35', '25', '64', '28', '21', '25', '44', '41', '24', '34', '63', '59', '57', '61', '54'];
function fresh1(){
  
  var myChart=echarts.init(document.querySelector(".no3"));
  var option;
  function getVirtulData(year) {
    year = year || '2022';
    var date = +echarts.number.parseDate(year + '-03-01');
    var end = +echarts.number.parseDate(+year + '-04-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    i=0;
    for (var time = date; time < end; time += dayTime) {
      data.push([
        echarts.format.formatTime('yyyy-MM-dd', time),
        Math.floor(daydata[i])
      ]);
      i++;
    }

    return data;
  }
  option = {
    grid:{
      bottom:"0%",
    },
    textStyle:{
      fontSize:15,
      color:'white',
    },
    visualMap: {
      min: 0,
      max: 200,
      type: 'piecewise',
      orient: 'horizontal',
      left: 'center',
      top: 10,
      textStyle: {
        color: "rgba(230, 230, 230, 1)"
      }
    },
    calendar: {
      top: 60,
      left: 40,
      right: 30,
      cellSize: ['auto', 30],
      range: '2022-03',
      itemStyle: {
        borderWidth: 1
      },
      yearLabel: { show: false },
      dayLabel: {
        show: true,
        color: "rgba(222, 222, 222, 1)"
      },
      monthLabel: {
        show: false
      }
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: getVirtulData('2022')
    }
  };


  option && myChart.setOption(option);
  window.addEventListener('resize',function(){
      myChart.resize();
  })
};


var airvalue=[34, 66, 5, 40, 0.7173333333333333, 62];
var airformer=[34, 66, 5, 40, 0.7173333333333333, 62];
function fresh2(){
  var myChart=echarts.init(document.querySelector(".no2"));
  var option;
  option = {
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'PM2.5', max: 100 },
        { name: 'PM10', max: 200 },
        { name: 'SO2', max: 14 },
        { name: 'CO', max: 100 },
        { name: 'NO2', max: 1 },
        { name: 'O3', max: 100 }
      ]
    },
    tooltip: {
      trigger: 'item',
    },

    series: [
      {
        name: '空气成分详情',
        type: 'radar',
        data: [
          {
            value: airformer,
            lineStyle: {
              color:'rgb(244,110,54)',
            },
            areaStyle:{
              color:'rgb(244,110,54)',
            },
            itemStyle:{
              color:'rgb(244,110,54)',
            }
          },
          {
            value:airvalue,
            lineStyle: {
              color:'rgb(56, 233, 71)',
            },
            areaStyle:{
              color:'rgb(56, 233, 71)',
            },
            itemStyle:{
              color:'rgb(56, 233, 71)',
            }
          }
        ]
      }
    ]
  };

  option && myChart.setOption(option);
  window.addEventListener('resize',function(){
      myChart.resize();
  })
}

var score=7.9;
var text="良";
var former=7.9;

function fresh3(){
  var myChart=echarts.init(document.querySelector(".no4"));
  var option;
  var value = score;
  var pointerColor = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      {
          offset: 0,
          color: '#2EE5E3',
      },
      {
          offset: 1,
          color: '#385CF7',
      },
  ]);
  var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
          offset: 0,
          color: '#2EE5E3',
      },
      {
          offset: 1,
          color: '#385CF7',
      },
  ]);
  var delt=score-former;
  var d=delt.toFixed(1);
  var f="";
  if (d>0)
    f="+";
  else
    f="";
  option = {
    title:{
      show: true,
      text:"    "+text+"   ("+f+d+")",
      left:'50%',
      bottom:75,
      textAlign:'center',
      textStyle: {
        color: '#02a6b5',
        fontSize: 25,
        fontFamily: '"Microsoft Yahei","微软雅黑"',
    },
   },

      series: [
          {
              name: '空气质量得分',
              type: 'gauge',
              radius: '100%',
              startAngle: 225,
              endAngle: -45,
              min: 0,
              max: 10,
  
              title: {
                  show: false,
              },
              detail: {
                  color:'#1890FF',
                  show: true,
                  fontFamily: '"Microsoft Yahei","微软雅黑"',
                  fontWeight:900,
                  fontSize:80,
                  offsetCenter:[0,'80%']
              },
              axisLine: {
                  roundCap: true,
                  show: true,
                  lineStyle: {
                      width: 20,
                      color: [
                          [
                              value/10 , color
                          ],
                          [
                              1, 'rgba(225,225,225,0.4)'
                          ]
                      ],
                      shadowColor: 'rgba(0,138,255,0.35)',
                      shadowBlur: 5,
                  },
              },
              axisTick: {
                  distance: -20,
                  length: 7,
                  lineStyle: {
                      color: '#fff',
                      width: 1,
                  },
              },
              axisLabel: {
                  show: false,
              },
              pointer: {
                  itemStyle:{
                      color:pointerColor,
                  },
          
                  // show:false,
                  width: 20,
                  length: 120,
              },
              itemStyle: {
                  color: color,
                  shadowColor: 'rgba(0,138,255,0.45)',
                  shadowBlur: 10,
                  
                  // shadowOffsetX: 2,
                  // shadowOffsetY: 2,
              },
              splitLine: {
                  show: true,
                  length: 20,
                  distance: -20,
                  lineStyle: {
                      color: '#fff',
                      width: 1,
                  },
              },
              data: [
                  {
                      value:value,
                      name: '综合价值得分',
                  },
              ],
          },
      ],
  };
  

  option && myChart.setOption(option);
  window.addEventListener('resize',function(){
      myChart.resize();
  })
}

var datamonth=[68,48,56,75,83,56,56,71,81,66,64,86,75,55,61,68,71,75];
var textcity='杭州 AQI';

function fresh4(){
  var myChart=echarts.init(document.querySelector(".no5"));
  var option;

  myChart.setOption(
    (option = {
      title: {
        text: textcity,
        left: '1%',
        textStyle: {
          color: "rgba(230, 230, 230, 1)"
        },
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '5%',
        right: '15%',
        bottom: '10%'
      },
      xAxis: {
        data: ['2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09','2020-10','2020-11','2020-12','2021-01','2021-02','2021-03','2021-04','2021-05','2021-06'],
        axisLine: {
          lineStyle: {
            color: 'white',
          }}
      },
      yAxis: {
        axisLine: {
          lineStyle: {
            color: 'white',
          }}
      },
      toolbox: {
        right: 10,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      dataZoom: [
        {
          startValue: '2014-01'
        },
        {
          type: 'inside'
        }
      ],
      visualMap: {
        bottom: 30,
        right: 0,
        textStyle: {
          color: "rgba(230, 230, 230, 1)"
        },
        pieces: [
          {
            gt: 0,
            lte: 50,
            color: '#93CE07',
          },
          {
            gt: 50,
            lte: 100,
            color: '#FBDB0F'
          },
          {
            gt: 100,
            lte: 150,
            color: '#FC7D02'
          },
          {
            gt: 150,
            lte: 200,
            color: '#FD0100'
          },
          {
            gt: 200,
            lte: 300,
            color: '#AA069F'
          },
          {
            gt: 300,
            color: '#AC3B2A'
          }
        ],
        outOfRange: {
          color: '#999'
        }
      },
      series: {
        name: 'AQI',
        type: 'line',
        data:datamonth,
        markLine: {
          silent: true,
          lineStyle: {
            color: '#CCC'
          },
          data: [
            {
              yAxis: 50,
              label: {
              position:'end',
              fontWeight: "bold",
              color: "#93CE07",
              }
            },
            {
              yAxis: 100,
              label: {
              position:'end',
              fontWeight: "bold",
              color: "#FBDB0F",
              }
            },
            {
              yAxis: 150,
              label: {
              position:'end',
              fontWeight: "bold",
              color: "#FC7D02",
              }
            },
            {
              yAxis: 200,
              label: {
              position:'end',
              fontWeight: "bold",
              color: "#FD0100",
              }
            },
            {
              yAxis: 300,
              label: {
              position:'end',
              fontWeight: "bold",
              color: "#AA069F",
              }
            }
          ]
        }
      }
    })
  );


  option && myChart.setOption(option);
  window.addEventListener('resize',function(){
      myChart.resize();
  })
}


function setcity(obj){
  var val = obj.value;
  if(val == 'bj'){
    daydata=['25', '43', '57', '72', '32', '48', '50', '78', '132', '200', '129', '63', '82', '49', '68', '82', '40', '60', '38', '53', '22', '28', '74', '124', '114', '67', '30', '69', '79', '42', '30'];
    airformer=airvalue;
    airvalue=[41, 78, 2, 27, 0.545, 55]
    fresh2();
    fresh1();
    former=score;
    score=7.6;
    text="良";
    fresh3();
    textcity='北京 AQI';
    datamonth=[86,89,63,75,85,116,99,80,56,72,66,56,72,93,148,71,83,83];
    fresh4();
  }else if(val == 'hz'){
    daydata=['88', '128', '92', '55', '71', '49', '36', '48', '69', '62', '64', '64', '53', '83', '71', '71', '35', '25', '64', '28', '21', '25', '44', '41', '24', '34', '63', '59', '57', '61', '54'];
    airformer=airvalue;
    airvalue=[34, 66, 5, 40, 0.7173333333333333, 62]
    fresh2();
    fresh1();
    former=score;
    score=7.9;
    text="良";
    fresh3();
    textcity='杭州 AQI';
    datamonth=[68,48,56,75,83,56,56,71,81,66,64,86,75,55,61,68,71,75];
    fresh4();
  }else if(val == 'cq'){
    daydata=['69', '57', '67', '74', '76', '65', '55', '52', '66', '71', '64', '55', '61', '68', '60', '48', '46', '43', '40', '32', '13', '15', '28', '32', '48', '34', '35', '42', '57', '60', '22'];
    airformer=airvalue;
    airvalue=[31, 57, 11, 33, 0.797, 50]
    fresh2();
    fresh1();
    former=score;
    score=8.5;
    text="优";
    fresh3();
    textcity='重庆 AQI';
    datamonth=[70,69,60,64,81,68,59,80,54,52,65,81,88,73,53,46,56,59];
    fresh4();
  }else if(val == 'gz'){
    daydata=['55', '64', '54', '59', '73', '45', '34', '40', '49', '53', '56', '47', '48', '52', '71', '36', '40', '46', '50', '34', '38', '36', '10', '16', '27', '31', '19', '16', '29', '50', '58'];
    airformer=airvalue;
    airvalue=[24, 46, 6, 37, 0.8106666666666666, 54]
    fresh2();
    fresh1();
    former=score;
    score=8.8;
    text="优";
    fresh3();
    textcity='广州 AQI';
    datamonth=[62,50,55,81,66,52,64,76,68,66,73,60,77,71,62,73,57,64];
    fresh4();
  }else if(val == 'hhht'){
    daydata=['34', '56', '176', '136', '46', '52', '33', '54', '77', '112', '84', '60', '112', '150', '200', '44', '42', '49', '25', '26', '26', '37', '110', '83', '67', '76', '38', '67', '47', '31', '28'];
    airformer=airvalue;
    airvalue=[30, 89, 10, 24, 0.5446666666666666, 68]
    fresh2();
    fresh1();
    former=score;
    score=6.7;
    text="轻度污染";
    textcity='呼和浩特 AQI';
    fresh3();
    datamonth=[208,86,60,65,87,92,83,65,50,67,68,75,114,77,129,77,99,69];
    fresh4();
  }else if(val == 'lz'){
    daydata=['103', '76', '72', '69', '81', '75', '101', '84', '117', '101', '111', '143', '200', '200', '101', '82', '197', '111', '78', '58', '50', '51', '73', '141', '72', '50', '51', '79', '92', '68', '54'];
    airformer=airvalue;
    airvalue=[42, 139, 14, 42, 0.8986666666666667, 64]
    fresh2();
    fresh1();
    former=score;
    score=5.6;
    text="差";
    fresh3();
    textcity='兰州 AQI';
    datamonth=[88,77,80,82,81,84,85,72,59,66,87,80,88,73,178,80,83,76];
    fresh4();
  }else if(val == 'nj'){
    daydata=['97', '114', '103', '79', '110', '59', '52', '62', '71', '66', '76', '80', '89', '115', '62', '75', '29', '43', '67', '37', '22', '30', '41', '45', '23', '54', '69', '53', '50', '62', '51'];
    airformer=airvalue;
    airvalue=[37, 78, 5, 31, 0.6933333333333334, 80]
    fresh2();
    fresh1();
    former=score;
    score=7;
    text="良";
    fresh3();
    textcity='南京 AQI';
    datamonth=[86,51,60,80,96,72,61,79,81,65,60,86,82,58,73,70,81,95];
    fresh4();
  }else if(val == 'sh'){
    daydata=['115', '82', '78', '51', '93', '41', '42', '64', '67', '65', '61', '49', '50', '66', '57', '54', '19', '38', '71', '25', '27', '32', '34', '30', '26', '40', '61', '35', '34', '39', '44'];
    airformer=airvalue;
    airvalue=[30, 55, 5, 32, 0.6796666666666666, 78]
    fresh2();
    fresh1();
    former=score;
    score=7.3;
    text="良";
    fresh3();
    textcity='上海 AQI';
    datamonth=[81,55,57,76,84,68,66,59,72,58,58,81,72,53,66,63,78,60];
    fresh4();
  }else if(val == 'sz'){
    daydata=['43', '58', '47', '39', '51', '41', '38', '29', '33', '36', '38', '32', '33', '28', '27', '25', '19', '41', '45', '30', '35', '27', '12', '15', '24', '27', '27', '17', '26', '35', '30'];
    airformer=airvalue;
    airvalue=[16, 31, 4, 22, 0.65, 66]
    fresh2();
    fresh1();
    former=score;
    score=8.3;
    text="优";
    fresh3();
    textcity='深圳 AQI';
    datamonth=[47,41,44,56,40,25,27,42,54,63,63,57,66,53,48,57,35,43];
    fresh4();
  }else if(val == 'sjz'){
    daydata=['39', '56', '81', '181', '66', '83', '79', '93', '126', '146', '159', '106', '150', '142', '142', '105', '48', '48', '66', '94', '120', '96', '106', '150', '126', '104', '50', '80', '100', '89', '56'];
    airformer=airvalue;
    airvalue=[63, 134, 8, 35, 0.6859999999999999, 54]
    fresh2();
    fresh1();
    former=score;
    score=6.1;
    text="轻度污染";
    fresh3();
    textcity='石家庄 AQI';
    datamonth=[193,108,83,81,87,122,100,87,79,93,105,98,117,107,168,87,106,94];
    fresh4();
  }else if(val == 'tj'){
    daydata=['28', '58', '78', '95', '42', '52', '56', '94', '143', '129', '114', '122', '98', '57', '89', '69', '40', '64', '44', '47', '48', '39', '109', '113', '99', '69', '36', '57', '79', '35', '40'];
    airformer=airvalue;
    airvalue=[47, 85, 8, 37, 0.7899999999999999, 56]
    fresh2();
    fresh1();
    former=score;
    score=6.8;
    text="轻度污染";
    fresh3();
    textcity='天津 AQI';
    datamonth=[138,87,70,80,84,116,104,87,67,86,79,86,86,89,131,72,82,90];
    fresh4();
  }else if(val == 'wh'){
    daydata=['97', '91', '98', '87', '89', '75', '47', '62', '56', '64', '77', '63', '65', '115', '148', '80', '22', '34', '54', '35', '13', '18', '23', '32', '20', '50', '65', '69', '42', '60', '68'];
    airformer=airvalue;
    airvalue=[34, 79, 9, 41, 0.9376666666666668, 52]
    fresh2();
    fresh1();
    former=score;
    score=6;
    text="轻度污染";
    fresh3();
    textcity='武汉 AQI';
    datamonth=[83,57,55,73,78,61,59,71,80,67,73,109,102,73,65,65,66,82];
    fresh4();
  }else if(val == 'xa'){
    daydata=['142', '134', '109', '91', '103', '129', '111', '118', '127', '136', '132', '83', '89', '200', '200', '195', '75', '65', '95', '89', '98', '109', '102', '110', '75', '75', '124', '100', '92', '115', '94'];
    airformer=airvalue;
    airvalue=[63, 185, 8, 49, 0.8033333333333335, 41]
    fresh2();
    fresh1();
    former=score;
    score=5.2;
    text="差";
    fresh3();
    textcity='西安 AQI';
    datamonth=[168,106,84,76,82,80,84,66,72,68,102,112,124,109,146,71,88,91];
    fresh4();
  }
  
};

(function(){
  
  var myChart=echarts.init(document.querySelector(".no3"));
  var option;
  function getVirtulData(year) {
    year = year || '2022';
    var date = +echarts.number.parseDate(year + '-03-01');
    var end = +echarts.number.parseDate(+year + '-04-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    i=0;
    for (var time = date; time < end; time += dayTime) {
      data.push([
        echarts.format.formatTime('yyyy-MM-dd', time),
        Math.floor(daydata[i])
      ]);
      i++;
    }
    return data;
  }
  option = {
    grid:{
      bottom:"0%",
    },
    textStyle:{
      fontSize:15,
      color:'white',
    },
    visualMap: {
      min: 0,
      max: 200,
      type: 'piecewise',
      orient: 'horizontal',
      left: 'center',
      top: 10,
      textStyle: {
        color: "rgba(230, 230, 230, 1)"
      }
    },
    calendar: {
      top: 60,
      left: 40,
      right: 30,
      cellSize: ['auto', 30],
      range: '2022-03',
      itemStyle: {
        borderWidth: 1
      },
      yearLabel: { show: false },
      dayLabel: {
        show: true,
        color: "rgba(222, 222, 222, 1)"
      },
      monthLabel: {
        show: false
      }
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: getVirtulData('2022')
    }
  };


  option && myChart.setOption(option);
  window.addEventListener('resize',function(){
      myChart.resize();
  })
})();












(function(){
  var myChart=echarts.init(document.querySelector(".no2"));
  var option;
  option = {
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'PM2.5', max: 100 },
        { name: 'PM10', max: 200 },
        { name: 'SO2', max: 14 },
        { name: 'CO', max: 100 },
        { name: 'NO2', max: 1 },
        { name: 'O3', max: 100 }
      ]
    },
    tooltip: {
      trigger: 'item',
    },
    color:'rgb(56, 233, 71)',
    series: [
      {
        name: '空气成分详情',
        type: 'radar',
        data: [
          {
            value: [34, 66, 5, 40, 0.7173333333333333, 62],
            lineStyle: {
              color:'rgb(56, 233, 71)',
            },
            areaStyle:{
              color:'rgb(56, 233, 71)',
            },
            itemStyle:{
              color:'rgb(56, 233, 71)',
            }
          },
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
  var myChart=echarts.init(document.querySelector(".no4"));
  var option;
  var value = score;
  var pointerColor = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      {
          offset: 0,
          color: '#2EE5E3',
      },
      {
          offset: 1,
          color: '#385CF7',
      },
  ]);
  var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
          offset: 0,
          color: '#2EE5E3',
      },
      {
          offset: 1,
          color: '#385CF7',
      },
  ]);
  
  option = {
    title:{
      show: true,
      text:text,
      left:'50%',
      bottom:75,
      textAlign:'center',
      textStyle: {
          color: '#02a6b5',
          fontSize: 25,
          fontFamily: '"Microsoft Yahei","微软雅黑"',
      },
    },

      series: [
          {
              name: '空气质量得分',
              type: 'gauge',
              radius: '100%',
              startAngle: 225,
              endAngle: -45,
              min: 0,
              max: 10,
  
              title: {
                  show: false,
              },
              detail: {
                  color:'#1890FF',
                  show: true,
                  fontFamily: '"Microsoft Yahei","微软雅黑"',
                  fontWeight:900,
                  fontSize:80,
                  offsetCenter:[0,'80%']
              },
              axisLine: {
                  roundCap: true,
                  show: true,
                  lineStyle: {
                      width: 20,
                      color: [
                          [
                              value/10 , color
                          ],
                          [
                              1, 'rgba(225,225,225,0.4)'
                          ]
                      ],
                      // shadowColor: 'rgba(0,138,255,0.35)',
                      // shadowBlur: 5,
                  },
              },
              axisTick: {
                  distance: -20,
                  length: 7,
                  lineStyle: {
                      color: '#fff',
                      width: 1,
                  },
              },
              axisLabel: {
                  show: false,
              },
              pointer: {
                  itemStyle:{
                      color:pointerColor,
                  },
          
                  // show:false,
                  width: 20,
                  length: 120,
              },
              itemStyle: {
                  color: color,
                  shadowColor: 'rgba(0,138,255,0.45)',
                  shadowBlur: 10,
                  
                  // shadowOffsetX: 2,
                  // shadowOffsetY: 2,
              },
              splitLine: {
                  show: true,
                  length: 20,
                  distance: -20,
                  lineStyle: {
                      color: '#fff',
                      width: 1,
                  },
              },
              data: [
                  {
                      value:value,
                      name: '综合价值得分',
                  },
              ],
          },
      ],
  };
  

  option && myChart.setOption(option);
  window.addEventListener('resize',function(){
      myChart.resize();
  })
})();


(function(){
  var myChart=echarts.init(document.querySelector(".no5"));
  var option;

  myChart.setOption(
    (option = {
      title: {
        text: textcity,
        left: '1%',
        textStyle: {
          color: "rgba(230, 230, 230, 1)"
        },
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '5%',
        right: '15%',
        bottom: '10%'
      },
      xAxis: {
        data: ['2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09','2020-10','2020-11','2020-12','2021-01','2021-02','2021-03','2021-04','2021-05','2021-06'],
        axisLine: {
          lineStyle: {
            color: 'white',
          }}
      },
      yAxis: {
        axisLine: {
          lineStyle: {
            color: 'white',
          }}
      },
      toolbox: {
        right: 10,
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      dataZoom: [
        {
          startValue: '2014-01'
        },
        {
          type: 'inside'
        }
      ],
      visualMap: {
        bottom: 30,
        right: 0,
        textStyle: {
          color: "rgba(230, 230, 230, 1)"
        },
        pieces: [
          {
            gt: 0,
            lte: 50,
            color: '#93CE07'
          },
          {
            gt: 50,
            lte: 100,
            color: '#FBDB0F'
          },
          {
            gt: 100,
            lte: 150,
            color: '#FC7D02'
          },
          {
            gt: 150,
            lte: 200,
            color: '#FD0100'
          },
          {
            gt: 200,
            lte: 300,
            color: '#AA069F'
          },
          {
            gt: 300,
            color: '#AC3B2A'
          }
        ],
        outOfRange: {
          color: '#999'
        }
      },
      series: {
        name: 'AQI',
        type: 'line',
        data:datamonth,
        markLine: {
          silent: true,
          lineStyle: {
            color: '#CCC'
          },
          data: [
            {
              yAxis: 50,
              label: {
              position:'end',
              fontWeight: "bold",
              color: "#93CE07",
              }
            },
            {
              yAxis: 100,
              label: {
              position:'end',
              fontWeight: "bold",
              color: "#FBDB0F",
              }
            },
            {
              yAxis: 150,
              label: {
              position:'end',
              fontWeight: "bold",
              color: "#FC7D02",
              }
            },
            {
              yAxis: 200,
              label: {
              position:'end',
              fontWeight: "bold",
              color: "#FD0100",
              }
            },
            {
              yAxis: 300,
              label: {
              position:'end',
              fontWeight: "bold",
              color: "#AA069F",
              }
            }
          ]
        }
      }
    })
  );


  option && myChart.setOption(option);
  window.addEventListener('resize',function(){
      myChart.resize();
  })
})();








(function(){
  var myChart=echarts.init(document.querySelector(".no1"));
  var uploadedDataURL = "../static/js/data-1528971808162-BkOXf61WX.json";
  //var uploadedDataURL = "/asset/get/s/data-1559032707973-kPCDcrc0f.json";
  
  var colorIndex = 0;
  $(function () {
    var geoCoordMap = {
      北京: [116.4551, 40.2539],
      天津: [117.4219, 39.4189],
      河北: [114.4995, 38.1006],
      山西: [112.3352, 37.9413],
      内蒙古: [110.3467, 41.4899],
      辽宁: [123.1238, 42.1216],
      吉林: [125.8154, 44.2584],
      黑龙江: [127.9688, 45.368],
      上海: [121.4648, 31.2891],
      江苏: [118.8062, 31.9208],
      安徽: [117.29, 32.0581],
      浙江: [119.5313, 29.8773],
      福建: [119.4543, 25.9222],
      江西: [116.0046, 28.6633],
      山东: [117.1582, 36.8701],
      河南: [113.4668, 34.6234],
      湖北: [114.3896, 30.6628],
      湖南: [113.0823, 28.2568],
      广东: [113.12244, 23.009505],
      广西: [108.479, 23.1152],
      海南: [110.3893, 19.8516],
      重庆: [108.384366, 30.439702],
      四川: [103.9526, 30.7617],
      贵州: [106.6992, 26.7682],
      云南: [102.9199, 25.4663],
      陕西: [109.1162, 34.2004],
      甘肃: [103.5901, 36.3043],
      青海: [101.4038, 36.8207],
      宁夏: [106.3586, 38.1775],
      新疆: [87.9236, 43.5883],
      西藏: [91.11, 29.97],
    };
  
    var voltageLevel = ["2017", "2018", "2019", "2020", "2021"];
    var mapData = [[], [], [], [], []];
    var d2021 = {
      北京: 50,
      天津: 51.6,
      河北: 53.1,
      山西: 43.9,
      内蒙古: 21,
      辽宁: 31.6,
      吉林: 26.7,
      黑龙江: 23.3,
      上海: 35.7,
      江苏: 46.2,
      浙江: 30.6,
      安徽: 49.9,
      福建: 22.2,
      江西: 31.4,
      山东: 47.7,
      河南: 57.3,
      湖北: 43.2,
      湖南: 37,
      广东: 27,
      广西: 29.2,
      海南: 15.7,
      重庆: 33.4,
      四川: 36.3,
      贵州: 24.8,
      云南: 17.8,
      陕西: 44.2,
      甘肃: 32.7,
      青海: 25.9,
      宁夏: 33,
      新疆: 53.5,
      西藏: 5.8,
    };
    var d2020 = {
      北京: 55.7,
      天津: 60.1,
      河北: 60.1,
      山西: 49.4,
      内蒙古: 22.5,
      辽宁: 36.8,
      吉林: 36.9,
      黑龙江: 32.3,
      上海: 39.1,
      江苏: 48.3,
      浙江: 35.4,
      安徽: 56,
      福建: 24,
      江西: 38.5,
      山东: 54.3,
      河南: 61,
      湖北: 48.5,
      湖南: 41.4,
      广东: 29.9,
      广西: 31.7,
      海南: 15.8,
      重庆: 38.5,
      四川: 40.5,
      贵州: 27.8,
      云南: 18.1,
      陕西: 50.2,
      甘肃: 34.5,
      青海: 25.6,
      宁夏: 35.6,
      新疆: 49.7,
      西藏: 5.7,
    };
    var d2019 = {
      北京: 69.5,
      天津: 68.4,
      河北: 67.3,
      山西: 50.4,
      内蒙古: 21.8,
      辽宁: 37.8,
      吉林: 32.8,
      黑龙江: 25.3,
      上海: 43.3,
      江苏: 50.2,
      浙江: 35.7,
      安徽: 52.9,
      福建: 24.3,
      江西: 37.3,
      山东: 61.3,
      河南: 65.7,
      湖北: 50.5,
      湖南: 43.6,
      广东: 28.6,
      广西: 32.2,
      海南: 15.9,
      重庆: 45.2,
      四川: 44.3,
      贵州: 30.9,
      云南: 21.4,
      陕西: 51.1,
      甘肃: 39.8,
      青海: 28.5,
      宁夏: 40.3,
      新疆: 53.8,
      西藏: 7.6,
    };
  
    var d2018 = {
      北京: 78.5,
      天津: 70.6,
      河北: 74.8,
      山西: 50.7,
      内蒙古: 24.8,
      辽宁: 49,
      吉林: 45.8,
      黑龙江: 35.9,
      上海: 51.9,
      江苏: 58.6,
      浙江: 41.9,
      安徽: 58.9,
      福建: 25.6,
      江西: 37.6,
      山东: 69.7,
      河南: 73.7,
      湖北: 57.8,
      湖南: 47.9,
      广东: 30.7,
      广西: 35.4,
      海南: 15.9,
      重庆: 46.2,
      四川: 45,
      贵州: 32.6,
      云南: 20.9,
      陕西: 47,
      甘肃: 38.7,
      青海: 29.2,
      宁夏: 39.4,
      新疆: 49.2,
      西藏: 6.7,
    };
    var d2017 = {
      北京: 79.5,
      天津: 84.1,
      河北: 82.4,
      山西: 56.4,
      内蒙古: 26.1,
      辽宁: 49.2,
      吉林: 48.6,
      黑龙江: 40.1,
      上海: 49.6,
      江苏: 62.5,
      浙江: 46.8,
      安徽: 68,
      福建: 28.6,
      江西: 44.4,
      山东: 71.2,
      河南: 77.2,
      湖北: 64.5,
      湖南: 57.2,
      广东: 35.6,
      广西: 40.3,
      海南: 16.6,
      重庆: 53.1,
      四川: 54.3,
      贵州: 36,
      云南: 22.7,
      陕西: 54.3,
      甘肃: 43,
      青海: 35.9,
      宁夏: 40.1,
      新疆: 59.1,
      西藏: 7.7,
    };
  
    var colors = [
      [
        "#1DE9B6",
        "#F46E36",
        "#04B9FF",
        "#5DBD32",
        "#FFC809",
        "#FB95D5",
        "#BDA29A",
        "#6E7074",
        "#546570",
        "#C4CCD3",
      ],
      [
        "#37A2DA",
        "#67E0E3",
        "#32C5E9",
        "#9FE6B8",
        "#FFDB5C",
        "#FF9F7F",
        "#FB7293",
        "#E062AE",
        "#E690D1",
        "#E7BCF3",
        "#9D96F5",
        "#8378EA",
        "#8378EA",
      ],
      [
        "#DD6B66",
        "#759AA0",
        "#E69D87",
        "#8DC1A9",
        "#EA7E53",
        "#EEDD78",
        "#73A373",
        "#73B9BC",
        "#7289AB",
        "#91CA8C",
        "#F49F42",
      ],
    ];
  
    var categoryData = [];
    var barData = [];
    for (var key in geoCoordMap) {
      categoryData.push(key);
      mapData[0].push({
        year: "2017",
        name: key,
        value: d2017[key],
      });
      mapData[1].push({
        year: "2018",
        name: key,
        value: d2018[key],
      });
      mapData[2].push({
        year: "2019",
        name: key,
        value: d2019[key],
      });
      mapData[3].push({
        year: "2020",
        name: key,
        value: d2020[key],
      });
      mapData[4].push({
        year: "2021",
        name: key,
        value: d2021[key],
      });
    }
  
    for (var i = 0; i < mapData.length; i++) {
      barData.push([]);
      for (var j = 0; j < mapData[i].length; j++) {
        barData[i].push(mapData[i][j].value);
      }
    }
    $.getJSON(uploadedDataURL, function (geoJson) {
      echarts.registerMap("china", geoJson);
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
            });
          }
        }
        return res;
      };
  
      var convertToLineData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = geoCoordMap[dataItem.name];
          var toCoord = gps; //市区
          if (fromCoord && toCoord) {
            res.push([
              {
                coord: fromCoord,
                value: dataItem.value,
              },
              {
                coord: toCoord,
              },
            ]);
          }
        }
        return res;
      };
  
      let optionXyMap01 = {
        timeline: {
          data: voltageLevel,
          axisType: "category",
          autoPlay: true,
          playInterval: 3000,
          left: "10%",
          right: "10%",
          bottom: "3%",
          width: "50%",
          //  height: null,
          label: {
            normal: {
              textStyle: {
                color: "#ddd",
              },
            },
            emphasis: {
              textStyle: {
                color: "#fff",
              },
            },
          },
          symbolSize: 10,
          lineStyle: {
            color: "#555",
          },
          checkpointStyle: {
            borderColor: "#888",
            borderWidth: 2,
          },
          controlStyle: {
            showNextBtn: true,
            showPrevBtn: true,
            normal: {
              color: "#666",
              borderColor: "#666",
            },
            emphasis: {
              color: "#aaa",
              borderColor: "#aaa",
            },
          },
        },
        baseOption: {
          animation: true,
          animationDuration: 1000,
          animationEasing: "cubicInOut",
          animationDurationUpdate: 1000,
          animationEasingUpdate: "cubicInOut",
          grid: {
            right: "1%",
            top: "15%",
            bottom: "10%",
            width: "20%",
          },
          tooltip: {
            trigger: "axis", // hover触发器
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
              shadowStyle: {
                color: "rgba(150,150,150,0.1)", //hover颜色
              },
            },
          },
          geo: {
            show: true,
            map: "china",
            roam: true,
            zoom: 1,
            center: [113.83531246, 34.0267395887], //中心点
            label: {
              emphasis: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                borderColor: "rgba(147, 235, 248, 1)",
                borderWidth: 1,
                areaColor: {
                  type: "radial",
                  x: 0.5,
                  y: 0.5,
                  r: 0.5,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                },
                // shadowColor: 'rgba(128, 217, 248, 1)',
                // shadowColor: 'rgba(255, 255, 255, 1)',
                // shadowOffsetX: -2,
                // shadowOffsetY: 2,
                // shadowBlur: 10
              },
              emphasis: {
                areaColor: "#389BB7",
                borderWidth: 0,
              },
            },
          },
        },
        options: [],
      };
      for (var n = 0; n < voltageLevel.length; n++) {
        optionXyMap01.options.push({

  
          title: [

            {
              id: "statistic",
              text: voltageLevel[n] + "年数据统计情况",
              left: "75%",
              top: "0%",
              textStyle: {
                color: "#EEDD78",
                fontSize: 15,
              },
            },
          ],
          xAxis: {
            type: "value",
            scale: true,
            position: "top",
            min: 0,
            boundaryGap: false,
            splitLine: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              margin: 2,
              textStyle: {
                color: "#aaa",
              },
            },
          },
          yAxis: {
            type: "category",
            //  name: 'TOP 20',
            nameGap: 16,
            axisLine: {
              show: true,
              lineStyle: {
                color: "#ddd",
              },
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: "#ddd",
              },
            },
            axisLabel: {
              interval: 0,
              textStyle: {
                color: "#ddd",
                fontSize:8,
              },
            },
            data: categoryData,
          },
          series: [
            {
              //文字和标志
              name: "light",
              type: "scatter",
              coordinateSystem: "geo",
              data: convertData(mapData[n]),
              symbolSize: function (val) {
                return val[2] / 12;
              },
              // label: {
              //     normal: {
              //         formatter: '{b}',
              //         position: 'right',
              //         show: true
              //     },
              //     emphasis: {
              //         show: true
              //     }
              // },
              itemStyle: {
                normal: {
                  color: colors[colorIndex][n],
                },
              },
            },
            {
              type: "map",
              map: "china",
              geoIndex: 0,
              aspectScale: 0.75, //长宽比
              showLegendSymbol: false, // 存在legend时显示
              label: {
                normal: {
                  show: false,
                },
                emphasis: {
                  show: false,
                  textStyle: {
                    color: "#fff",
                  },
                },
              },
              roam: true,
              itemStyle: {
                normal: {
                  areaColor: "#031525",
                  borderColor: "#FFFFFF",
                },
                emphasis: {
                  areaColor: "#2B91B7",
                },
              },
              animation: false,
              data: mapData,
            },
            {
              //  name: 'Top 10',
              type: "effectScatter",
              coordinateSystem: "geo",
              data: convertData(
                mapData[n]
                  .sort(function (a, b) {
                    return b.value - a.value;
                  })
                  .slice(0, 20)
              ),
              symbolSize: function (val) {
                return val[2] / 2;
              },
              showEffectOn: "render",
              rippleEffect: {
                brushType: "stroke",
              },
              hoverAnimation: true,
              label: {
                normal: {
                  formatter: "{b}",
                  position: "right",
                  show: true,
                },
              },
              itemStyle: {
                normal: {
                  color: colors[colorIndex][n],
                  shadowBlur: 5,
                  shadowColor: colors[colorIndex][n],
                },
              },
              zlevel: 1,
            },
  
            {
              zlevel: 1.5,
              type: "bar",
              symbol: "none",
              itemStyle: {
                normal: {
                  color: colors[colorIndex][n],
                },
              },
              data: barData[n],
            },
          ],
        });
      }
      myChart.setOption(optionXyMap01);
    });
  });
  
  window.addEventListener('resize',function(){
      myChart.resize();
  })
})();


$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});