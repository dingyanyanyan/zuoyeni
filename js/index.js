
$(function(){
	
	var Swiper1 = new Swiper(".swiper-container", {
				pagination: ".swiper-pagination", //分页
				paginationClickable: true, //分页可点
				prevButton: ".swiper-button-prev", //左
				nextButton: ".swiper-button-next", //右
				autoplay: 1000, //自动轮播
				loop:true,
				speed:1000,
				effect:"fade",  //淡入淡出
				fade:{
					crossFade:true
				},
				autoplayDisableOnInteraction: false, //拖动之后继续轮播
//				scrollbarSnapOnRelease: true, //如果设置为true，释放滚动条时slide自动贴合 
			});
	

	
	$(".three>.three_third>li").hover(function(){
		$(".three_third_nei>ul").eq($(this).index()).show();
	},function(){
		$(".three_third_nei>ul").eq($(this).index()).hide();
	})

	$(".four>.four_left>li").hover(function(){
		$(".four_left_hidden>ul").eq($(this).index()).show();
	},function(){
		$(".four_left_hidden>ul").eq($(this).index()).hide();
	})

	
	$('.six_top_two span').click(function(){
		$('.six_top_two span').removeClass('active');
		$('.six_bot ul').removeClass('six_bottom');
		$(this).addClass('active');	
		$('.six_bot ul').eq($(this).index()).addClass('six_bottom');
	})	

	
	
	$('.seven1_one2 li').click(function(){
		$('.seven1_one2 li').removeClass('seven1_one2_first');
		$('.seven1_two div').removeClass('seven1Two');
		$(this).addClass('seven1_one2_first');	
		$('.seven1_two div').eq($(this).index()).addClass('seven1Two');
	})	
	
	
	
	
	
})



