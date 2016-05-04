// WOW
new WOW().init();

//faq toggle stuff 
$('.expand-more').click(function(e) {
e.preventDefault();

var notthis = $('.active').not(this);

notthis.find('.icon-minus').addClass('icon-plus').removeClass('icon-minus');
notthis.toggleClass('active').next('.expand-less').slideToggle(300);
 
$(this).toggleClass('active').next().slideToggle("fast");
$(this).children('i').toggleClass('icon-plus icon-minus');

});