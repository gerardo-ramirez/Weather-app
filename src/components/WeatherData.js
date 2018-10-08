import React from 'react';
import WeaterExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTempeture';

const  WeatherData = () =>(
    <div>
        <WeatherTemperature temperature={20}
        weatherState={'sun '}/>
        <WeaterExtraInfo humidity={80} wind={'10 m/s'}/>

    </div>
);

export default WeatherData 