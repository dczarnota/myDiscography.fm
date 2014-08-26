var username = undefined;
var topArtistsArray = [];
var topAlbumsArray = [];

//last.fm api key
var lastfm = {

};

var init = function(){

  //Button click will get username
  $('button').click(function(username){
    username = $('.usernameForm').val();
    $('h1').hide();
    $('h2').show().append(username + '\'s top artists');
    $('h3').show().append(username + '\'s top albums');
    $('.usernameFormRow').hide('slow');


    //send svgAppend as callback so that the getJSON request fills in the topArtistsArray with user data
    getTopArtists(topArtistsArray, username, svgAppend, svgAppendAlbums);
  });

  return username;
};

//Go back home. Reset input form and username
$('.home').click(function(){
  $('.usernameForm').val('');
  $('.usernameFormRow').show('slow');
  $('svg').remove();
  $('.d3-data-album').empty();
  $('h2').empty().hide();
  $('h3').empty().hide();
  $('h1').show();
  topArtistsArray = [];
  topAlbumsArray = [];

  return topArtistsArray;
});

//Get top artists info
var getTopArtists = function(topArtistsArray, username, callback1, callback2){
  //getTopArtist json request with username added
  var url = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=' + username + '&api_key=eb8e795d4ad0ecfe76dc84f885983afc&format=json';
  var urlAlbum = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=' + username + '&limit=10&api_key=eb8e795d4ad0ecfe76dc84f885983afc&format=json';

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
      callback1(topArtistsArray);
  }, lastfm.apiKey);

  $.getJSON(urlAlbum, function(data){
    $.each(data.topalbums.album, function(index, obj){
      var topAlbums = {};
      $.each(obj, function(key, val){
        var albumName = obj['name'];
        var playcount = obj.playcount;
        var artist = obj.artist['name'];

        topAlbums["name"] = albumName;
        topAlbums["playcount"] = playcount;
        topAlbums["artist"] = artist;
      });

      topAlbumsArray.push(topAlbums);
    });
      console.log("topAlbumsArray: ",topAlbumsArray);
      //callback function here will ensure that svgAppendAlbums will only run once all the data is in topAlbumsArray
      callback2(topAlbumsArray);
  }, lastfm.apiKey);

};

$(document).ready(function(){
  //Get last.fm username and kickoff app
  init();

});
