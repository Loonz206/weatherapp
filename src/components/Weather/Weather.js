import React, { Component } from 'react';
import Day from '../../components/Day/Day';
import Loader from '../../components/Loader/Loader';
import Location from '../../components/Location/Location';
import axios from 'axios';

class Weather extends Component {
    //Mounting Lifecycle -->>
    //Constructor
    /*
    The constructor for a React component is called before it is mounted.
     When implementing the constructor for a React.Component subclass,
     you should call super(props) before any other statement.
      Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    constructor() {
        super();
        this.state = { weather: null };
        this.getWeather = this.getWeather.bind(this);
    }
    /*
    getWeather calls the API using axios (promise based HTTP client)
    so axios is added as a dependency. You can pass methods on axios.
    */
    getWeather(location) {
        var self = this;
        var key = 'c00940ee338b6857bc61cf9e4f67815c';
        axios({
            //http://crossorigin.me/ hack for only GET request based API. Technically all keys should be done from the server
            url: 'https://crossorigin.me/https://api.darksky.net/forecast/'+key+'/'+location[0]+','+location[1],
            method: 'get',
            responseType: 'json'
        })
            .then(function(response) {
                var d = response.data;
                var days = d.daily.data;
                self.setState({
                    weather: {
                        'current': d.currently.temperature,
                        'summary': d.hourly.summary,
                        'daily': [days[1], days[2], days[3], days[4], days[5]]
                    }
                });
            })
            .catch(function(response){
                console.log(response);
            });
    }

    //getTodayForecast gets the weather for today
    getTodayForecast() {
        if (this.state.weather !== null) {
            //Get the weather and round out the decimals and display it to the guest
            return <div className="weather-temp-container">
                    <h1>Today</h1>
                    <div className="weather-temp">{ Math.round(this.state.weather.current) + '˚' }</div>
                </div>;
        } else {
            //Return the loader
            return <Loader />;
        }
    }

    /*
    get5DayForecast for the weather. Create the array then get the dayData and for each push them into the days array
    getting the min and max values for the days and increment them by 1
     */
    get5DayForecast() {
        if (this.state.weather !== null) {
            var days = [];
            var dayData = this.state.weather.daily;
            for(var i = 0; i < dayData.length; i++) {
                days.push(<Day icon={dayData[i].icon} min={dayData[i].temperatureMin} max={dayData[i].temperatureMax} num={i} key={'day'+i}/>);
            }
            return <div className="weather-forecast">
                {days}
            </div>;
        } else {
            return;
        }
    }

    //Still in Mounting part of the cycle render the two views Today and 5DayForecast
    render() {
        return <div>
            { this.getTodayForecast() }
            { this.get5DayForecast() }
            <Location weather={this.getWeather} />
        </div>;
    }
}

export default Weather;