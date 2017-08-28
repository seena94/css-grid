$(document).ready(function () {
	$('.grid-properties').click(function(e) {
		hideContent();
		var _this = $(this);
		var tmp_li = _this.index();
		_this.addClass('active');
		$('.grid-content-wrapper .content').eq(tmp_li).show();
  	});

	function hideContent(){
		$('.grid-properties').removeClass('active');
	  	$('.grid-content-wrapper .content').each(function() {
			$(this).hide();
		});
	}

	hideContent('.content');
	$('.grid-properties').eq(0).addClass('active');
	$('.grid-content-wrapper .content').eq(0).show();
});
