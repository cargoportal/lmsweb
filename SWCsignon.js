var subWinContactUs = null;
var subWinEmailPass = null;
var subWinPrivacy = null;

function screenLoad() {
	if(document.frmLogin.hidRedirect.value != "false" || document.frmLogin.hidRedirect.value == "null")
	openMessagesWindow('load');
	if( document.frmLogin && document.frmLogin.txtUser) {
		//document.frmLogin.txtUser.focus();
		//document.frmLogin.txtUser.select();
	}
	if( document.frmScheds && document.frmScheds.selCarrier) {
		document.frmScheds.selCarrier.focus();
	}
}

function screenUnload() {
	closeWindow('email');
	closeWindow('privacy');
}

function openWindow(pType) {
	var x = 100;
	var y = 100;
	var options = 'directories=no,hotkeys=no,menubar=no,location=no,resizable=yes,status=no,toolbar=no,';

	if( pType == 'contact' ) {
		subWinContactUs = window.open('UnderConstructionPage.jsp','ContactUsWindow',options+'scrollbars=no,height=550,width=738,left='+ x +',top='+ y +'');
		subWinContactUs.focus();
	}
	else if( pType == 'email' ) {
		subWinEmailPass = window.open('email_password.jsp','EmailPasswordWindow',options+'scrollbars=no,height=230,width=750,left='+ x +',top='+ y +'');
		subWinEmailPass.focus();
		//self.onfocus = new Function("closeWindow('email')");
	}
	else if( pType == 'privacy' ) {
		subWinPrivacy = window.open('disclaimer.jsp','PrivacyWindow',options+'scrollbars=yes,height=485,width=738,left='+ x +',top='+ y +'');
		subWinPrivacy.focus();
		self.onfocus = new Function("closeWindow('privacy')");
	}
	else if( pType == 'terms_of_use' ) {
		subWinPrivacy = window.open('terms_of_use.jsp','PrivacyWindow',options+'scrollbars=yes,height=485,width=738,left='+ x +',top='+ y +'');
		subWinPrivacy.focus();
		self.onfocus = new Function("closeWindow('terms_of_use')");
	}
	else if( pType == 'App_terms' ) {
		subWinPrivacy = window.open('UnderConstructionPage.jsp','PrivacyWindow',options+'scrollbars=yes,height=485,width=738,left='+ x +',top='+ y +'');
		subWinPrivacy.focus();
		self.onfocus = new Function("closeWindow('App_terms')");
	}
	else if( pType == 'demo' ) {
		subWinPrivacy = window.open('play-demo.jsp','PrivacyWindow',options+'scrollbars=yes,height=200,width=738,left='+ x +',top='+ y +'');
		subWinPrivacy.focus();
		self.onfocus = new Function("closeWindow('privacy')");
	}
	else if( pType == 'delta' ) {
		subWinDelta = window.open('home-delta.jsp','delta',options+'scrollbars=yes,height=400,width=738,left='+ x +',top='+ y +'');
		subWinDelta.focus();
		self.onfocus = new Function("closeWindow('delta')");
	}
	else if( pType == 'double' ) {
		subWinDecember = window.open('Double-December.jsp','DoubleDecember',options+'scrollbars=yes,height=250,width=738,left='+ x +',top='+ y +'');
		subWinDecember.focus();
		self.onfocus = new Function("closeWindow('double')");
	}
	else if( pType == 'fast' ) {
		subWinPrivacy = window.open('fast_forward.jsp','FastWindow',options+'scrollbars=yes,height=240,width=600,left='+ x +',top='+ y +'');
		subWinPrivacy.focus();
		self.onfocus = new Function("closeWindow('fastforward')");
	}
	else if( pType == 'friend' ) {
		subWinPrivacy = window.open('tell-a-friend.jsp','TellAFriendWindow',options+'scrollbars=yes,height=496,width=738,left='+ x +',top='+ y +'');
		subWinPrivacy.focus();
		self.onfocus = new Function("closeWindow('friend')");
	}
	else if( pType == 'topstation' ) {
		subWinTopStation = window.open('top_station.jsp','TopStationWindow',options+'scrollbars=yes,height=296,width=738,left='+ x +',top='+ y +'');
		subWinTopStation.focus();
		self.onfocus = new Function("closeWindow('topstation')");
	}
	else if( pType == 'IATA' ) {
		subWinIATA = window.open('IATA_Notice.jsp','IATAWindow',options+'scrollbars=yes,height=372,width=748,left='+ x +',top='+ y +'');
		subWinIATA.focus();
		self.onfocus = new Function("closeWindow('IATA')");
	}else if(pType == 'MSG'){
		//if ((document.frmLogin.hidMessage && document.frmLogin.hidMessage.value == 'true'))
		//{
			window.open('User_Notify_Msg.jsp','UserNotifyMessage',options+'scrollbars=no,height=545,width=700,left='+ x +',top='+ y +'');
		//}
	}else if( pType == 'CPSApps' ) {
                 subWinPrivacy = window.open('/lmsweb/DownloadCPSMobileApp.jsp','CPSMobileApps',options+'height=550,width=500,scrollbars=no,resizable=no');
                 subWinPrivacy.focus();
                 self.onfocus = new Function("closeWindow('CPSApps')");
                }



}

