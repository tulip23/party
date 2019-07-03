$(function(){

$(".list li").css("cursor","pointer")
$('.list li').click(function(){

	var index=$(this).index();

	//实现排他 淡入淡出
	
	$('#boxcontain section').eq(index).siblings().removeClass('current').fadeOut(500)
	
	$('#boxcontain section').eq(index).addClass('current').fadeIn(2500)
	console.log($('#boxcontain section').eq(index));	
})		
		
	$('.filterby').click(function(){
		$('.blackbox').slideToggle(1000)
	})
//---------------最后一个盒子----------------
	$('.menuall').click(function(){
		$('.filterby').fadeIn(3000);
		$('.feature').fadeIn(3000);
		$('.product').fadeIn(3000);
		$('.entertain').fadeIn(3000);
		$('.branding').fadeIn(3000);
		$('.bot').fadeOut()
	})
})


	//------------------图片翻转---------------------
	
			
//-----------------------section current-----------------------
//$('#floatscroll').height()-wintop	
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		var wintop = $(window).height()

		if(top>400){
		$('#floatscroll').addClass('rotatesimg');
		$('#floatscroll2').addClass('rotatesimg');	
		}

		if(top>600){
		$('#floatscroll3').addClass('rotatesimg');
		$('#floatscroll4').addClass('rotatesimg');
		}
		
		if(top>800){
		$('#floatscroll5').addClass('rotatesimg');
		$('#floatscroll6').addClass('rotatesimg');

		}
		
		if(top>1200){
		$('#floatscroll7').addClass('rotatesimg');
		$('#floatscroll8').addClass('rotatesimg');		
		}
		
		if(top>1650){
		$('#floatscroll9').addClass('rotatesimg');
		$('#floatscroll10').addClass('rotatesimg');
		}
		
		if(top>1850){
		$('#floatscroll11').addClass('rotatesimg');
		}		
	})
	

