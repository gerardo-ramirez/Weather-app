import React from 'react'
import Location from './Location';
import WeatherData from './WeatherData.js'


const WeatherLocation = () => (
    <div>
        <Location city={"Grecia"}/>
        <WeatherData/>
    </div>
);
export default WeatherLocation; 