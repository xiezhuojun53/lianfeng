//-----newsAjax异步请求数据；------------------------------------------------
	$.get("data/news.json",function(data){
		console.log(data)
		var item=data;//因为上面转换了格式，这里已经是json格式了	
		var pageSize = 5;//页面容量
		var pageCount = 0;//item计数
		var html="";
			for(var i=0;i<item.length;i++){
				html+='<div class="news-list">'+
					'<div class="left"><img src='+item[i].image+'></div>'+
					'<div class="mid">'+
						'<div class="mid-top clearfix">'+
							'<span class="left">'+item[i].title+'</span>'+
							'<span class="right">'+item[i].data+'</span>'+
						'</div>'+
						'<div class="mid-bot">'+
							'<div class="line"></div>'+
							'<p>'+item[i].content+'</p>'+
						'</div>'+
					'</div>'+
					'<div class="right-a">'+
						'<ul>'+
							'<li></li>'+
							'<li></li>'+
							'<li></li>'+
						'</ul>'+
					'</div>'+
				'</div>';
				pageCount++;
				if(pageCount%5==0){
					$('<div>').addClass('page').append(html).appendTo('.news-main');
					html="";
				}
			}
			$('.page').eq(0).show().siblings().hide();//默认显示第一页
			$('.news .number li').eq(0).addClass('active');
			$('.news .number li').each(function(index){
				$(this).on('click',function(){
					$('.news .number li').eq(index).addClass('active').siblings().removeClass('active');
					$('.page').eq(index).show().siblings().hide();
				})
			});
	},"json")