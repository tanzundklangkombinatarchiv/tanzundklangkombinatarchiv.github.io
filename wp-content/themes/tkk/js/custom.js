  $(document).ready(function() {
	$('#main_slides')
	
            .cycle({
                fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
				timeout: 8000,
				speed: 1000,
                pager:  '#nav',
                pagerEvent: 'click' ,
                pauseOnPagerHover: true ,
                pagerAnchorBuilder: function(idx, slide) { 
                    // return selector string for existing anchor 
                    return '<li><a href="#">&nbsp;</a></li>'; 
                } 
            });
			
	$("#content img").lazyload({
	 placeholder : "img/grey.png",
	 effect : "fadeIn"
	});

  });