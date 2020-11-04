var fnAll = function(callback, relyon) {
	var packges = ['jquery', 'layer', 'form', 'element'];
	packges = (relyon instanceof Array) ? packges.concat(relyon) : packges;
	layui.config({
		base: '/statics/pc/js/lay.modules/'
	}).use(packges, function() {
		var $ = layui.jquery,
			layer = layui.layer,
			form = layui.form;
		//表单



		//判断滚动条滚动高度 实现导航fixed
		$(document).ready(function(){
			var distance = $(document).scrollTop();  //获取滚动条初始高度的值 ：0
			if (distance > 20) {
				$("header").css("position","fixed")
				$(".topnav").css("marginBottom", "80px")
			}
		})
		$(document).scroll(function () {   //页面加载时，获取滚动条初始高度
			var distance = $(document).scrollTop();  //获取滚动条初始高度的值 ：0
			if (distance > 40) {
				$("header").css("position","fixed")
				$(".topnav").css("marginBottom", "80px")

			} else {
				$("header").css("position", "relative")
				$(".topnav").css("marginBottom", "0")
			}
		})

		$("#backtop").click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 500);
			return false;
		});


		//搜索
		form.on('submit(search)', function(data) {
			data.form.submit();
		});
		(callback instanceof Function) && callback(layui);
	});
	//全局报价表单弹出层滚动数字

}


