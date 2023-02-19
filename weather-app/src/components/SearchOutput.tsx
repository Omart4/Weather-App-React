import { FC } from "react";
import { NavLink } from "react-router-dom";

const SearchOutput:FC = ({weather}:any)=>{
    return(
        <NavLink to={`/weather/${weather.location.name}`}>
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
        </NavLink>
    )
}

export default SearchOutput;