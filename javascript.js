function viewingArea(element) {
    var objHeight = $(element).offset().top - 300;　 //元素到顶部的高度
    let winPos = $(window).scrollTop(); //距离顶部滚动 
    let val = objHeight - winPos;
    if (val < windowHeight && val > 0) {
        //可视区域         
        return true;
    } else {
        //不可视区域 
        return false;
    }
}

window.onscroll = function() {myFunction()};

function myFunction() {
    var member01_Offset = $('#member_01').offset().top/2 - 300;
    var member02_Offset = $('#member_02').offset().top/2 - 300;
    var member03_Offset = $('#member_03').offset().top/2 - 300;    
    var member04_Offset = $('#member_04').offset().top/2 - 100;
    var member05_Offset = $('#member_05').offset().top/2;
    var member06_Offset = $('#member_06').offset().top/2;
    
    if (document.body.scrollTop > member01_Offset || document.documentElement.scrollTop > member01_Offset) {
        $('#member_01').addClass('member_01_fading delay_04s');
        $('#id_01').addClass('member_01_id_fading delay_04s');
        $('#desc_01').addClass('member_01_desc_fading delay_04s'); 
    }

    if (document.body.scrollTop > member02_Offset || document.documentElement.scrollTop > member02_Offset) {
        $('#member_02').addClass('member_02_fading delay_04s');
        $('#id_02').addClass('member_02_id_fading delay_04s');
        $('#desc_02').addClass('member_02_desc_fading delay_04s'); 
    }

    if (document.body.scrollTop > member03_Offset || document.documentElement.scrollTop > member03_Offset) {
        $('#member_03').addClass('member_03_fading delay_04s');
        $('#id_03').addClass('member_03_id_fading delay_04s');
        $('#desc_03').addClass('member_03_desc_fading delay_04s'); 
    }
    
    if (document.body.scrollTop > member04_Offset || document.documentElement.scrollTop > member04_Offset) {
        $('#member_04').addClass('member_04_fading delay_04s');
        $('#id_04').addClass('member_04_id_fading delay_04s');
        $('#desc_04').addClass('member_04_desc_fading delay_04s'); 
    }
    
    if (document.body.scrollTop > member05_Offset || document.documentElement.scrollTop > member05_Offset) {
        $('#member_05').addClass('member_05_fading delay_04s');
        $('#id_05').addClass('member_05_id_fading delay_04s');
        $('#desc_05').addClass('member_05_desc_fading delay_04s'); 
    }

    if (document.body.scrollTop > member06_Offset || document.documentElement.scrollTop > member06_Offset) {
        $('#member_06').addClass('member_06_fading delay_04s');
        $('#id_06').addClass('member_06_id_fading delay_04s');
        $('#desc_06').addClass('member_06_desc_fading delay_04s'); 
    }

    
}


(function(){
    var elem = $('#member_01'),
        elemoffset = elem.offset().top;
        documentElem = $(document);
        console.log("The value is:" + elemoffset);
        console.log("Here222");
        documentElem.on('scroll',function(){
            if( documentElem.scrollTop() > elemoffset){
                $('#member_01').addClass('member_01_fading');
                $('#id_01').addClass('member_01_id_fading');
                $('#desc_01').addClass('member_01_desc_fading'); 
            }
        })
})


$('.chien').click(function(){
    $('html,body').animate({scrollTop:$('#member_06').offset().top - 300},3000);
    $('#member_01').addClass('member_01_fading delay_04s');
    $('#id_01').addClass('member_01_id_fading delay_04s');
    $('#desc_01').addClass('member_01_desc_fading delay_04s'); 
    $('#member_02').addClass('member_02_fading delay_05s');
    $('#id_02').addClass('member_02_id_fading delay_05s');
    $('#desc_02').addClass('member_02_desc_fading delay_05s');
    $('#member_03').addClass('member_03_fading delay_06s');
    $('#id_03').addClass('member_03_id_fading delay_06s');
    $('#desc_03').addClass('member_03_desc_fading delay_06s');
    $('#member_04').addClass('member_04_fading delay_07s');
    $('#id_04').addClass('member_04_id_fading delay_07s');
    $('#desc_04').addClass('member_04_desc_fading delay_07s'); 
    $('#member_05').addClass('member_05_fading delay_08s');
    $('#id_05').addClass('member_05_id_fading delay_08s');
    $('#desc_05').addClass('member_05_desc_fading delay_08s');
    $('#member_06').addClass('member_06_fading');
    $('#id_06').addClass('member_06_id_fading');
    $('#desc_06').addClass('member_06_desc_fading'); 
});

