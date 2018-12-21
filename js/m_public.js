var plas_msg={
	href:function(content,href)
	{
			var dialog="<div class='modal fade' id='alertDialog' tabindex='-1' role='dialog' aria-labelledby='alertDialogModalLabel' aria-hidden='true'>";
			dialog+="<div class='modal-dialog modal-sm' style='margin-top:10%;'><div class='modal-content'><div class='modal-header'>";
			dialog+="<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>";
			dialog+="<h4 class='modal-title' id='alertDialogModalLabel'>提示</h4></div>";
			dialog+="<div class='modal-body text-center'>"+content+"</div>";
			dialog+="<div class='modal-footer'>";
			dialog+="<button type='button' class='btn btn-info' data-dismiss='modal' id='alertDialogOK'>确定</button>";
			dialog+="</div></div></div></div>";
			$(dialog).appendTo(document.body);
			$("#alertDialog").modal('show');
			$("#alertDialog").on('hide.bs.modal',function (){$("#alertDialog").remove();top.window.location=href;});
	},
	reload:function(content)
	{
			var dialog="<div class='modal fade' id='alertDialog' tabindex='-1' role='dialog' aria-labelledby='alertDialogModalLabel' aria-hidden='true'>";
			dialog+="<div class='modal-dialog modal-sm' style='margin-top:10%;'><div class='modal-content'><div class='modal-header'>";
			dialog+="<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>";
			dialog+="<h4 class='modal-title' id='alertDialogModalLabel'>提示</h4></div>";
			dialog+="<div class='modal-body text-center'>"+content+"</div>";
			dialog+="<div class='modal-footer'>";
			dialog+="<button type='button' class='btn btn-info' data-dismiss='modal' id='alertDialogOK'>确定</button>";
			dialog+="</div></div></div></div>";
			$(dialog).appendTo(document.body);
			$("#alertDialog").modal('show');
			$("#alertDialog").on('hide.bs.modal',function (){$("#alertDialog").remove();window.location.reload();});
	},
	alert:function(content)
	{
			var dialog="<div class='modal fade' id='alertDialog' tabindex='-1' role='dialog' aria-labelledby='alertDialogModalLabel' aria-hidden='true'>";
			dialog+="<div class='modal-dialog modal-sm' style='margin-top:10%;'><div class='modal-content'><div class='modal-header'>";
			dialog+="<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>";
			dialog+="<h4 class='modal-title' id='alertDialogModalLabel'>提示</h4></div>";
			dialog+="<div class='modal-body text-center'>"+content+"</div>";
			dialog+="<div class='modal-footer'>";
			dialog+="<button type='button' class='btn btn-info' data-dismiss='modal' id='alertDialogOK'>确定</button>";
			dialog+="</div></div></div></div>";
			$(dialog).appendTo(document.body);
			$("#alertDialog").modal('show');
			$("#alertDialog").on('hide.bs.modal',function (){$("#alertDialog").remove();});
	},
	confirm:function(dialogId,content,fn)
	{
		var dialog="<div class='modal fade' id='"+dialogId+"' tabindex='-1' role='dialog' aria-labelledby='"+dialogId+"ModalLabel' aria-hidden='true'>";
		dialog+="<div class='modal-dialog modal-sm' style='margin-top:10%;'><div class='modal-content'><div class='modal-header'>";
		dialog+="<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>";
		dialog+="<h4 class='modal-title' id='"+dialogId+"ModalLabel'>提示</h4></div>";
		dialog+="<div class='modal-body' style='text-align:center;'>"+content+"</div>";
		dialog+="<div class='modal-footer'>";
		dialog+="<button type='button' class='btn btn-default' data-dismiss='modal'>关闭</button>";
		dialog+="<button type='button' class='btn btn-info' id='"+dialogId+"OK'>确定</button>";
		dialog+="</div></div></div></div>";
		$(dialog).appendTo(document.body);
		$("#"+dialogId).modal('show');
		$("#"+dialogId).on('hidden.bs.modal',function (){$("#"+dialogId).remove();});
		$("#"+dialogId+"OK").bind("click",function(){$("#"+dialogId).modal('hide');fn()});
	}
}
var plas_public={
		uploadImg : function(obj) {
			var id = $(obj).attr("id");
			var f = document.getElementById(id).value;
			if (!plas_public.checkImage(f)) {
				plas_msg.alert("亲,您上传的文件非图片类型哦!");
				return;
			}
			$.ajaxFileUpload({
				url : "manage/file/upload/img.html",
				fileElementId : id,
				dataType : "json",
				data:{imgId:1},
				async : true,
				success : function(data) {
					$("#titlePicImg").attr("src", data.url);
					$("#titlePicPath").val(data.path);
				},
				error : function(data, status, e) {
					plas_msg.alert("上传失败了,请稍后再试!");
				}
			});
		},
	checkImage:function(file){if(/.(gif|jpg|jpeg|png|JPG|PNG|GIF)$/.test(file)){return true;}return false;},
	createLoading:function(){ var h = $(window).height()/2-80; var loading="<div id='applicationLoading' style='position:fixed;z-index:999;text-align:center;width:100%;background-color:white;height:100%;padding-top:"+h+"px;top:0;opacity:.6;'><img width='80' height='80' src='resources/pc/image/loading.gif'/> 请稍后 ...</div>";return loading;},
	removeLoading:function(){$("#applicationLoading").remove();},
	priceReg:/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)|(^\s*$)/,
	myPriceReg:/(^[1-9]([0-9]{1,6})?(\.[0-9]{1,2})?$)|(^[0-9]\.[0-9]{1}$)/,
	myNumReg:/(^[1-9]([0-9]{1,5})?(\.[0-9]{1,2})?$)|(^[0-9]\.[0-9]{1,3}$)/,
	whiteReg:/(^s*)|(s*$)/g,
	phoneReg:/^1[34578]\d{9}$/,
	telPhoneReg:/^((0\d{2,3}-\d{7,8})|(1[35784]\d{9}))$/,
	handlePhone:function(phone){if(/^0\d{2,3}-\d{7,8}$/.test(phone)){var ps = phone.split('-');('addPhone2').val(ps[0]);$('addPhone3').val(ps[1]);}else{$('#addPhone1').val(phone)}},
	html_user:'',
	html_user_box:'',
	html_hot:'',
	msgUnRead:function(){
		$.ajax({
			url:'manage/msg/unread.html',type:'POST',success:function(data){if(Number(data)>0) $('#topMsg').html(data)}
		});
	},
	user:function(){
		 $.ajax({
		      url:'_index/user.html',
		      type:'GET',
		      dataType:'json',
		      success: function (data) {
		    	  if(data.login===false){
		    		  plas_public.html_user="<a href='reg.html'>立即注册</a> | <a href='login.html'>直接登录</a>";;
		    		  plas_public.html_user_box="<button type='button' class='register-btn'>免费注册</button><button type='button' class='sign-btn'>立即登录</button>";
		    	  }else{
//		    		  plas_public.html_user="欢迎您！ <a href='manage.html'><span class='color-06c' style='color: #f53838;'>"+data.name+"</span></a>  | <a href='loginout.html'>退出</a> | <a href='manage/msg.html'>我的消息<span id='topMsg'></span></a>";
		    		  plas_public.html_user="欢迎您！<span class='color-06'><span style='color: #f53838;'>"+data.name+"</span><ul class='user_check'><li><a href='manage.html'>个人中心</a></li><li><a href='#'>切换状态</a></li></ul></span>";
		    		  plas_public.html_user_box="<div class='user_box'><p>欢迎您使用塑宝通平台！</p><h1><a href='#'>"+data.name+"</a></h1></div>";
		    		  plas_public.msgUnRead();
		    	  }
		    	  $('#login-info').html(plas_public.html_user);
		    	  $('#user_box').html(plas_public.html_user_box);
		      }
		 	})
	},
	hots:function(){
		var timestamp = Date.parse(new Date()); 
		var dt = sessionStorage.getItem("plas_hot_time");
		if(timestamp-dt>600000){
			$.ajax({
			      url:'_index/hots.html',
			      type:'GET',
			      dataType:'json',
			      success: function (data) {
			    	  sessionStorage.setItem("plas_hot",data);
			    	  sessionStorage.setItem("plas_hot_time",timestamp);
			      }
		 	})
		}
		var data = sessionStorage.getItem("plas_hot")==null?'':sessionStorage.getItem("plas_hot").split(",");
		plas_public.html_hot='';
		for(var i=0; i<data.length; i++){
		  plas_public.html_hot=plas_public.html_hot+'<span><a href="product.html?word='+data[i]+'">'+data[i]+'</a></span>';
		  if(i!=data.length-1){
			  plas_public.html_hot=plas_public.html_hot+' | ';  
		  }
    	}
		if(plas_public.html_hot==''){
			plas_public.html_hot='<a href="product.html?word=3015"><span>3015</span></a> | <a href="product.html?word=PP"><span>PP</span></a> | <a href="product.html?word=ASA胶粉"><span>ASA胶粉</span></a> | <a href="product.html?word=台湾台化"><span>台湾台化</span></a> | <a href="product.html?word=5090T"><span>5090T</span></a> | <a href="product.html?word=塑宝通新材料"><span>塑宝通新材料</span></a> | <a href="product.html?word=WE8100"><span>WE8100</span></a> | <a href="product.html?word=PL810A"><span>PL810A</span></a>';
		}
    	$('.hotwords').html(plas_public.html_hot);
	},
	e_code:function(){ $("#phoneinfo").mouseover(function(){ $(".mobile-link").show(); $(this).css("color","#f53838"); }); $("#phoneinfo").mouseout(function(){ $(".mobile-link").hide(); $(this).css("color","#333"); }); },
	search:function(){
		var s =$('#searchInput').val();
		if (s.replace(/(^s*)|(s*$)/g, "").length ==0) return;
	    if($('.keywords span.on').attr('id')=='shop'){
	    	window.location.href='business.html?word='+s;
	    }else{
	    	window.location.href='product.html?word='+s;
	    }
	},
	init:function(){
		plas_public.html_user='';
		plas_public.html_hot='';
		plas_public.user();
		plas_public.hots();
		plas_public.search();
	},
	manage_init:function(){
		plas_public.html_user='';
		plas_public.user();
	},
	collectPro:function(id,bln){
		$.ajax({url:'manage/collect/save.html',type:'POST',data:{productId:id,isCollect:bln}});
	},
	news_load:function(){
		//最新资讯切换
//	    $('#newestcon').on('click', function (e) {
//		      $(e.target).addClass('on').siblings().removeClass('on');
//		      $('#newest').toggle();
//		      $('#moving').toggle();
//		      if($(e.target).attr("id")=="dynamicPanel"&&$('#moving').children().length==0){
//		    	  $.ajax({
//		    		  url:'news/list.html', data:{type:1002,pageNo:1}, type:'POST',
//		    		  success:function(data){
//		    			  $('#moving').html(data);
//		    		  },
//		    		  beforeSend:function(){
//		                  $('#moving').html(plas_public.createLoading());
//		              },
//		              complete:function(){plas_public.removeLoading();}
//		    	  })
//		      }
//	    });
		$('#newestcon').on('click', function (e) {
		      $(this).addClass('on').siblings().removeClass('on');
		      $('#newest').show();
		      $('#moving').hide();
		      if($(this).attr("id")=="newestcon"&&$('#newest').children().length==0){
		    	  $.ajax({
		    		  url:'news/list.html', data:{type:1002,pageNo:1}, type:'POST',
		    		  success:function(data){
		    			  $('#newest').html(data);
		    		  },
		    		  beforeSend:function(){
		                  $('#newest').html(plas_public.createLoading());
		              },
		              complete:function(){plas_public.removeLoading();}
		    	  })
		      }
	    });
	    $('#dynamicPanel').on('click', function (e) {
		      $(this).addClass('on').siblings().removeClass('on');
		      $('#newest').hide();
		      $('#moving').show();
		      if($(this).attr("id")=="dynamicPanel"&&$('#moving').children().length==0){
		    	  $.ajax({
		    		  url:'news/list.html', data:{type:1002,pageNo:1}, type:'POST',
		    		  success:function(data){
		    			  $('#moving').html(data);
		    		  },
		    		  beforeSend:function(){
		                  $('#moving').html(plas_public.createLoading());
		              },
		              complete:function(){plas_public.removeLoading();}
		    	  })
		      }
	    });
	},
	news_more:function(type,pageNo){
		 $.ajax({
   		  url:'news/list.html', data:{type:type,pageNo:pageNo}, type:'POST',
   		  success:function(data){
   			  type==1001?$('#newest').append(data):$('#moving').append(data);
   		  },
   		  beforeSend:function(){
   			  $("#more"+type).remove();
   			  type==1001?$('#newest').append(plas_public.createLoading()):$('#moving').append(plas_public.createLoading())
          },
          complete:function(){plas_public.removeLoading();}
   	  })
	},
	news_list_hots:function(){
		 $.ajax({
	   		  url:'news/list/hots.html', type:'POST',
	   		  success:function(data){
	   			  $('.news-inner-right').html(data);
	   		  },
	   		  beforeSend:function(){
	   			  $('.news-inner-right').html(plas_public.createLoading())
	          },
	          complete:function(){plas_public.removeLoading();}
	   	  })
	},
	supply_price_search:function(word,category,vender,isNow,time,sold,price){
		var b = $('#bprice').val(); var e = $('#eprice').val();
		if(plas_public.priceReg.test(b)&&plas_public.priceReg.test(e)){
			window.location.href='product.html?beginPrice='+b+'&endPrice='+e+'&word='+word+'&category='+category+
			'&vender='+vender+'&isNow='+isNow+'&timeDesc='+time+'&soldDesc='+sold+'&priceDesc='+price;
		}
	},
	supply_price_search_business:function(id,word,category,vender,isNow,time,sold,price){
		var b = $('#bprice').val(); var e = $('#eprice').val();
		if(plas_public.priceReg.test(b)&&plas_public.priceReg.test(e)){
			window.location.href='business/'+id+'.html?beginPrice='+b+'&endPrice='+e+'&word='+word+'&category='+category+
			'&vender='+vender+'&isNow='+isNow+'&timeDesc='+time+'&soldDesc='+sold+'&priceDesc='+price;
		}
	},
	sendPhoneCode:function(e){
		var bootstrapValidator = $('form').data('bootstrapValidator');  
		bootstrapValidator.validateField('phone');
		if(bootstrapValidator.isValidField('phone')){
			var time  = 60;
	        var event = {
	            clock:function(){
	                if(time==1){
	                	$(e).removeAttr("disabled");
	                    $(e).html('重新发送');
	                    return;
	                }
	                time--;
	                $(e).html(time+'秒后重发');
	                setTimeout(event.clock, 1000);
	            }
	        };
			$.ajax({
				url:'message/phonecodes.html',data:{type:'reg',phone:$('input[name=phone]').val()},type:'POST',
				success:function(data){
	                if("ok"==data){
	                	$(e).attr("disabled","true");
	                    event.clock();
	                }else{
	                	plas_msg.alert(data);
	                }
	            },
	            beforeSend:function(){
	                $(this).html('发送中...');
	            },
	            error:function(){
	                $(this).html('重新发送');
	            }
			})
		}
	},
	reg_user_form:function(){
		 $('form').bootstrapValidator({
			    feedbackIcons: { valid: 'fa fa-check', invalid: 'fa fa-times', validating: 'fa fa-exclamation-circle' },
			    submitButtons: 'button[type="submit"]',
			    fields: {
			      phone: {
			    	  validators: 
			    	  { 	notEmpty: { message: '手机号不能为空' },
	    		  			regexp: { regexp: /^1[34578]\d{9}$/, message: '手机号无效' }
			    	  }
			      },
			      phonecode: {
			    	  validators: 
			    	  { 	
			    		  notEmpty: { message: '验证码不能为空' },
			    		  remote: {
		                        url: 'message/phonecodes/validate.html',type:'POST',
		                        message: '验证码不正确'
		                    }
			    	  }
			      },
			      name: {
			    	  validators: 
			    	  { 	notEmpty: { message: '姓名不能为空' },
			    		  	stringLength: { min: 2, max: 10, message: '姓名长度必须在2到10之间' }
			    	  }
			      },
			      password: {
			    	  validators: {
				          notEmpty: { message: '密码不能为空' },
				          different: { field: 'phone', message: '密码不能与手机号相同' },
				          stringLength: { min: 6, max: 16, message: '密码长度必须在6到16之间' }
			        }
			      },
			      confirmPassword: {
			    	  validators: {
				          notEmpty: { message: '确认密码不能为空' },
				          identical: { field: 'password', message: '两次密码不一致' }
				        }
			      },
			      law:{
			    	  validators: {
				          notEmpty: { message: '请仔细阅读服务协议' }
				        }
			      }
			    }
			  });
	},
	reg_info_form:function(){
		 $('#user').bootstrapValidator({
			    feedbackIcons: { valid: 'fa fa-check', invalid: 'fa fa-times', validating: 'fa fa-exclamation-circle' },
			    submitButtons: 'button[type="submit"]',
			    fields: {
			    	qq:{
				    	  validators:
			    		  {
				    		  notEmpty: { message: 'QQ不能为空' }
			    		  }
				      }
			    }
			  });
	},
	emailPost:function(){
		$("#emailForm").bootstrapValidator({
	    	feedbackIcons: { valid: 'fa fa-check', invalid: 'fa fa-times', validating: 'fa fa-exclamation-circle' },
	    	submitButtons:'button[type="submit"]',
		    fields: {
		    	 email:{
			    	  validators:
		    		  {
			    		  notEmpty: { message: '邮箱不能为空' },
	    				  emailAddress:{message:'邮箱不正确'}
		    		  }
			      }
		    }
	    }).on('success.form.bv', function(e) {
            e.preventDefault();
            var $form = $(e.target);
            $.ajax({
				url:$form.attr('action'),data:$form.serialize(),type:'POST',
				success:function(data){
					$('#emailBtn').html(data);
					$('#emailForm').data('bootstrapValidator').resetForm();
					$("#emailModal").modal('hide');
				},
	            error:function(){
	            	plas_msg.alert('网络错误');
	            }
			})
	    });   
	},
	find_password1:function(){
		$('form').bootstrapValidator({
		    feedbackIcons: { valid: 'fa fa-check', invalid: 'fa fa-times', validating: 'fa fa-exclamation-circle' },
		    submitButtons: 'button[type="submit"]',
		    fields: {
		      phone:{
		    	  validators: 
		    	  { 	notEmpty: { message: '手机号不能为空' },
    		  			regexp: { regexp: /^1[34578]\d{9}$/, message: '手机号无效' },
		    	  }
		      },
		      pcode:{
		    	  validators: 
		    	  { 	notEmpty: { message: '图片验证码不能为空' }
		    	  }
		      }
		    }
		  });
	},
	find_password2:function(){
		$('form').bootstrapValidator({
			feedbackIcons: { valid: 'fa fa-check', invalid: 'fa fa-times', validating: 'fa fa-exclamation-circle' },
			submitButtons: 'button[type="submit"]',
			fields: {
				pcode:{
					validators: 
					{ 	notEmpty: { message: '短信验证码不能为空' }
					}
				}
			}
		});
	},
	find_password3:function(){
		$('form').bootstrapValidator({
			feedbackIcons: { valid: 'fa fa-check', invalid: 'fa fa-times', validating: 'fa fa-exclamation-circle' },
			submitButtons: 'button[type="submit"]',
			fields: {
			    pass: {
		    	  validators: {
			          notEmpty: { message: '密码不能为空' },
			          stringLength: { min: 6, max: 16, message: '密码长度必须在6到16之间' }
		    	  }
		       },
		       confirmPassword: {
		    	  validators: {
			          notEmpty: { message: '确认密码不能为空' },
			          identical: { field: 'pass', message: '两次密码不一致' }
			        }
		      }
			}
		});
	},
	login:function(){
		$('form').bootstrapValidator({
			feedbackIcons: { valid: 'fa fa-check', invalid: 'fa fa-times', validating: 'fa fa-exclamation-circle' },
			submitButtons: 'button[type="submit"]',
			fields: {
				phone:{
					  threshold:11,
					  verbose:false,
			    	  validators: 
			    	  { 	notEmpty: { message: '手机号不能为空' },
	    		  			regexp: { regexp: /^1[34578]\d{9}$/, message: '手机号无效' }
			    	  }
			      },
			    password: {
		    	  validators: {
			          notEmpty: { message: '密码不能为空' }
			        }
		      }
			}
		});
	}
};

