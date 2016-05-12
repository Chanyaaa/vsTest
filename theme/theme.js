require(["jquery"], function($) {
	$(function() {
	    $("a.brand img")
			.attr("src", "/theme/logo.png")
            .load(function () {
                $(this).removeAttr("width")
			            .removeAttr("height")
			            .fadeIn()
            });

	});
});