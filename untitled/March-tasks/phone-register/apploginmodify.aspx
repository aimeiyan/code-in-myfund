<%@ Page Language="C#" Inherits="UserCenter.Pages.LoginPage" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0,minimal-ui" charset="gb2312">
<title>展恒理财 - 投顾注册</title>
<link href="css/admin/admin.css" rel="stylesheet" type="text/css" />
<script type='text/javascript' src='js/jquery.min.js'></script>
<script type='text/javascript' src='js/admin/admin.js'></script>
<link href="js/showLoading/css/showLoading.css" rel="stylesheet" media="screen" />
<script type="text/javascript" src="js/showLoading/js/jquery.showLoading.js"></script>
<script language="javascript" type="text/javascript">
function refreshCc() {
	var ccImg = document.getElementById("checkCodeImg");
	if (ccImg) {
		ccImg.src= ccImg.src + '&' +Math.random();
	}
}


function ajax_submit() {
	$('#login-main').showLoading();
	var url = 'ajax/form.aspx?action=login';
	var data = {
			'username': $('#username').val(),
			'password': $('#password').val(),
			'verifyCode': $('#verifyCode').val()
		};
	$.post(url, data, function(json){
		if ('string' == typeof json) {
			json = eval('(' + json + ')');
		}
		if (json.state == '200') {
			if (json.isSSO == 'true'){
				var urlList = json.ssoUrls.split(',');
				if (urlList.length > 0){
					window.urlCount = urlList.length;
					for( var i = 0; i < urlList.length; i ++ ){
						load_script(urlList[i],function(){
							if (!window.urlLoad) window.urlLoad = 0;
							if (++window.urlLoad == window.urlCount){
								window.parent.location.href = 'index.aspx';

							}
						});
					}
				}else{
					window.parent.location.href = 'index.aspx';
				}
			}
			else{
				window.parent.location.href = 'index.aspx';
			}
		} else {
			$('#login-main').hideLoading()
			if (json.state == '402') {
				$('#verify_code_msg').html(json.errorMessage).addClass("tips-error").show();
				$('#username_msg').hide();
				$('#msg').hide();
			} else {
				$('#username_msg').html(json.errorMessage).addClass("tips-error").show();
				$('#verify_code_msg').hide();
				$('#msg').hide();
			}
		}
	})
}
</script>
<style type="text/css">

    * {
        margin: 0;
        padding: 0;
    }

    body {
        line-height: 1.5;
        background: #fffbd8;
        color: #7d7d7f;
        margin: 0 auto;
        padding: 0 0;
        font-family: "微软雅黑";
    }

    body, td, input, textarea, option, select, button {
        font-family: Arial, Helvetica, sans-serif, "microsoft yahei";
        font-size: 1em;
        -webkit-text-size-adjust: none;
        font-size-adjust: none;
    }

    div, p, a, b, em, input, textarea, button, select, form, label, span, td, tr, li, nav, body, ul, i {
        padding: 0;
        margin: 0;
        word-break: break-all;
        word-wrap: break-word;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    a {
        text-decoration: none;
        color: #000;
    }

    dl, ul {
        list-style: none;
    }

    .nav {
        position: relative;
        height: 48px;
        font-size: 1.1em;
        font-weight: 700;
        line-height: 48px;
        color: #fff;
        text-align: center;
        background-color: #212121;
        -webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        -moz-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        -o-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    }

    input {
        -webkit-touch-callout: none;
    }

    #login-main {
        padding: 1em;
    }

    input[type=text], input[type=url],
    input[type=tel],
    input[type=search],
    input[type=email],
    input[type=password],
    input[type=date] {
        resize: none;
        -webkit-appearance: none;
    }


    table, td {
        width: 100%;
    }


    .input-txt, .select {
        display: block;
        width: 100%;
        padding: 10px 15px;
        border: 1px solid #cbcbcb;
        border-radius: 0;
        -webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
        -o-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
        margin-bottom: 10px;
    }

    .input-txt:focus {
        border-color: #3fa4f2;
    }

    .pull-left {
        float: left;
        width: 50%;

    }

    .pull-pic {
        float: left;
        width: 40%;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        line-height: 0;
        content: "";
    }

    .clearfix:after {
        clear: both;
    }

    #verifyCode {
        margin-right: 10px;
    }

    .register-btn{
        float: left;
        width: 40%;
        background-color: #3fa4f4;
        border:1px solid #029ee9;
    }

    .logo-btn{
        float: right;
        width: 55%;
        background-color:#f4bf31;
        border:1px solid #e3ad02;
    }


    .btn {
        display: block;
        height: 55px;
        font-size: 1.1em;
        font-weight: 700;
        line-height: 55px;
        letter-spacing: 2px;
        color: #fff;
        text-align: center;
        border-bottom-width: 4px;
        -webkit-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
        -o-box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    }


</style>

</head>
<body>
<div id="login-wrap">
    <nav class="nav">
        <strong>登录</strong>
    </nav>
	<div id="login-main" class="login-main">
            <form id="loginFrm" action="" method="post" onsubmit="ajax_submit();return false;">
            	<table>
					<tr>
						<td colspan="2"><span id="msg">&nbsp;&nbsp;&nbsp;&nbsp;</span><span id="username_msg"></span><span id="verify_code_msg"></span></td>
					</tr>
					<tr>
						<div class="account1">
							<td><input class="input-txt w180" id="username" placeholder="用户名" name="username" /></td>
						</div>
					</tr>
					<tr>
						<div class="account1">
							<td><input class="input-txt w180" id="password" name="password" placeholder="密码" type="password" /></td>
						</div>
					</tr>

					<asp:PlaceHolder ID="phValidateCode" runat="server" Visible="false">
					<tr>
						<div class="account2">
							<td class="clearfix"><input class="input-txt pull-left w180" id="verifyCode" placeholder="验证码" name="verifyCode" type="text" autocomplete="off"/>
								<a class="pull-pic" href="javascript:refreshCc();"><img id="checkCodeImg" src="<%=GetImageSrc()%>" width="60" height="50" style="vertical-align:middle;" /></a></td>
						</div>
					</tr>
				  </asp:PlaceHolder>
					<tr  style="line-height:2.5em;">
						<td class="clearfix">
                            <a class="register-btn btn" href="http://www.myfund.com/UserCenter/forget.aspx" target="_blank">注册</a>
                            <input class="admin-btn btn logo-btn" onfocus="this.blur()" name="" type="submit" value="登 录"/>
                                                    </td>
             		</tr>
			 </table>
            </form>

        <asp:PlaceHolder ID="phThirdLogin" runat="server" Visible="false">
        </asp:PlaceHolder>
        <asp:Literal ID="ltlLogo" runat="server" Visible="false"></asp:Literal>
    </div>
</div>
</body>
</html>
