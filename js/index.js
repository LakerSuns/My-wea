var weather;
$.ajax({
	url: 'https://www.toutiao.com/stream/widget/local_weather/data/?city=吕梁',
	dataType:"jsonp",
	type: 'get',
	success:function(obj){

		weather=obj.data.weather;
	}
})

function updata(){
	// 渲染数据   城市名
	var city_name=document.querySelector(".city");
	city_name.innerHTML=weather.city_name;
	// 当前温度
	var temperature=document.querySelector(".temperature");
	temperature.innerHTML=weather.current_temperature+"°";
	// 当前天气情况
	var condition=document.querySelector(".condition");
	condition.innerHTML=weather.current_condition;
	// 今天天气情况
	var tht=document.querySelector("#tht");
	tht.innerHTML=weather.dat_high_temperature;
	var tlt=document.querySelector("#tlt");
	tlt.innerHTML=weather.dat_low_temperature+"°";
	var TodayCond=document.querySelector(".left-bottom-cond");
	TodayCond.innerHTML=weather.day_condition;
	var todaycon=document.querySelector(".tubiao1");
	todaycon.style=`background-image:url(img/${weather.dat_weather_icon_id}.png)`;
    // 明天天气情况
  	var toht=document.querySelector("#toht");
	toht.innerHTML=weather.tomorrow_high_temperature;
	var tolt=document.querySelector("#tolt");
	tolt.innerHTML=weather.tomorrow_low_temperature+"°";
	var TomorrowCond=document.querySelector(".right-bottom-cond");
	TomorrowCond.innerHTML=weather.tomorrow_condition;
	var tomorrowcon=document.querySelector(".tubiao2");
	tomorrowcon.style=`background-image:url(img/${weather.tomorrow_weather_icon_id}.png)`;
	

	//每小时天气情况用for in循环来访问数据(数组类型的对象)
	var n2=weather.hourly_forecast;
// 用循环es6写模板字符串，优化页面
   var str="";
   weather.hourly_forecast.forEach((item,index)=>{
      str=str+`
       <div class="now">

         <h2 class="now_time">${item.hour}:00</h2>
         <div class="tupian" style="background-image:url(img/${item.weather_icon_id}.png)"></div>
         <h3 class="now_tem">${item.temperature}°</h3>
       </div>

      `

   })
   $(".wrap").html(str);

//原先的代码，JS实现每小时预报模块
// 	for (var i in weather.hourly_forecast)
// 	 {
// 		// console.log(n2[i]);
// //由i的个数自动创造now,再将now插入到页面wrap中      
//         var now=document.createElement("div");
//         now.className="now";
//         var wrap=document.querySelector(".wrap");
//         wrap.appendChild(now);


// 	    var h2=document.createElement("h2"); 
//         h2.className="now_time";
//         h2.innerHTML=weather.hourly_forecast[i].hour+":00";
//         now.appendChild(h2);

//         var tupian=document.createElement("div");
//         tupian.className="tupian";
//         tupian.style=`background-image:url(img/${weather.hourly_forecast[i].weather_icon_id}.png)`;
//         now.appendChild(tupian);

//         var h3=document.createElement("h3"); 
//         h3.className="now_tem";
//         h3.innerHTML=weather.hourly_forecast[i].temperature+"°";
//         now.appendChild(h3);
//     }
  
  var str1="";
  var weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];  

  weather.forecast_list.forEach((item,index)=>{
  // console.log(item);
  var str2=`${item.date}`;  
  var myDate = new Date(Date.parse(str2.replace(/-/g, "/"))); 
    str1=str1+`
    <div class="con">
    <div class="weekday">${weekDay[myDate.getDay()]}</div>
     <div class="date">${item.date.slice(5, 10)}</div>
     <div class="con1">${item.condition}</div>
     <div class="sun" style="background-image:url(img/${item.weather_icon_id}.png)"></div>
     <div class="highest">${item.high_temperature}°</div>
     <div class="lowest">${item.low_temperature}°</div>
     <div class="moon" style="background-image:url(img/${item.weather_icon_id}.png)"></div>
     <div class="con2">${item.condition}</div>
     <div class="con3">${item.wind_direction}</div>
     <div class="con4">${item.wind_level}级</div>
</div>
    `
  })

$(".wrap1").html(str1);
//  原先的代码，JS实现每天的预报模块   
//     for(var j in weather.forecast_list){

