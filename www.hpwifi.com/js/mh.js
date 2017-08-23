var provinces = "http://back.hpwifi.com/back/apply_selected.do";
var cityUrl ="http://back.hpwifi.com/back/apply_selected.do";
var areaUrl ="http://back.hpwifi.com/back/apply_selected.do";
var saveUrl = "http://back.hpwifi.com/back/apply_save.do";
var saveUrlmdl = "http://back.hpwifi.com/back/mdlfeedback_save.do";
$(function(){
   $(".city_cqbottom ul li").mouseover(function(){
	    var i = $(this).attr("location");
		$("#big_img").attr("src","images/top-img"+i+".png");
		$(this).find("img").attr("src","picture/020-title"+i+"hover.png");
		for(var j=1;j<6;j++){
			if(j!=i)
		   $("li[location="+j+"]").find("img").attr("src","picture/020-title"+j+".png");
		}
   });
   	// 绑定省的下拉框
//   	$.ajax({
//   	      url: provinces,
//   	      data:{"sql":"1"},
//   	      global: false,
//   		  type: "POST",
//   		  dataType: "json",
//   		  async:false,
//   	      success: function(data){
//   	         $.each(data,function(i,v){
//   	        	 $("#provinceId").append("<option value='"+i+"'>"+ v + "</option>");
//   	         });
//   	      }
//   	});
//   	
   	$.getJSON("http://back.hpwifi.com/back/apply_selected.do?jsoncallback=?",{"sql":"1"},function(json){
   		$.each(json,function(i,v){
      	 $("#provinceId").append("<option value='"+json[i].id+"'>"+ json[i].name + "</option>");
       });
   	});
   	
   	//绑定市的下拉框
   	$('#provinceId').change(function(){
   		getCity();
   	}) ;
   	$('#cityId').change(function(){
   		getArea();
   	}) ;
   	
   	$("#company").focus(function(){
   		var v = $(this).val();
   		if(v=="请输入公司名称"){
   			$(this).val("");
   		}
   	});
   	$("#username").focus(function(){
   		var v = $(this).val();
   		if(v=="请输入您的姓名"){
   			$(this).val("");
   		}
   	});
   	$("#email").focus(function(){
   		var v = $(this).val();
   		if(v=="请输入您的常用邮箱"){
   			$(this).val("");
   		}
   	});
   	$("#qq").focus(function(){
   		var v = $(this).val();
   		if(v=="请输入您的QQ号"){
   			$(this).val("");
   		}
   	});
   	$("#mobile").focus(function(){
   		var v = $(this).val();
   		if(v=="请输入您的联系电话"){
   			$(this).val("");
   		}
   	});
   	
   });
function getCity(){
	$("#cityId").find("option").remove();
		var id = $('#provinceId').val();
//		$.ajax({
//		      url: cityUrl,
//		      global: false,
//			  type: "POST",
//			  dataType: "json",
//			  data:{"sql":"2","id":id},
//			  async:false,
//		      success: function(data){
//		         $.each(data,function(i,v){
//		        	 $("#cityId").append("<option value='"+i+"'>"+ v + "</option>");
//		         });
//		         getArea();
//		      }
//		});
		$.getJSON(cityUrl+"?jsoncallback=?",{"sql":"2","id":id},function(json){
	   		$.each(json,function(i,v){
	      	 $("#cityId").append("<option value='"+json[i].id+"'>"+ json[i].name + "</option>");
	      	 getArea();
	       });
	   	});
}   
function getArea(){
	$("#areaId").find("option").remove();
		var id = $('#cityId').val();
//		$.ajax({
//		      url: areaUrl,
//		      global: false,
//			  type: "POST",
//			  dataType: "json",
//			  data:{"sql":"3","id":id},
//			  async:false,
//		      success: function(data){
//		         $.each(data,function(i,v){
//		        	 $("#areaId").append("<option value='"+i+"'>"+ v + "</option>");
//		         });
//		      }
//		});
		$.getJSON(areaUrl+"?jsoncallback=?",{"sql":"3","id":id},function(json){
	   		$.each(json,function(i,v){
	      	 $("#areaId").append("<option value='"+json[i].id+"'>"+ json[i].name + "</option>");
	       });
	   	});
}

