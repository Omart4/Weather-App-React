import { FC } from "react";
import { Link } from "react-router-dom";
import { citySearches } from "../pages/Search";

const CitySearch:FC = ({recentSearch}:any)=>{
    return(
        <div className="recent-searches-list">
            {recentSearch.map((city:any)=>(
                <Link to={`/weather/${city.name}`}>
                    <div className="city-searched">
                        <h3>{city.name}</h3>
                        <p>{city.country}</p> 
                        <p>{city.temp}°C</p>
                    </div>
                </Link>
            ))
            }
        </div>
    )
}

export default CitySearch;