	//点赞的改变
	function change(obj){
	        if(obj.getAttribute('src')=="image/like.png"){
	            obj.setAttribute('src','image/nolike.png');
	            return;
	        }
	        if(obj.getAttribute('src')=="image/nolike.png"){
	            obj.src="image/like.png";
	            return;
	        }
	    }

	//
	function changeColor_over(){
		var btn = document.getElementById("button");
		btn.style.background="#A5DBD8";
	}
	function changeColor_out(){
		var btn = document.getElementById("button");
		btn.style.background="#8ECCC9";
	}

	//文本框事件
	function selectOn(){
		var obj =  document.getElementById("story_text");
		obj.innerHTML = "";
	}
	function selectOut(){
		var obj =  document.getElementById("story_text");
		obj.innerHTML = "| 我的旅行故事（可选）";
	}

	//搜索框事件
	function selectSearch(){
		var obj = document.getElementById("search_input");
		obj.setAttribute("placeholder","");
	}
	function selectSearch_out(){
		var obj = document.getElementById("search_input");
		obj.setAttribute("placeholder","请输入关键词…");
	}

	//左上角pic更改
	function changepic_up(obj){
		obj.setAttribute("src","image/exchange-2.png");
	}
	function changepic_up_out(obj){
		obj.setAttribute("src","image/exchange.png");
	}
	function changeT(obj){
		obj.setAttribute("src","image/T-2.png");
	}
	function changeT_out(obj){
		obj.setAttribute("src","image/T.png");
	}
	//左下角变化
	function changeUser(obj){
		obj.setAttribute("src","image/user_left2.png");
	}
	function changeUser_out(obj){
		obj.setAttribute("src","image/user_left.png");
	}

	function changeFavour(obj){
		obj.setAttribute("src","image/favorite2.png");
	}
	function changeFavour_out(obj){
		obj.setAttribute("src","image/favorite.png");
	}

	function changeNotice(obj){
		obj.setAttribute("src","image/notice2.png");
	}
	function changeNotice_out(obj){
		obj.setAttribute("src","image/notice.png");
	}

	function changeMessage(obj){
		obj.setAttribute("src","image/info2.png");
	}
	function changeMessage_out(obj){
		obj.setAttribute("src","image/info.png");
	}

	function changeUpload(obj){
		obj.setAttribute("src","image/upload2.png");
	}
	function changeUpload_out(obj){
		obj.setAttribute("src","image/upload.png");
	}
