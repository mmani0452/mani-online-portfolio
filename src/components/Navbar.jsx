import React from 'react';
import "./Navbar.css";

export default function Navbar(){
    return (<nav className = "nav">
        <a href="/" className = 'site-title'>Mathew Mani</a>
        <ul>
            <li>
                <a href = "/Projects">Projects</a></li>
                <li>
                <a href = "/Education">Education</a></li>
                <li>
            </li>
        </ul>
    </nav>
    );
}