const width = 500, height = 500;

const today = moment()
const endDate = moment().add(6, 'months')

const xScale = d3.scaleTime()
    .domain([today.toDate(), endDate.toDate()])
    .range([10, width - 10])


const xAxis = d3.axisTop(xScale)
    .ticks(d3.timeMonth.every(1))
    .tickFormat(d3.timeFormat("%b"))


const svg = d3.select('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background-color', 'green')

const x = svg.append('g')
    .attr('transform', 'translate(' + [0, height - 50] + ')')
    .call(xAxis)