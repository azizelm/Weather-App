import React from 'react';
import Weather from "./components/Weather.jsx";
import weathervd from "./assets/weathervd.mp4";

const App = () => {
    return (
        <div className="app">
            <div className="video-background">
                <video autoPlay muted loop>
                    <source src={weathervd} type="video/mp4"/>
                </video>
            </div>
            <Weather/>
            <div className={"footer"}>
                <p>&copy; 2025 Weather App By Aziz Elm. All rights reserved.</p>
            </div>
        </div>
    )
}
export default App;