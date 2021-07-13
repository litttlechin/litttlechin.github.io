function getRTime(){
	var EndTime= new Date('2020/01/17 00:00:00'); 
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
    
    if(d<=-2&&h<=0&&m<=0&&s<=0){
        document.getElementById("exam_timer").innerHTML = "<mark>學測已結束！！</mark>";
    }
    else if(d<=0&&h<=0&&m<=0&&s<=0){
        document.getElementById("exam_timer").innerHTML = "學測考試中..";
    }
    else{
        document.getElementById("exam_timer").innerHTML = "<mark>學測預計倒數" + (d+1) + "天</mark>";
    }
}
setInterval(getRTime,1000);