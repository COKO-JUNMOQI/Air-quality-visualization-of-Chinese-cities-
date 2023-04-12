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
    var myChart=echarts.init(document.querySelector(".no1"));
    var option;
    option = {
        series: [
          {
            roam: false,
            type: 'treemap',
            name: '污染物',
            leafDepth: 1,
            drillDownIcon: '▶',
            data: [
              {
                name: 'SO2',
                value: 10,
                children: [
                    {
                      name: '个人防治',
                      value: 4,
                      children: [
                        {
                          name: '勤通风，避免燃烧工业产品和有害物质，强化自我保护意识。',
                          value: 4,
                          
                        },
                      ]
                    },
                    {
                      name: '城市防治',
                      value: 6,
                      children: [
                      {
                        name: '1、原煤脱硫技术2、优先使用低硫燃料3、改进燃煤技术4.采用烟气脱硫5.开发新能源',
                        value: 4,
                        
                      },
                    ]
                    }
                  ]
              },
              {
                name: 'PM2.5',
                value: 10,
                children: [
                    {
                      name: '个人防治',
                      value: 4,
                      children: [
                        {
                          name: '1、雾霾天气少开窗，最好不出门或晨练 2、外出戴专业防尘口罩 3、多喝桐桔梗茶、桐参茶、桐桔梗颗粒、桔梗汤等“清肺除尘”茶饮',
                          value: 4,
                          
                        },
                      ]
                    },
                    {
                      name: '城市防治',
                      value: 6,
                      children: [
                      {
                        name: '控制源头，加强工业粉尘治理.改善能源消耗结构.控制尾气排放',
                        value: 4,
                        
                      },
                    ]
                    }
                  ]
              },
              {
                name: 'PM10',
                value: 10,
                children: [
                    {
                      name: '个人防治',
                      value: 4,
                      children: [
                        {
                          name: '1、外出的时候戴口罩。2、合理洗脸，避免pm10在脸上残留。',
                          value: 4,
                          
                        },
                      ]
                    },
                    {
                      name: '城市防治',
                      value: 6,
                      children: [
                      {
                        name: '严格控制燃煤污染排放，加强清洁能源利用.加强机动车尾气排放整治工作.加大对建筑施工过程扬尘控制力度.进一步完善大气颗粒物污染监测体系',
                        value: 4,
                        
                      },
                    ]
                    }
                  ]
              },
              {
                name: 'CO',
                value: 10,
                children: [
                    {
                      name: '个人防治',
                      value: 4,
                      children: [
                        {
                          name: '在寒冷季节如有条件尽量选择集中供暖。要经常门窗通风换气，保持室内空气新鲜。正确安装使用煤炉、炭火等取暖设备，定期检查炉具，维护和清扫烟筒、风斗，保持烟筒、风斗畅通。',
                          value: 4,
                          
                        },
                      ]
                    },
                    {
                      name: '城市防治',
                      value: 6,
                      children: [
                      {
                        name: '制定政策限制有害气体排放',
                        value: 4,
                        
                      },
                    ]
                    }
                  ]
              },
              {
                name: 'NO2',
                value: 10,
                children: [
                    {
                      name: '个人防治',
                      value: 4,
                      children: [
                        {
                          name: '定期对生产环境中的化学品进行监测，采取必要的措施，使作业环境浓度降至劳动卫生标准要求之内，如采用无毒和低毒物质替代有毒化学品，采取密闭，通风等装置。',
                          value: 4,
                          
                        },
                      ]
                    },
                    {
                      name: '城市防治',
                      value: 6,
                      children: [
                      {
                        name: '1、将废气中的NO×还原成N2 2、利用吸收材料、吸附剂吸附废气中的NO×3、用水或酸、碱、盐的水溶液来吸收废气中的氮氧化合物，使废气得以净化',
                        value: 4,
                        
                      },
                    ]
                    }
                  ]
              },
              {
                name: 'O3',
                value: 10,
                children: [
                    {
                      name: '个人防治',
                      value: 4,
                      children: [
                        {
                          name: '避开臭氧污染高峰时段外出,臭氧污染时关窗,控制二氧化氮和VOC的排放',
                          value: 4,
                          
                        },
                      ]
                    },
                    {
                      name: '城市防治',
                      value: 6,
                      children: [
                      {
                        name: '减少前体物氮氧化物和挥发性有机物的排放。燃煤锅炉清洁改造、散煤清洁化替代，淘汰高排放车、储油库油气回收减少氮氧化物排放，产业结构调整退出了部分排放挥发性有机物的行业。',
                        value: 4,
                        
                      },
                    ]
                    }
                  ]
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
  var now=90;
  $.ajax({
    async : false,
    url:"/rightupchart",
    type: 'POST',
    success: function (result) {
      now=result.data;
    }
    
  })
  document.getElementById("aqi").innerHTML = now;
  if(now<=50){
    document.getElementById("quality").innerHTML = '优';
    document.getElementById("advise").innerHTML = '各类人群可正常活动。';
    document.getElementById("kepu").innerHTML = '空气质量级别为一级，空气质量状况属于优。';
  }else if(now<=100){
    document.getElementById("quality").innerHTML = '良';
    document.getElementById("advise").innerHTML = '温馨提示：可以正常在户外活动，易敏感人群应减少外出。';
    document.getElementById("kepu").innerHTML = '空气质量级别为二级，空气质量状况属于良。';
  }else if(now<=150){
    document.getElementById("quality").innerHTML = '轻度';
    document.getElementById("advise").innerHTML = '温馨提示：建议儿童、老年人及心脏病、呼吸系统疾病患者应减少长时间、高强度的户外锻炼。';
    document.getElementById("kepu").innerHTML = '空气质量级别为三级，空气质量状况属于轻度污染。';
  }else if(now<=200){
    document.getElementById("quality").innerHTML = '中度';
    document.getElementById("advise").innerHTML = '温馨提示：建议疾病患者避免长时间、高强度的户外锻练，一般人群适量减少户外运动。';
    document.getElementById("kepu").innerHTML = '空气质量级别为四级，空气质量状况属于中度污染。';
  }else if(now<=300){
    document.getElementById("quality").innerHTML = '重度';
    document.getElementById("advise").innerHTML = '温馨提示：建议儿童、老年人和心脏病、肺病患者应停留在室内，停止户外运动，一般人群减少户外运动。';
    document.getElementById("kepu").innerHTML = '空气质量级别为五级，空气质量状况属于重度污染。';
  }else{
    document.getElementById("quality").innerHTML = '严重';
    document.getElementById("advise").innerHTML = '温馨提示：建议儿童、老年人和病人应当留在室内，避免体力消耗，一般人群应避免户外活动。';
    document.getElementById("kepu").innerHTML = '空气质量级别为六级，空气质量状况属于严重污染。';
  }
  
})();


(function(){
  $.ajax({
    async : false,
    url:"/mid",
    type: 'POST',
    success: function (result) {
      fc=result.grade;
    }
  })
  var date = new Date();
  var day = date.getDate();
  day=+day<10?"0"+day:day;
  if(day>23)
    day-=5;
  document.getElementById("ql1").innerHTML = fc[day-1];
  document.getElementById("ql2").innerHTML = fc[day-1+1];
  document.getElementById("ql3").innerHTML = fc[day-1+2];
  document.getElementById("ql4").innerHTML = fc[day-1+3];
  document.getElementById("ql5").innerHTML = fc[day-1+4];
  if(fc[day-1]=='优')
    document.getElementById("day1").style.backgroundImage="url(../static/images/child-1.png)";
  else if(fc[day-1]=='良')
    document.getElementById("day1").style.backgroundImage="url(../static/images/child-2.png)";
  else
    document.getElementById("day1").style.backgroundImage="url(../static/images/child-3.png)";
  if(fc[day-1+1]=='优')
    document.getElementById("day2").style.backgroundImage="url(../static/images/child-1.png)";
  else if(fc[day-1+1]=='良')
    document.getElementById("day2").style.backgroundImage="url(../static/images/child-2.png)";
  else
    document.getElementById("day2").style.backgroundImage="url(../static/images/child-3.png)";
  if(fc[day-1+2]=='优')
    document.getElementById("day3").style.backgroundImage="url(../static/images/child-1.png)";
  else if(fc[day-1+2]=='良')
    document.getElementById("day3").style.backgroundImage="url(../static/images/child-2.png)";
  else
    document.getElementById("day3").style.backgroundImage="url(../static/images/child-3.png)";
  if(fc[day-1+3]=='优')
    document.getElementById("day4").style.backgroundImage="url(../static/images/child-1.png)";
  else if(fc[day-1+3]=='良')
    document.getElementById("day4").style.backgroundImage="url(../static/images/child-2.png)";
  else
    document.getElementById("day4").style.backgroundImage="url(../static/images/child-3.png)";
  if(fc[day-1+4]=='优')
    document.getElementById("day5").style.backgroundImage="url(../static/images/child-1.png)";
  else if(fc[day-1+4]=='良')
    document.getElementById("day5").style.backgroundImage="url(../static/images/child-2.png)";
  else
    document.getElementById("day5").style.backgroundImage="url(../static/images/child-3.png)";
})();

$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});