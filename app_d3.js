var myDataSet = [
  {
    name: "The Beatles",
    playcount: "2661"
  },
  {
    name: "La Dispute",
    playcount: "2437"
  },
  {
    name: "Brand New",
    playcount: "1932"
  },
  {
    name: "Say Anything",
    playcount: "1725"
  },
  {
    name: "Pierce the Veil",
    playcount: "1564"
  },
]


//d3 append svg on username submission
var svgAppend = function(){
  var svg = d3.select('.d3-data').append('svg')
            .attr('width', 800)
            .attr('height', 500)
            .style('border', '1px solid black');

  for(var key in myDataSet){
    var circle = svg.append('circle');

    svg.selectAll('circle')
        .data(myDataSet)
        .enter()
        .attr('cx', 25)
        .attr('cy', 25)
        .attr('r', 25)
        .style('opacity', .5)
        .style('fill', 'blue');
  }
};



