"use client"
import { LuWaves } from "react-icons/lu";

const Humidity = ({setHumid}) => {
  return (
    <>
    <div className="flex flex-row justify-center items-center space-x-2">
            <div className="text-2xl"><LuWaves /></div>
            <div className="flex flex-col justify-center items-start">
              <p className="text-xl">{setHumid}%</p>
              <p className="text-sm">humidity</p>
            </div>
          </div>
    </>
  )
}

export default Humidity