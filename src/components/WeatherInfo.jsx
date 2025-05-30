import axios from "axios";
import { useEffect, useState } from "react";

const WeatherInfo =() =>{
    const [city, setCity] = useState(null);
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

    return(
        <div>
            
        </div>
    )
}


export default WeatherInfo;