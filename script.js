document.addEventListener("DOMContentLoaded", function () {
    const fadeInSections = document.querySelectorAll(".fade-in-section");

    function revealOnScroll() {
        fadeInSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});

	
	// Access the testimonials
	let testSlide = document.querySelectorAll('.testItem');
	// Access the indicators
	let dots = document.querySelectorAll('.dot');

	var counter = 0;

	// Add click event to the indicators
	function switchTest(currentTest){
		currentTest.classList.add('active');
		var testId = currentTest.getAttribute('attr');
		if(testId > counter){
			testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
			counter = testId;
			testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
		}
		else if(testId == counter){return;}
		else{
			testSlide[counter].style.animation = 'prev1 0.5s ease-in forwards';
			counter = testId;
			testSlide[counter].style.animation = 'prev2 0.5s ease-in forwards';
		}
		indicators();
	}

	// Add and remove active class from the indicators
	function indicators(){
		for(i = 0; i < dots.length; i++){
			dots[i].className = dots[i].className.replace(' active', '');
		}
		dots[counter].className += ' active';
	}

	// Code for auto sliding
	function slideNext(){
		testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
		if(counter >= testSlide.length - 1){
			counter = 0;
		}
		else{
			counter++;
		}
		testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
		indicators();
	}
	function autoSliding(){
		deleteInterval = setInterval(timer, 2000);
		function timer(){
			slideNext();
			indicators();
		}
	}
	autoSliding();

	// Stop auto sliding when mouse is over the indicators
	const container = document.querySelector('.indicators');
	container.addEventListener('mouseover', pause);
	function pause(){
		clearInterval(deleteInterval);
	}

	// Resume sliding when mouse is out of the indicators
	container.addEventListener('mouseout', autoSliding);


	//change nav bar color

$(document).ready(function(){
	$(window).scroll(function(){
		var scroll=$(window).scrollTop();
		if(scroll>150){
			$(".navbar").css("background","#222");
			$(".navbar").css("box-shadow","rgba(0, 0, 0, 0.1) 0px 4px 12px");
		}
		else{
			$(".navbar").css("background","trasparent");
			$(".navbar").css("box-shadow","none");
		}
	})
});

//smooth scoll
var navbarHeight =$("navbar").outheight();
$(".navbar-menu a").click(function(e){
	var targetHref = $(this).attr("href");
	$("html,body").animate({
		scrollTop : $(targetHref).offset().top .navbarHeight
	},1000)
	e.preventDefault();
});


window.onload = function() {
	showAlert();
};

function showAlert() {
	document.getElementById("customAlert").style.display = "flex";
}

function closeAlert() {
	document.getElementById("customAlert").style.display = "none";
}