$(function(){
	//header的二级导航，style里面有样式，去index里面复制一下结构
	function navtwo(){
		$(".nav-header li").mouseenter(function(){
			$(this).addClass('active');
			//$(".popup").show();
		});
		
		$(".nav-header li").mouseleave(function(){
			var _this=$(this).index();
			$(this).removeClass('active')
//			$(".popup").hover(
//				function(){
//					$(".nav-header li").eq(_this).addClass('active').siblings().removeClass('active');
//					$(this).show();
//				},
//				function(){
//					$(".nav-header li").removeClass('active');
//					$(this).hide();
//				}
//			);
//			$(".popup").hide();
		})
	};
	navtwo();
	
	//轮播图-----------------------
	function banner(){
		for(var i=0;i<$(".banner-inner").size();i++){
			var li="<li></li>";
			$(".banner .number").append(li);
			$(".banner-inner").eq(0).css("opacity",1).siblings().css("opacity",0);
			$(".number li").eq(0).addClass("active");
		}
			$(".number li").mouseenter(function(){
				$(this).addClass("active").siblings().removeClass("active");
				var j=$(this).index();
				k=j;
				$(".banner-inner").eq(j).css("opacity",1).siblings().css("opacity",0);
			});
			var k=0;
			//var t_timer=setInterval(right_tab,2000);
			function left_tab(){
				k--;
				if(k<0){
					k=$(".banner-inner").size()-1;
				}
				$(".number li").eq(k).addClass("active").siblings().removeClass("active");
				$(".banner-inner").eq(k).css("opacity",1).siblings().css("opacity",0);
			};
			function right_tab(){
				k++;
				if(k>=$(".banner-inner").size()){
					k=0;
				};
				$(".number li").eq(k).addClass("active").siblings().removeClass("active");
				$(".banner-inner").eq(k).css("opacity",1).siblings().css("opacity",0);
			};
			$(".banner .left").click(function(){
				console.log(1);
				left_tab();
			});
			//右箭头调用
			$(".banner .right").click(function(){
				console.log(2);
				right_tab();
			});
//			$(".banner").hover(
//				function(){
//					clearInterval(t_timer);
//				},
//				function(){
//					t_timer=setInterval(right_tab,2000);
//				}
//			)
			
		
	};
	banner();
	
	
	
	
	
	
	
	//首页右下角的选项卡新闻
	function newsright(){
		var aLi=$(".news-right .title li");
		aLi.each(function(i){
			aLi.eq(i).mouseenter(function(){
				$(this).addClass('active show').siblings().removeClass('active hide');
				$(".news-list").addClass('hide');
				$(".news-list").eq($(this).index()).removeClass('hide');
			})
		})
	};
	newsright()
	
	function canping(){
		$(".canping li").mouseenter(function(){
			$(this).addClass('active').siblings().removeClass('active');
		})
	};
	canping();
	
	//banner下面的轮播图
	function big_pic(){
		var num=0;
		$(".big-pic .click .left").click(function(){
			num--;
			if(num<0){
				num=$(".big-pic li").size()-1;
			};
			$(".big-pic li").eq(num).show().siblings().hide();
		});
		$(".big-pic .click .right").click(function(){
			num++;
			if(num>$(".big-pic li").size()-1){
				num=0
			};
			$(".big-pic li").eq(num).show().siblings().hide();
		})
	};
	big_pic();
	
	
	
	
})
