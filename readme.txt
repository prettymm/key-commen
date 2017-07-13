这个txt文件主要是来存放一些自己平时遇到的一些小问题：
2017-6-25
1.如何在 mac 上使用 Git 和 GitHub 连接？
答：自己在网上搜索到了下面的链接，按照步骤一步步实现的，中间遇到的小问题都有：
http://www.jianshu.com/p/ff1034ed270e
（1）如何检查是否安装了git？
    在命令行中执行git version，如果能正常显示git的版本号就是装好了

（2）本地如何打开你生成的id_rsa.pub文件？
    在git命令中输入 open ~/.ssh 即可打开此文件

（3）github中如何找到APT Token？
    自己创建一个步骤如下：
    -1 点击头像，出现下拉菜单，点击setting
    -2 进入到setting页面后，点击左侧Personal-access-tokens菜单
    -3 新建APT Token

(4) 如何把本地文件push到github
    命令是git push git@github.com:prettymm/key-commen.git

2017-6-26

邮箱正则验证：
function isMail(){
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(str);
}

给placeholder文字设置颜色
::-webkit-input-placeholder { /* WebKit, Blink, Edge */ 
    color:    #909;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 
    color:    #909;  
    opacity:  1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #909;  
    opacity:  1;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */   
    color:    #909;
}

jquery在线引用地址：

百度静态资源公共库：
http://libs.baidu.com/jquery/1.9.1/jquery.js

jQuery网站：
http://code.jquery.com/jquery-1.9.1.js
http://code.jquery.com/jquery-latest.js

2017-6-29
常用网站
font awesome http://fontawesome.io/icons/
cookie https://github.com/js-cookie/js-cookie
在线编辑器，别人也可以临时访问你的页面 https://jsfiddle.net/k5f08xgu/22/



























