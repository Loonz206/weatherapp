import React, { Component } from 'react';
import loaderfront from '../../svg/loaderfront.svg';

class Loader extends Component {
    render() {
        return <div className="loader">
            <h1>Loading...</h1>
            <img src={loaderfront} className="loader-pulse" alt="Loading..." />
        </div>;
    }
}
export default Loader;