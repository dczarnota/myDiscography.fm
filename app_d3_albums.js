var svgAppendAlbums = function(topAlbumsArray){

  d3.select(".d3-data-album")
    .selectAll("div")
      .data(topAlbumsArray)
    .enter().append("div")
      .attr('class', 'chart')
      .style("width", function(d) { return d.playcount + "px"; })
      .text(function(d) { return d.artist + ' - ' + d.name; });

};
