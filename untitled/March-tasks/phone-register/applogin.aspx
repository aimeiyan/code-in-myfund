<%@ Page Language="C#" Inherits="UserCenter.Pages.LoginPage" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>用户登录</title>
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
body{ background:#CFDEE7;}
</style>
</head>
<body>
<div id="login-wrap">
	<div id="login-main" class="login-main">
            <form id="loginFrm" action="" method="post" onsubmit="ajax_submit();return false;"> 
            	<table>
					<tr style="line-height:1.8em; text-align:center;" >
						<td colspan="2"><span id="msg">&nbsp;&nbsp;&nbsp;&nbsp;</span><span id="username_msg"></span><span id="verify_code_msg"></span></td>
					</tr>
					<tr style="line-height:1.8em;">
						<div class="account1">
							<td><label>用户名：</label></td>
							<td><input class="input-txt w180" id="username" name="username" /></td>
						</div>
					</tr>
					<tr  style="line-height:1.8em;">
						<div class="account1">
							<td><label for="">密&nbsp;&nbsp;&nbsp;码：</label></td>
							<td><input class="input-txt w180" id="password" name="password" type="password" /></td>
						</div>
					</tr>
					
					<asp:PlaceHolder ID="phValidateCode" runat="server" Visible="false">
					<tr  style="line-height:1.8em;">
						<div class="account2">
							<td><label for="">验证码：</label></td>
							<td><input class="input-txt w180" id="verifyCode" name="verifyCode" type="text" autocomplete="off" style="width:60px;" />
								<a href="javascript:refreshCc();"><img id="checkCodeImg" src="<%=GetImageSrc()%>" width="60" height="20" style="vertical-align:middle;" /></a></td>
						</div>
					</tr>
				  </asp:PlaceHolder>
					<tr  style="line-height:2.5em;">
					    <td></td>
						<td><input class="admin-btn" onfocus="this.blur()" name="" type="submit" value="登 录" style=" background:#E38A00; color:#FFFFFF;" />&nbsp;&nbsp;
                                                    <span><a href="http://www.myfund.com/UserCenter/forget.aspx" style="color:#787F90" target="_blank">忘记密码 ?</a></span></td>
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
