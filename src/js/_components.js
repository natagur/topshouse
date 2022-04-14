//lang
$('.lang__title').click(function(){ 
    $(this).toggleClass('active');
    $($(this).data("target")).stop().slideToggle();
});

//nav
$('.nav__title_drop').hover(function(){ 
    $(this).toggleClass('active');
    $($(this).data("target")).toggleClass('active');
});