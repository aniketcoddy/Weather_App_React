import React from 'react'
import css from './Card.css'

export default function Card(props) {
  return (
    <div>
      <div className="container3">
        <h4 className="check">Check The Weather..!</h4>
        <img src="location.png" className="location" />
        <span className="city">{props.name}</span>
      </div>

      <div className="containers">
        <div className="container1">
          <div className="container2">
            <div className="boxe4">
              <input type="text" className="input4" placeholder="Search" />
              <button className="btn4">
                <img src="search.png" className="submit" />
              </button>
              <div >
                <img src={`https://openweathermap.org/img/wn/${props.image}@2x.png`}  className="image"/>

                <h1 className="temp">{props.temp}</h1>
                <h2 className="sunny">{props.condition}</h2>
                <div className="box5">
                  <div className="details">
                    <img src="Group35.png" className="icon" />
                    <span className="Windspeed">{props.wind}</span>
                  </div>
                  <div className="details1">
                    <img src="humidity.png" className="icon" />
                    <span className="humidity">{props.humidity}</span>
                  </div>
                  <div className="details2">
                    <img src="cloud.png" className="icon" />
                    <span className="Cloudy">{props.clouds}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
