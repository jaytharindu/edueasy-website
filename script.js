$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: false,
		showCursor: false
    });
	
	var typed = new Typed(".typing1", {
        strings: ["Note Taker", "Reference Finder", "Question Presenter", "Slide Matcher"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true,
		showCursor: true
    });
	
	var typed = new Typed(".typing-1", {
        strings: ["➜"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: false,
		showCursor: false
    });

    var typed = new Typed(".typing-2", {
        strings: ["➜"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: false,
		showCursor: false
    });

	var typed = new Typed(".typing-3", {
        strings: ["➜"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: false,
		showCursor: false
    });
	
	var typed = new Typed(".typing-4", {
        strings: ["➜"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: false,
		showCursor: false
    });
	
	var typed = new Typed(".typing-5", {
        strings: ["➜"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: false,
		showCursor: false
    });
	
	var typed = new Typed(".typing-6", {
        strings: ["➜"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: false,
		showCursor: false
    });
	
	var typed = new Typed(".typing-7", {
        strings: ["➜"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: false,
		showCursor: false
    });
	
});