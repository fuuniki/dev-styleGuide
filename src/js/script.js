/* slick animation */
jQuery('.slider').slick({
  fade:true,
  centerMode:true,
  centerPadding:'0px',
  dots: true,
  arrows: false,
  infinite: true,
  autoplay:true,
  adaptiveHeight:true,
  autoplaySpeed:2500,
  speed: 1000,
  pauseOnHover: false,
  // pauseOnDotsHover: false,
  // pauseOnFocus: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  accessibility:true,
});

/* accodion */
jQuery(function($) {
  $('.js-yearHeading').click(function(){
    if($(this).next('.js-months').is(':visible')) { //既に開いている場所なら
      $(this).next('.js-months').slideUp(300); //閉じる
      $(this).children('.js-toggleIcon').removeClass('open'); //.acv_openを削除
    } else { //閉じている場所なら
      $('.js-months').slideUp(); //全部閉じる
      $('.js-monthlyArchive').find('.js-toggleIcon').removeClass('open'); //.acv_open全削除
      $(this).next('.js-months').slideDown(300); //開く
      $(this).children('.js-toggleIcon').addClass('open'); //.acv_open付加
    }
  });
});

/* grobal-nav */
$(".l-nav__hamburger").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#js-global-nav").toggleClass('js-panelActive');//ナビゲーションにpanelactiveクラスを付与
    $(".l-nav__bg").toggleClass('js-circleActive');//丸背景にcircleactiveクラスを付与
});

$("#js-global-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#js-global-nav").removeClass('js-panelActive');//ナビゲーションのpanelactiveクラスを除去
    $(".l-nav__bg").removeClass('js-circleActive');//丸背景のcircleactiveクラスを除去
});
