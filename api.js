$(document).ajaxStart(function () {
  $('.facebook').hide();
  $('.github').hide();
}).ajaxStop(function () {

}).ajaxError(function () {

});

$(document).ready(function() {
  // Hide result pages
  $('.facebook').show();
  $('.github').show();

  $(document).on('click', '#submitbtn', function(){
    var name = $('#param').val();
    var type = $('#selectapi').val();
    if(type != 0) {
      getResponse(type + name + '?client_id=49f1860af7605ac87d8d&client_secret=9cd11a7b4ae32244dd500464adeb6c88e8a3a4b7');
      return false;
    }
    else {
      $('#message').append('No API selected. Displaying results for GitHub API...');
      getResponse('https://api.github.com/users/' + name + '?client_id=49f1860af7605ac87d8d&client_secret=9cd11a7b4ae32244dd500464adeb6c88e8a3a4b7');
      return false;
    }
  });
});

function getResponse(url) {
  $.ajax({
    url: url
  }).then(function(data) {
   $('.id').append(data.id);
   $('.name').append(data.login);
   $('.avatar').attr('src', data.avatar_url);
   $('.facebook').show();
 });
}

function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    scrollwheel: false,
    zoom: 8
  });
}