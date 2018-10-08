import React from 'react';
//import WeatherIcons from 'react-weathericons';

const icons  = {
    sun : "icon ion-md-sunny",
    fog :"icon ion-md-rainy",
    rain: "icon ion-md-flash",
    snow :"icon ion-md-cloudy" 
};

const getWeatherIcon = weatherState => {
    //aqui abajo le indico que devuelva un icon en base a lo que está enn weatherState.
    const icon = icons[weatherState];
    if(icon){
        //aqui le decimos la condicion 
        return <span className= {icon}></span>;
    }else{
        //aqui abajo indicamos que si icos es nulo devuelva el sigienteeste icon 
        return <span className= "icon ion-md-cloud-done"></span>;

    }

};


const WeatherTemperature = ({temperature, weatherState}) =>(
    <div>
        {/* <WeatherIcons name="day-sunny" size="2x" />
        */}
        {
            getWeatherIcon(weatherState)
        }
        
        <span> {`${temperature}c°`} </span>

        </div> 

);

export default WeatherTemperature;