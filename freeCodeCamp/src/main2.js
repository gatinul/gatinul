$(document).ready(function(){
$.ajax({
		type:"get",
		url:"http://op.juhe.cn/onebox/weather/query",
		async:true,
		dataType:"jsonp",
		data:{"cityname":"沈阳",
			  "key":"cfdd989dd5ebd2c84cbc2b210fed2521"
		},
		success:function(data){
			vm.info = data.result.data.realtime.weather.info;
			vm.temp = data.result.data.realtime.weather.temperature+'度';
			vm.tdate = data.result.data.realtime.date;
			vm.wind = data.result.data.realtime.wind.direct+' '+data.result.data.realtime.wind.power;
			vm.wear = data.result.data.life.info.chuanyi;
			vm.clean = data.result.data.life.info.xiche;
			vm.sport = data.result.data.life.info.yundong;
			vm.sun = data.result.data.life.info.ziwaixian;
			vm.time = data.result.data.pm25.dateTime;
			vm.level = data.result.data.pm25.pm25.level;
			vm.quality = data.result.data.pm25.pm25.quality;
			vm.des = data.result.data.pm25.pm25.des;
			weather.set(vm.city,vm.info)
			weatherImg();
		}
});
var vm = avalon.define({
	$id:"weather",
	city : "沈阳",
	tdate : "",
	info : "",
	temp : "",
	wind : "",
	wear : "",
	clean : "",
	sport : "",
	sun : "",
	time : "",
	level : "",
	quality : "",
	des : "",
	cities : ["沈阳","北京","上海","天津","重庆","深圳","大连","三亚","哈尔滨","昆明","广州","济南","青岛"]
});

var weather = new Map();
$('select').change(function(){
   vm.city = $(this).val();
   $.ajax({
		type:"get",
		url:"http://op.juhe.cn/onebox/weather/query",
		async:true,
		dataType:"jsonp",
		data:{"cityname":vm.city,
			  "key":"cfdd989dd5ebd2c84cbc2b210fed2521"
		},
		success: function(data) {
			vm.info = data.result.data.realtime.weather.info;
			vm.temp = data.result.data.realtime.weather.temperature+'度';
			vm.tdate = data.result.data.realtime.date;
			vm.wind = data.result.data.realtime.wind.direct+' '+data.result.data.realtime.wind.power;
			vm.wear = data.result.data.life.info.chuanyi;
			vm.clean = data.result.data.life.info.xiche;
			vm.sport = data.result.data.life.info.yundong;
			vm.sun = data.result.data.life.info.ziwaixian;
			vm.time = data.result.data.pm25.dateTime;
			vm.level = data.result.data.pm25.pm25.level;
			vm.quality = data.result.data.pm25.pm25.quality;
			vm.des = data.result.data.pm25.pm25.des;
			weather.set(vm.city,vm.info)
			weatherImg();
		}
	});
	
})
//设置对应天气的图片
function weatherImg(){
	var sunrain = weather.get(vm.city);
	console.log(sunrain);
	if(sunrain == "晴") {
		$('#weatherImg').removeClass().addClass('sunImg');
	} else if(sunrain == "多云") {
		$('#weatherImg').removeClass().addClass('cloudyImg');
	} else {
		$('#weatherImg').removeClass().addClass('rainImg');
	}
}
});

