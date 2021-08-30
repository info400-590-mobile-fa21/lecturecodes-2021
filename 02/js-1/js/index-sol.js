$(document).ready(function(){
	// this is where your code should go
	$("#menu1").click(function(){
		alert($("#paragraph1").text());

	});

	$("#menu2").click(function(){
		alert($("#paragraph2").html());

	});

	$("#menu3").click(function(){
		alert($("#textfield1").val());

	});

	$("#menu4").click(function(){
		alert($("#url1").attr("href"));
	});

	$("#menu5").click(function(){
		alert($("#img1").attr("src"));
	});

	$("#test-menu1").click(function(){
		alert($("#test").text());

	});

	$("#test-menu2").click(function(){
		alert($("#test").html());

	});

	$("#test-menu3").click(function(){
		alert($("#url-test").attr("href"));
	});

	$("#test-menu4").click(function(){
		alert($("#img-test").attr("src"));
	});

	$("#test-menu5").click(function(){
		alert($("#button-test").val());

	});

});

