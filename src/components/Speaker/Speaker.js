import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './speaker.css';

class Speaker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {speaker} = this.props;

    return (
        <div className='speaker'>
            <div className="speaker__img-wrapper">
                <Link to={`/speakers/${speaker.username}`}>
                    <img src={speaker.photo} alt={speaker.name}/>
                </Link>
            </div>
            <div>
                <Link to={`/speakers/${speaker.username}`}>
                    <h3 className="card-title">{speaker.name}</h3>
                </Link>
                <p className="card-subtitle mb-2 text-muted">{speaker.email}</p>
                <p className="card-text">{speaker.description}</p>
            </div>

        </div>
    );
  }
}

export default Speaker;
