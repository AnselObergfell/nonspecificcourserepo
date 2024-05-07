import React, { Component } from 'react';
import * as d3 from 'd3';

class Child1 extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        

    }
    componentDidUpdate(){
            var data = this.props.data
            var a_data = data.filter((item) => item.category == 'A');
            var b_data = data.filter((item) => item.category == 'A');
            var c_data = data.filter((item) => item.category == 'A');
            
            var x = d3.scaleBand()
            .range([ 0, 300 ])
            .domain(data.map(function(d) { return d.category;}))
            .padding(0.2);
    
            var y = d3.scaleLinear()
                .domain([0, Math.max(a_data.length, Math.max(b_data.length, c_data.length))])
                .range([ 300, 0]);
            
            const svg = d3.select("#bar")
                      .append("svg")
                      .attr("width", 400)
                      .attr("height", 400)
                      .append("g").attr('transform', 'translate(50,50)')
            svg.append("g")
                      .call(d3.axisLeft(y))
            svg.append("g")
                .attr("transform", "translate(0,300)")
                .call(d3.axisBottom(x))
                .selectAll("text")
                    .attr("transform", "translate(-10,0)rotate(-45)")
                    .style("text-anchor", "end");
    
            svg.selectAll("#bar")
                    .data(data)
                    .enter()
                    .append("rect")
                      .attr("x", function(d) { return x(d.category); })
                      .attr("y", function(d) { return y(d.y); })
                      .attr("width", x.bandwidth())
                      .attr("height", function(d) { return 300 - y(d.Value); })
                      .attr("fill", "#69b3a2")
    }
    render() {
        return <svg id='bar' width="500" height="500"></svg>;
    }
}

export default Child1;
