$(".nav-link").on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    document.querySelector(target).scrollIntoView({ 
        behavior: 'smooth' 
    });
 });