function closeWindow(pType) {
	if(pType == 'contact') {
		if(subWinContactUs != null && !subWinContactUs.closed) {
			subWinContactUs.close();
			subWinContactUs = null;
		}
	}
	if(pType == 'email') {
		if(subWinEmailPass != null && !subWinEmailPass.closed) {
			subWinEmailPass.close();
			subWinEmailPass = null;
		}
	}
	if(pType == 'privacy') {
		if(subWinPrivacy != null && !subWinPrivacy.closed) {
			subWinPrivacy.close();
			subWinPrivacy = null;
		}
	}
}

function validateForm() {
	if(document.frmLogin.txtUser.value == 'User ID'){
		alert("User ID required !");
		document.frmLogin.txtUser.focus();
		return false;
	}
	if(document.frmLogin.txtPassword.value == 'Password'){
		alert("Password  required !");
		if(document.getElementById('txtPassword') && document.getElementById('txtPassword').style.display == 'block'){
			document.frmLogin.txtPassword.focus();
		}
		if(document.getElementById('txtPassword1') && document.getElementById('txtPassword1').style.display == 'block'){
			document.frmLogin.txtPassword1.focus();
		}		
		return false;
	}
	if(!validate_checkField(document.frmLogin.txtUser,true,6,32,300,false,true,true)) return false;
	if(document.getElementById('txtPassword') && document.getElementById('txtPassword').style.display == 'block'){
		if(!validate_checkField(document.frmLogin.txtPassword,true,6,32,319,false,true,true)) return false;
	}
	if(document.getElementById('txtPassword1') && document.getElementById('txtPassword1').style.display == 'block'){
		if(document.frmLogin.txtPassword1 && document.frmLogin.txtPassword1.value == 'Password'){
			alert("Password  required !");
			
			return false;
		}else{
			if(!validate_checkField(document.frmLogin.txtPassword1,true,6,32,319,false,true,true)) return false;
		}
	}

	return true;
}

function validateUserID(pFldValue){
	if(pFldValue != null && pFldValue == '' && pFldValue.length == 0){
		document.frmLogin.txtUser.value = 'User ID';
	}
}

