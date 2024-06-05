"use client"
import { FaWind } from "react-icons/fa";

const WindSpeed = ({setSpeed}) => {
  return (
    <>
    <div className="flex flex-row justify-center items-center space-x-2">
            <div className="text-2xl"><FaWind/></div>
            <div className="flex flex-col justify-center items-start">
              <p className="text-xl">{setSpeed}km/h</p>
              <p className="text-sm">wind speed</p>
            </div>
          </div>
    </>
  )
}

export default WindSpeed