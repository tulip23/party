window.onload = function(){			
  // 返回顶部
  var winHeight = $(window).height();
  var win = $(window);
  var doGotop = $("#returntop");
  win.scroll(function () {
    var $top = $(this).scrollTop();
    if ($top > winHeight / 2) {
      doGotop.show();
    } else {
      doGotop.hide();
    }
  });
  doGotop.on("click", function () {
    $("html,body").animate({scrollTop: "0px"}, 666)
  });
}
