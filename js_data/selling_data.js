//ajax
$.get("data/selling.json",function(data){
	var arrSeller = data;
	var html = "";
	var pageSize = 6;
	var pageCount = 0;
	for(var i=0;i<arrSeller.length;i++){
		html += '<div class="grow_mian_bot_picA">'+
					'<a href="##"><img src="'+arrSeller[i].image+'"></a>'+
					'<div class="grow_main_bot_textA"><a href="##">'+arrSeller[i].name+'</a></div>'+
				'</div>';
		pageCount++;
		if(pageCount%6 == 0){
			$('<div class="grow_main_bot_pic clearfix">').append(html).appendTo('.grow_main_bot1');
			html = "";
		}
	}
	//只显示第一页
	$('.grow_main_bot_pic').eq(0).show().siblings('.grow_main_bot_pic').hide();
	var page = 0;//设置当前显示页面
	//下一页
	$('.grow_main_bot_button .next').on('click',function(){
		page++;
		if(page>4){
			page = 4;
			return;
		}
		$('.grow_main_bot_button .buttonA').eq(page).addClass('ac').siblings().removeClass('ac');
		$('.grow_main_bot_pic').eq(page).show().siblings('.grow_main_bot_pic').hide();
	})
	//上一页
	$('.grow_main_bot_button .prev').on('click',function(){
		page--;
		if(page<0){
			page = 0;
			return;
		}
		$('.grow_main_bot_button .buttonA').eq(page).addClass('ac').siblings().removeClass('ac');
		$('.grow_main_bot_pic').eq(page).show().siblings('.grow_main_bot_pic').hide();
	})
	//每页的数字
	$('.grow_main_bot_button .buttonA').each(function(index){
		$(this).on('click',function(){
			page = index;
			$('.grow_main_bot_button .buttonA').eq(page).addClass('ac').siblings().removeClass('ac');
			$('.grow_main_bot_pic').eq(page).show().siblings('.grow_main_bot_pic').hide();
		})
	})
});
