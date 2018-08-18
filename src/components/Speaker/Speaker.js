import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './speaker.css';
import speakersData from '../../speakers-data';

const SingleSpeaker = (username) => {
    // return array with matched username speaker
    const oneSpeaker = speakersData.filter(speaker => speaker.login.username === username.username);
    const socials = oneSpeaker[0].socials;
    console.log('socials obj ', socials);
    const {twitter, linkedin, github} = socials;
    console.log(twitter, linkedin, github);

    return (
        <div>
            <img src={oneSpeaker[0].picture.large} alt={oneSpeaker[0].name.first}/>
            <h3>{oneSpeaker[0].name.first} {oneSpeaker[0].name.last}</h3>
            <p>Company:  <span class="text-danger">{oneSpeaker[0].company}</span></p>
            <p class="text-primary">{oneSpeaker[0].location.country}, {oneSpeaker[0].location.city}</p>
            <p className="card-subtitle mb-2 text-muted">{oneSpeaker[0].email}</p>
            <ul>
                <li><a href={twitter} className="twitter" target="_blank">twitter</a></li>
                <li><a href={linkedin} className="linkedin" target="_blank">linkedin</a></li>
                <li><a href={github} className="github" target="_blank">github</a></li>
            </ul>

            <p>{oneSpeaker[0].description}</p>
        </div>
    )
}

export default SingleSpeaker;
