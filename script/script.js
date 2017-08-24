$(document).ready(function () {
	$('ul a').click(function(e) {
    hideContentDivs();
    var tmp_div = $(this).parent('li').index();
    $('.content-wrapper div').eq(tmp_div).show();
  });

	function hideContentDivs(){
	  $('.content-wrapper div').each(function(){
		  $(this).hide();
		});
	}
	hideContentDivs();
});
