var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);

var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)

var barChart = svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('y', (d) => svgHeight - d)
    .attr('height', d => d)
    .attr('width', barWidth - barPadding)
    .attr('transform', (_, i) => {
        var translate = [barWidth * i, 0]
        return 'translate(' + translate + ')'
    })

var text = svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(d => d)
    .attr('y', d => svgHeight - d - 2)
    .attr('x', (_, i) => barWidth * (i + 0.25))
    .attr('fill', '#A00000')