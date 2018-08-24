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
	function scrollLeftFn(snum,how){
		if($(window).scrollTop()>snum){
			how.animate({
				"left":0,
				"opacity":1
			},666);
		}
	}
	function scrollRightFn(snum,how){
		if($(window).scrollTop()>snum){
			how.animate({
				"right":0,
				"opacity":1
			},666);
		}
	}
	// 第一个.
	scrollLeftFn(800,$(".one>img").eq(0));
	scrollRightFn(800,$(".one>.input").eq(0));
	/*if($(window).scrollTop()>800){
		$(".one>img").eq(0).animate({
			"left":0,
			"opacity":1
		},666);
		$(".one>.input").eq(0).animate({
			"right":0,
			"opacity":1
		},666);
	}*/
	// 第二个
	scrollLeftFn(1200,$(".three>.intro"));
	scrollRightFn(1200,$(".three>img"));
	/*if($(window).scrollTop()>1200){
		$(".three>img").animate({
			"right":0,
			"opacity":1
		},666);
		$(".three>.intro").animate({
			"left":0,
			"opacity":1
		},666);
	}*/
	// 第三个
	scrollLeftFn(1800,$(".one>img").eq(1));
	scrollRightFn(1800,$(".one>.input").eq(1));
	/*if($(window).scrollTop()>1800){
		$(".one>img").eq(1).animate({
			"left":0,
			"opacity":1
		},666);
		$(".one>.input").eq(1).animate({
			"right":0,
			"opacity":1
		},666);
	}*/
});