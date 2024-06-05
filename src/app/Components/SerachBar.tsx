"use client"
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
type Props = {
  setNewCity: Function
};
const SerachBar = ({setNewCity} : Props) => {
  const [currentCity, setCurrentCity] = useState("")
  const handleCity = () => {
    //console.log(currentCity);
    setNewCity(currentCity);
    setCurrentCity("");
  }
  return (
    <>
    <div className="flex flex-row justify-center items-center space-x-4 my-5">
          <input
            type="text"
            className="rounded-xl py-1 px-2 text-black"
            placeholder="search city"
            value={currentCity}
            onChange={(e) => setCurrentCity(e.target.value)}
          />
          <button className="bg-white text-blue-800 p-2 rounded-full"
          onClick={handleCity}
          >
            <IoIosSearch />
          </button>
        </div>
    </>
  )
}

export default SerachBar