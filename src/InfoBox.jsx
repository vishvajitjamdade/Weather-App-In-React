// Updated InfoBox.jsx with responsive layout and CSS classes
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?cs=srgb&dl=pexels-tahir-shaw-50609-186980.jpg&fm=jpg";
    const HOT_URL = "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=";
    const COLD_URL = "https://www.oyorooms.com/travel-guide/wp-content/uploads/2022/11/unwind-amidst-snowfall-in-these-hill-stations.jpg";
    const RAIN_URL = "https://i.pinimg.com/originals/30/9f/d3/309fd342acead8f274f3fb4139afb5c4.gif";

    return (
        <div className="info-box">
            <h3 className="info-title">Weather Info</h3>
            <Card className="info-card">
                <CardMedia
                    className="info-image"
                    image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                    title="Weather image"
                />
                <CardContent className="info-content">
                    <Typography gutterBottom variant="h5" component="div" className="info-city">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" component="div" className="info-details">
                        <p>Temperature: {info.temp}&deg;C</p>
                        <p>Max Temperature: {info.tempMax}&deg;C</p>
                        <p>Min Temperature: {info.tempMin}&deg;C</p>
                        <p>Humidity: {info.humidity}%</p>
                        <p>Feels Like: {info.feelsLike}&deg;C</p>
                        <p>The weather can be described as <b>{info.weather}</b>.</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
