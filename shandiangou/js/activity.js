// 导航栏 
$(".link a").on("mouseenter",function(){
	var self = $(this);
	$(".link span").stop().animate({
		"left":self.index()*108+15
	},333);
	$(this).css("color","#000").siblings().css("color","#858585")
});
$(window).scroll(function(){ 
	//头部
	if($(window).scrollTop()>20){
		$(".header").addClass("bian");
	}else{
		$(".header").removeClass("bian");
	}
});
//公司动态
$.get("js/activity.json",function(data){
	var dataArry = data == typeof "object"?data.result:eval("("+data+")").result;
	var tampl = $("#tampl").html();
	for (var i = 0; i < dataArry.length; i++) {
		var datobj = diao(tampl,dataArry[i]);
		$(".tab-page").append(datobj);
	}
});
function diao(a,b){
	return a.replace(/\@([a-z]+)\@/g,function(match,$1,index,string){
		return b[$1];
	});
};