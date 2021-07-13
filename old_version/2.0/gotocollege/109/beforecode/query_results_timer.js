function getRTime(){
	var EndTime= new Date('2019/4/25 17:00:00'); //final_time
	var NowTime = new Date();
	var t =EndTime.getTime() - NowTime.getTime();
	/*var d=Math.floor(t/1000/60/60/24);
	t-=d*(1000*60*60*24);
	var h=Math.floor(t/1000/60/60);
	t-=h*60*60*1000;
	var m=Math.floor(t/1000/60);
	t-=m*60*1000;
	var s=Math.floor(t/1000);*/
 
	var d=Math.floor(t/1000/60/60/24);
	var h=Math.floor(t/1000/60/60%24);
	var m=Math.floor(t/1000/60%60);
	var s=Math.floor(t/1000%60);
    if(d<=0&&h<=0&&m<=0&&s<=0){
        document.getElementById("countdowntime").innerHTML = "臺南一中第五次模擬考成績查詢<h6 class=\"text-info\">成績已開放查詢。</h6>";
    }
    else{
        document.getElementById("countdowntime").innerHTML = "臺南一中第五次模擬考成績查詢(預計2019年3月14日開放查詢)<h6 class=\"text-info\">查詢時間倒數" + d + "天" + h + "時" + m + "分" + s + "秒。</h6>";
    }
    
    //APCS
    EndTime= new Date('2019/3/7 10:00:00'); //final_time
	t =EndTime.getTime() - NowTime.getTime();
 
	d=Math.floor(t/1000/60/60/24);
	h=Math.floor(t/1000/60/60%24);
	m=Math.floor(t/1000/60%60);
	s=Math.floor(t/1000%60);
    if(d<=0&&h<=0&&m<=0&&s<=0){
        document.getElementById("apcsclock").innerHTML = "APCS成績查詢<h6 class=\"text-info\">成績已開放查詢。</h6>";
    }
    else{
        document.getElementById("apcsclock").innerHTML = "APCS成績查詢(2019年3月7日10:00開放查詢)<h6 class=\"text-info\">查詢時間倒數" + d + "天" + h + "時" + m + "分" + s + "秒。</h6>";
    }
    
    //TNFSH_Apply_System
    EndTime= new Date('2019/3/13 12:00:00'); //final_time
	t =EndTime.getTime() - NowTime.getTime();
 
	d=Math.floor(t/1000/60/60/24);
	h=Math.floor(t/1000/60/60%24);
	m=Math.floor(t/1000/60%60);
	s=Math.floor(t/1000%60);
    if(d<=0&&h<=0&&m<=0&&s<=0){
        document.getElementById("applysystemclock").innerHTML = "臺南一中 個人申請系統<h6 class=\"text-danger\">已停止填寫志願。</h6>";
        document.getElementById("techapplysystemclock").innerHTML = "臺南一中 科大申請系統<h6 class=\"text-danger\">已停止填寫志願。</h6>";
    }
    else{
        document.getElementById("applysystemclock").innerHTML = "臺南一中 個人申請系統<h6 class=\"text-info\">填寫志願時間剩餘" + d + "天" + h + "時" + m + "分" + s + "秒。</h6>";
        document.getElementById("techapplysystemclock").innerHTML = "臺南一中 科大申請系統<h6 class=\"text-info\">填寫志願時間剩餘" + d + "天" + h + "時" + m + "分" + s + "秒。</h6>";
    }
}

setInterval(getRTime,1000);