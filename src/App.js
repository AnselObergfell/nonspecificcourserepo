// App component
import React, { Component } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import * as d3 from 'd3';
import Data from './data/SampleDataset.csv';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { data: {}, category: 'A'};
    }

    componentDidMount() {
        Promise.all([d3.csv(Data)])
            .then(resolved_data => {
                var data = resolved_data[0]
                this.setState({ data: data });
            })
            .catch(error => console.error("Error loading data: ", error));
    }
    conponentDidUpdate(){
    }
    render() {
        const {data, category} = this.state;
        console.log(data)
        return (
            <div>
                <select onChange={(event) => this.setState({ category: event.target.value })}>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
                {data && <Child1 data={data}/>}
                {category && <Child2 data={data} category={category}/>}
            </div>
        );
    }
}
//
                
//
export default App;
