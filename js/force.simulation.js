console.log('calling force')
const data = {
    "nodes": [
        {
            "id": 1,
            "name": "A"
        },
        {
            "id": 2,
            "name": "B"
        },
        {
            "id": 3,
            "name": "C"
        },
        {
            "id": 4,
            "name": "D"
        },
        {
            "id": 5,
            "name": "E"
        },
        {
            "id": 6,
            "name": "F"
        },
        {
            "id": 7,
            "name": "G"
        },
        {
            "id": 8,
            "name": "H"
        },
        {
            "id": 9,
            "name": "I"
        },
        {
            "id": 10,
            "name": "J"
        }
    ],
    "links": [

        {
            "source": 1,
            "target": 2
        },
        {
            "source": 1,
            "target": 5
        },
        {
            "source": 1,
            "target": 6
        },

        {
            "source": 2,
            "target": 3
        },
        {
            "source": 2,
            "target": 7
        }
        ,

        {
            "source": 3,
            "target": 4
        },
        {
            "source": 8,
            "target": 3
        }
        ,
        {
            "source": 4,
            "target": 5
        }
        ,

        {
            "source": 4,
            "target": 9
        },
        {
            "source": 5,
            "target": 10
        }
    ]
}
var margin = { top: 10, right: 30, bottom: 30, left: 40 },
    width = 800 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

// append the svg object to the body of the page
var forceSvg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style('background-color', 'pink')
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Initialize the links
var link = forceSvg
    .selectAll("line")
    .data(data.links)
    .enter()
    .append("line")
    .style("stroke", "#aaa")
    .attr('stroke-width', 3)

// Initialize the nodes
var node = forceSvg
    .selectAll("circle")
    .data(data.nodes)
    .enter()
    .append("circle")
    .attr("r", 15)
    .style("fill", "#69b3a2")

// Let's list the force we wanna apply on the network
var simulation = d3.forceSimulation(data.nodes)                 // Force algorithm is applied to data.nodes
    .force("link", d3.forceLink()                               // This force provides links between nodes
        .id(function (d) { return d.id; })                     // This provide  the id of a node
        .links(data.links)                                    // and this the list of links
    )
    .force("charge", d3.forceManyBody().strength(-400))         // This adds repulsion between nodes. Play with the -400 for the repulsion strength
    .force("center", d3.forceCenter(width / 2, height / 2))     // This force attracts nodes to the center of the svg area
    .on("end", ticked);

// This function is run at each iteration of the force algorithm, updating the nodes position.
function ticked() {
    link
        .attr("x1", function (d) { return d.source.x; })
        .attr("y1", function (d) { return d.source.y; })
        .attr("x2", function (d) { return d.target.x; })
        .attr("y2", function (d) { return d.target.y; });

    node
        .attr("cx", function (d) { return d.x + 6; })
        .attr("cy", function (d) { return d.y - 6; });
}