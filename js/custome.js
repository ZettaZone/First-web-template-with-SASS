/* Custome */

$(function () {
    'use strict';
    $('header ul li a').click(function(){
        $(this).addClass('active');
        window.console.log("dd");
      /*  $('.info-content div').hide();
        $('.'+$(this).data('class')).fadeIn();*/
    });
});
