$('a[href^="#"]').click(function() {
    $('html,body').animate({
        scrollTop: $("#one").offset().top},
        'slow');
});