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
        var city=['林芝', '阿坝藏族羌族自治州', '阿勒泰地区', '玉树藏族自治州', '黔西南布依族苗族自治州', '昌都', '山南', '阿里地区', '迪庆州', '昭通', '毕节', '黑河', '锡林郭勒盟', '丽江', '海北藏族自治州', '甘南州', '伊犁哈萨克州', '楚雄州', '大理州', '三亚'];
        var aqi=['4', '9', '11', '12', '13', '15', '16', '17', '19', '20', '20', '21', '22', '22', '23', '23', '23', '24', '24', '25'];
        $.ajax({
          async : false,
          url:"/paihang",
          type: 'POST',
          success: function (result) {
            city=result.city;
            aqi=result.aqi;
          }
        })
        document.getElementById("c1").innerHTML = city[0];
        document.getElementById("c2").innerHTML = city[1];
        document.getElementById("c3").innerHTML = city[2];
        document.getElementById("c4").innerHTML = city[3];
        document.getElementById("c5").innerHTML = city[4];
        document.getElementById("c6").innerHTML = city[5];
        document.getElementById("c7").innerHTML = city[6];
        document.getElementById("c8").innerHTML = city[7];
        document.getElementById("c9").innerHTML = city[8];
        document.getElementById("c10").innerHTML = city[9];
        document.getElementById("c11").innerHTML = city[10];
        document.getElementById("c12").innerHTML = city[11];
        document.getElementById("c13").innerHTML = city[12];
        document.getElementById("c14").innerHTML = city[13];
        document.getElementById("c15").innerHTML = city[14];
        document.getElementById("c16").innerHTML = city[15];
        document.getElementById("c17").innerHTML = city[16];
        document.getElementById("c18").innerHTML = city[17];
        document.getElementById("c19").innerHTML = city[18];
        document.getElementById("c20").innerHTML = city[19];

        document.getElementById("q1").innerHTML = aqi[0];
        document.getElementById("q2").innerHTML = aqi[1];
        document.getElementById("q3").innerHTML = aqi[2];
        document.getElementById("q4").innerHTML = aqi[3];
        document.getElementById("q5").innerHTML = aqi[4];
        document.getElementById("q6").innerHTML = aqi[5];
        document.getElementById("q7").innerHTML = aqi[6];
        document.getElementById("q8").innerHTML = aqi[7];
        document.getElementById("q9").innerHTML = aqi[8];
        document.getElementById("q10").innerHTML = aqi[9];
        document.getElementById("q11").innerHTML = aqi[10];
        document.getElementById("q12").innerHTML = aqi[11];
        document.getElementById("q13").innerHTML = aqi[12];
        document.getElementById("q14").innerHTML = aqi[13];
        document.getElementById("q15").innerHTML = aqi[14];
        document.getElementById("q16").innerHTML = aqi[15];
        document.getElementById("q17").innerHTML = aqi[16];
        document.getElementById("q18").innerHTML = aqi[17];
        document.getElementById("q19").innerHTML = aqi[18];
        document.getElementById("q20").innerHTML = aqi[19];

        
      })();

      (function(){
        var src=[];
        var update=[];
        $.ajax({
          async : false,
          url:"/update",
          type: 'POST',
          success: function (result) {
            src=result.src;
            update=result.update;
          }
        })
        document.getElementById("img").src = src;
        document.getElementById("update").innerHTML = update;
        
      })();

      $(window).on("load",function(){
        $(".loader-wrapper").fadeOut("slow");
      });