/**
	* "EasySlide.js" - Version 1.0 (Initial Release)
	* Developed by Brandon Tiehen
	* NOTE: Edit link classes to fit needs in script
	* jQuery Required
*/
function easySlide(){
	$("[id*='ss-']").hide();
	$("#ss-1").fadeIn(500).delay(3000).fadeOut(500);
	$("#ss-2").delay(4000).fadeIn(500).delay(3000).fadeOut(500);
	$("#ss-3").delay(8000).fadeIn(500).delay(3000).fadeOut(500, slideshow);
	//Keep adding this until your slideshow is complete. Read functions to see math, increase delays by time for previous animations.
}
easySlide();