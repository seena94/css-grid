$(document).ready(function () {
	$('ul a').click(function(e) {
    hideContentDivs();
    var tmp_div = $(this).parent('li').index();
    $('.grid-content-wrapper .content').eq(tmp_div).show();
  });

	function hideContentDivs(){
	  $('.grid-content-wrapper .content').each(function(){
		  $(this).hide();
		});
	}
	hideContentDivs();
});
