$(".servis-content").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots:true,
   responsive: [
    {
      breakpoint: 500,
      	settings: {
      	slidesToShow: 3,
      	slidesToScroll: 3,
	  	arrows:false,
	  	dots:true,
	  	fade:true,
	  	infinite:true,
	  	draggable:true,
	  	swipe:true
      }
     }
   ]     
 });


