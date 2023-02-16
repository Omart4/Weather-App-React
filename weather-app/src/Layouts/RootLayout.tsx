import {Outlet, NavLink} from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
const RootLayout = () => {
    return ( 
        <div className="root-layout">
            <nav className="nav">
                <NavLink to='/' className="m-links">
                    <FontAwesomeIcon icon={solid("house")} />
                    <p>Home</p>
                </NavLink>
                <NavLink to='search' className="m-links">
                    <FontAwesomeIcon icon={solid('magnifying-glass')} />
                    <p>Search</p>
                </NavLink>
                <NavLink to='Weather' className="m-links">
                    <FontAwesomeIcon icon={solid("cloud-moon-rain")} />
                    <p>Weather</p>
                </NavLink>
            </nav>
            <main>
                <Outlet/>
            </main>
            
        </div>
    );
}
 
export default RootLayout;