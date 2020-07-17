$(function(){

	var headerWidth = $(".header").width();
	var headerHeight = $(".header").height();

	$(document).on("mousemove", function (event) {
	  
	  	// stop resizing when the mouse is below the header
		if (event.pageY < headerHeight){

			let offset = $(".header").offset();
			//console.log('offset:', offset);

			var scrollTop = $(window).scrollTop();
			//console.log('scrollTop:', scrollTop);

		  $("img.aljumaine").css("width", event.pageX)
		  $("img.aljumaine").css("height", event.pageY)
		  
		  $("img.gayle").css("width", $(window).width() - event.pageX)
		  $("img.gayle").css("height", event.pageY)
		  
		  $("img.creative").css("width", event.pageX)
		  $("img.creative").css("height", $(window).height() - event.pageY)
		  
		  $("img.project-manager").css("width", $(window).width() - event.pageX)
		  $("img.project-manager").css("height", $(window).height() - event.pageY)
	  
		}

	})	
})

