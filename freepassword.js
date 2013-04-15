var pwd = document.querySelectorAll("input[type=password]");
for(var i=0; i < pwd.length; ++i){
	pwd[i].removeAttribute("onkeyup");
	pwd[i].removeAttribute("onkeydown");
	pwd[i].removeAttribute("onclick");
	pwd[i].removeAttribute("onfocus");
	pwd[i].removeAttribute("readonly");
	pwd[i].focus();
}
console.log("已將 " + i + " 個密碼輸入區移除虛擬鍵盤限制！")