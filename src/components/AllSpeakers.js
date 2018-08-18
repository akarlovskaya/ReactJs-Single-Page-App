import React from 'react';
import { Link } from 'react-router-dom';
import SingleSpeaker from './Speaker/Speaker';
import speakersData from '../speakers-data';

class AllSpeakers extends React.Component {
  render() {
    const { match } = this.props;
    const username = match.params.username;

    return (
        <div className="container">
            {
                username ? <SingleSpeaker username={username} /> : <ListOfSpeakers />
            }
        </div>
    )
  }
}

export default AllSpeakers;

const ListOfSpeakers = () => {
    return (
        <ul>
            {
                speakersData.map(speaker => (
                    <li key={speaker.id}>
                        <div className="speaker__img-wrapper">
                            <img src={speaker.picture.large} alt={speaker.name.first}/>
                        </div>
                        <div>
                            <h3>{speaker.name.first} {speaker.name.last}</h3>
                            <p>Company:  <span class="text-danger">{speaker.company}</span></p>
                            <p className="card-subtitle mb-2 text-muted">{speaker.email}</p>
                            <ul>
                                <li>{speaker.topic.first}</li>
                                <li>{speaker.topic.second}</li>
                            </ul>
                        </div>
                        <Link to={`/speakers/${speaker.login.username}`} class="btn btn-primary btn-sm">Learn more</Link>
                    </li>
                ))
            }
        </ul>
    )
}
