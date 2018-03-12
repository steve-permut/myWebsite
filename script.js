$(document).ready(function(){
  //prepare page
  $('.pages').hide();
  $('#page-one').show();
  $('#p1').css("font-style","normal");
  $("#footer-wrap").css("visibility", "visible");

  //sidebar navigation
  $('#p1').click(function(){
    $('.pages').hide(1000);
    $('#page-one').show(1000);
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.nav-element').css("font-style","italic");
    $('#p1').css("font-style","normal");
  });

  $('#p2').click(function(){
    $('.pages').hide(1000);
    $('#page-two').show(1000);
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.nav-element').css("font-style","italic");
    $('#p2').css("font-style","normal");
  });

  $('#p3').click(function(){
    $('.pages').hide(1000);
    $('#page-three').show(1000);
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.nav-element').css("font-style","italic");
    $('#p3').css("font-style","normal");
  });

  $('#p4').click(function(){
    $('.pages').hide(1000);
    $('#page-four').show(1000);
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.nav-element').css("font-style","italic");
    $('#p4').css("font-style","normal");
  });

  $('#p5').click(function(){
    $('.pages').hide(1000);
    $('#page-five').show(1000);
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.nav-element').css("font-style","italic");
    $('#p5').css("font-style","normal");
  });

  $('#p6').click(function(){
    $('.pages').hide(1000);
    $('#page-six').show(1000);
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('.nav-element').css("font-style","italic");
    $('#p6').css("font-style","normal");
  });
});
