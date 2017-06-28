$(function(){
  var leaveArriveFeedUrl = "http://external.haigclub.com/redirectrule.aspx";//此变量为ajax请求的json文件
  var item = $('.item');
  var moreBtn = $('.js-more');
  var lessBtn = $('.js-less');
  var showCount = 9;
  var list;//每点击一次加载的个数
  var initShow;//初始化显示的个数
  var cWrap = $('.mfp-wrap');

  //实现响应式效果-desktop初始化显示9个，mobile初始化显示6个。
  function initShows (){
    var item = $('.item');
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

    isShow();
  }

  cWrap.css('display', 'none');

  $.ajax({
    type:"GET",
    url:leaveArriveFeedUrl,
    cache: false,
    success: function(response){
      var ret = "";
      for(var i=response.data.length-1; i>=0; i--){
        var locationTag = "";
        locationTag += '<div class="c-leave__img-items item show" data-img="'+ response.data[i].image +'" data-passed="'+ response.data[i].datePassed +'" data-logo="'+ response.data[i].logo +'" style="background-image:url('+ response.data[i].image +')">'
        locationTag += '<div class="c-leave__pop">'
        locationTag += '<div class="c-leave__pop--center">'
        locationTag += '<h3>'+ response.data[i].copy +'</h3>'
        locationTag += '<p>'+ response.data[i].date +'</p></div></div></div>'

        ret += locationTag;
      }
      $('.articleItems').html(ret);
      initShows();
    },
    error:function(){
      console.log('error');
    }
  });

  

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
    var item = $('.item');
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
    var item = $('.item');
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

  $('.js-items').on('click', function(e){
    var target = $(e.target.closest('.item'));
    var c_wrap = $('.mfp-wrap');
    var jsImg = $('.js-img');
    var js_timestamp = $('.js-timestamp');
    jsImg.attr("src", target.data('img'));
    cWrap.css('display', 'block');
    js_timestamp.text(target.find('p').text());
  });

  $('.js-close').on('click', function(){
    cWrap.css('display', 'none');
  });


  //isShow 用来判断按钮何时显示何时隐藏
  function isShow(){
    var item = $('.item');
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