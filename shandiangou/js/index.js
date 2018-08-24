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
	if($(window).scrollTop()>=600){
		$(".srcD").animate({
			"left":"10%",
			"opacity":1
		},555)
	}
	if($(window).scrollTop()>=3400){
		$(".sec4 .word").animate({
			"left":"-5%",
			"opacity":1
		},555)
	}
});
// 轮播图
$(".menus span").on("click",function(){
	$(this).css("opacity","1").siblings().css("opacity",".2");
	$(".item").eq($(this).index()).fadeIn().siblings().fadeOut();
});
var LunBoNum = 0;
var timer = setInterval(function(){
	LunBoNum++;
	if(LunBoNum>1){
		LunBoNum=0;
	}
	$(".menus span").eq(LunBoNum).css("opacity","1").siblings().css("opacity",".2");
	$(".item").eq(LunBoNum).fadeIn().siblings().fadeOut();
},2500);
$(".slider").on("mouseenter",function(){
	clearInterval(timer);
})
$(".slider").on("mouseleave",function(){
	timer = setInterval(function(){
		LunBoNum++;
		if(LunBoNum>1){
			LunBoNum=0;
		}
		$(".menus span").eq(LunBoNum).css("opacity","1").siblings().css("opacity",".2");
		$(".item").eq(LunBoNum).fadeIn().siblings().fadeOut();
	},2500);
})
// 优秀案例
$("#tab-btns span").on("click",function(){
	$(this).addClass("select").siblings().removeClass("select");
	$("#tab-pages").children().eq($(this).index()).css("display","block").siblings().css("display","none");
});