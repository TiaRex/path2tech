import React from 'react';

export default function WeatherData(props) {
  return (
    <>
      {props.list.map((item) => (
      <div className='weather-card'>
        <p>{item.day}</p>
        <p>{item.temperature}</p>
        <p>{item.condition}</p>
      </div>
      ))}
    </>
  )
}