            // set the dimensions and margins of the graph
const margin = {top: 10, right: 30, bottom: 30, left: 60},
        width = 800 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#polity2")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

    d3.csv("https://raw.githubusercontent.com/newton-c/US_competitve_elections/main/p5v2018.csv")
        .then( function(data) {

    // Add X axis
    const x = d3.scaleLinear()
    .domain([1775, 2018])
    .range([ 0, width ]);
    svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));

    // Add Y axis
    const y = d3.scaleLinear()
    .domain([-10, 10])
    .range([ height, 0]);
    svg.append("g")
    .call(d3.axisLeft(y));


     svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
          .defined(function(d) { return d.polity2 != 0; })
        .x(function(d) { return x(d.year) })
          .y(function(d) { return y(d.polity2) })
        )
        });

const svg2 = d3.select("#polcomp")
    .append("svg")
    .attr("width", width + margin.left + margin.right) 
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

    d3.csv("https://raw.githubusercontent.com/newton-c/US_competitve_elections/main/p5v2018.csv")
        .then( function(data) {

    // Add X axis
    const x = d3.scaleLinear()
    .domain([1775, 2018])
    .range([ 0, width ]);
    svg2.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));

    // Add Y axis
    const y = d3.scaleLinear()
    .domain([-10, 10])
    .range([ height, 0]);
    svg2.append("g")
    .call(d3.axisLeft(y));

     svg2.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "blue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
          //.defined(function(d) { return d.polcomp != null; })
          .x(function(d) { return x(d.year) })
          .y(function(d) { return y(d.polcomp) })
        )
            console.log(data);
        });

