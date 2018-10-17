import React from 'react';
import PropTypes from 'prop-types';


import {
    SUN,
    FOG,
    RAIN,
    SNOW,
} from './../../../constants/Weather';
//import WeatherIcons from 'react-weathericons';
import './style.css';
const icons = {
    //Aqui abajo muestra del destructunig. como la costante sun es igual a la propiedad sun solo agregamos []
    [SUN]: "icon ion-md-sunny",
    [FOG]: "icon ion-md-rainy",
    [RAIN]: "icon ion-md-flash",
    [SNOW]: "icon ion-md-cloudy"
};

const getWeatherIcon = weatherState => {
    //aqui abajo le indico que devuelva un icon en base a lo que está enn weatherState.
    const icon = icons[weatherState];
    if (icon) {
        //aqui le decimos la condicion 
        return <span className={icon}></span>;
    } else {
        //aqui abajo indicamos que si icos es nulo devuelva el sigienteeste icon 
        return <span className="icon ion-md-cloud-done"></span>;

    }

};


const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className='weatherTemperatureCont'>
        {/* <WeatherIcons name="day-sunny" size="2x" />
        */}
        {
            getWeatherIcon(weatherState)
        }

        <span> {`${temperature}c°`} </span>

    </div>

);
WeatherTemperature.propTypes = {
    //isRequired lo hace obligatorio. 
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,

};

export default WeatherTemperature;