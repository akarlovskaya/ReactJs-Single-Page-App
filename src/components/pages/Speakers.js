import React from 'react';
// in {} is named exports
import { Switch, Route } from 'react-router-dom';
import AllSpeakers from '../AllSpeakers';
import Speaker from '../Speaker';

const Speakers = () => {
    return(
        <Switch>
            <Route exact path='/speakers' component={AllSpeakers} />
            <Route path='/speakers/:name' component={Speaker} />
        </Switch>
    );
}

export default Speakers;
