import React from 'react';   
import "./Navbar.css";

const Navbar = () => {

        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo center">Job Traced</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/"><i class="material-icons">power_settings_new</i></a></li>
                        <li><a href="/"><i class="material-icons">add_circle_outline</i></a></li>
                        <li><a href="/"><i class="material-icons">settings</i></a></li>
                    </ul>
                </div>
            </nav>
        )
}

export default Navbar;