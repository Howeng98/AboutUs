$('.banner').click(function(){
    $('html,body').animate({scrollTop:$('#sec01').offset().top},1300);
    $('#pic_01').toggleClass('profilePic_fading');
});

$('#sec01').click(function(){
    $('html,body').animate({scrollTop:$('.banner_text').offset().top},1300);
});

$('#sec02').click(function(){
    $('html,body').animate({scrollTop:$('.banner_text').offset().top},1300);
});


$('#sec03').click(function(){
    $('html,body').animate({scrollTop:$('.banner_text').offset().top},1300);
});

