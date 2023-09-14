import React from 'react';
import { useState } from 'react';
import "./Projects.css";
import Globe1 from '../Globe_1_.png';
import Globe2 from '../Globe_2_.png';
import Globe3 from '../Globe_3_.png';
import Globe4 from '../Globe_4_.png';
import Globe5 from '../Globe_5_.png';

export const OtherProjects = () => {
    const [Summary,setSummary] = useState("");

    const OnlinePortfolio = "My online portfolio is developed using React. The website features a navigation bar that directs users to distinct sections such as 'Home', 'Projects', and 'Education'. Within the 'Projects' section, there's a subsection dedicated to 'SchoolProjects'. The entire routing is managed by BrowserRouter from the 'react-router-dom' package, making the user experience straightforward and efficient. The design is simple, with a clear emphasis on content, making it easy for visitors to navigate and understand.";
    const GeoNews = "The interactive map-based news application is developed using React and integrates the Leaflet map library. The application presents users with a global map where countries can be selected either by searching or direct clicking. A successful country selection causes it to glow distinctively on the map. Clicking on a highlighted country then navigates users to a dedicated page, offering various news categories specific to that country, such as general, business, health, entertainment, science, technology, and sports. Selecting a category lets users view the top news stories from that nation within the chosen domain. From there, the user can decide if they want to view the news article’s in the country of origin or in English. Under the hood, the application utilizes react-router-dom for routing and the GeoJSON data format to represent the countries and their boundaries. The data for displaying the News articles was given using NewsAPI and the translatable feature was made possible by the google cloud translate API.  This project is a practice in using REACT to exhibit a smooth user interface while retrieving data and functionality from APIs. I will be expanding more on this project as I learn more."
    const handleClick = (Project) =>{
        setSummary(Project);

    }

    const images = [ Globe1 , Globe2 , Globe3 , Globe4, Globe5];

    
  return (
    <div>
        <h1>Other Projects</h1>

    <div className = "boox">
        <h1 className = "second" onClick = {() => handleClick("GeoNews")}>GeoNews</h1>
        <h2 className = "second" onClick = {() => handleClick("OnlinePortfolio")}>Online Portfolio</h2>
    </div>
    <div className = "description2">Please select project to view description and more</div>
    {Summary &&(
        <div className = "description">
            <h2>Description</h2>
            {Summary === "GeoNews" && <p>{GeoNews}</p>}
            {Summary === "GeoNews" && images.map((image, index) => (
        <img key={index} src={image} alt={`Globe ${index + 1}`} />
            ))
            }
            {Summary === "OnlinePortfolio" && <p>{OnlinePortfolio}</p>}
        </div>
    )}
    </div>
  )
}
