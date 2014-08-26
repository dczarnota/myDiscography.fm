var svgAppendAlbums = function(topAlbumsArray){

  d3.select('.d3-data-album')
    .selectAll('div')
      .data(topAlbumsArray)
    .enter().append('div')
      .attr('class', 'chart')
      .style('width', function(d) { return d.playcount + "px"; })
      .style('opacity', .7)
      .style('background-color', '#e31b23')
      .text(function(d) { return d.artist + ' - ' + d.name; })
      .on('mouseenter', function(d){
         var plays = d.playcount;
         d3.select(this).append('playcount')
         .attr('class', 'addPlays')
         .style('display', 'none')
         .text(plays);

           $('.chart').tipsy({ 
             gravity: 'w', 
             html: true, 
             title: function(plays) {
               var showPlays = $(this).find('.addPlays').text();
               return showPlays; 
             }
           });

      })
      .on('mouseout', function(d){
         // d3.select('.text').remove();
         d3.select(this)
         .select('.addPlays')
         .remove();
      });

};
