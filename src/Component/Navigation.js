import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {

    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-5">
            <a className="navbar-brand" href="#!">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item"><NavLink className="nav-link" exact='true' to='/'>Home</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to='/aboutus'>AboutUs</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to='/contactus'>ContactUs</NavLink></li>
                    <li className= "nav-item"><NavLink className="nav-link" to="/classbaselifecyclehooks">Top Reviews</NavLink></li>
                  
                </ul>

            </div>
        </div>
    </nav>
    )
}
export default Navigation;








