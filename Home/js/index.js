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
			
			$(".slides").css("transform","translateX(-"+str*num+"px)");
			
			if($(this).index() == 4){
            	setTimeout(function(){
            		// 使用刚指定的配置项和数据显示图表。
            		myChart.setOption(option);
            	},500)
			}
		})
	}
	
	photo(){
		
		$(".thumb").on("click",function(){
			
			$(".BigBox").removeClass("xiao")
			
			var str = $(this)[0]["childNodes"][3].children[0]["attributes"][0]["nodeValue"];
			
			$(".BigBox img")[0].src = "b"+str;
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

// 数据
var myChart = echarts.init(document.getElementById('main'),'vintage');

            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: '网页日浏览量',
                    textStyle: {
                        color:"#fff"
                    },
                },
                // 提示框
                tooltip: {
                    show:true,
                    trigger: 'axis',
                    // 提示框文字样式
                    textStyle: {
                        fontSize: 16,
                    },
//                  borderColor: '#ffcd42',
                },
                legend: {
                    data:['人次'],
                    textStyle: {
                        color:"#fff"
                    },
                },
                color:['#af81fb'],
                xAxis: {
                    data: ["18/9/17","18/9/18","18/9/19","18/9/20","18/9/21","18/9/22"],
                    type:"category"
                },
                yAxis: {},
                series: [{
                    name: '人次',
                    type: 'line',
                    data: [5, 20, 28, 10, 10, 20]
                }],
                textStyle: {
                    color: '#fff',
                },
            };

            