import React from 'react';
import { Link } from 'react-router-dom';
import SingleSpeaker from '../Speaker/Speaker';
import speakersData from '../../speakers-data';
import './allSpeakers.css';
import '../../styles/base.css';

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

class ListOfSpeakers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedSpeakers: speakersData
        }
    }

    handleSearch(e) {
        const searchQuery = e.target.value.toLowerCase();
        const displayedSpeakers = speakersData.filter(person => {
            let name = `${person.name.first} ${person.name.last}`;
            let searchValue = name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedSpeakers: displayedSpeakers
        })
    }

    render() {
        const speakers = this.state.displayedSpeakers;

        return (
            <div className="allSpeakers__wrapper">
                <main>
                    <h1>Our Speakers</h1>

                    <div className="form-group">
                        <label>Search by name</label>
                        <input type="text" className="form-control" onChange={this.handleSearch.bind(this)} />
                    </div>
                    <ul className="allSpeakers">
                        {
                            speakers.map(speaker => {
                                return <Speaker key={speaker.id} speaker={speaker} />
                            })
                        }
                    </ul>
                </main>
            </div>
        )
    }
}

const Speaker = (props) => {
    const speaker = props.speaker;

    return (
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
    )
}
