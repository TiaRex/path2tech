import React from 'react';

export default function WeatherData({list}) {
  return (
    <>
    <p>Here is the list of the current 7 day forecast</p>
      {list.map((item) => (
      <div key={item.day} className='weather-card'>
        <p>{item.day}</p>
        <p>{item.temperature}</p>
        <p>{item.condition}</p>
      </div>
      ))}
    </>
  )
}