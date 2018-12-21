$(function() {
	if ($('.login-info').width() > 250) {
		$('.mobile-link').addClass('ml200');
	} else {
		$('.mobile-link').removeClass('ml200');
	}
	var nav = $(".floatbar");
	var win = $(window);
	var sc = $(document);
	win.scroll(function() {
		if (sc.scrollTop() >= 500) {
			nav.css("display", "block");
		} else {
			nav.css("display", "none");
		}
	});
	$('a[href*=#]').bind("click", function(e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop : $('#' + anchor.text()).offset().top
		}, 1000);
		e.preventDefault();
	});

	/*免费找货       开始*/
	$('.com_back .mianfei_zhaohuo').click(function() {
		$('.com_banner_small').animate({
			left : '-520px'
		}, 1000);
		$('.com_banner_big').animate({
			left : '0'
		}, 3000);
	});
	$('.jiantou_zuo').click(function() {
		$('.com_banner_big').animate({
			left : '-100%'
		}, 1000);
		$('.com_banner_small').animate({
			left : '0'
		}, 3000);
	});
	$('#sub_xuqiu')
			.click(
					function() {
						var xuqiu = $('#xuqiu').val();
						var phone = $('#yonghu_phone').val();
						if (xuqiu == '' || xuqiu == undefined || xuqiu == null) {
							alert('请填写您的需求');
						} else if (phone == '' || phone == undefined
								|| phone == null) {
							alert('请填写您的手机号');
						} else {
							var r = /^((0\d{2,3}-\d{7,8})|(1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}))$/;
							if (!r.test(phone)) {
								alert('请输入正确的手机或者电话号码!!');
								return;
							}
							$.ajax({
								cache : true,
								type : "POST",
								url : "index/free",
								data : $('#Inser').serialize(), // 序列化form表单
							});
							$('#chenggong').show();
							$('#chenggong #alertDialogOK').click(function(){
								window.location.reload();// 刷新页面
							});
						}
					});
	/*免费找货       结束*/
});