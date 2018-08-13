import React from 'react';
import { Link } from 'react-router-dom';
import Speaker from './Speaker';

class AllSpeakers extends React.Component {
  constructor(props) {
    super(props);

    // set initial state
    this.state = {
        allSpeakers: []
    };
  }

  componentDidMount() {
      this.fetchData();
  }

  fetchData(){
    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        // define new objects for each person
        .then(data => data.results.map(person => (
            {
                name: `${person.name.first} ${person.name.last}`,
                email: `${person.email}`,
                photo: `${person.picture.large}`,
                urlPath: `${person.name.first}-${person.name.last}`
            }
        )))
        // overwrite empty state with new objects
        .then(allSpeakers => this.setState(
            { allSpeakers }
        ))
        .catch(err => console.error('Parsing failed.', err));
    }

  render() {
    // destructuring Allspeakers array
    const {allSpeakers} = this.state;

    return (
      <ul>
          {
            allSpeakers.length > 0 ? allSpeakers.map(speaker => {
                  return <li key={speaker.email}>
                      <Speaker speaker={speaker}/>
                  </li>
            }) : null
          }
      </ul>
    );
  }
}

export default AllSpeakers;
