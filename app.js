var username = undefined;
var topArtistsArray = [];
//last.fm api key
var lastfm = {

};

var init = function(){

  //Button click will get username
  $('button').click(function(username){
    username = $('.usernameForm').val();
    $('h1').hide();
    $('h2').show().append(username + '\'s top artists');
    $('.usernameFormRow').hide('slow');


    //send svgAppend as callback so that the getJSON request fills in the topArtistsArray with user data
    getTopArtists(topArtistsArray, username, svgAppend);
  });

  return username;
};

//Go back home. Reset input form and username
$('.home').click(function(){
  $('.usernameForm').val('');
  $('.usernameFormRow').show('slow');
  $('svg').remove();
  $('h2').empty().hide();
  $('h1').show();
  topArtistsArray = [];

  return topArtistsArray;
});

//Get top artists info
var getTopArtists = function(topArtistsArray, username, callback){
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
      //callback function here will ensure that svgAppend will only run once all the data is in topArtistsArray
      callback(topArtistsArray);
  }, lastfm.apiKey);

};

$(document).ready(function(){
  //Get last.fm username and kickoff app
  init();

});
