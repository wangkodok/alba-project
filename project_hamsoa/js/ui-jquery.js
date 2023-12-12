$(document).ready(function () {
  $(".tab .link").click(function (e) {
    var submenu = $(this).next("ul");
    e.preventDefault();
    // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
    if (submenu.is(":visible")) {
      submenu.slideUp();
    } else {
      submenu.slideDown();
    }
  });

  $(".tab:eq(1)>link").click();

  // 햄버거 메뉴
  $(".menu-btn").on("click", function () {
    $(".hbg").css("display", "block");
    $(".hbg-menu").show().animate({
      right: 0,
    });
  });
  $(".hbg .sect01").on("click", function () {
    $(".hbg").hide();
    $(".hbg-menu").css("display", "block");
    // $('.menu-close').animate({
    //   right: '-' + 50 + '%'
    // },
    $(".hbg-menu")
      .show()
      .animate(
        {
          right: "-320px",
        },
        function () {
          $(".hbg-menu").hide();
        }
      );
    // )
  });

  // 햄버거 메뉴 클릭하면 나오는 메뉴들
  $(".hbg .hbg-menu .link").click(function () {
    var depth2 = $(this).next(".hbg .hbg-menu .depth2-list");
    if (depth2.is(":visible")) {
      depth2.slideUp();
    } else {
      depth2.slideDown();
    }
  });

  $(".header .gnb .item").hover(function () {
    $(this).children(".lnb-list").stop().slideToggle(100);
    $(".header .lnb-item").hover(function () {
      $(this).children(".lnb03-wrap").stop().slideToggle(100);
    });
  });
});
