import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Speaker extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {speaker} = this.props;
    // console.log('ggg');

    return (

        <div className='speaker'>
            <Link to={`/speakers/${speaker.urlPath}`}>
                <img src={speaker.photo} alt={speaker.name}/>
            </Link>
            <h3>{speaker.name}</h3>
            <p>{speaker.email}</p>

        </div>
    );
  }
}

export default Speaker;
