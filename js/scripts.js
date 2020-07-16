$(document).ready(function() {
  $('#mycarousel').carousel({interval: 2000});
  $('#carouselButton').click(function(){
    if($('#carouselButton').children('span').hasClass('fa-pause')) {
      $('#carouselButton').children('span').removeClass('fa-pause');
      $('#carouselButton').children('span').addClass('fa-play');
      $('#mycarousel').carousel('pause');
    } else if($('#carouselButton').children('span').hasClass('fa-play')) {
      $('#carouselButton').children('span').removeClass('fa-play');
      $('#carouselButton').children('span').addClass('fa-pause');
      $('#mycarousel').carousel('cycle');
    }
  })
  $('#loginbtn').click(function(){
    $('#loginmodal').modal('show')
  })
  $('#reservebtn').click(function(){
    $('#reservemodal').modal('show')
  })
})
