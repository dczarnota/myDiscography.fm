var svgSettings = {
  width: 800,
  height: 500
};

//d3 append svg on username submission
var svgAppend = function(topArtistsArray){

  var xRandom = function(){
    var x = Math.random() * 800;
    console.log("x: ",x);
    return x;
  };

  var yRandom = function(){
    var y = Math.random() * 500;
    console.log("y: ",y);
    return y;
  };

  var svg = d3.select('.d3-data').append('svg')
            .attr('width', svgSettings.width)
            .attr('height', svgSettings.height)
            .style('border', '1px solid black');
  
  var circles = svg.selectAll("circle")
               .data(topArtistsArray)
               .enter()
               .append("circle");

  var circleAttributes = circles
                         .attr('cx', function(d){return xRandom();})
                         .attr('cy', function(d){return yRandom();})
                         .attr('r', function(d){return (d.playcount/100);})
                         .style('opacity', .5)
                         .style('fill', 'blue');

};



