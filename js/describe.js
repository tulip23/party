$(function(){
        $('#go').click(function(){
        $(".popview").toggle(500);
    });
        wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animated', 
            offset: 0, 
            mobile: true,
            live: true
        }
    );
    wow.init();
    
})    