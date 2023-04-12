
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


//省份污染排名
(function () {
    var data1=['和田地区', '喀什地区', '巴音郭楞州', '湘潭', '榆林', '忻州'];//预制数据用来测试，下方用ajax替换数据
    var data2=['148', '133', '113', '104', '94', '93'];
    $.ajax({
      async : false,
      url:"/leftupchart",
      type: 'POST',
      success: function (result) {
          data1=result.city;
          data2=result.aqi;
      }
    })

    var myChart=echarts.init(document.querySelector(".no1"));
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
        color:["rgb(183, 190, 141)"],
        xAxis: {
          type: 'category',
          axisLabel:{
            interval:1,
            rotate:0,
            textStyle: {
              color: 'rgb(221, 228, 220)',  //更改坐标轴文字颜色
              fontSize : 14      //更改坐标轴文字大小
            },
            formatter:function(value)  
		          {  
		              var ret = "";//拼接加\n返回的类目项  
		              var maxLength = 5;//每项显示文字个数  
		              var valLength = value.length;//X轴类目项的文字个数  
		              var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
		              if (rowN > 1)//如果类目项的文字大于5,  
		              {  
		                  for (var i = 0; i < rowN; i++) {  
		                      var temp = "";//每次截取的字符串  
		                      var start = i * maxLength;//开始截取的位置  
		                      var end = start + maxLength;//结束截取的位置  
		                      temp = value.substring(start, end) + "\n";  
		                      ret += temp; //凭借最终的字符串  
		                  }  
		                  return ret;  
		              }  
		              else {  
		                         return value;  
		              }  
		          }  
          },
          data:data1,

        },
        yAxis: [{
          type: 'value',
          axisLine: {
            lineStyle: {
              color: 'rgb(221, 228, 220)',
            }
          },
        }],
        series: {
          type: 'bar',
          data: data2,
          markLine:{
            data:[{
              name: '严重污染',
              yAxis: 100
          },],
          label: {
            position:'start',
            fontStyle: "normal",
            fontWeight: "bolder",
            fontSize : 14,
            color: "#1df700a8",
          }
          },
          itemStyle: {
            normal: { //这里必须加normal,否者不显示夜色变化
                color: function(params) {//超过预警值显示红色
                    if (data2[params.dataIndex] >100) {
                        return 'rgba(241, 114, 114, 1)';
                    } else {
                        return 'rgba(253, 238, 100, 0.863)';//未超过则为黄绿色
                    }
                }
            }
          },
        },
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
      };
      myChart.setOption(option);
      window.addEventListener('resize',function(){
        myChart.resize();
      })
    })();
//数据占比
  (function () {
    level1=12;
    level2=18;
    level3=1;
    level4=0;
    level5=0;
    level6=0;
    $.ajax({
      async : false,
      url:"/mid",
      type: 'POST',
      success: function (result) {
          level1=result.优[0];
          level2=result.良[0];
          level3=result.轻度污染[0];
          level4=result.中度污染[0];
          level5=result.重度污染[0];
          level6=result.严重污染[0];
      }
    })
    var myChart=echarts.init(document.querySelector(".no2"));
    var option;
    option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
        textStyle: {
          fontSize: 13
        }
      },
      legend: {
        top: '0%',
        left: 'center',
        textStyle:{
          color:'white',
        }
      },
      series: [
        {
          name: '污染度',
          type: 'pie',
          center: ['50%', '60%'],
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: level1, name: '优' },
            { value: level2, name: '良' },
            { value: level3, name: '轻度污染' },
            { value: level4, name: '中度污染' },
            { value: level5, name: '重度污染' },
            { value: level6, name: '严重污染' },
          ]
        }
      ]
    };
    option && myChart.setOption(option);
    window.addEventListener('resize',function(){
        myChart.resize();
    })
  })();

//设置pm2.5的趋势图
(function(){
  citypm25=['1', '97', '67', '36', '35', '10', '19', '25', '39', '30', '34', '37', '28', '57', '41', '47', '17', '11', '44', '17', '4', '12', '28', '23', '11', '22', '42', '29', '31', '35'],
  $.ajax({
    async : false,
    url:"/mid",
    type: 'POST',
    success: function (result) {
        citypm25=result.pm25;
    }
  })
  var myChart=echarts.init(document.querySelector(".no4"));
  var option;
  option = {
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      axisLine: {
        lineStyle: {
          color: 'white',
        }
      },
      type: 'category',
      data:['1号','2号','3号','4号','5号','6号','7号','8号','9号','10号','11号','12号','13号','14号','15号','16号','17号','18号','19号','20号','21号','22号','23号','24号','25号','26号','27号','28号','29号','30号']
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: 'white',
        }
      },
    },
    grid:{
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "0%",
      containLabel: true
    },
    series: [
      {
        color:'orange',
        data: citypm25,
        type: 'line',
        smooth: true
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize',function(){
      myChart.resize();
  })
})();

//设置当前污染系数
(function(){
  var data1=['和田地区', '喀什地区', '巴音郭楞州', '湘潭', '榆林', '忻州'];//预制数据用来测试，下方用ajax替换数据
    var data2=['148', '133', '113', '104', '94', '93'];
    $.ajax({
      async : false,
      url:"/paihang2",
      type: 'POST',
      success: function (result) {
          data1=result.city;
          data2=result.aqi;
      }
    })

    var myChart=echarts.init(document.querySelector(".no5"));
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
        color:["rgb(183, 190, 141)"],
        xAxis: {
          type: 'category',
          axisLabel:{
            interval:1,
            rotate:0,
            textStyle: {
              color: 'rgb(221, 228, 220)',  //更改坐标轴文字颜色
              fontSize : 14      //更改坐标轴文字大小
            },
            formatter:function(value)  
		          {  
		              var ret = "";//拼接加\n返回的类目项  
		              var maxLength = 5;//每项显示文字个数  
		              var valLength = value.length;//X轴类目项的文字个数  
		              var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
		              if (rowN > 1)//如果类目项的文字大于5,  
		              {  
		                  for (var i = 0; i < rowN; i++) {  
		                      var temp = "";//每次截取的字符串  
		                      var start = i * maxLength;//开始截取的位置  
		                      var end = start + maxLength;//结束截取的位置  
		                      temp = value.substring(start, end) + "\n";  
		                      ret += temp; //凭借最终的字符串  
		                  }  
		                  return ret;  
		              }  
		              else {  
		                         return value;  
		              }  
		          }  
          },
          data:data1,

        },
        yAxis: [{
          type: 'value',
          axisLine: {
            lineStyle: {
              color: 'rgb(221, 228, 220)',
            }
          },
        }],
        series: {
          type: 'bar',
          data: data2,
          markLine:{
            data:[{
              name: '空气优',
              yAxis: 50
          },],
          label: {
            position:'start',
            fontStyle: "italic",
            fontWeight: "bold",
            color: "green",
          }
          },
          itemStyle: {
            normal: { //这里必须加normal,否者不显示夜色变化
                color: function(params) {//超过预警值显示色
                    if (data2[params.dataIndex] >50) {
                        return 'rgba(253, 238, 100, 0.863)';
                    } else {
                        return 'rgba(74, 201, 106, 0.863)';//未超过则为绿色
                    }
                }
            }
          },
        },
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
      };
      myChart.setOption(option);
      window.addEventListener('resize',function(){
        myChart.resize();
      })
})();
 

$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});