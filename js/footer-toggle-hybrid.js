$(document).ready(function(){
	$('.kakaoFaq>dt').click(function(){
		$(this).addClass('opend');
		$(this).next().show();
	})
	
	$('.kakaoFaq>dd>button').click(function(){
		$(this).parent().hide();
		$(this).parent().prev().removeClass('opend');
	});
	
	var $navTop = $('.nav-top');
	
	$('.nav-btn').click(function (e) {
		e.preventDefault();
		
		if ($navTop.attr('data-state') == 'expanded') {
			$navTop.attr('data-state', 'collapsed');
			$(this).attr('data-state', 'inactive');
		} else {
			$navTop.attr('data-state', 'expanded');
			$(this).attr('data-state', 'active');
		}
	});
})