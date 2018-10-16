import React from 'react';
import WeaterExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTempeture';
import {
    SUN,
    FOG,
    RAIN,
    SNOW,
} from './../../../constants/Weather';
import './style.css';

const  WeatherData = () =>(
    <div className='weatherDataCont'>
        <WeatherTemperature temperature={20}
        weatherState={SUN}/>
        <WeaterExtraInfo humidity={80} wind={'10 m/s'}/>

    </div>
);

export default WeatherData 