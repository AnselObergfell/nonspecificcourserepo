import React, { Component } from 'react';
import * as d3 from 'd3';

class Child2 extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      //this.componentDidUpdate()
    }

    componentDidUpdate() {
          var category = this.props.category
          var data = this.props.data
          d3.select('#scatter').selectAll('*').remove();
          var parsedData = data.filter((item) => item.category == category);
          console.log(parsedData);

          var x_data = parsedData.map(item => item.X);
          var y_data = parsedData.map(item => item.Y);
          const xAxis = d3.scaleLinear().domain([0,20]).range([0,300]);
          const yAxis = d3.scaleLinear().domain([0,24]).range([300,0]);
          const svg = d3.select("#scatter")
            .append("svg")
            .attr("width", 400)
            .attr("height", 400)
            
            .append("g").attr('transform', 'translate(50,50)')
            svg.append('g').call(d3.axisLeft(yAxis))
            svg.append('g').attr('transform', 'translate(1,300)').call(d3.axisBottom(xAxis))
            svg.append('g').call(xAxis)
            svg.append('g')
            .selectAll("dot")
            .data(parsedData)
            .join("circle")
                .attr("cx", function (d) { return xAxis(d.x); } )
                .attr("cy", function (d) { return yAxis(d.y); } )
                .attr("r", 4)
                .style("fill", "#69b3a2")
    }

    render() {
        return <svg id='scatter' width="500" height="500"></svg>;
    }
}

export default Child2;
