import React from 'react';

const Location = (props) => {
    //destucturing =desestructuracion : en vez de const city = city.props, se hace asi: 
    const {city}=props;
    //o mejor aun directamente en la const Location = ({city})
   
    return (
    <div><h1>{city}</h1></div>);
};

/*class Location extends React.Component{
    
render(){
    return(
        <div></div>
    )
}

}*/
export default Location 