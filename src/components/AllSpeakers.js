import React from 'react';
import { Link } from 'react-router-dom';
import Speaker from './Speaker/Speaker';

class AllSpeakers extends React.Component {
  constructor(props) {
    super(props);

    // set initial state
    this.state = {
        allSpeakers: [],
        hasError: false
    };
  }

  componentDidMount() {
      this.fetchData();
  }

  fetchData(){
    fetch('https://randomuser.me/api/?seed=myseed&results=10')
        .then(response => response.json())
        // define new objects for each person
        .then(data => data.results.map(person => (
            {
                name: `${person.name.first} ${person.name.last}`,
                email: person.email,
                photo: person.picture.large,
                username: person.login.username,
                description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            }
        )))
        // overwrite empty state with new objects
        .then(allSpeakers => this.setState(
            { allSpeakers }
        ))
        .catch(err => {
            console.error('Parsing failed.', err);
            this.setState({ hasError: true })
        });
  }

  render() {
    // destructuring state
    const { allSpeakers, hasError } = this.state;
    const { match } = this.props;
    // url param from Router (ex. crazybear975)
    const { username } = match.params;
    // this is list of all speakers
    let speakers = allSpeakers;

    // check if username defined (path is /speakers/:username )and allSpeakers loaded
    if (username && allSpeakers) {
        // filter out array to get matched speaker
        speakers = allSpeakers.filter(f => f.username === username);
        console.log('matched speakers ', speakers);
    }

    return (
        <div className="container">
            <ul style={allSpeakersUl}>
                {
                  hasError ? <p>Error getting the speakers</p> : speakers.map(speaker => (
                    <li key={speaker.email}>
                        <Speaker speaker={speaker}/>
                    </li>
                  ))
                }
            </ul>
        </div>
    );
  }
}

export default AllSpeakers;

const allSpeakersUl = {
    listStyle: 'none'
}
