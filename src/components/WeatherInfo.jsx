import axios from "axios";
import { useEffect, useState } from "react";

const WeatherInfo =() =>{
    const [city, setCity] = useState(null);
    const [input, setInput] = useState("")


    const apiKey = import.meta.env.VITE_WEATHER_API;


    //to fetch the data
    useEffect(() => {
        axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=nigeria&aqi=no`)
        .then(res =>{
            setCity(res.data)
            console.log(res.data)
        }
     
        )
    }, [])


    //event to get weather based on user input
    const weatherInput = (e)=>{
        setInput(e.target.value);
        console.log(input)
    };
    const searchWeather = ()=>{
      axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}`)
      .then(res =>{
        setCity(res.data)})
    }
    

    return(
    
     <div>
         <div className="flex items-center justify-center p-4">
        <div className="flex w-full max-w-md">
          <input
          onChange={weatherInput}
            type="text"
            placeholder="Search..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600 transition"
            onClick={searchWeather}
          >
            Search
          </button>
        </div>
      </div>


 
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-purple-700 text-white space-y-4">
    {city ? (
    <>
      <h1 className="text-6xl font-semibold">{city.location.name}</h1>
      <img 
        src={city.current.condition.icon} 
        alt={city.current.condition.text} 
        className="w-28 h-28" 
      />
      <div className="text-6xl font-bold">{city.current.temp_c}°</div>
      <div className="text-lg opacity-80">
        Lat: {city.location.lat}°, Lon: {city.location.lon}°
      </div>
      <p className="text-2xl">{city.current.condition.text}</p>
    </>
  ) : (
    <p>Loading...</p>
  )}
</div>

        </div>
    )
}


export default WeatherInfo;