function validatePassword(pFldValue){
	if(pFldValue != null && pFldValue == '' && pFldValue.length == 0){
		document.getElementById('txtPassword').style.display = 'none';
		document.getElementById('txtPassword1').style.display = 'block';
	}
	if(pFldValue != null && pFldValue != '' && pFldValue == 'Password' && pFldValue.length > 0){		
		if(document.getElementById('txtPassword') && document.getElementById('txtPassword').style.display == 'block'){
			document.frmLogin.txtPassword.value = '';
			document.frmLogin.txtPassword.focus();
		}
	}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function toggleMenuImage(strMenu){
	if(strMenu == 'SCHED'){
		document.getElementById('img1').src = '/lmsweb/images/Schedule_Active.jpg';
		document.getElementById('img2').src = '/lmsweb/images/Flight_Normal.jpg';
		document.getElementById('img3').src = '/lmsweb/images/Track Shipmentsl_Normal.jpg';
		document.getElementById('div1').style.display = '';
		document.getElementById('div2').style.display = 'none';
		document.getElementById('div3').style.display = 'none';
	}else if(strMenu == 'FLT'){
		document.getElementById('img1').src = '/lmsweb/images/Schedule_Normal.jpg';
		document.getElementById('img2').src = '/lmsweb/images/Flight_Active.jpg';
		document.getElementById('img3').src = '/lmsweb/images/Track Shipmentsl_Normal.jpg';
		document.getElementById('div2').style.display = '';
		document.getElementById('div1').style.display = 'none';
		document.getElementById('div3').style.display = 'none';
	}else if (strMenu == 'AWB'){
		document.getElementById('img1').src = '/lmsweb/images/Schedule_Normal.jpg';
		document.getElementById('img2').src = '/lmsweb/images/Flight_Normal.jpg';
		document.getElementById('img3').src = '/lmsweb/images/Track Shipmentsl_Active.jpg';
		document.getElementById('div3').style.display = '';
		document.getElementById('div1').style.display = 'none';
		document.getElementById('div2').style.display = 'none';
	}
}
function displayAlert(pSign,pAdmin,pCarrier,pUrl){
	if (pSign && pAdmin){
		location.href = "secure/admin-branch.jsp?qsCarrier=" + pCarrier;
	}
	else if (pSign){
		alert("Please contact your branch admin");
	}
	else {
		window.open(pUrl,'IATAWindow');
	}
	
}

function openMessagesWindow(pSource)
{
	var loginForm = document.frmLogin;
	var msgCount = loginForm.hidMsgCount.value;
	var index = 0;
	var message = new Array();
	var msgIndex = 0;
	if(loginForm.hidUserMsg) loginForm.hidUserMsg.value = "N";
	for(var i =0; i<msgCount; i++)
	if(loginForm.hidUserMsg[i])
	loginForm.hidUserMsg[i].value = "N";

	if (msgCount != 0)
	{	
		
		if (msgCount==1 && loginForm.hidNextLogon.value=="N" && pSource!="href") return;
		 if (msgCount==1 && loginForm.hidNextLogon.value=="Y" && loginForm.hidNotShowAgain.value=="N") {
	    	document.getElementById('messageLayer0').style.display="";
	    	document.getElementById('shadowFilter').style.display="";
	    	return;
		 }
		if (msgCount==1 && pSource=="href") {
	    	document.getElementById('messageLayer0').style.display="";
	    	document.getElementById('shadowFilter').style.display="";
	    	return;
		 }

		
		/**** If there is only one message, then set the value of respective hidden field to "Y".
		 For more than one message store all the message numbers in message[] array ****/
		if(pSource!="href") {
	    	for (var i=0 ; i<msgCount ; i++) {
		  		if(loginForm.hidNextLogon[i].value=="Y" && loginForm.hidNotShowAgain[i].value=="N") {
					message[index]= i;
					index=index+1;
				}
			}	
		}
		
		//*** If there are one or more messages, make the backgroung blur. 
		if(index!= 0 || pSource=="href") document.getElementById('shadowFilter').style.display="";
		
		/*** If there are more than four messages, Store only four recent messages in hidden field hidUserMsg
		   with the value "Y" ***/
		if(index>4) {
			var loop=index-4;
			for(var i=loop; i<msgCount; i++) {
					loginForm.hidUserMsg[i].value = "Y"; 
		  	 		msgIndex = msgIndex+1; if(msgIndex==4) break; 
			}
		}
		else 
		{	
			if(pSource=="href")
				for (var i=0; i<msgCount ; i++) {
					loginForm.hidUserMsg[i].value = "Y";
			}
			else 
			{
				for (var i=0; i<msgCount ; i++) {
					if(loginForm.hidNextLogon[i].value=="Y" && loginForm.hidNotShowAgain[i].value=="N") {
						loginForm.hidUserMsg[i].value = "Y";
						msgIndex = msgIndex+1; 
						if(msgIndex==4) break; 
					}
				}
			}
		}
		DisplayUserMsg(msgCount); 
	}
}

function DisplayUserMsg(msgNo) {
	for(var i=msgNo-1;i>=0;i--) {
		if(document.frmLogin.hidUserMsg[i].value=="Y") {
			document.getElementById('messageLayer'+i).style.display="";
			return(false); 
			break;
		}
	}
	document.getElementById('shadowFilter').style.display="none";
}


function populateUserForm(index,objBtn)
{  
	var strURL = "/lmsweb/User_Notify_Msg.jsp?msgNo="+index;
	if(objBtn.name=="btnNotShowAgain")
		strURL = strURL+"&btnNotShowAgain=NotShowAgain";
	if (objBtn.name=="btnNextLogon")
		strURL = strURL+"&btnNextLogon=NextLogon";
	
	getServerInfoByAJAX(strURL, true, true);
}

var httpRequest;
function getServerInfoByAJAX(strURL, blnTextResponse, blnAsync)
{
	UserNoyify_CreateXmlHttp();
	UserNotify_ConfigureXmlHttp(strURL, blnTextResponse, blnAsync);
}

function UserNoyify_CreateXmlHttp()
{	
	if (window.ActiveXObject) // for IE 
	{ 
		try
		{
			httpRequest = new ActiveXObject("Msxml2.XMLHTTP"); 
		}
		catch(e)
		{
			try
			{
				httpRequest = new ActiveXObject("Microsoft.XMLHTTP"); 
			}
			catch(e)
			{
				httpRequest = false;
			}	
		}
	} 
	else if (window.XMLHttpRequest) // for other browsers 
	{ 
		httpRequest = new XMLHttpRequest(); 
	} 
}

function UserNotify_ConfigureXmlHttp(strURL, blnTextResponse, blnAsync)
{
	if(httpRequest)
	{
		//Open Asynchronous connction
		httpRequest.open("POST", strURL, blnAsync);
		// Specify that the body of the request contains form data
		httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");	
		httpRequest.send('');
		if(httpRequest.readyState == 4 && httpRequest.status != 200)
			alert("Error loading page\n"+ httpRequest.status +":"+ httpRequest.statusText); 
	}
}

function printUsrMsg(index,msgCnt){
	for(var i=0;i<msgCnt;i++) {
		document.getElementById('messageLayer'+i).className="";
		if (i==index) continue;
		document.getElementById('messageLayer'+i).className="userMsgPrnt";
	}
	window.print();
}