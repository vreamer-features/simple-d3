var dataset = [1, 2, 3, 4, 5];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);

var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)

var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgHeight])


var barChart = svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('y', (d) => svgHeight - yScale(d))
    .attr('height', d => yScale(d))
    .attr('width', barWidth - barPadding)
    .attr('transform', (_, i) => {
        var translate = [barWidth * i, 0]
        return 'translate(' + translate + ')'
    })

