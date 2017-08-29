$(function(){
	//选项卡效果
	$('.branch').hide();
	$('.branch1').show();
	//二级导航
	$('.subnav li').eq(0).addClass('ac');
	$('.subnav li').each(function(index,element){
		$(this).on('click',function(){
			$(this).addClass('ac').siblings().removeClass('ac');
			$('.branch').eq(index).show().siblings().hide();
		});
	});
	//切换图片品牌文化；
	$(".grow_main_bot_facetobox_picB").on("click",function(){
		var i=$(this).index();
		var img=$(this).html()
;		var html_t=$(this).html();
		$(".grow_main_bot_facetobox_picA").html(img);
	});
	//---点击hover效果精品定制-----------------------------------
	$(".product4_main").find(".con1 .more").hover(function(){
		$(this).addClass("active");
	},function(){
		$(this).removeClass("active");
	})
	
	//--------------------------------------------------------------------------------
		//====================================================================
	//奖状展示区
	//上========
	$('.branch2 .showroom_top .showroom_bigPic').css('opacity',0);
	$('.branch2 .showroom_top .showroom_bigPic').eq(0).css('opacity',1);
	
	//下=========
	var ul_width = ($('.branch2 .showroom_bot_inner .showroom_list li').width()+10)*$('.branch2 .showroom_bot_inner .showroom_list li').size();
	$('.branch2 .showroom_bot_inner .showroom_list ul').width(ul_width);
	//控制左右
	$('.branch2 .showroom_bot_inner .showroom_l_btb').on('click',function(){
		if($('.branch2 .showroom_bot_inner .showroom_list ul').position().left<0){
			$('.branch2 .showroom_bot_inner .showroom_list ul').animate({
				"left":0 +"px"
			},500);
		}
	});
	$('.branch2 .showroom_bot_inner .showroom_r_btb').on('click',function(){
		if(-$('.branch2 .showroom_bot_inner .showroom_list ul').position().left<$('.branch2 .showroom_bot_inner .showroom_list').width()){
			$('.branch2 .showroom_bot_inner .showroom_list ul').animate({
				"left":-$('.branch2 .showroom_bot_inner .showroom_list').width() +"px"
			},500);
		}
	});
	//点击换图
	$('.branch2 .showroom_bot_inner .showroom_list li').each(function(index){
		$(this).on('click',function(){
			$('.branch2 .showroom_top .showroom_bigPic').eq(index).css('opacity',1).siblings().css('opacity',0);
		});
	});
	//--------------------联丰模板more的切换---------------------------------------------
	$('.product2_main_more').click(function(){
		$('.product3_main').show();
		$('.product2_main').hide()
	})
	
	$('.product3_main .return').click(function(){
		$('.product2_main').show();
		$('.product3_main').hide()
	})
	//================终端展示上下===================================================================
	
	$('.grow_main_bot_facetobox_buttonup').on('click',function(){
		$('.grow_main_bot_facetobox_wrap_pic').animate({
				"top":-760 +"px"
			},500);
	});
	$('.grow_main_bot_facetobox_buttondown').on('click',function(){
		$('.grow_main_bot_facetobox_wrap_pic').animate({
				"top":0 +"px"
			},500);
	});
})