//     	var days=document.createElement("div");
//     	days.className="days";
//     	var wrap1=document.querySelector(".wrap1");
//     	wrap1.appendChild(days);
//     	//当前日期对应周几
//         var weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];  
//     	var str=weather.forecast_list[j].date;  
//         var myDate = new Date(Date.parse(str.replace(/-/g, "/")));  
//     	var weekday=document.createElement("div");
//     	weekday.className="weekday";
//         weekday.innerHTML=weekDay[myDate.getDay()];
//         days.appendChild(weekday);

//     	var date=document.createElement("div");
//     	date.className="date";
//     	var str=weather.forecast_list[j].date;
//     	date.innerHTML=str.slice(5,10);
//     	days.appendChild(date);

//       	var con1=document.createElement("div");
//     	con1.className="con1";
//     	con1.innerHTML=weather.forecast_list[j].condition;
//     	days.appendChild(con1);

//       	var sun=document.createElement("div");
//     	sun.className="sun";
//     	sun.style=`background-image:url(img/${weather.forecast_list[j].weather_icon_id}.png)`;
//     	days.appendChild(sun);

//        	var highest=document.createElement("div");
//     	highest.className="highest";
//     	highest.innerHTML=weather.forecast_list[j].high_temperature+"°";
//     	days.appendChild(highest);

//      	var lowest=document.createElement("div");
//     	lowest.className="lowest";
//     	lowest.innerHTML=weather.forecast_list[j].low_temperature+"°";
//     	days.appendChild(lowest);

//      	var moon=document.createElement("div");
//     	moon.className="moon";
//     	moon.style=`background-image:url(img/${weather.forecast_list[j].weather_icon_id}.png)`;
//     	days.appendChild(moon);

//       	var con2=document.createElement("div");
//     	con2.className="con2";
//     	con2.innerHTML=weather.forecast_list[j].condition;
//     	days.appendChild(con2);

//       	var con3=document.createElement("div");
//     	con3.className="con3";
//     	con3.innerHTML=weather.forecast_list[j].wind_direction;
//     	days.appendChild(con3);

//       	var con4=document.createElement("div");
//     	con4.className="con4";
//     	con4.innerHTML=weather.forecast_list[j].wind_level+"级";
//     	days.appendChild(con4);
// } 
}   	

var citys;
$.ajax({
	url: 'https://www.toutiao.com/stream/widget/local_weather/city/',
	dataType:"jsonp",
	type: 'get',
	success:function(obj){

		citys=obj.data;
	}
})
function updata1(){
  // var kuang1=document.getElementById("search_box");
  // console.log(kuang1.value);
	var popcity=document.querySelector(".popcity");
    for (var m in citys) {

	   var h1=document.createElement("h1");
	   h1.className="h1";
	   h1.innerHTML=m;
	   popcity.appendChild(h1);
    
    	// console.log(citys[m]);
    for(var m1 in citys[m]){
	   var second_citys=document.createElement("div");
	   second_citys.className=("second_citys");
	   second_citys.innerHTML=m1;
	   popcity.appendChild(second_citys);
       }
   }
 }
 function AJAX(str){
 	var url1=`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`;
   $.ajax({
    url:url1,
    dataType:"jsonp", 
    type:"get",	
    success:function(obj){
		weather=obj.data.weather;
    	updata();
        $(".location").css({"display":"none"});
    }
})
 }

window.onload=function(){
     updata();
     updata1();
     $(".second_citys").on("click",function(){
     	var city1=this.innerHTML;
     	AJAX(city1);
     })
     $(".chengshi").on("click",function(){
     	var city1=this.innerHTML;
     	AJAX(city1);
     })
     $(".city").on("click",function(){
     	$(".location").css({"display":"block"});
     })
       var bt=document.getElementById("bt2");
       var btt=document.getElementById("bt1");
       bt.onclick=function(){
                    console.log(bt1.value);
                    var input_city=bt1.value;
                    AJAX(input_city);
                }
      //   $("#bt1.value").on("click",function(){
     	// var city1=this.innerHTML;
     	// AJAX(city1);
     }


     //获取数据
// $("input").on("focus",function(){
// 	 	 $(".search-right").html("搜索");
// 	 })
// 	var button=document.querySelector(".search-right");
// 	 console.log(button);
	
// 	button.onclick=function(){
// 		var text=button.innerText;
// 		if(text=="取消"){
// 			$(".location").css({"display":"none"});
// 	}
// 		else{
// 			var str1=document.querySelector("input").value;
// 			for (var i in data) {
// 				for (var j in data[i]) {
// 					if(str1==j){
// 						AJAX(str1);
// 						return;
// 					}
// 					// else(str1==j+"市"){
// 					// 	AJAX(str1);
// 					// }
// 				}
				
// 			}
// 			alert("没有该城市");
// 		}
	