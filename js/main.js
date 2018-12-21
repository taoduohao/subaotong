/**
 * Created by Administrator on 2017/9/12.
 */
$(document).ready(function () {
    //查询
    $("#product").click(function () {
        $("#product").addClass('on');
        $("#shop").removeClass('on');
    });
    $("#shop").click(function () {
        $("#shop").addClass('on');
        $("#product").removeClass('on');
    });
    //导航栏
    $('#main-nav .inner-con2 a').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
    });
    //最新报价平明更多切换
    $('.scree-list li .more').each(function (index) {
        $(this).click(function () {
            if ($('li').eq(index).height() > 50) {
                $('li').eq(index).height(50);
                $('li a.more i').eq(index).removeClass("fa-angle-up").addClass("fa-angle-down");
            } else {
                $('li').eq(index).height('auto');
                $('li a.more i').eq(index).removeClass("fa-angle-down").addClass("fa-angle-up");
            }
        });
    });
    //主页品牌品种切换
    $('.brand-left-box .brand-btn-pp').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        if ($(this).attr("name") == '1') {
            $('.fenlie-box').show();
            $('.pinzhong-box').hide();
        } else {
            $('.fenlie-box').hide();
            $('.pinzhong-box').show();
        }
    });
    $('.fenlie-box .fenlie-first li').mouseover(function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('.pro_chirld').show();
    });
    $('.fenlie-box .fenlie-first li').mouseout(function () {
     	$('.pro_chirld').hide();
    });
    $('.pro_chirld').mouseover(function () {
     	$('.pro_chirld').show();
    });
    $('.pro_chirld').mouseout(function () {
     	$('.pro_chirld').hide();
    });
    //	滚动合作企业
    var swiper = new Swiper('.swiper-container.cooperation-container', {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 5,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //滚动最新报价
    $('.deal-offer-box').kxbdSuperMarquee({
        isEqual: false,
        distance: 284,
        time: 4,
        direction: 'up'
    });

    //最新订单滚动
    $('.deal-order-shuju').myScroll({
        speed: 40, //数值越大，速度越慢
        rowHeight: 28 //li的高度
    });
    //新闻中心
    $('.news-problem-box ul li').mousemove(function () {
        $(this).addClass('on');
    });
    $('.news-problem-box ul li').mouseout(function () {
        $(this).removeClass('on');
    });
    //曲线图
    var title = {
        text: ''
    };
    var subtitle = {
        text: ''
    };
    var xAxis = {
        categories: ['01-29', '01-30', '01-31', '02-01', '02-02', '02-05', '02-07', '02-08', '02-11', '02-12', '02-13', '02-14', '02-15', '02-16', '02-19', '02-20', '02-21', '02-22', '02-23', '02-26', '02-27', '02-28', '03-01', '03-02', '03-05', '03-06', '03-07', '03-08', '03-09', '03-12', '03-13', '03-14', '03-15', '03-16', '03-19', '03-20', '03-21', '03-22', '03-23', '03-26', '03-27', '03-28', '03-29', '03-30', '04-02', '04-03', '04-04', '04-08', '04-09', '04-10', '04-11', '04-12', '04-13', '04-16', '04-17', '04-18', '04-19', '04-20', '04-23', '04-24', '04-25', '04-26', '04-27', '04-28']
    };
    var yAxis = {
        title: {
            text: ''
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    };

    var tooltip = {
        valueSuffix: '/T'
    }

    // var legend = {
    //    layout: 'vertical',
    //    align: 'right',
    //    verticalAlign: 'middle',
    //    borderWidth: 0
    // };
    var legend = {
        align: 'left', //水平方向位置
        verticalAlign: 'top', //垂直方向位置
        x: 0, //距离x轴的距离
        y: 0 //距离Y轴的距离
    };

    var series = [{
            name: 'PE',
            marker: { //线上数据点  
                symbol: 'circle'
            },
            color: '#51528c',
            data: [1155.0, 1151.7, 1145.8, 1145.0, 1144.2, 1140.8, 1135.8, 1135.0, 1127.5, 1127.5, 1127.0, 1127.0, 1125.0, 1125.0, 1125.0, 1125.0, 1125.0, 1125.0, 1125.0, 1114.2, 1110.8, 1104.2, 1103.3, 1105.8, 1106.7, 1106.7, 1106.7, 1104.2, 1100.0, 1096.7, 1094.2, 1086.7, 1089.2, 1086.7, 1088.3, 1086.7, 1086.7, 1086.7, 1084.2, 1075.0, 1074.2, 1076.7, 1076.7, 1082.5, 1091.7, 1101.7, 1102.5, 1102.5, 1106.7, 1112.5, 1119.2, 1122.5, 1124.2, 1122.5, 1122.5, 1120.0, 1118.3, 1120.0, 1120.0, 1117.5, 1114.2, 1114.2, 1113.3, 1113.3]
        },
        {
            name: 'PP',
            marker: { //线上数据点  
                symbol: 'circle'
            },
            color: '#ff8158',
            data: [1100.0, 1100.0, 1095.0, 1093.0, 1093.0, 1085.0, 1080.0, 1065.0, 1065.0, 1060.0, 1060.0, 1060.0, 1060.0, 1060.0, 1060.0, 1060.0, 1065.0, 1060.0, 1060.0, 1055.0, 1055.0, 1052.0, 1055.0, 1055.0, 1055.0, 1055.0, 1050.0, 1040.0, 1030.0, 1025.0, 1025.0, 1030.0, 1030.0, 1020.0, 1015.0, 1005.0, 1010.0, 1015.0, 995.0, 995.0, 995.0, 1003.0, 1000.0, 1010.0, 1015.0, 1025.0, 1025.0, 1028.0, 1033.0, 1038.0, 1045.0, 1040.0, 1045.0, 1040.0, 1035.0, 1040.0, 1040.0, 1040.0, 1032.0, 1035.0, 1040.0, 1042.0, 1045.0, 1045.0]
        },
        {
            name: 'PVC',
            marker: { //线上数据点  
                symbol: 'circle'
            },
            color: '#f8a20f',
            data: [873.0, 873.0, 873.0, 873.0, 862.0, 863.0, 865.0, 865.0, 865.0, 865.0, 865.0, 865.0, 865.0, 865.0, 865.0, 865.0, 865.0, 866.0, 866.0, 863.0, 861.0, 861.0, 868.0, 870.0, 870.0, 863.0, 863.0, 858.0, 843.0, 831.0, 828.0, 830.0, 828.0, 826.0, 826.0, 818.0, 823.0, 831.0, 826.0, 828.0, 830.0, 830.0, 828.0, 831.0, 843.0, 843.0, 841.0, 843.0, 851.0, 861.0, 856.0, 854.0, 855.0, 856.0, 854.0, 860.0, 861.0, 865.0, 868.0, 873.0, 873.0, 878.0, 888.0, 891.0]
        }
    ];

    var json = {};

    json.title = title;
    json.subtitle = subtitle;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.tooltip = tooltip;
    json.legend = legend;
    json.series = series;

    $('.deal-info-show').highcharts(json);
    
    $('.title-introduce h1 a').click(function () {
    	$(this).addClass('ju').siblings().removeClass('ju');
    });
    
//  还价
	$('.counter-offer .over_btn').click(function(){
		$('.counter-offer').hide();
	});
	$('.counter-offer .over_btns').click(function(){
		$('.counter-offer').hide();
	});
	$('.btn-coll').click(function(){
		$('.counter-offer').show();
	});	
	$('.k_price input').blur(function(){
		var price = $('.k_price input').val();
		if(price == '' || price == undefined || price == null){
			$('.k_price .tooltips').css('display','inline-block');
			return false;
		}else{
			$('.k_price .tooltips').hide();
		}
	});
	$('.k_num input').blur(function(){
		var num = $('.k_num input').val();
		if(num == '' || num == undefined || num == null){
			$('.k_num .tooltips').css('display','inline-block');
			return false;
		}else{
			$('.k_num .tooltips').hide();
		}
	});
	$('.k_date input').blur(function(){
		var date = $('.k_date input').val();
		if(date == '' || date == undefined || date == null){
			$('.k_date .tooltips').css('display','inline-block');
			return false;
		}else{
			$('.k_date .tooltips').hide();
		}
	});
	$('.sub_counter').click(function(){
		var price = $('.k_price input').val();
		var num = $('.k_num input').val();
		var date = $('.k_date input').val();
		if(price == '' || price == undefined || price == null){
			$('.k_price .tooltips').css('display','inline-block');
			return false;
		}else{
			$('.k_price .tooltips').hide();
			if(num == '' || num == undefined || num == null){
				$('.k_num .tooltips').css('display','inline-block');
				return false;
			}else{
				$('.k_num .tooltips').hide();
				if(date == '' || date == undefined || date == null){
					$('.k_date .tooltips').css('display','inline-block');
					return false;
				}else{
					$('.k_date .tooltips').hide();
					console.log("价格："+price+"，数量："+num+"，日期："+date);
				}
			}
		}
	});
	
	$('#company_str').click(function(){
		$('.company_list').show();
	});
	$(document).bind("click",function(e){
  　　　　　　  var target  = $(e.target);
  　　　　　  　if(target.closest("#company_str").length == 0){
      　　　　　　 $('.company_list').hide();
 　　　　　　     }　　　
 　　　　　　});
	$('.company_list li').on("click",function(){
		var company = $(this).find('.com_name').html();
		var name = $(this).find('.c_name').html();
		var phone = $(this).find('.com_phone').html();
		$('#company_str').val(company+'--'+name+'--'+phone);
		$('.company_list').hide();
	});
	
	//插入商家排序
	var bus_num = $('.rankings').length;
    for(var i = 1;i<bus_num;i++){
        $('.rankings').eq(i).html(i+1);
    }  
});
