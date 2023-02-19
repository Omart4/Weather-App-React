import { FC } from "react";
import { Outlet } from "react-router-dom";
import {Today_date} from '../assets/Helpers'

const Weather:FC = ()=>{
    
    return(
        <div className="weather-output">
            <h1>{Today_date()}</h1>
            <Outlet/>
        </div>
    );
}

export default Weather;