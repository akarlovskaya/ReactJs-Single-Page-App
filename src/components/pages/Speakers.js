import React, { Component } from 'react';

class Speakers extends Component {
    constructor(props) {
        super(props);

        // set initial state
        this.state = {
            allspeakers: []
        }
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => console.log(data))
    }

    render() {
        return(
            <div>
                <h1>Speakers page</h1>
            </div>
        )
    }
}

export default Speakers;