function saveApply(){
   	var company = $('#company').val();
   	if (company.length <= 0 || company=="请输入公司名称"){
   		alert("请填写您的企业名称!");
   		return;
   	}
   	
   	var provinceId = $('#provinceId').val();
   	var cityId = $('#cityId').val();
   	if (provinceId <= 0 || cityId <= 0 ){
   		alert("请选择企业所在区域!");
   		return ;
   	}
   	
   	var username = $('#username').val();
   	if (username.length <= 0 || username=="请输入您的姓名" ){
   		alert("请填写您的真实姓名!");
   		return ;
   	}
   	
   	var regPartton=/1[3-8]+\d{9}/;
   	var mobile = $('#mobile').val();
   	if (mobile.length <= 0){
   		alert("请填写您的联系方式，以便与您联系!");
   		return ;
   	}
   	if(!regPartton.test(mobile)){
   		alert("您的联系方式格式不正确!");
   		return ;
   	}


   	$.getJSON(saveUrl+"?jsoncallback=?",$("#add_form").serialize(),function(json){
   		alert(json.result);
   		window.location=location;
   	});
   }

function saveApplyMdl(){
   	var name = $('#name').val();
   	if (name.length <= 0){
   		alert("请输入您的姓名!");
   		return;
   	}
   	
   	var provinceId = $('#provinceId').val();
   	var cityId = $('#cityId').val();
   	if (provinceId <= 0 || cityId <= 0 ){
   		alert("请选择所在地区!");
   		return ;
   	}
   	
   	var regPartton=/1[3-8]+\d{9}/;
   	var mobile = $('#phone').val();
   	if (mobile.length <= 0){
   		alert("请填写您的联系方式，以便与您联系!");
   		return ;
   	}
   	if(!regPartton.test(mobile)){
   		alert("您的联系方式格式不正确!");
   		return ;
   	}
   	var comment = $('#comment').val();
   	if (comment.length <= 0){
   		alert("反馈信息不能为空!");
   		return;
   	}

   	$.getJSON(saveUrlmdl+"?jsoncallback=?",$("#addformmdl").serialize(),function(json){
   		alert(json.result);
   		window.location=location;
   	});
   }
/**
 * ---------
 */
$(function(){
	$.getJSON("http://back.hpwifi.com/back/apply_selected.do?jsoncallback=?",{"sql":"1"},function(json){
   		$.each(json,function(i,v){
      	 $("#provinceId2").append("<option value='"+json[i].id+"'>"+ json[i].name + "</option>");
       });
   	});
   	
   	//绑定市的下拉框
   	$('#provinceId2').change(function(){
   		getCity();
   	}) ;
   	$('#cityId2').change(function(){
   		getArea();
   	}) ;
	
function getCity(){
	$("#cityId2").find("option").remove();
		var id = $('#provinceId2').val();
		$.getJSON(cityUrl+"?jsoncallback=?",{"sql":"2","id":id},function(json){
	   		$.each(json,function(i,v){
	      	 $("#cityId2").append("<option value='"+json[i].id+"'>"+ json[i].name + "</option>");
	      	 getArea();
	       });
	   	});
}   
function getArea(){
	$("#areaId2").find("option").remove();
		var id = $('#cityId2').val();
		$.getJSON(areaUrl+"?jsoncallback=?",{"sql":"3","id":id},function(json){
	   		$.each(json,function(i,v){
	      	 $("#areaId2").append("<option value='"+json[i].id+"'>"+ json[i].name + "</option>");
	       });
	   	});
}
})
function saveApplyForm(){
   	var provinceId = $('#provinceId2').val();
   	var cityId = $('#cityId2').val();
   	if (provinceId <= 0 || cityId <= 0 ){
   		alert("请选择企业所在区域!");
   		return ;
   	}
   	
   	var username = $('#username2').val();
   	if (username.length <= 0 || username=="请输入您的姓名" ){
   		alert("请填写您的真实姓名!");
   		return ;
   	}
   	
   	var regPartton=/1[3-8]+\d{9}/;
   	var mobile = $('#mobile2').val();
   	if (mobile.length <= 0){
   		alert("请填写您的联系方式，以便与您联系!");
   		return ;
   	}
   	if(!regPartton.test(mobile)){
   		alert("您的联系方式格式不正确!");
   		return ;
   	}
   	$.getJSON(saveUrl+"?jsoncallback=?",$("#add_form2").serialize(),function(json){
   		alert(json.result);
   		window.location=location;
   	});
   }