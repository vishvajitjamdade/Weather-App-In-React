import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e9bb0dbf584a19b2818f3673f8821bb1";

    const getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonresponse = await response.json();

        try {
            let result = {
                city: city,
                temp: jsonresponse.main.temp,
                tempMax: jsonresponse.main.temp_max,
                tempMin: jsonresponse.main.temp_min,
                humidity: jsonresponse.main.humidity,
                feelsLike: jsonresponse.main.feels_like,
                weather: jsonresponse.weather[0].description
            };
            setError(false); // reset error on successful fetch
            return result;
        } catch (err) {
            throw err;
        }
    };

    const handleInputChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className="search-box">
            <h3 className="search-title">Search Weather</h3>
            <form onSubmit={handleSubmit} className="search-form">
                <TextField
                    id="city"
                    label="Enter city"
                    variant="outlined"
                    value={city}
                    required
                    onChange={handleInputChange}
                    className="search-input"
                />
                <Button variant="contained" size="large" type="submit" className="search-btn">
                    Search
                </Button>
                {error && <p className="error-msg">No such place found in our API</p>}
            </form>
        </div>
    );
}
