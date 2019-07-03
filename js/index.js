$(function(){
	$(document).scroll(function(){		
		var height = $('.imgcontain1').offset().top;
		var height2 = $('.imgcontain2').offset().top;
		var height3 = $('.imgcontain3').offset().top;
		var height4 = $('.imgcontain4').offset().top;
		var height5 = $('.imgcontain5').offset().top;
//		console.log(height)
		var top = $(this).scrollTop();
		console.log(top)
		

//-------------------第一个动画----------------------
		if(top>height-$(window).height()){
			console.log('aaa')
		$('.imgcontain1 img').fadeIn();	
		$('.imgcontain1').addClass('rotatesimg');			
		}
		
		if(top>height-100){
			$('.experience').fadeIn()
			$('.experience').animate({},function(){
			$(".experience").css({'transform':'translateY(80px)','transition':'2s'});  
		});
		}
		
		if(top>height-100){
			$('.for').fadeIn()
			$('.for').animate({},function(){
			$(".for").css({'transform':'translateY(80px)','transition':'2s'});  
		});
		}
		if(top>height-150){
			$('.scrool').fadeIn()
			$('.scrool').animate({},function(){
			$(".scrool").css({'transform':'translateY(0px)','transition':'2s'});  
		});
		}

//-----------------------------第二个动画------------------------------
		if(top>720){
			console.log('bbb')
		$('.imgcontain2').fadeIn();	
		$('.imgcontain2').addClass('rotatesimg');			
		}

		if(top>1000){
			$('.experience2').fadeIn()
			$('.experience2').animate({},function(){
			$(".experience2").css({'transform':'translateY(80px)','transition':'2s'});  
		});
		}
		
		if(top>1050){
			$('.for2').fadeIn()
			$('.for2').animate({},function(){
			$(".for2").css({'transform':'translateY(80px)','transition':'2s'});  
		});
		}
		if(top>1100){
			$('.scrool2').fadeIn()
			$('.scrool2').animate({},function(){
			$(".scrool2").css({'transform':'translateY(0px)','transition':'2s'});  
		});
		}

//-----------------------------第三个动画------------------------------

		if(top>1400){
			console.log('ccc')
		$('.imgcontain3').fadeIn();	
		$('.imgcontain3').addClass('rotatesimg');			
		}

		if(top>1650){
			$('.experience3').fadeIn()
			$('.experience3').animate({},function(){
			$(".experience3").css({'transform':'translateY(80px)','transition':'2s'});  
		});
		}
		
		if(top>1700){
			$('.for3').fadeIn()
			$('.for3').animate({},function(){
			$(".for3").css({'transform':'translateY(80px)','transition':'2s'});  
		});
		}
		if(top>1750){
			$('.scrool3').fadeIn()
			$('.scrool3').animate({},function(){
			$(".scrool3").css({'transform':'translateY(0px)','transition':'2s'});  
		});
		}		
		
//-----------------------------第四个动画------------------------------		
		if(top>2180){
			console.log('ddd')
		$('.imgcontain4').fadeIn();	
		$('.imgcontain4').addClass('rotatesimg');			
		}
		if(top>2500){
			$('.experience4').fadeIn()
			$('.experience4').animate({},function(){
			$(".experience4").css({'transform':'translateY(80px)','transition':'2s'});  
		});
		}
		
		if(top>2550){
			$('.for4').fadeIn()
			$('.for4').animate({},function(){
			$(".for4").css({'transform':'translateY(80px)','transition':'2s'});  
		});
		}
		if(top>2600){
			$('.scrool4').fadeIn()
			$('.scrool4').animate({},function(){
			$(".scrool4").css({'transform':'translateY(0px)','transition':'2s'});  
		});
		}	
	
//-----------------------------第五个动画------------------------------	
		if(top>2800){
			console.log('eee')
		$('.imgcontain5').fadeIn();	
		$('.imgcontain5').addClass('rotatesimg');			
		}
		if(top>3100){
			$('.experience5').fadeIn()
			$('.experience5').animate({},function(){
			$(".experience5").css({'transform':'translateY(80px)','transition':'2s'});  
		});
		}
		
		if(top>3150){
			$('.for5').fadeIn()
			$('.for5').animate({},function(){
			$(".for5").css({'transform':'translateY(80px)','transition':'2s'});  
		});
		}
		if(top>3200){
			$('.scrool5').fadeIn()
			$('.scrool5').animate({},function(){
			$(".scrool5").css({'transform':'translateY(0px)','transition':'2s'});  
		});
		}

//-----------------------------第六个动画------------------------------
		if(top>3500){
			console.log('fff')
		$('.imgcontain6').fadeIn();	
		$('.imgcontain6').addClass('rotatesimg');			
		}
		if(top>3800){
			$('.experience6').fadeIn()
			$('.experience6').animate({},function(){
			$(".experience6").css({'transform':'translateY(80px)','transition':'2s'});  
		});
		}
		
		if(top>3850){
			$('.for6').fadeIn()
			$('.for6').animate({},function(){
			$(".for6").css({'transform':'translateY(80px)','transition':'2s'});  
		});
		}
		if(top>3900){
			$('.scrool6').fadeIn()
			$('.scrool6').animate({},function(){
			$(".scrool6").css({'transform':'translateY(0px)','transition':'2s'});  
		});
		}

//-----------------------------第七个动画------------------------------
		if(top>4100){
			console.log('ggg')
		$('.imgcontain7').fadeIn();	
		$('.imgcontain7').addClass('rotatesimg');			
		}
		if(top>4600){
			$('.experience7').fadeIn()
			$('.experience7').animate({},function(){
			$(".experience7").css({'transform':'translateY(80px)','transition':'2s'});  
		});
		}
		
		if(top>4650){
			$('.for7').fadeIn()
			$('.for7').animate({},function(){
			$(".for7").css({'transform':'translateY(80px)','transition':'2s'});  
		});
		}
		if(top>4700){
			$('.scrool7').fadeIn()
			$('.scrool7').animate({},function(){
			$(".scrool7").css({'transform':'translateY(0px)','transition':'2s'});  
		});
		}

//-----------------------------第八个动画------------------------------
		if(top>4880){
			console.log('hhh')
		$('.imgcontain8').fadeIn();	
		$('.imgcontain8').addClass('rotatesimg');			
		}
		if(top>5200){
			$('.experience8').fadeIn()
			$('.experience8').animate({},function(){
			$(".experience8").css({'transform':'translateY(80px)','transition':'2s'});  
		});
		}
		
		if(top>5250){
			$('.for8').fadeIn()
			$('.for8').animate({},function(){
			$(".for8").css({'transform':'translateY(80px)','transition':'2s'});  
		});
		}
		if(top>5300){
			$('.scrool8').fadeIn()
			$('.scrool8').animate({},function(){
			$(".scrool8").css({'transform':'translateY(0px)','transition':'2s'});  
		});
		}
		
		
		if(top>5300){
			$('.bot').fadeIn()
		}
	})
})