var plas_info={
	sendEmailCode:function(e){
		var email = $('input[name="email"]').val();
		if(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(email)){
			$.ajax({
				url:'message/emailcode.html',data:{template:'chgEmail',email:$('input[name=email]').val()},type:'POST',
				success:function(data){
                	$(e).html('已发送');
                	$(e).attr("disabled","true");
				},
	            beforeSend:function(){
	                $(e).html('发送中...');
	            },
	            error:function(){
	                $(e).html('重新发送');
	            }
			})
		}else{
			plas_msg.alert('邮箱不正确');
		}
	},
	formValidate:function(){
		$("#infoForm").bootstrapValidator({
	    	feedbackIcons: { valid: 'fa fa-check', invalid: 'fa fa-times', validating: 'fa fa-exclamation-circle' },
	    	submitButtons:'button[type="submit"]',
		    fields: {
		      name: {
		    	  validators: 
		    	  { 	notEmpty: { message: '姓名不能为空' },
		    		  	stringLength: { min: 2, max: 10, message: '姓名长度必须在2到10之间' }
		    	  }
		      },
		      email:{
		    	  validators:
	    		  {
		    		  emailAddress:{message:'邮箱不正确'}
	    		  }
		      }
		    }
	    }).on('success.form.bv', function(e) {
            e.preventDefault();
            var $form = $(e.target);
            $.ajax({
				url:$form.attr('action'),data:$form.serialize(),type:'POST'
			})
	    });   
	},
	formShopValidate:function(){
		$("#infoNameForm").bootstrapValidator({
			feedbackIcons: { valid: 'fa fa-check', invalid: 'fa fa-times', validating: 'fa fa-exclamation-circle' },
			submitButtons:'button[type="submit"]',
			fields: {
				shopName: {
					validators: 
					{ 	notEmpty: { message: '店铺名称不能为空' },
						stringLength: { min: 2, max: 10, message: '店铺名称长度必须在2到20之间' }
					}
				},
				tel: {
			    	  validators: 
			    	  { 	notEmpty: { message: '联系方式不能为空' },
	    		  			regexp: { regexp: plas_public.telPhoneReg, message: '联系方式不正确' }
			    	  }
			    }
			}
		}).on('success.form.bv', function(e) {
			e.preventDefault();
			var $form = $(e.target);
			$.ajax({
				url:$form.attr('action'),data:$form.serialize(),type:'POST',success:function(){window.location.href='manage/business/boss/ok.html'}
			})
		});   
	},	
	pwdValidate:function(){
		$("#infoForm").bootstrapValidator({
	    	feedbackIcons: { valid: 'fa fa-check', invalid: 'fa fa-times', validating: 'fa fa-exclamation-circle' },
	    	submitButtons:'button[type="submit"]',
		    fields: {
		      oldpwd: {
		    	  validators: 
		    	  { 	notEmpty: { message: '原密码不能为空' },
		    		  	stringLength: { min: 6, max: 16, message: '密码长度必须在6到16之间' }
		    	  }
		      },
		      newpwd:{
		    	  validators:
	    		  {
		    		  notEmpty: { message: '密码不能为空' },
			          stringLength: { min: 6, max: 16, message: '密码长度必须在6到16之间' },
		    		  different: { field: 'oldpwd', message: '新密码不能与原密码相同！' }
	    		  }
		      },
		      renewpwd:{
		    	  validators: {
		    		  	notEmpty: { message: '密码不能为空' },
	                    identical: { field: 'newpwd', message: '两次输入的密码不一致' }
	                }
		      }
		    }
	    }).on('success.form.bv', function(e) {
            e.preventDefault();
            var $form = $(e.target);
            $.ajax({
				url:$form.attr('action'),data:$form.serialize(),type:'POST'
			})
	    });   
	}
}
var plas_shop={
	buy:function(){
		window.location.href='manage/cart/cart-1.html?num='+$('#num').val()+'&pid='+$('#pid').val()+'&fee='+$('#fee').val();
	},
	detail_cart:function(id){
		if($('#isAllowed').val()=='true'){
			window.location.href='manage/cart.html?pid='+id+'&num='+$('#num').val();
		}else{
			plas_msg.alert('不能购买自身店铺产品');
		}
	},
	detail_num:function(){
		if(Number($("#num").val())==0){
			$('.btn-buyer').attr('disabled','disabled').addClass('disabled');
			return false;
		}
		if(Number($("#num").val())>Number($('#inventory').val())){
			$('.num_error').html('商品数量超过库存！')
			$('.btn-buyer').attr('disabled','disabled').addClass('disabled');
			return false;
		}else{
			$('.num_error').html('')
			$('.btn-buyer').removeAttr('disabled').removeClass('disabled');
			return true;
		}
	},
	cart_num:function(){
		if(Number($("#num").val())==0){
			$('.bill-btn').attr('disabled','disabled').addClass('disabled');
		}else if(Number($("#num").val())>Number($('#inventory').val())){
			plas_msg.alert('商品数量超过库存！')
			$('.bill-btn').attr('disabled','disabled').addClass('disabled');
		}else{
			$('.bill-btn').removeAttr('disabled').removeClass('disabled');
		}
		var p = Number($("#num").val())*Number($('#marketPrice').val()).toFixed(1);
		$('#fee').val(p);
		$('#lnum').html('￥'+p);
		$('#tnum').html('￥'+p);
	},
	cart_init:function () {
		$("#add").click(function(){
		    var oldValue=parseInt($("#num").val());
		    oldValue++;
		    $("#num").val(oldValue);
		    plas_shop.cart_num();
		  });
		  $("#less").click(function(){
		    var oldValue=parseInt($("#num").val());
		    if(oldValue>0){
		      oldValue--;
		    }
		    $("#num").val(oldValue);//将增加后的值付给原控件
		    plas_shop.cart_num();
		  });
		$('#num').keypress(function(event){   
			 //获取当前按键的键值   
		     var keycode = event.which;   
		     if(keycode==69){   
		          return;
		    }
		})
		plas_shop.cart_num();
		$('#num').keyup(function(event){   
			var reg = /^\d{1,8}[.]\d{0,3}$|^\d+$/;
			if(!reg.test($(this).val())){
		            $(this).val(1);
		    }
			plas_shop.cart_num();
		});    
    },
	detail_init:function () {
		$("#add").click(function(){
		    var oldValue=parseInt($("#num").val());
		    oldValue++;
		    $("#num").val(oldValue);
		    plas_shop.detail_num();
		  });
		  $("#less").click(function(){
		    var oldValue=parseInt($("#num").val());
		    if(oldValue>0){
		      oldValue--;
		    }
		    $("#num").val(oldValue);//将增加后的值付给原控件
		    plas_shop.detail_num();
		  });
		$('#num').keypress(function(event){   
			 //获取当前按键的键值   
		     var keycode = event.which;   
		     if(keycode==69){   
		          return;
		    }
		})
		plas_shop.detail_num();
		$('#num').keyup(function(event){   
			var reg = /^\d{1,8}[.]\d{0,3}$|^\d+$/;
			if(!reg.test($(this).val())){
		            $(this).val(1);
		            return;
		    }
			plas_shop.detail_num();
		});    
    }
}
var plas_product={
		sale:function(){
			$.ajax({
				url:'manage/product/sale.html',
				type:'POST',
				data:{id:$('#saleBtn').attr('title'),isSale:false},
				success:function(data){
	            	plas_product.list(true,1);
				},
	            beforeSend:function(){
	                $('#saleModel').append(plas_public.createLoading());
	            },
	            complete:function(){
	            	$('#saleModel').modal('hide');
	            	plas_public.removeLoading();
	            }
			})
		},
		offsell:function(id){
			$('#saleModel').modal('show');
			$('#saleBtn').attr('title',id);
		},
		delModal:function(id){
			$('#delModel').modal('show');
			$('#delBtn').attr('title',id);
		},
		list:function(isSale,pageNo){
			 $.ajax({
					url:'manage/product/list.html',
					type:'GET',
					data:{isSale:isSale,pageNo:pageNo},
					success:function(data){
		            	plas_public.removeLoading();
		            	$(".s-product").eq(isSale?0:1).html(data);
					},
		            beforeSend:function(){
		            	$("body").append(plas_public.createLoading());
		            },
		            complete:function(){
		            	plas_public.removeLoading();
		            }
				})
		},
		del:function(){
			$.ajax({
				url:'manage/product/'+$('#delBtn').attr('title')+'.html',
				type:'POST',
				success:function(data){
	            	plas_public.removeLoading();
	            	$('#delModel').modal('hide');
	            	plas_product.list(false,1);
				},
	            beforeSend:function(){
	                $('#delModel').append(plas_public.createLoading());
	            },
	            complete:function(){
	            	plas_public.removeLoading();
	            }
			})
		},
		init_list:function(){
			$(".s-product-type span").click(function(){
			    $(this).addClass("on").siblings().removeClass('on');
			    $(".s-product").hide().eq($(this).index()).show();
			    plas_product.list($(this).index()==0,1);
			  });
			 plas_product.list(true,1);
		},
		base_trCli:function(id){
			 $('#addModal').modal('hide');
	         var obj = $.parseJSON(sessionStorage.getItem('plas_grade'+id));
//	         $('input[name="ptext"]').val(obj.cname+' '+obj.name+' '+obj.vname).change();
	         $('#ptext').html(obj.cname+' '+obj.name+' '+obj.vname);
	         $('input[name="gradeId"').val(obj.id);
	         if(obj.supplierId!=undefined){
	        	 $('input[name="supplierId"').val(obj.supplierId);
//	        	 $('input[name="stext"]').val(obj.supplier.company).change();
	        	 $('#stext').html(obj.supplier.company);
	         }
		},
		base_trCli_supplier:function(id){
			$('#supplierModal').modal('hide');
			var obj = $.parseJSON(sessionStorage.getItem('plas_supplier'+id));
			$('input[name="supplierId"').val(obj.id);
//       	 	$('input[name="stext"]').val(obj.company).change();
       	 	$('#stext').html(obj.company);
		},
		base_list_more:function(){
			 var type=$(".search-type span").filter('.on').data('type');
			 var name=$('input[name="name"]').val();
			 var pageNo = $('#footer-line').data('pageNo');
			 $.ajax({
				 url:'manage/product/element.html',type:'get',data:{name:name,type:type,pageNo:pageNo},
				 success:function(data){
					 $('#b_tbody').append(data);
					 plas_product.base_page(pageNo);
				 }
			 })
		},
		base_list_more_supplier:function(){
			var name=$('#supplier-search').val();
			 var pageNo = $('#supplier_more').data('pageNo');
			 $.ajax({
				 url:'manage/product/supplier.html',type:'get',data:{name:name,pageNo:pageNo},
				 success:function(data){
					 $('#s_tbody').append(data);
					 plas_product.base_page_supplier(pageNo);
				 }
			 })
		},
		base_list:function(){
			var type=$(".search-type span").filter('.on').data('type');
			 var name=$('input[name="name"]').val();
			 $.ajax({
				 url:'manage/product/element.html',type:'get',data:{name:name,type:type,pageNo:1},
				 success:function(data){
					 $('#b_tbody').html(data);
					 plas_product.base_page(1);
				 }
			 })
		},
		base_list_supplier:function(){
			var name=$('#supplier-search').val();
			$.ajax({
				url:'manage/product/supplier.html',type:'get',data:{name:name,pageNo:1},
				success:function(data){
					$('#s_tbody').html(data);
					plas_product.base_page_supplier(1);
				}
			})
		},
		base_page:function(pageNo){
			 var totalPage = $('input[name="totalPage"').val();
			 if(totalPage>pageNo){
				 $('#footer-line').data('pageNo',pageNo+1);
				 $('#footer-line').html('<a  href="javascript:void(0)"  onclick="plas_product.base_list_more()">加载更多</a>');
			 }else{
				 $('#footer-line').html('&nbsp;');
			 }
		},
		base_page_supplier:function(pageNo){
			 var totalPage = $('input[name="stotalPage"').val();
			 if(totalPage>pageNo){
				 $('#supplier_more').data('pageNo',pageNo+1);
				 $('#supplier_more').html('<a href="javascript:void(0)"  onclick="plas_product.base_list_more_supplier()">加载更多</a>');
			 }else{
				 $('#supplier_more').html('&nbsp;');
			 }
		},
		product_add_validate:function(){
			$("#addForm").bootstrapValidator({
				feedbackIcons: { valid: 'fa fa-check', invalid: 'fa fa-times', validating: 'fa fa-exclamation-circle' },
			    submitButtons:  'button[type="submit"]',
			    fields: {
			      ptext:{
			    	  trigger:"change", 
			    	  validators: 
			    	  { 	notEmpty: { message: '产品不能为空' }
			    	  }
			      },
			      stext:{
			    	  trigger:"change", 
			    	  validators: 
			    	  { 	notEmpty: { message: '供应商不能为空' }
			    	  }
			      },
			      marketPrice: {
			    	  validators: 
			    	  { 	notEmpty: { message: '价格不能为空' },
			    		  	regexp: { regexp: plas_public.myPriceReg, message: '价格不正确' }
			    	  }
			      },
			      inventory: {
			    	  validators: 
			    	  { 	notEmpty: { message: '数量不能为空' },
			    		  	regexp: { regexp: plas_public.myNumReg, message: '数量不正确' }

			    	  }
			      },
			      isNow:{
			    	  validators: 
			    	  { 	
			    		  callback:
			    			  {
			    			  	  message:'交货时间不正确',
				    			  callback:function(value, validator){
				    				  var wTimeStr = $('input[name="waitTime"]').val();
				    				  if(value=='false'&& wTimeStr!=''){
				    					  var wTime = new Date(Date.parse(wTimeStr));
				    					  return wTime > new Date();
				    				  }else if(value=='true'){
				    					  return true;
				    				  }
				    				  return false;
				    			  }
			    			  }
			    	  }
			      },
			      deliveryTypes:{
			    	  validators:
					  {
			    		  notEmpty: { message: '配送方式不能为空' },
					  }
			      },
			      payType:{
			    	  validators:
			    		  {
			    		  notEmpty: { message: '配送方式不能为空' },
			    		  }
			      },
			      address:{
					  verbose:false,
			    	  validators:{notEmpty: { message: '详细地址不能为空' },stringLength: { min: 3, max: 30, message: '详细地址长度必须在3到30之间' }}
			      }
			    }
			})
			.on('success.form.bv', function(e) {
			    e.preventDefault();
			    var $form = $(e.target);
			    $.ajax({
					url:$form.attr('action'),data:$form.serialize(),type:'POST',
			        beforeSend:function(){
			            $('body').append(plas_public.createLoading());
			        },
			        complete:function(data){
		            	plas_public.removeLoading();
		            }
				})
			});
		},
		validate_timeText:function(){
			$('#addForm').data('bootstrapValidator').resetForm();
		},
		supplierInit:function(){
			$("#saveForm").bootstrapValidator({
	        	feedbackIcons: { valid: 'fa fa-check', invalid: 'fa fa-times', validating: 'fa fa-exclamation-circle' },
	        	submitButtons:  'button[type="submit"]',
			    fields: {
			      company: {
			    	  validators: 
			    	  { 	notEmpty: { message: '公司名称不能为空' },
			    		  	stringLength: { min: 3, max: 30, message: '公司名称长度必须在3到30之间' }
			    	  }
			      },
			      linkMan: {
			    	  validators: 
			    	  { 	notEmpty: { message: '姓名不能为空' },
			    		  	stringLength: { min: 2, max: 10, message: '姓名长度必须在2到10之间' }
			    	  }
			      },
			      phone:{
			    	  validators: 
			    	  { 	
			    		  	notEmpty: { message: '电话不能为空' },
			    		  	regexp: { regexp:plas_public.telPhoneReg, message: '电话不正确' }
			    	  }
			      },
			      email:{
			    	  validators:
		    		  {
			    		  emailAddress:{message:'邮箱不正确'}
		    		  }
			      },
			      fax:{
			    	  validators:
			    		  {
			    		  regexp: { regexp: /^(0\d{2,3}-\d{7,8})$/, message: '传真不正确' }
			    		  }
			      },
			      address:{
					  verbose:false,
			    	  validators:{notEmpty: { message: '详细地址不能为空' },stringLength: { min: 3, max: 30, message: '详细地址长度必须在3到30之间' }}
			      }
			    }
	        })
	        .on('success.form.bv', function(e) {
	            e.preventDefault();
	            var $form = $(e.target);
	            $.ajax({
					url:$form.attr('action'),data:$form.serialize(),type:'POST',
					success:function(data){
						plas_supplier.list();
		            },
		            beforeSend:function(){
		                $('#supplierAddModal').append(plas_public.createLoading());
		            },
		            complete:function(data){
		            	plas_public.removeLoading();
		            	$('#saveForm')[0].reset();
		            	$form.data('bootstrapValidator').resetForm();
		            	$('#supplierAddModal').modal('hide');
		            	$("#sjld").sjld("#shenfen","#chengshi","#quyu");
		            }
			})
	    });
		},
		init_add:function(){
			$("#sjld").sjld("#shenfen2","#chengshi2","#quyu2",'广东省','深圳市','南山区');
			$.fn.datetimepicker.dates['zh'] = {
					days:       ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六","星期日"],
					daysShort:  ["日", "一", "二", "三", "四", "五", "六","日"],
					daysMin:    ["日", "一", "二", "三", "四", "五", "六","日"],
					months:     ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月","十二月"],
					monthsShort:  ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
					meridiem:    ["上午", "下午"],
					today:       "今天"
			};
		    //格式化时间
			 $('.form_date').datetimepicker({ language:  'zh', weekStart: 1, todayBtn:  1, autoclose: 1, todayHighlight: 1, startView: 2, minView: 2, forceParse: 0 });
		    //产品库事件
			$('#addModal').on('show.bs.modal', function (event) {  
				plas_product.base_list();
				//基础款搜索
				$("#shop-search").bind("input propertychange",function () {
					 plas_product.base_list();
				 });
				 //选择产品
			    $(".search-type span").click(function(){
			      $(this).addClass("on").siblings().removeClass('on');
			      plas_product.base_list();
			    });
		    })  
		    //供应商事件
			$('#supplierModal').on('show.bs.modal', function (event) {  
				plas_product.base_list_supplier();
				//基础款搜索
				$("#supplier-search").bind("input propertychange",function () {
					 plas_product.base_list_supplier();
				 });
		    })  
		    $("#waitTimeText").bind("change input propertychange",function () {
		    	setTimeout(plas_product.validate_timeText,500);
			 });
			//验证
			plas_product.product_add_validate();
			//供应商
			$("#sjldd").sjld("#shenfen","#chengshi","#quyu");
			plas_product.supplierInit();
		}
};
var plas_col={
		delModal:function(id){
			$('#delModel').modal('show');
			$('#delBtn').attr('title',id);
		},
		del:function(){
			$.ajax({
				url:'manage/collect/'+$('#delBtn').attr('title')+'.html',
				type:'POST',
				success:function(data){
	            	plas_col.list(1);
				},
	            beforeSend:function(){
	                $('#delModel').append(plas_public.createLoading());
	            },
	            complete:function(data){
	            	$('#delModel').modal('hide');
	            	plas_public.removeLoading();
	            }
			})
		},
		list:function(pageNo){
			 $.ajax({
					url:'manage/collect/list.html',
					type:'GET',
					data:{pageNo:pageNo},
					success:function(data){
		            	$('.s-order').html(data);
					},
		            beforeSend:function(){
		            	$("body").append(plas_public.createLoading());
		            },
		            complete:function(data){
		            	plas_public.removeLoading();
		            }
				})
		}
}
var plas_order={
		bList:function(pageNo,type){
			 $('#'+type).addClass("on").siblings().removeClass('on');
			 $.ajax({
					url:'manage/order/buyer/list.html',
					type:'GET',
					data:{pageNo:pageNo,status:type},
					success:function(data){
		            	$('.s-order').html(data);
					},
		            beforeSend:function(){
		            	$("body").append(plas_public.createLoading());
		            },
		            complete:function(data){
		            	plas_public.removeLoading();
		            }
				})
		},
		cList:function(pageNo,type){
			 $('#'+type).addClass("on").siblings().removeClass('on');
			 $.ajax({
					url:'manage/order/saler/list.html',
					type:'GET',
					data:{pageNo:pageNo,status:type},
					success:function(data){
		            	$('.s-order').html(data);
					},
		            beforeSend:function(){
		            	$("body").append(plas_public.createLoading());
		            },
		            complete:function(data){
		            	plas_public.removeLoading();
		            }
				})
		},
		confirmCancel:function(no,type){
			$('#orderNo').val(no);
			$('#status').val(type);
			plas_msg.confirm(no,'确认取消订单？',plas_order.cancel);
		},
		editPayFeeNo:function(){
			$.ajax({
				url:'manage/order/payFee.html',type:'POST',
				data:{no:$('#orderNo').val(),payFee:$('#editPayFee').val()},
				success:function(data){
					plas_msg.reload("操作成功");
				},
	            beforeSend:function(){
	            	$("body").append(plas_public.createLoading());
	            },
	            complete:function(data){
	            	plas_public.removeLoading();
	            }
				})
		},
		confirmEditPayFee:function(){
			var v = $('#editPayFee').val();
			if(plas_public.priceReg.test(v)&&Number(v)>0)
				plas_msg.confirm('1234123481234','确认修改？',plas_order.editPayFee);
			else
				plas_msg.alert('金额不正确');
		},
		editPayFee:function(){
			$.ajax({
				url:'manage/order/payFee.html',type:'POST',
				data:{no:$('#orderNo').val(),payFee:$('#editPayFee').val()},
				success:function(data){
					plas_msg.reload("修改成功");
				},
	            beforeSend:function(){
	            	$("body").append(plas_public.createLoading());
	            },
	            complete:function(data){
	            	plas_public.removeLoading();
	            }
				})
		},
		cancel:function(){
			$.ajax({
				url:'manage/order/'+$('#orderNo').val()+'.html',
				type:'POST',
				success:function(data){
					window.location.reload();
//					var url = window.location.href;
//					if(url.indexOf('saler')>0){
//						plas_order.cList(1,$('#status').val());
//					}else{
//						plas_order.bList(1,$('#status').val());
//					}
					
				},
	            beforeSend:function(){
	            	$("body").append(plas_public.createLoading());
	            },
	            complete:function(data){
	            	plas_public.removeLoading();
	            }
			})
		}
};
var plas_supplier={
	delModal:function(id){
		$('#delModel').modal('show');
		$('#delBtn').attr('title',id);
	},
	del:function(){
		$.ajax({
			url:'manage/supplier/'+$('#delBtn').attr('title')+'.html',
			type:'POST',
			success:function(data){
				plas_supplier.list();
			},
			complete:function(data){
				$('#delModel').modal('hide');
            	plas_public.removeLoading();
	        },
            beforeSend:function(){
                $('#delModel').append(plas_public.createLoading());
            }
		})
	},
	list:function(){
		$.ajax({
			url:'manage/supplier/list.html',
			type:'GET',
			success:function(data){
            	$('.mt-stock').html(data);
			},
            beforeSend:function(){
            	$("body").append(plas_public.createLoading());
            },
            complete:function(data){
            	plas_public.removeLoading();
            }
		})
	},
	edit:function(id){
		$.ajax({
			url:'manage/supplier/'+id+'.html',
			type:'GET',
			success:function(data){
            	$('#editModal').html(data);
            	$('#editModal').modal({backdrop: 'static', keyboard: false});
			},
			beforeSend:function(){
	         	$("body").append(plas_public.createLoading());
	        },
	        complete:function(data){
	         	plas_public.removeLoading();
	        }
		})
	},
	init:function(){
		$("#saveForm").bootstrapValidator({
	        	feedbackIcons: { valid: 'fa fa-check', invalid: 'fa fa-times', validating: 'fa fa-exclamation-circle' },
	        	submitButtons:  'button[type="submit"]',
			    fields: {
			      company: {
			    	  validators: 
			    	  { 	notEmpty: { message: '公司名称不能为空' },
			    		  	stringLength: { min: 3, max: 30, message: '公司名称长度必须在3到30之间' }
			    	  }
			      },
			      linkMan: {
			    	  validators: 
			    	  { 	notEmpty: { message: '姓名不能为空' },
			    		  	stringLength: { min: 2, max: 10, message: '姓名长度必须在2到10之间' }
			    	  }
			      },
			      phone:{
			    	  validators: 
			    	  { 	
			    		  	notEmpty: { message: '电话不能为空' },
			    		  	regexp: { regexp:plas_public.telPhoneReg, message: '电话不正确' }
			    	  }
			      },
			      email:{
			    	  validators:
		    		  {
			    		  emailAddress:{message:'邮箱不正确'}
		    		  }
			      },
			      fax:{
			    	  validators:
			    		  {
			    		  regexp: { regexp: /^(0\d{2,3}-\d{7,8})$/, message: '传真不正确' }
			    		  }
			      },
			      address:{
					  verbose:false,
			    	  validators:{notEmpty: { message: '详细地址不能为空' },stringLength: { min: 3, max: 30, message: '详细地址长度必须在3到30之间' }}
			      }
			    }
	        })
	        .on('success.form.bv', function(e) {
	            e.preventDefault();
	            var $form = $(e.target);
	            $.ajax({
					url:$form.attr('action'),data:$form.serialize(),type:'POST',
					success:function(data){
						plas_supplier.list();
		            },
		            beforeSend:function(){
		                $('#addModal').append(plas_public.createLoading());
		            },
		            complete:function(data){
		            	plas_public.removeLoading();
		            	$('#saveForm')[0].reset();
		            	$form.data('bootstrapValidator').resetForm();
		            	$('#addModal').modal('hide');
		            	$("#sjld").sjld("#shenfen","#chengshi","#quyu");
		            }
			})
	    });
		plas_supplier.list();		
	}
};
var plas_billing={
		delModal:function(id){
			$('#delModel').modal('show');
			$('#delBtn').attr('title',id);
		},
		del:function(){
			$.ajax({
				url:'manage/billing/'+$('#delBtn').attr('title')+'.html',
				type:'POST',
				success:function(data){
					plas_billing.list();
				},
				complete:function(data){
					$('#delModel').modal('hide');
	            	plas_public.removeLoading();
		        },
	            beforeSend:function(){
	                $('#delModel').append(plas_public.createLoading());
	            }
			})
		},
		list:function(){
			$.ajax({
				url:'manage/billing/list.html',
				type:'GET',
				success:function(data){
	            	$('.mt-stock').html(data);
				},
	            beforeSend:function(){
	            	$("body").append(plas_public.createLoading());
	            },
	            complete:function(data){
	            	plas_public.removeLoading();
	            }
			})
		},
		edit:function(id){
			$.ajax({
				url:'manage/billing/'+id+'.html',
				type:'GET',
				success:function(data){
	            	$('#editBiModal').html(data);
	            	$('#editBiModal').modal({backdrop: 'static', keyboard: false});
				},
				beforeSend:function(){
		         	$("body").append(plas_public.createLoading());
		        },
		        complete:function(data){
		         	plas_public.removeLoading();
		        }
			})
		},
		coValyForm:function(fid,mid,fn){
			var $form = $('#'+fid);
			var $modal = $('#'+mid);
			$form.bootstrapValidator({
	        	feedbackIcons: { valid: 'fa fa-check', invalid: 'fa fa-times', validating: 'fa fa-exclamation-circle' },
	        	submitButtons:  'button[type="submit"]',
			    fields: {
			    	company: {
				    	  validators: 
				    	  { 	notEmpty: { message: '公司名称不能为空' },
				    		  	stringLength: { min: 3, max: 30, message: '公司名称长度必须在3到30之间' }
				    	  }
				      },
				      phone:{
				    	  validators: 
				    	  { 	
				    		  	notEmpty: { message: '电话不能为空' },
				    		  	regexp: { regexp:plas_public.telPhoneReg, message: '电话不正确' }
				    	  }
				      },
				      serialNo: {
				    	  validators: 
				    	  { 	notEmpty: { message: '纳税人识别号不能为空' },
				    		  	stringLength: {  max: 30, message: '纳税人识别号不超过30个字符' }
				    	  }
				      },
				      bank:{
				    	  validators: 
				    	  { 	notEmpty: { message: '银行不能为空' },
				    		  	stringLength: {  max: 30, message: '银行不超过30个字符' }
				    	  }
				      },
				      bankNo:{
				    	  validators: 
				    	  { 	notEmpty: { message: '银行账号不能为空' },
				    		  	stringLength: {  max: 30, message: '银行账号不超过30个字符' }
				    	  }
				      },
				      address:{
						  verbose:false,
				    	  validators:{notEmpty: { message: '详细地址不能为空' },stringLength: { min: 3, max: 30, message: '详细地址长度必须在3到30之间' }}
				      }
				    }
	        })
	        .on('success.form.bv', function(e) {
	            e.preventDefault();
	            var $form = $(e.target);
	            $.ajax({
					url:$form.attr('action'),data:$form.serialize(),type:'POST',
					success:function(data){
						plas_billing.list();
						if(fn){fn()};
		            },
		            beforeSend:function(){
		            	$modal.append(plas_public.createLoading());
		            },
		            complete:function(data){
		            	plas_public.removeLoading();
		            	$form[0].reset();
		            	$form.data('bootstrapValidator').resetForm();
		            	$modal.modal('hide');
		            	$("#sjld").sjld("#shenfen3","#chengshi3","#quyu3");
		            }
	            })
	        });
		},
		init:function(){
			plas_billing.coValyForm('saveForm','addModal');
			plas_billing.list();		
		}
	};
