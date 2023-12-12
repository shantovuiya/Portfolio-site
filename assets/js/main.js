
$(window).on('scroll',function(){
var scrolltop = $(window).scrollTop();

	if(scrolltop>300){
		$(".nav-bar").addClass("active");
	}else{
		$(".nav-bar").removeClass("active");
	}
});


let nav = document.getElementById('navbar');
		let backtop = document.getElementById('backtop');
		window.onscroll = function(){
			backtop.classList.toggle('active', window.scrollY > 100);
			nav.classList.toggle('sticky', window.scrollY > 50);
		}