$(document).ready(function() {
    $('.list-item').hover(function() {
        $(this).toggleClass('active');
    });
    
    $('.list-item-2').hover(function() {
        $(this).toggleClass('active');
    });

    $('.list-item:eq(0)').on('click', function() {
        $('.img-one').fadeToggle('slow');
    });

    $('.list-item:eq(1)').on('click', function() {
        $('.img-two').fadeToggle('slow');
    });

    $('.list-item:eq(2)').on('click', function() {
        $('.img-three').fadeToggle('slow');
    });

    $('.list-item:eq(3)').on('click', function() {
        $('.img-four').fadeToggle('slow');
    });

    $('.list-item:eq(4)').on('click', function() {
        $('.img-five').fadeToggle('slow');

    });

    $('.list-item:eq(5)').on('click', function() {  
        $('.img-six').fadeToggle('slow');

    });

    $('.list-item-2').on('click', function() {
        setTimeout(function(){
            location.reload(true);            
        },1000);  
    });

    $("#popup").css("display","block");
    $(".popup-close").click(function(){
    $("#popup").fadeOut(700);
    });

});

function clock() {
    var d = new Date();
    var day = d.getDate();
    var hrs = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    
    var mnt = new Array(01, 02, 03, 04, 05,
    06, 07, 08, 09, 10, 11, 12);
    
    if (day <= 9) day="0" + day;
    if (hrs <= 9) hrs="0" + hrs;
    if (min <=9 ) min="0" + min;
    if (sec <= 9) sec="0" + sec;
    
    $("#time").html(hrs + ":" + min + ":" + sec + "&nbsp;&nbsp;&nbsp;" +
    day + "." + mnt[d.getMonth()] + " " + d.getFullYear() + " г.");
}
setInterval("clock()",100);


