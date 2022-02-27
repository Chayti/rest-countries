import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, flags, region, population } = props.country;
    // console.log(props?.country?.capital[0]);

    return (
        <div className="country">
            <h4 className="text-warning">This is: {name.common}</h4>
            <img src={flags.png} alt="" />
            <p><small>Region: {region}</small></p>
            <p>Capital is: {props.country?.capital} </p>
            <p>population: {population}</p>
        </div>
    );
};

export default Country;