var plas_addr={
		delModal:function(id){
			$('#delModel').modal('show');
			$('#delBtn').attr('title',id);
		},
		del:function(){
			$.ajax({
				url:'manage/address/'+$('#delBtn').attr('title')+'.html',
				type:'POST',
				success:function(data){
					plas_addr.list();
				},
				complete:function(data){
					$('#delModel').modal('hide');
	            	plas_public.removeLoading();
		        },
	            beforeSend:function(){
	                $('#delModel').append(plas_public.createLoading());
	            }
			})
		},
		list:function(){
			$.ajax({
				url:'manage/address/list.html',
				type:'GET',
				success:function(data){
	            	$('.mt-stock').html(data);
				},
	            beforeSend:function(){
	            	$("body").append(plas_public.createLoading());
	            },
	            complete:function(data){
	            	plas_public.removeLoading();
	            }
			})
		},
		edit:function(id){
			$.ajax({
				url:'manage/address/'+id+'.html',
				type:'GET',
				success:function(data){
	            	$('#editAdModal').html(data);
	            	$('#editAdModal').modal({backdrop: 'static', keyboard: false});
				},
				beforeSend:function(){
		         	$("body").append(plas_public.createLoading());
		        },
		        complete:function(data){
		         	plas_public.removeLoading();
		        }
			})
		},
		coValyForm:function(formId,modalId,fn){
			var $form = $("#"+formId);
			var $modal = $("#"+modalId);
			$form.bootstrapValidator({
	        	feedbackIcons: { valid: 'fa fa-check', invalid: 'fa fa-times', validating: 'fa fa-exclamation-circle' },
	        	submitButtons:  'button[type="submit"]',
			    fields: {
			      name: {
			    	  validators: 
			    	  { 	notEmpty: { message: '收货人不能为空' },
			    		  	stringLength: { min: 2, max: 10, message: '收货人长度必须在2到10之间' }
			    	  }
			      },
			      phone:{
			    	  validators: 
			    	  { 	
			    		  	notEmpty: { message: '电话不能为空' },
			    		  	regexp: { regexp:plas_public.telPhoneReg, message: '电话不正确' }
			    	  }
			      },
			      address:{
					  verbose:false,
			    	  validators:{notEmpty: { message: '详细地址不能为空' },stringLength: { min: 3, max: 30, message: '详细地址长度必须在3到30之间' }}
			      }
			    }
	        })
	        .on('success.form.bv', function(e) {
	            e.preventDefault();
	            var $form = $(e.target);
	            $.ajax({
					url:$form.attr('action'),data:$form.serialize(),type:'POST',
					success:function(data){
						plas_addr.list();
						if(fn){fn()};
		            },
		            beforeSend:function(){
		            	$modal.append(plas_public.createLoading());
		            },
		            complete:function(data){
		            	plas_public.removeLoading();
		            	$form[0].reset();
		            	$form.data('bootstrapValidator').resetForm();
		            	$modal.modal('hide');
		            	$("#sjld").sjld("#shenfen","#chengshi","#quyu");
		            }
	            })
	        });
		},
		init:function(){
			plas_addr.coValyForm('saveForm','addModal')
			plas_addr.list();		
		}
	};
