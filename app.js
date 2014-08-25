var getUsername = function(){
  var username = '';

  $('button').click(function(username){
    username = $('.usernameForm').val();
    console.log("Username: ",username);
  });

  return username;
};


$(document).ready(function(){
  //Get last.fm username
  getUsername();
});
