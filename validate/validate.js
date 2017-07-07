$().ready(function() {
    // validate the comment form when it is submitted
    $("#commentForm").validate();

    // validate signup form on keyup and submit
    $("#signupForm").validate({
      rules: {
        firstname: "required",
        lastname: "required",
        username: {
          required: true,
          minlength: 2
        },
        password: {
          required: true,
          minlength: 5
        },
        confirm_password: {
          required: true,
          minlength: 5,
          equalTo: "#password"
        },
        email: {
          required: true,
          email: true
        },
        topic: {
          required: "#newsletter:checked",
          minlength: 2
        },
        agree: "required"
      },
      messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
        username: {
          required: "Please enter a username",
          minlength: "Your username must consist of at least 2 characters"
        },
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        confirm_password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long",
          equalTo: "Please enter the same password as above"
        },
        email: "Please enter a valid email address",
        agree: "Please accept our policy",
        topic: "Please select at least 2 topics"
      }
    });

    // propose username by combining first- and lastname
    /*$("#username").focus(function() {
      var firstname = $("#firstname").val();
      var lastname = $("#lastname").val();
      if (firstname && lastname && !this.value) {
        this.value = firstname + "." + lastname;
      }
    });*/

    //code to hide topic selection, disable for demo
    /*var newsletter = $("#newsletter");
    // newsletter topics are optional, hide at first
    var inital = newsletter.is(":checked");
    var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
    var topicInputs = topics.find("input").attr("disabled", !inital);
    // show when newsletter is checked
    newsletter.click(function() {
      topics[this.checked ? "removeClass" : "addClass"]("gray");
      topicInputs.attr("disabled", !this.checked);
    });*/

    jQuery.extend(jQuery.validator.messages, {  
      required: "必选字段",  
      remote: "请修正该字段",  
      email: "请输入正确格式的电子邮件",  
      url: "请输入合法的网址",  
      date: "请输入合法的日期",  
      dateISO: "请输入合法的日期 (ISO).",  
      number: "请输入合法的数字",  
      digits: "只能输入整数",  
      creditcard: "请输入合法的信用卡号",  
      equalTo: "请再次输入相同的值",  
      accept: "请输入拥有合法后缀名的字符串",  
      maxlength: jQuery.validator.format("请输入一个长度最多是 {0} 的字符串"),  
      minlength: jQuery.validator.format("请输入一个长度最少是 {0} 的字符串"),  
      rangelength: jQuery.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),  
      range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),  
      max: jQuery.validator.format("请输入一个最大为 {0} 的值"),  
      min: jQuery.validator.format("请输入一个最小为 {0} 的值")  
    });  
  });

