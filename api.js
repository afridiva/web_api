$(document).ajaxStart(function () {
  $('.message').hide();
}).ajaxError(function () {
  $('.message').text('Resource not found');
});

$(window).load(function() {
  $('.facebook').hide();
  $('.github').hide();
});

$(document).ready(function() {
  $('.facebook').hide();
  $('.github').hide();

  $(document).on('click', '#submitbtn', function(){
    var name = $('#param').val();
    var type_url = $('#selectapi').val();
    if (name) {

      if ($('#selectapi').val().includes('github')) {
        name += '?client_id=49f1860af7605ac87d8d&client_secret=9cd11a7b4ae32244dd500464adeb6c88e8a3a4b7';
      }

      getResponse(type_url + name);
      return false;
    }
    else {
      $('.message').text('Please provide a user name');
      return false;
    }
  });
});

function getResponse(url) {
  $.ajax({
    url: url
  }).then(function(data) {
    if(data.id != null) {
     $('.id').append(data.id);
     $('.name').append(data.login);
     $('.type').append(data.type);
     $('.admin').append(data.site_admin);
     $('.url').append(data.url);
     $('.page').append(data.html_url);
     $('.furl').append(data.followers_url);
     $('.fgurl').append(data.following_url);
     $('.cat').append(data.created_at);
     $('.uat').append(data.updated_at);
     $('.prepos').append(data.public_repos);
     $('.avatar').attr('src', data.avatar_url);
     $('.gitHub').show();
   }
   else {
    $('.message').text('This user does not exist on ' + $('#selectapi').text());
  }
});
}
