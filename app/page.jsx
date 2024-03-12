"use client";
import React, { useState, useEffect } from "react";
import { BsCloudDrizzleFill, BsCloudFog2Fill, BsCloudLightningRainFill, BsCloudRainHeavyFill, BsCloudSnowFill, BsCloudSunFill, BsCloudsFill, BsCloudyFill, BsFillCloudSunFill, BsSunFill, BsWind } from "react-icons/bs";
import { MdWaves } from "react-icons/md";
import Image from "./components/Image";

function getCurrentDate() {
    const currentDate = new Date();
    const options = { month: "long" };
    const monthName = currentDate.toLocaleString("en-US", options);
    const date = new Date().getDate() + ", " + monthName;
    return date;
}

const Home = () => {
    const date = getCurrentDate();
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState("thailand");

    async function fetchData(cityName) {
        try {
            const response = await fetch(
                "https://showweatherapp.vercel.app/api/weather?address=" + cityName
            );
            const jsonData = (await response.json()).data;
            setWeatherData(jsonData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    async function fetchDataByCoordinates(latitude, longitude) {
        try {
            const response = await fetch(
                `https://showweatherapp.vercel.app/api/weather?lat=${latitude}&lon=${longitude}`
            );
            const jsonData = (await response.json()).data;
            setWeatherData(jsonData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchDataByCoordinates(latitude, longitude);
                },
                (error) => {
                    console.error("Error getting geolocation:", error);
                }
            );
        }
    }, []);

    return (
        <main className='w-[80vw] lg:w-[35vw] h-[70vh] mx-auto bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex justify-center rounded-xl lg:mt-28 mt-20'>
            <article className='mt-10 flex flex-col items-center gap-y-5 w-[80%]'>
                <form
                    className=' flex'
                    onSubmit={(e) => {
                        e.preventDefault();
                        fetchData(city);
                    }}
                >
                    <input
                        className='p-3 w-full h-8 rounded-lg focus:outline-none capitalize'
                        placeholder="Enter Location"
                        type="text"
                        id="cityName"
                        name="cityName"
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button className='ml-5 bg-white rounded-lg px-2' type="submit">
                        Seach
                    </button>
                </form>
                {weatherData && weatherData.weather && weatherData.weather[0] ? (
                    <>
                        <div className='text-center'>
                            <div className='flex flex-col item-center w-full gap-y-5 mt-5'>
                                <Image weatherData={weatherData} />

                                <div className='text-white'>
                                    {weatherData?.weather[0]?.description?.toUpperCase()}
                                </div>

                                <div className=' text-white font-semibold flex justify-center align-top gap-x-3 text-center'>
                                    <p className="text-6xl">
                                        {weatherData?.main?.temp}
                                    </p>
                                    <p className="text-xl">
                                        °C
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-x-5">
                            <div className="flex justify-center items-center gap-x-3">
                                <MdWaves size={30} fill="#fff" /><p className="text-white text-3xl">{weatherData?.main?.humidity}</p>
                            </div>
                            <div className="flex justify-center items-baseline gap-x-3 ">
                                <BsWind size={30} fill="#fff" /><p className="text-white text-3xl">{weatherData?.wind?.speed}</p><p className="text-md text-white">Km/h</p>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col gap-y-3 items-center">
                            <div className='text-white text-xl'>{weatherData?.name}</div>
                            <div className='text-white'>{date}</div>
                        </div>
                    </>
                ) : (
                    <div className='place'>Loading...</div>
                )}
            </article>
        </main>
    );
};

export default Home;