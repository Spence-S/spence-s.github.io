$(function() {
  $(document).scroll(function() {
    $('.navbar').addClass(
      'bg-white',
      $(this).scrollTop() > $('.navbar').height()
    );
  });
});
