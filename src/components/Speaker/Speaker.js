import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './speaker.css';
import speakersData from '../../speakers-data';

const SingleSpeaker = (props) => {
    // return array with matched username speaker
    const oneSpeaker = speakersData.filter(speaker => speaker.login.username === props.username);
    const socials = oneSpeaker[0].socials;
    const {twitter, linkedin, github} = socials;

    return (
        <section className="speaker">
            <div className="speaker__info">
                <div className="speaker__img-wrapper">
                    <img src={oneSpeaker[0].picture.large} alt={oneSpeaker[0].name.first}/>
                </div>
                <div className="speaker__title-wrapper">
                    <h3>{oneSpeaker[0].name.first} {oneSpeaker[0].name.last}</h3>
                    <p>Company:  <span className="text-danger">{oneSpeaker[0].company}</span></p>
                    <p className="text-primary">{oneSpeaker[0].location.country}, {oneSpeaker[0].location.city}</p>
                    <p className="card-subtitle mb-2 text-muted">{oneSpeaker[0].email}</p>
                    <ul className="title-wrapper__socials">
                        <li><a href={twitter} className="twitter" target="_blank">twitter</a></li>
                        <li><a href={linkedin} className="linkedin" target="_blank">linkedin</a></li>
                        <li><a href={github} className="github" target="_blank">github</a></li>
                    </ul>
                </div>
            </div>
            <p className="speaker__desctiption">{oneSpeaker[0].description}</p>
            <Link to={`/speakers`}>Back</Link>
        </section>
    )
}

export default SingleSpeaker;
