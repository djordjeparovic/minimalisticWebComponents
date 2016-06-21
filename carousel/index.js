function calc () {
  if ($('#carousel')[0].scrollLeft === 0) {
    // scroll position on far left
    $('#left').hide();
  } else {
     $('#left').show();
  }
  
  
  if ($('#carousel')[0].scrollLeft === $('#carousel')[0].scrollWidth - $('#carousel').outerWidth()) {
    // scroll position on far right
    $('#right').hide();
  } else {
    $('#right').show();
  }
}

// call calc() on carousel scroll
$('#carousel').on('scroll', function(){
  calc();
});

$(window).on('resize', calc);

// remember to include calculation to hide the arrows for less than carousel width
