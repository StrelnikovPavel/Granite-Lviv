$(document).ready(function () {

   $('.filter_group .title').on('click', function () {
      $(this).next().slideToggle();
      $(this).parent().toggleClass('filters_hidden');
   });

   $('.home__contacts .phones .dropdown_wrap p').on('click', function () {
      $(this).next().slideToggle();
   });

   $('.about_company.page_about .scroll_to_next').on('click', function () {
      $([document.documentElement, document.body]).animate({
         scrollTop: $(".about_service").offset().top
      }, 1000);
   });

});



// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

function ibg() {

   $.each($('.ibg'), function (index, val) {
      if ($(this).find('img').length > 0) {
         $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
      }
   });
}

ibg();