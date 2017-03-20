import React, { Component } from 'react';
import loaderfront from '../../svg/loaderfront.svg';

class Loader extends Component {
    //Create a loader while all of the stuff is going on.
    render() {
        return <div className="loader">
            <h1>Welcome to DarkSky Weather API</h1>
            <p>Loading...</p>
            <img src={loaderfront} className="loader-pulse" alt="Loading..." />
        </div>;
    }
}
export default Loader;