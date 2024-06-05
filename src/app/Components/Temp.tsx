"use client";

import { useEffect, useState } from "react";

const Temp = ({ setTemp, setCity, setWet , setFeelsLike}) => {
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
      case "Rainy":
        setImage(
          "https://e7.pngegg.com/pngimages/993/734/png-clipart-blue-clouds-with-rain-rain-computer-icons-cloud-cloud-rain-icon-miscellaneous-blue-thumbnail.png"
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
        <p className="my-1 text-sm text-gray-300">Feels like {setFeelsLike}°C</p>
      </div>
    </>
  );
};

export default Temp;
