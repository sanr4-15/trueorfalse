<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
    
    
    
  	$('#tapholdtext').on("taphold",function(){
    	$(this).hide();
 	});                       

	$('#taptext').on("tap",function(){
    	$(this).css('color', 'red');
 	}); 
    
    $('#trueorfalse').on("tap",function(){
    var test = randomNum();
    
    $("#myText").text(test);
 	}); 
    function randomNum(){
    return !Math.round(Math.random());
    }
    
	$('#swipetext').on("swipeleft",function(){
    	$(this).css('color', 'green');
  	});   


});