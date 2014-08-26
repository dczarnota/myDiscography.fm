var svgSettings = {
  width: 1300,
  height: 700
};

//d3 append svg on username submission
var svgAppend = function(topArtistsArray){

  var xRandom = function(){
    var x = Math.random() * 1000;
    return x;
  };

  var yRandom = function(){
    var y = Math.random() * 500;
    return y;
  };

  var svg = d3.select('.d3-data').append('svg')
            .attr('width', svgSettings.width)
            .attr('height', svgSettings.height);
  
  var circles = svg.selectAll('circle')
               .data(topArtistsArray)
               .enter()
               .append('circle');

  var circleAttributes = circles
                         .attr('cx', function(d){return xRandom();})
                         .attr('cy', function(d){return yRandom();})
                         .attr('r', function(d){return (d.playcount/40);})
                         .style('opacity', .5)
                         .style('fill', 'blue')
                         .on('mouseenter', function(d){
                            var artistName = d.name;
                            d3.select(this).append('artistName')
                            .attr('class', 'addArtistName')
                            .text(artistName);

                              $('svg circle').tipsy({ 
                                gravity: 'w', 
                                html: true, 
                                title: function(artistName) {
                                  var showName = $(this).find('.addArtistName').text();
                                  return showName; 
                                }
                              });

                         })
                         .on('mouseout', function(d){
                            // d3.select('.text').remove();
                            d3.select(this)
                            .select('.addArtistName')
                            .remove();
                         });

  svgAppendAlbums(topAlbumsArray);
};
