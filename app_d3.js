//d3 append svg on username submission
var svgAppend = function(){
  d3.select('.d3-data').append('svg')
    .attr('width', 800)
    .attr('height', 500)
    .style('border', '1px solid black');
};
