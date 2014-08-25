var username = '';
var topArtists = {};

//last.fm api key
var lastfm = {

};

var getUsername = function(){

  $('button').click(function(username){
    username = $('.usernameForm').val();
    console.log("Username: ",username);
    $('.usernameFormRow').hide('slow');
    svgAppend();
    getTopArtists(topArtists, username);
  });

  return username;
};

//Go back home. Reset input form and username
$('.home').click(function(){
  $('.usernameForm').val('');
  $('.usernameFormRow').show('slow');
});

//Get top artists info
var getTopArtists = function(topArtists, username){
  console.log("username in getTopArtists: ",username);

  //getTopArtist json request with username added
  var url = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=' + username + '&api_key=eb8e795d4ad0ecfe76dc84f885983afc&format=json';
  console.log("url: ",url);

  // $.getJSON(url, function(data){
  //   $.each(data, function(name, playcount){
  //     topArtists[name] = playCount;
  //   });
  // }, lastfm.apiKey);

console.log("topArtists: ",topArtists);
  // return topArtists;
};

$(document).ready(function(){
  //Get last.fm username
  getUsername();
  console.log("apiKey: " +lastfm.apiKey);

});
