var myDataSet = {
  "The Beatles": "2661",
  "La Dispute": "2437",
  "Brand New": "1932",
  "Say Anything": "1725",
  "Pierce the Veil": "1564"
};

//d3 append svg on username submission
var svgAppend = function(){
  d3.select('.d3-data').append('svg')
    .attr('width', 800)
    .attr('height', 500)
    .style('border', '1px solid black')

    .data(myDataSet)
    .enter()
    .append('div')
    .append('circle')
    .attr('cx', 25)
    .attr('cy', 25)
    .attr('r', 25)
    .style('opacity', .5)
    .style('fill', 'blue');
};



