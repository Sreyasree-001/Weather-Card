"use client";

import { useEffect, useState } from "react";
import SerachBar from "./SerachBar";
import Temp from "./Temp";
import Humidity from "./Humidity";
import WindSpeed from "./WindSpeed";

const Card = () => {
  const [temp, setTemp] = useState("24");
  const [city, setCity] = useState("germany");
  const [windSpeed, setWindSpeed] = useState("15");
  const [humidity, setHumidity] = useState("44");
  const [weather, setWeather] = useState("");
  const [feelsLike, setFeels] = useState("");

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const handleClick = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(url);
      var data = await response.json();
      console.log(data);

      setTemp(data.main.temp);
      setCity(data.name);
      setWindSpeed(data.wind.speed);
      setHumidity(data.main.humidity);
      setWeather(data.weather[0].main);
      setFeels(data.main.feels_like);
    } catch (err) {
      console.error(err);
    }
    console.log(city);
  };

  useEffect(() => {
    handleClick();
  }, [city]);

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-900 to-emerald-900 h-auto p-5 my-5 rounded-xl  shadow-xl shadow-gray-900 ">
        <SerachBar setNewCity={setCity} />
        <Temp setTemp={temp} setCity={city} setWet={weather} setFeelsLike={feelsLike}/>
        <div className="flex flex-row justify-between mt-10">
          <Humidity setHumid={humidity} />
          <WindSpeed setSpeed={windSpeed} />
        </div>
      </div>
    </>
  );
};

export default Card;
