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

		  $("png.aljumaine").css("width", event.pageX)
		  $("png.aljumaine").css("height", event.pageY)
		  
		  $("png.gayle").css("width", $(window).width() - event.pageX)
		  $("png.gayle").css("height", event.pageY)
		  
		  $("png.creative").css("width", event.pageX)
		  $("png.creative").css("height", $(window).height() - event.pageY)
		  
		  $("png.project-manager").css("width", $(window).width() - event.pageX)
		  $("png.project-manager").css("height", $(window).height() - event.pageY)
	  
		}

	})	
})

