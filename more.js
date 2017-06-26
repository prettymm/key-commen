$(function(){
  var item = $('.item');
  var moreBtn = $('.js-more');
  var lessBtn = $('.js-less');
  var showCount = 9;
  var list;//没点击一次出来的个数
  var initShow;//初始化显示的个数

  //实现响应式效果-desktop初始化显示9个，mobile初始化显示6个。
  function initShows (){
    if($(window).width() >= 768){
      initShow = 9;
      list=6;
      if(showCount === 6){
        showCount = 9;
      }
    }else{
      initShow = 6;
      list=6;
      if(showCount === 9){
        showCount = 6;
      }
    }

    item.removeClass('show');
    item.slice(0, showCount).addClass('show');

    if(item.length > initShow){
      moreBtn.show();
    }
  }

  initShows();

  //重置窗口大小实现响应式效果
  var timer = null;
  $(window).resize(function(){
    clearTimeout(timer);
    timer = null;
    timer = setTimeout(function(){
      initShows();
    }, 100);
  });

  //给button添加点击事件，每点击一次出来六个产品，直到所有的产品都展示完成，moreBtn 隐藏。
  moreBtn.on('click', function(){
    var lastChild = $('.item.show:last').index();//获得最后一个显示的itme的index
    var winHeight = $(window).height(); //获取window的高度
    item.slice(lastChild, lastChild+list+1).addClass('show');
    if(lastChild+1 >= initShow){
      lessBtn.show();
    }
    isShow();
    var moreBtnPosi = $('.js-positon').offset().top - winHeight*3/5;
    $('body,html').animate({'scrollTop':moreBtnPosi},500);
  });

  lessBtn.on('click', function(){
    var lastChild = $('.item.show:last').index();
    var current = (lastChild+1-initShow)  % list;
    var winHeight = $(window).height(); //获取window的高度
    if(current){
      item.slice(lastChild-current+1, lastChild+1).removeClass('show');
    }else{
      item.slice(lastChild-list+1, lastChild+1).removeClass('show');
    }
    
    isShow();
    var moreBtnPosi = $('.js-positon').offset().top - winHeight*3/5;//offset()始终返回相对于浏览器文档的距离，它会忽略外层元素。
    $('body,html').animate({'scrollTop':moreBtnPosi},500);
  });

  //isShow 用来判断按钮何时显示何时隐藏
  function isShow(){
    var lastChild = $('.item.show:last').index();
    if(lastChild+1 === item.length){
      moreBtn.hide();
    }else{
      moreBtn.show();
    }

    if((lastChild+1) != initShow){
      lessBtn.show();
    }else{
      lessBtn.hide();
    }
  }


});