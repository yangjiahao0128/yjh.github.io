(function(){
class action{
	constructor(){
		this.skip();
		this.photo();
	}
	skip(){
		$("li").on("click",function(){
			var str = $(this).index();
			$("li a").removeClass("active");
			$(this.children).addClass("active");
			let num = document.body.clientWidth;
			$(".slides").css("transform","translateX(-"+str*num+"px)")
		})
	}
	photo(){
		$(".thumb").on("click",function(){
			$(".BigBox").removeClass("xiao")
			var str = $(this)[0]["childNodes"][3].children[0]["attributes"][0]["nodeValue"];
			$(".BigBox img")[0].src = str
		});
		$(".close").on("click",function(){
			if($(".BigBox").css("display")=="block"){
				$(".BigBox").addClass("xiao")
			}
		})
		$(".BigBox").on("click",function(){
			if($(".BigBox").css("display")=="block"){
				$(".BigBox").addClass("xiao")
			}
		})
	}
}
new action();
}())
