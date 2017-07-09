$(function(){
	var flag = false;
	var h = $(".wrap1").height();
	var winH = $(window).height();
	var hh = winH;

	var style = document.getElementById("dynamic")
    style.innerHTML = '@-webkit-keyframes up{0% {transform: translateY('+winH+'px);-webkit-transform: translateY('+winH+'px);} }\n'
             + '@keyframes myfirst {100% {transform: translateY(0);-webkit-transform: translateY(0);}}'

	$(window).scroll(function () {
		if ($(window).scrollTop() == $(document).height() - $(window).height()) {
			$(".wrap2").show();
			$(".wrap2,.wrap1").addClass("up");
			setTimeout(function(){
				//$(".wrap2").hide();
				$(".wrap2").css("top","0");
			},900);
		}
		
	});
})
