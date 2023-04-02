function LiftEffect(json){

var array=[];
var index = 0;

for(var i =0; i<json.target.length;i++){
	var t = $(json.target[i]).offset().top;
	array.push(t);

}

function Selected(index){
	$(json.control2).children().removeClass(json.current);
	$(json.control2).children().eq(index).addClass(json.current);
}

$(window).on("scroll",Check);

function Check(){
	var wst = $(window).scrollTop();
	var key =0;
	var flag = true;
	for(var i =0; i<array.length; i++){
		key++;
		if(flag){
			if(wst >= array[array.length-key]-400){
				index = array.length-key;
				flag = false;
			}else{
				flag=true;
			}
		}
	}
	Selected(index);
}

$(json.control2).children().on("click",function(){

		$(window).off("scroll");
		index = $(this).index();
		Selected(index);

		var flag = true;
		for(var i =0; i<array.length; i++){
		
			if(flag){
				if(index == i){
					$("html,body").stop().animate({
						"scrollTop": array[i]-50
					},500,function(){
						$(window).on("scroll",Check);
					});
					flag = false;
				}else{
					flag=true;
				}
				
			}
		}
		
});

$(".fbg-but").on("click",function(){
		$(window).off("scroll");
		var index = $(this).data("id");
		Selected(index);
		var flag = true;
		for(var i =0; i<array.length; i++){
			if(flag){
				if(index == i){
					$("html,body").stop().animate({
						"scrollTop": array[i]-50
					},500,function(){
						$(window).on("scroll",Check);
					});
					flag = false;
				}else{
					flag=true;
				}
			}
		}	
});

}



