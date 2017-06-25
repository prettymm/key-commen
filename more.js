
$(function(){
  var moreBtn = $('.more');
  var lessBtn = $('.less');
  var item = $('.item');
  var list;
  var initshow;
  if($(window).width() >= 768){
    list = 6;
    initshow = 9;
  }else{
    list = 6;
    initshow = 6;
  }
  
  //如果显示的产品数多于9，让more显示
  if(item.length > initshow){
    moreBtn.show();
  }
  //初始化只显示9个产品，其余的隐藏掉
  for(var i=0, len=item.length; i<len; i++){
    if(i==initshow-1){
      item.eq(i).nextAll().removeClass('show');
    }
  }

  //点击more按钮，获取显示的最后一个产品的索引index
  moreBtn.on('click', function(){
    var lastChild = $('.item.show:last').index(); 
    for(var i=lastChild+1, len=item.length; i<len; i++){
      if(i == lastChild+list){
        item.addClass('show');
        item.eq(i).nextAll().removeClass('show');
      }
      if((item.length - lastChild) < list){
        item.addClass('show');
        moreBtn.hide()
      }
    }
    isShow();
  });

  lessBtn.on('click', function(){
    var lastChild = $('.item.show:last').index();
    //acount 是在求余数，看有没有不够一次显示的产品
    var acount = (lastChild+1-initshow) % list;
    var current = $('.item.show:last').index()-list*2; 
    if(acount==0){
      for(var i=current+1, len=item.length; i<len; i++){
        if(i == current+list){
          item.addClass('show');
          item.eq(i).nextAll().removeClass('show');
        }
      }
    }else{
      var current = $('.item.show:last').index() -list - acount;
      for(var i=current+1, len=item.length; i<len; i++){
        if(i == current+list){
          item.eq(i).nextAll().removeClass('show');
        }
      }
    }
    isShow();
  });
  

  function isShow(){
    var lastChild = $('.item.show:last').index();
    if((lastChild+1) == item.length){
      moreBtn.hide();
    }else{
      moreBtn.show();
    }

    if((lastChild+1) != initshow ){
      lessBtn.show();
    }else{
      lessBtn.hide();
    }
  }

})