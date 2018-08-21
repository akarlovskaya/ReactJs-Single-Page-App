import React from 'react';
import { Link } from 'react-router-dom';
import SingleSpeaker from '../Speaker/Speaker';
import speakersData from '../../speakers-data';
import './allSpeakers.css';

class AllSpeakers extends React.Component {
  render() {
    const { match } = this.props;
    const username = match.params.username;
    
    return (
        <div className="container">
            {
                username ? <SingleSpeaker username={username}/> : <ListOfSpeakers />
            }
        </div>
    )
  }
}

export default AllSpeakers;

const ListOfSpeakers = () => {
    return (
        <ul className="allSpeakers">
            {
                speakersData.map(speaker => (
                    <li key={speaker.id} className="allSpeakers__li card">
                        <div className="card-body">
                            <div className="allSpeakers__title">
                                <div className="title__img">
                                    <img src={speaker.picture.large} alt={speaker.name.first}/>
                                </div>
                                <div>
                                    <h3>{speaker.name.first} {speaker.name.last}</h3>
                                    <p>Company:  <span className="text-danger">{speaker.company}</span></p>
                                    <p className="card-subtitle mb-2 text-muted">{speaker.email}</p>
                                </div>
                            </div>

                            <div className="allSpeakers__info">
                                <h4>Topics</h4>
                                <ul>
                                    <li>{speaker.topic.first}</li>
                                    <li>{speaker.topic.second}</li>
                                </ul>
                                <Link to={`/speakers/${speaker.login.username}`} className="card-link">Learn more</Link>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}
