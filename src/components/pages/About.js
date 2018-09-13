import React from 'react';
import Archive from '../Archive/Archive';
import FancyWrapper from '../FancyWrapper';

const About = () => {
    return(
        <div className="container">
            <FancyWrapper>
                <h1>About</h1>
            </FancyWrapper>
            <Archive />
        </div>
    );
}

export default About;
