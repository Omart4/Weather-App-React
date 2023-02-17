import { FC } from "react";
import {Today_date} from '../assets/Helpers'

const Weather:FC = ()=>{
    
    return(
        <h1>{Today_date()}</h1>
    );
}

export default Weather;