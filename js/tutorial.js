const graphWidth = 500, graphHeight = 500;

const today = moment()
const endDate = moment().add(6, 'months')

const xScale = d3.scaleTime()
    .domain([today.toDate(), endDate.toDate()])
    .range([10, graphWidth - 10])


const xAxis = d3.axisTop(xScale)
    .ticks(d3.timeMonth.every(1))
    .tickFormat(d3.timeFormat("%b"))


const svg = d3.select("#my_axis")
    .append("svg")
    .attr('width', graphWidth)
    .attr('height', graphHeight)
    .style('background-color', 'green')

const x = svg.append('g')
    .attr('transform', 'translate(' + [0, graphHeight - 50] + ')')
    .call(xAxis)