$('.howeng').click(function(){
    $('html,body').animate({scrollTop:$('#member_05').offset().top - 300},2800);
    $('#member_01').addClass('member_01_fading delay_04s');
    $('#id_01').addClass('member_01_id_fading delay_04s');
    $('#desc_01').addClass('member_01_desc_fading delay_04s'); 
    $('#member_02').addClass('member_02_fading delay_05s');
    $('#id_02').addClass('member_02_id_fading delay_05s');
    $('#desc_02').addClass('member_02_desc_fading delay_05s');
    $('#member_03').addClass('member_03_fading delay_06s');
    $('#id_03').addClass('member_03_id_fading delay_06s');
    $('#desc_03').addClass('member_03_desc_fading delay_06s');
    $('#member_04').addClass('member_04_fading delay_07s');
    $('#id_04').addClass('member_04_id_fading delay_07s');
    $('#desc_04').addClass('member_04_desc_fading delay_07s'); 
    $('#member_05').addClass('member_05_fading');
    $('#id_05').addClass('member_05_id_fading');
    $('#desc_05').addClass('member_05_desc_fading');
});

$('.tzuyu').click(function(){
    $('html,body').animate({scrollTop:$('#member_03').offset().top - 300},1500);
    $('#member_01').addClass('member_01_fading delay_04s');
    $('#id_01').addClass('member_01_id_fading delay_04s');
    $('#desc_01').addClass('member_01_desc_fading delay_04s'); 
    $('#member_02').addClass('member_02_fading delay_05s');
    $('#id_02').addClass('member_02_id_fading delay_05s');
    $('#desc_02').addClass('member_02_desc_fading delay_05s');
    $('#member_03').addClass('member_03_fading');
    $('#id_03').addClass('member_03_id_fading');
    $('#desc_03').addClass('member_03_desc_fading');
     
})

$('.sandy').click(function(){
    $('html,body').animate({scrollTop:$('#member_02').offset().top - 300},2000);4
    $('#member_01').addClass('member_01_fading delay_04s');
    $('#id_01').addClass('member_01_id_fading delay_04s');
    $('#desc_01').addClass('member_01_desc_fading delay_04s'); 
    $('#member_02').addClass('member_02_fading');
    $('#id_02').addClass('member_02_id_fading');
    $('#desc_02').addClass('member_02_desc_fading');  
    
});

$('.yuen').click(function(){
    $('html,body').animate({scrollTop:$('#member_01').offset().top - 300},2000);
    $('#member_01').addClass('member_01_fading');
    $('#id_01').addClass('member_01_id_fading');
    $('#desc_01').addClass('member_01_desc_fading');        
});

$('.boo').click(function(){
    $('html,body').animate({scrollTop:$('#member_04').offset().top - 300},2000);
    $('#member_01').addClass('member_01_fading delay_04s');
    $('#id_01').addClass('member_01_id_fading delay_04s');
    $('#desc_01').addClass('member_01_desc_fading delay_04s'); 
    $('#member_02').addClass('member_02_fading delay_05s');
    $('#id_02').addClass('member_02_id_fading delay_05s');
    $('#desc_02').addClass('member_02_desc_fading delay_05s');
    $('#member_03').addClass('member_03_fading delay_06s');
    $('#id_03').addClass('member_03_id_fading delay_06s');
    $('#desc_03').addClass('member_03_desc_fading delay_06s');
    $('#member_04').addClass('member_04_fading');
    $('#id_04').addClass('member_04_id_fading');
    $('#desc_04').addClass('member_04_desc_fading'); 
});

$('.top').click(function(){
    $('html,body').animate({scrollTop:$('.banner').offset().top},1800);
});

$('.top_context').click(function(){
    $('html,body').animate({scrollTop:$('.banner').offset().top},1800);
});

