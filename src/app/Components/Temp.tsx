"use client";

import { useEffect, useState } from "react";

const Temp = ({ setTemp , setCity, setWet, setFeelsLike } : {setTemp : string, setWet: string, setCity : string, setFeelsLike: string}) => {
  const [image, setImage] = useState(
    "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
  );
  const handleImageChange = () => {
    switch (setWet) {
      case "Clouds":
        setImage("https://cdn-icons-png.flaticon.com/512/4834/4834559.png");
        break;
      case "Haze":
        setImage("https://cdn-icons-png.flaticon.com/512/1779/1779807.png");
        break;
      case "Smoke":
        setImage("https://cdn-icons-png.flaticon.com/512/11717/11717603.png");
        break;
      case "Hot":
        setImage(
          "https://i.pinimg.com/originals/ff/62/bc/ff62bc8c5d462d51b4a8c77bac7b59f7.png"
        );
        break;
      case "Stormy":
        setImage(
          "https://w7.pngwing.com/pngs/309/443/png-transparent-weather-storm-lightning-computer-icons-weather-architect-storm-weather-icon.png"
        );
        break;
      case "Rain":
        setImage(
          "https://images.vexels.me/media/users/3/240046/isolated/preview/e058ed79743e6e59bf6e17a2a9a485b4-raining-clouds-weather.png"
        );
        break;
      case "Clear":
        setImage(
          "https://static-00.iconduck.com/assets.00/weather-clear-symbolic-icon-2048x2048-v4afvu7m.png"
        );
        break;
      case "Snow":
        setImage(
          "https://www.pikpng.com/pngl/m/22-225310_snowfall-png-pic-snowy-weather-clip-art-transparent.png"
        );
        break;
      default:
        setImage(
          "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
        );
    }
  };
  useEffect(() => {
    handleImageChange();
  }, [setWet]);
  return (
    <>
      <div className="flex flex-col justify-center items-center my-12">
        <img src={image} alt="image" className="w-24 h-24 mb-3" />
        <p className="text-sm text-slate-300">{setWet}</p>
        <p className="text-3xl font-bold">{setTemp}°C</p>
        <p className="text-xl text-white">{setCity}</p>
        <p className="my-1 text-sm text-gray-300">
          Feels like {setFeelsLike}°C
        </p>
      </div>
    </>
  );
};

export default Temp;
