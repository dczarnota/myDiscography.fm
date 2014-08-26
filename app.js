var username = '';
var topArtistsArray = [];

//last.fm api key
var lastfm = {

};

var getUsername = function(){

  $('button').click(function(username){
    username = $('.usernameForm').val();
    console.log("Username: ",username);
    $('.usernameFormRow').hide('slow');
    svgAppend();
    // getTopArtists(topArtistsArray, username);
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

  //getTopArtist json request with username added
  var url = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=' + username + '&api_key=eb8e795d4ad0ecfe76dc84f885983afc&format=json';

  $.getJSON(url, function(data){
    $.each(data.topartists.artist, function(index, obj){
      var topArtists = {};

      $.each(obj, function(key, val){
        var name = obj.name;
        var playcount = obj.playcount;
        topArtists["name"] = name;
        topArtists["playcount"] = playcount;
      });
        topArtistsArray.push(topArtists);
    });
  }, lastfm.apiKey);


  console.log("topArtistsArray: ",topArtistsArray);

  return topArtistsArray;
};

$(document).ready(function(){
  //Get last.fm username
  getUsername();
  // console.log("apiKey: " +lastfm.apiKey);

});