var plas_cart={
		submit:function(){
			var isDelivery = $('input[name="delivery"]:checked').val();
			var noBilling = $('input[name="noBilling"]:checked').val();
			var addressId = $('input[name="addressId"]').val();
			var companyId = $('input[name="companyId"]').val();
			var billingId = $('input[name="billingId"]').val();
			if(companyId==''){
				plas_msg.alert('请选择公司信息');return;
			}
			if(isDelivery=='true'&&addressId==''){
				plas_msg.alert('请选择收货地址');return;
			}
			if(noBilling=='true'&&billingId==''){
				plas_msg.alert('请选择开票信息');return;
			}
			 $.ajax({
				 	url:$('form').attr('action'),data:$('form').serialize(),
					type:'post',
					success:function(data){
		            	plas_public.removeLoading();
		            	window.location.href="manage/cart/cart-3.html?no="+data;
					},
		            beforeSend:function(){
		            	$("body").append(plas_public.createLoading());
		            },
		            complete:function(){
		            	plas_public.removeLoading();
		            }
				})
		},
		co_checked:function(e){
			$('#co_list').find('input').each(function() {
				if($(this).val()!=$(e).val()){
		        	$(this).attr("checked", false);
		        }
			});
		},
		co_list:function(pageNo,row){
			//if(pageNo!=0)app.s_co=1;			
			pageNo = pageNo===undefined?1:pageNo;
			row = row===undefined?3:row;
			$.ajax({
				url:'manage/company/list/cart.html',
				type:'GET',
				data:{pageNo:pageNo,rows:row},
				success:function(data){
					if(pageNo==1&&row==3){
						$('#co_list').children().remove();
					}
	            	$('#co_list').append(data);
	            	$('#co_list').children().first().find('input').attr("checked",'checked');;
	            	var tp = co_total_page;
	            	if(tp==1&&co_total_count==1){
	            		app.co_more=3;
	            	}else if(tp>pageNo){
	            		app.co_more=0;
	            		app.co_more_pageno=pageNo+1;
					}else{
						app.co_more=2;
					}
				},
	            beforeSend:function(){
	            	$("body").append(plas_public.createLoading());
	            },
	            complete:function(data){
	            	plas_public.removeLoading();
	            }
			})
		},		
		co_more:function(){
			plas_cart.co_list(app.co_more_pageno,3);
		},
		co_more_:function(){
			$('#co_list').children().show();
			app.co_more = 2;
		},
		co_more_no:function(){
			app.co_more = 1;//查看更多
			$('#co_list').children().hide();
			$('#co_list').children().first().show();
		},
		ad_checked:function(e){
			$('#ad_list').find('input').each(function() {
				if($(this).val()!=$(e).val()){
		        	$(this).attr("checked", false);
		        }
			});
		},
		ad_list:function(pageNo,row){
			//if(pageNo!=0)app.s_ad=1;			
			pageNo = pageNo===undefined?1:pageNo;
			row = row===undefined?3:row;
			$.ajax({
				url:'manage/address/list/cart.html',
				type:'GET',
				data:{pageNo:pageNo,rows:row},
				success:function(data){
					if(pageNo==1&&row==3){
						$('#ad_list').children().remove();
					}
	            	$('#ad_list').append(data);
	            	$('#ad_list').children().first().find('input').attr("checked",'checked');;
	            	var tp = app.ad_total_page;
	            	if(tp==1&&app.ad_total_count==1){
	            		app.ad_more=3;
	            	}else if(tp>pageNo){
	            		app.ad_more=0;
	            		app.ad_more_pageno=pageNo+1;
					}else{
						app.ad_more=2;
					}
				},
	            beforeSend:function(){
	            	$("body").append(plas_public.createLoading());
	            },
	            complete:function(data){
	            	plas_public.removeLoading();
	            }
			})
		},		
		ad_more:function(){
			plas_cart.ad_list(app.ad_more_pageno,3);
		},
		ad_more_:function(){
			$('#ad_list').children().show();
			app.ad_more = 2;
		},
		ad_more_no:function(){
			app.ad_more = 1;//查看更多
			$('#ad_list').children().hide();
			$('#ad_list').children().first().show();
		},
		
		bi_checked:function(e){
			$('#bi_list').find('input').each(function() {
				if($(this).val()!=$(e).val()){
		        	$(this).attr("checked", false);
		        }
			});
		},
		bi_list:function(pageNo,row){
			//if(pageNo!=0)app.s_bi=1;			
			pageNo = pageNo===undefined?1:pageNo;
			row = row===undefined?3:row;
			$.ajax({
				url:'manage/billing/list/cart.html',
				type:'GET',
				data:{pageNo:pageNo,rows:row},
				success:function(data){
					if(pageNo==1&&row==3){
						$('#bi_list').children().remove();
					}
	            	$('#bi_list').append(data);
	            	$('#bi_list').children().first().find('input').attr("checked",'checked');;
	            	var tp = app.bi_total_page;
	            	if(tp==1&&app.bi_total_count==1){
	            		app.bi_more=3;
	            	}else if(tp>pageNo){
	            		app.bi_more=0;
	            		app.bi_more_pageno=pageNo+1;
					}else{
						app.bi_more=2;
					}
				},
	            beforeSend:function(){
	            	$("body").append(plas_public.createLoading());
	            },
	            complete:function(data){
	            	plas_public.removeLoading();
	            }
			})
		},		
		bi_more:function(){
			plas_cart.bi_list(app.bi_more_pageno,3);
		},
		bi_more_:function(){
			$('#bi_list').children().show();
			app.bi_more = 2;
		},
		bi_more_no:function(){
			app.bi_more = 1;//查看更多
			$('#bi_list').children().hide();
			$('#bi_list').children().first().show();
		},
		
		init_add:function(){	
			plas_com.coValyForm('addCoForm','addCoModal',plas_cart.co_list);
			plas_cart.co_list(0,1); 
			$("#sjld").sjld("#shenfen","#chengshi","#quyu");
			plas_addr.coValyForm('addAdForm','addAdModal',plas_cart.ad_list);
			plas_cart.ad_list(0,1); 
			$("#sjld").sjld("#shenfen3","#chengshi3","#quyu3");
			plas_billing.coValyForm('addBiForm','addBiModal',plas_cart.bi_list);
			plas_cart.bi_list(0,1); 
		}
}
var plas_com={
		delModal:function(id){
			$('#delModel').modal('show');
			$('#delBtn').attr('title',id);
		},
		del:function(){
			$.ajax({
				url:'manage/company/'+$('#delBtn').attr('title')+'.html',
				type:'POST',
				success:function(data){
					plas_com.list();
				},
				complete:function(data){
					$('#delModel').modal('hide');
	            	plas_public.removeLoading();
		        },
	            beforeSend:function(){
	                $('#delModel').append(plas_public.createLoading());
	            }
			})
		},
		list:function(){
			$.ajax({
				url:'manage/company/list.html',
				type:'GET',
				success:function(data){
	            	$('.mt-stock').html(data);
				},
	            beforeSend:function(){
	            	$("body").append(plas_public.createLoading());
	            },
	            complete:function(data){
	            	plas_public.removeLoading();
	            }
			})
		},
		edit:function(id){
			$.ajax({
				url:'manage/company/'+id+'.html',
				type:'GET',
				success:function(data){
	            	$('#editCoModal').html(data);
	            	$('#editCoModal').modal({backdrop: 'static', keyboard: false});
				},
				beforeSend:function(){
		         	$("body").append(plas_public.createLoading());
		        },
		        complete:function(data){
		         	plas_public.removeLoading();
		        }
			})
		},
		coValyForm:function(formId,modalId,fn){
			var $modal = $('#'+modalId);
			var $form = $('#'+formId);
			$form.bootstrapValidator({
	        	feedbackIcons: { valid: 'fa fa-check', invalid: 'fa fa-times', validating: 'fa fa-exclamation-circle' },
	        	submitButtons:  'button[type="submit"]',
			    fields: {
			      company: {
			    	  validators: 
			    	  { 	notEmpty: { message: '公司名称不能为空' },
			    		  	stringLength: { min: 3, max: 30, message: '公司名称长度必须在3到30之间' }
			    	  }
			      },
			      name: {
			    	  validators: 
			    	  { 	notEmpty: { message: '姓名不能为空' },
			    		  	stringLength: { min: 2, max: 10, message: '姓名长度必须在2到10之间' }
			    	  }
			      },
			      phone:{
			    	  validators: 
			    	  { 	
			    		  	notEmpty: { message: '电话不能为空' },
			    		  	regexp: { regexp:plas_public.telPhoneReg, message: '电话不正确' }
			    	  }
			      }
			    }
	        })
	        .on('success.form.bv', function(e) {
	            e.preventDefault();
	            var $form = $(e.target);
	            $.ajax({
					url:$form.attr('action'),data:$form.serialize(),type:'POST',
					success:function(data){
						plas_com.list();
						if(fn){fn()};
		            },
		            beforeSend:function(){
		            	$modal.append(plas_public.createLoading());
		            },
		            complete:function(data){
		            	plas_public.removeLoading();
		            	$form[0].reset();
		            	$form.data('bootstrapValidator').resetForm();
		            	$modal.modal('hide');
		            }
	            })
	        });
		},
		init:function(){
			plas_com.coValyForm('saveForm','addModal')
			plas_com.list();		
		}
	};
var plas_message={
		init:function(){
			plas_message.olist(1,2);
		},
		olist:function(pageNo){
			 $('#orderm').addClass("on").siblings().removeClass('on');
			 $.ajax({
					url:'manage/msg/order.html',
					type:'GET',
					data:{pageNo:pageNo},
					success:function(data){
		            	$('.s-message').html(data);
					},
		            beforeSend:function(){
		            	$("body").append(plas_public.createLoading());
		            },
		            complete:function(data){
		            	plas_public.removeLoading();
		            }
				})
		},
		slist:function(pageNo){
			 $('#sysm').addClass("on").siblings().removeClass('on');
			 $.ajax({
					url:'manage/msg/sys.html',
					type:'GET',
					data:{pageNo:pageNo},
					success:function(data){
		            	$('.s-message').html(data);
					},
		            beforeSend:function(){
		            	$("body").append(plas_public.createLoading());
		            },
		            complete:function(data){
		            	plas_public.removeLoading();
		            }
				})
		}
}


 	