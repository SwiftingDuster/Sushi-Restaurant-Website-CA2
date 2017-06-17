// Slideshow
var slideIndex = 0;
function showSlides() { // Change slideshow image every 5 seconds
	"use strict";
    var slides = document.getElementsByClassName("mySlides");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex+1 > slides.length) {slideIndex = 0;}
    (slides[slideIndex]).style.display = "block"; 
    setTimeout(showSlides, 5000); 
}
function currentSlide(n) { // Go to a slide using 0 based index (Slide 1 => n = 0)
	"use strict";
	var slides = document.getElementsByClassName("mySlides");
	for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
	slideIndex++;
	if (slideIndex+1 > slides.length) {slideIndex = 0;}
	slides[n].style.display = "block";
}

// Initialize JQueryUI datepicker
$( "#myDatepicker" ).datepicker();

// Directions button autoscroll
$(".scroll").click(function(){
	"use strict";
    $('html, body').animate({scrollTop: '+=150px'}, 800);
});

// Fixed Nav bar when scrolling
$(window).scroll(function () {
	"use strict";
	if ($(window).width() > 740){
		if ($(window).scrollTop() > 200) {
      		$('#nav').addClass('navbar-fixed');
    	}
    	if ($(window).scrollTop() < 200) {
      		$('#nav').removeClass('navbar-fixed');
    	}
	}
	else {
		if ($('#nav').hasClass('navbar-fixed')){
			$('#nav').removeClass('navbar-fixed');
		}
	}
  });

// Form text area expand
function adjust_textarea(h) {
	"use strict";
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}

function slideDirectionGuide(n) {
	switch (n){
		case 1:
			$('#trainDirection').slideUp();
			$('#busDirection').slideUp();
			$('#carDirection').slideToggle();
			break;
		case 2:
			$('#carDirection').slideUp();
			$('#busDirection').slideUp();
			$('#trainDirection').slideToggle();
			break;
		case 3:
			$('#trainDirection').slideUp();
			$('#carDirection').slideUp();
			$('#busDirection').slideToggle();
			break;
	}
}

// Form validations
function validateForm() {
	"use strict";
	var reserveNameField = document.getElementById('fullName').value;
	var reserveTelField = document.getElementById('tel').value;
	if ((reserveNameField === "") || (reserveTelField === "")){
		alert('Name field or phone field is empty.');
		return false;
	}
	return true;
};

showSlides();
currentSlide(1);