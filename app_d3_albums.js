var svgAppendAlbums = function(topAlbumsArray){

  // var svgBar = d3.select('.d3-data-album').append('svg')
  //           .attr('width', 600)
  //           .attr('height', 400)
  //           .attr('class', 'bar_chart');

  // var barChart = svgBar.selectAll('.bar_chart')
  //               .data(topAlbumsArray)
  //               .enter().append('div')
  //               .style('width', 20)
  //               .text(function(d){return d.name;});

  // var width = 420,
  //     barHeight = 20;

  // var x = d3.scale.linear()
  //     .domain([0, d3.max(10)])
  //     .range([0, width]);

  // var chart = d3.select(".bar_chart")
  //     .attr("width", width)
  //     .attr("height", barHeight * 10);

  // var bar = chart.selectAll("g")
  //     .data(topAlbumsArray)
  //   .enter().append("g")
  //     .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

  // bar.append("rect")
  //     .attr("width", 15)
  //     .attr("height", barHeight - 1);

  // bar.append("text")
  //     .attr("x", function(d) { return (d.playcount/100); })
  //     .attr("y", barHeight / 2)
  //     .attr("dy", ".35em")
  //     .text(function(d) { return d.name; });
// 

// d3.select('body')
//     .data(topAlbumsArray)
//     .enter().append('div')
//     .attr('class', 'chart')    
//     .attr('width', 10)
//     .attr('height', function(d) { return d.playcount/10; })
//     .style('fill', 'steelblue')
//     .text(function(d) { return d.name; });

};
