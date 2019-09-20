$(document).on('ready', function() {
    $('#a1').on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: $('#section1').offset().top }, 1000);
    });
    $('#a2').on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: $('#section2').offset().top }, 1000);
    });
});