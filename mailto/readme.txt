2017-7-4
mailto 参数讲解
Mailto能让访问者便捷向网站管理者发送电子邮件。我们还可以利用mailto做许多其它事情。Mailto甚至还能自动在电子邮件中填入“抄送”和“密件抄送”者，或自动填写主题行。
　　1）基本的 mailto
　　<a href="mailto:abc@sina.com.cn">单击这里给我发电子邮件
　　当浏览者点击这个链接时，浏览器会自动调用默认的客户端电子邮件程序，并在收件人框中自动填上收件人的地址下面。
　　2）包含抄送地址
　　在收件人地址后用?cc=开头，你可以填写抄送地址，示例代码如下：
     <"mailto:abc@sina.com.cn?cc=abc@sina.com.cn">发送
　　3）包含密件抄送地址
　　紧跟着抄送地址之后，写上&bcc=，就可以填上密件抄送地址了。
　　"mailto:abc@sina.com.cn?cc=aaa@sina.com.cn&bcc=bbb@sina.com.cn">发送
注意：在添加这些功能时，第一个功能以"?"开头，后面的以"&"开头

　　4）包含多个收件人、抄送、密件抄送人
　　用分号隔开多个收件人的地址即可实现：
　　<a href="mailto:aaa@sina.com.cn;bbb@sina.com.cn">发送
　　5）包含主题
　　用?subject=可以填上主题：
　　a href="mailto:abc@sina.com.cn?cc=abc@sina.com.cn?subject=发送电子邮件"

下面我们来总结一下，Mailto后为收件人地址，cc后为抄送地址，bcc后为密件抄送地址，subject后为邮件的主题，body后为邮件的内容，如果Mailto后面同时有多个参数的话，第一个参数必须以“?”开头，后面的每一个都以“&”开头。下面是一个完整的实例:Mailto:aaa@xxx.com?cc=bbb@yyy.com&bcc=ccc@zzz.com&subject=主题&body=邮件内容


2017-7-13
参考网站https://en.wikipedia.org/wiki/Mailto
ie下的问题：
1.body和subject没有出来，后来找到问题，是mailto链接要是百分比格式，ie才支持。
需要把普通文本转换成百分比格式。
2.body文字内容过长，邮箱是弹不出来的。字数大概是500个字符左右，解决方法
https://stackoverflow.com/questions/2241274/mailto-fails-in-ie-where-there-is-a-long-body-text-is-there-any-way-to-resolve （自己还没有试过，尴尬。）


