$(window).load(function(){
$(function(){
	var w1 = $(window).width();
	var h1 = $(window).height();
	// if(w1>850){
	// 	$(".fbg-abg,.fbg-cbg").height(h1);
	// 	$(".fbg-bbg").height(h1-300);
	// }

	// $(window).resize(function(){
  //  		if(w1>850){
	// 		window.location.reload();
  //  		}
	// })
	LiftEffect({
		"control1": ".header", 						  
		"control2": ".nav",                           
		"target": [".t1",".t2",".t3",".t4"],
		"current": "on"
	});
})
})