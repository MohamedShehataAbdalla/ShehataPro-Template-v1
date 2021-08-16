/*global $, jQuery, alert*/
$(document).ready(function (){

  $("html").niceScroll();

  $('.carousel').carousel({
    interval:6000
  });

  // Show Color Option Div When Click On the gear

  $(".gear-check").click(function ()
  {
    $(".color-option").fadeToggle();
  });

  // Change Theme Color On Clik

  var colorLi = $(".color-option ul li");

  colorLi
    .eq(0).css("backgroundColor","#0091ff").end()
    .eq(1).css("backgroundColor","#258ac5").end()
    .eq(2).css("backgroundColor","#23bd8e").end()
    .eq(3).css("backgroundColor","#ff9100").end()
    .eq(4).css("backgroundColor","#c62727");

  colorLi.click(function () {
    $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    //console.log($(this).attr("data-value"))
  });

  // Caching The Scroll Top Element

  var scrollButton = $("#scroll-top");

  $(window).scroll(function ()
  {
    //console.log($(this).scrollTop());
    $(this).scrollTop() >= 500 ? scrollButton.show() : scrollButton.hide();
  });

  // Click On Button To Scroll top

  scrollButton.click(function ()
  {
    $("html,body").animate({scrollTop : 0}, 600);
  });

});


// Loading Screen
$(window).load(function ()
{
  $(".loading-overlay .sk-folding-cube").fadeOut(2000,
  function (){

    // Show The Scroll
    $("body").css("overflow","auto");

    $(this).parent().fadeOut(2000,
    function (){

      $(this).remove();
    });
  });
});
