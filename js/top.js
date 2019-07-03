 $(function () {            
            //绑定滚动条事件
              //绑定滚动条事件
            $(window).bind("scroll", function () {
                var sTop = $(window).scrollTop();
                var sTop = parseInt(sTop);
                if (sTop >= 80) {
					$("#headd").slideUp()
                }
                else {
					$("#headd").slideDown()
                } 
            });
        })