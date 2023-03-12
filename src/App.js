import React, { useEffect, useState } from "react";

export default function App() {
  const [populate, setPopulate] = useState([]);
  const [enter, setEnter] = useState("");
  const [click, setClick] = useState("");
  const [appear, setAppear] = useState(false);
const [error, setError] = useState(false);

  const updateWeather = async () => {
    const url =
      `https://api.openweathermap.org/data/2.5/weather?&q=${click}&units=metric&appid=4a4eb313694206dcf7a6bd8cad8b69d6`;
    const data = await fetch(url);
    const response = await data.json();
            
    if (response.cod == "404") {
      setError(true);
    } else {
      setError(false);
    }

    setPopulate({
      image: response.weather[0].icon,
      temp: response.main.temp,
      condition: response.weather[0].main,
      humidity: response.main.humidity,
      wind: response.wind.speed,
      clouds: response.clouds.all,
      name: response.name,
    });
  };

   useEffect(() => {if (click !== "") {
    updateWeather();
  }
}, [click]);

  const handleonclick=(event)=>{
      event.preventDefault()
    setClick(enter)
    setAppear(true)
  }
  const handleonenter=(e)=>{
      setEnter(e.target.value)
  }

  return (
        <div> 
        <div>
          {error ? "":(
          <div>
            {appear ?(
          <div className="container3">
            <h4 className="check">Check The Weather..!</h4>
            <img src="location.png" className="location" />
            <span className="city">{populate.name}</span>
          </div>
                 ):""}
                 </div>
                 )}

          <div className="containers">
            <div className="container1">
              <div className="container2">
                <div className="boxe4">
                  <input type="text" className="input4" placeholder="Search" onChange={handleonenter}/>
                  <button className="btn4">
                    <img src="search.png" className="submit" onClick={handleonclick} />
                  </button>

                {error ?(
                  <p className="warning">Please Enter a Valid City Or Country....!</p>
                ):(
                  <div>
                    {appear ?(
                      <div>
                    <img
                      src={`https://openweathermap.org/img/wn/${populate.image}@2x.png`}
                      className="image"
                    />

                    <h1 className="temp">{populate.temp}°C</h1>
                    <h2 className="sunny">{populate.condition}</h2>
                    <div className="box5">
                      <div className="details">
                        <img src="Group35.png" className="icon" />
                        <span className="Windspeed">{populate.wind}  km/h</span>
                      </div>
                      <div className="details1">
                        <img src="humidity.png" className="icon" />
                        <span className="humidity">{populate.humidity} g.m-3</span>
                      </div>
                      <div className="details2">
                        <img src="cloud.png" className="icon" />
                        <span className="Cloudy">{populate.clouds}</span>
                      </div>
                    </div>
                    </div>
                    ):""}
                  </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
