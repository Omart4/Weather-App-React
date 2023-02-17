import { FC } from "react";

const SearchOutput:FC = ({weather}:any)=>{
    return(
        <div className="output">
           <div className="weather-status">
                <img src={weather.current.condition.icon} alt="" />
                <p>{weather.current.condition.text}</p>
            </div>
            <div className="weather-details">
                <p>{weather.location.name}</p>
                <p>{weather.location.country}</p>
                <p>{weather.current.temp_c} °C</p>
            </div>
        </div>
    )
}

export default SearchOutput;