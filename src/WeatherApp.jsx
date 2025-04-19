import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 31.94,
    humidity: 14,
    temp: 34.4,
    tempMax: 34.4,
    tempMin: 34.4,
    weather: "clear sky",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="weather-app fade-in">
      <h1 className="app-title slide-in-top">🌦️ Weather App</h1>
      <div className="weather-container slide-in-bottom">
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
    </div>
  );
}
