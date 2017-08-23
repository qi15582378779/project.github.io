$(function(){
   $(".aby_dot span").mouseover(function(){
      var i = $(this).attr("location");
      $("#big_img").attr("src","picture/index-banner"+i+".png");
	  $(this).attr("style","background:#000");
	  for(var j=1;j<8;j++){
	     if(j!=i){
		    $(".aby_dot span[location="+j+"]").removeAttr("style");
		 }
	  }
   });
   $(".aby_dot1 span").mouseover(function(){
	      var i = $(this).attr("location");
	      $("#big_img1").attr("src","picture/index_b"+i+".png");
		  $(this).attr("style","background:#000");
		  for(var j=1;j<7;j++){
		     if(j!=i){
			    $(".aby_dot1 span[location="+j+"]").removeAttr("style");
			 }
		  }
	   });

   $("#next").click(function () {
		var b = $(".aby_a1bottom ul>li:first");
		$(".aby_a1bottom ul>li:last").after(b);
		
	});
	$("#prve").click(function () {
		var b = $(".aby_a1bottom ul>li:last");
		$(".aby_a1bottom ul>li:first").before(b);
		
	});
	
		$(".m1").hover(function(){
			$(this).find(".m2").stop().animate({"top":0},500)
			},function(){
			$(this).find(".m2").stop().animate({"top":304+"px"},500)
			})
});
var start=1;
var pic_title_arr = new Array()
pic_title_arr[0] = ""
pic_title_arr[1] = "建立移动电商模式";
pic_title_arr[2] = "LBS移动媒体";
pic_title_arr[3] = "周边云连接一切";
pic_title_arr[4] = "手机支付0费率";
pic_title_arr[5] = "周边云和微信达成战略级框架合作";
pic_title_arr[6] = "周边云移动媒体O2O市场";
pic_title_arr[7] = "城市门户";

setInterval(scoller_index,3000);
function scoller_index(){
      $("#big_img").attr("src","picture/index-banner"+start+".png");
      $("#big_img").attr("title",pic_title_arr[start]);
	  $(".aby_dot span[location="+start+"]").attr("style","background:#000");
	  for(var j=1;j<8;j++){
	     if(j!=start){
		    $(".aby_dot span[location="+j+"]").removeAttr("style");
		 }
	  }
	  start++;
	  if(start==8) start=1;
}
var start2=1;
setInterval(scoller_index2,3000);
function scoller_index2(){
	$("#big_img1").attr("src","picture/index_b"+start2+".png");
	  $(".aby_dot1 span[location="+start2+"]").attr("style","background:#000");
	  for(var j=1;j<7;j++){
	     if(j!=start2){
		    $(".aby_dot1 span[location="+j+"]").removeAttr("style");
		 }
	  }
	  start2++;
	  if(start2==7) start2=1;
}