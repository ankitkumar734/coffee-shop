












// Show/hide back to top button on scroll
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('body').addClass('scrolled');
    } else {
        $('body').removeClass('scrolled');
    }
});

// Smooth scroll to top
$('.back-to-top').click(function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});
 








