import { FC } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CityWeather:FC =() =>{
    const weather:any = useLoaderData()
    const {city} = useParams()
    return(
        <div className="city-weather">
            <h2>This is city: {city} weather</h2>
            <p>{weather.location.name}</p>
            <p>{weather.current.temp_c} °C</p>
        </div>
    );
}

export const weatherLoader = async ({params}:any) =>{
    const {city} = params
    const API_Key:string = 'fd4bad44677c4d4c87433438231502'
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_Key}&q=${city}&aqi=no`)
    return res.json()
}

export default CityWeather