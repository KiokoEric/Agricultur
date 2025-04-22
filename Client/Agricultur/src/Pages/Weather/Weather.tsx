import { FaEye } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { FaGauge } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { FaDroplet } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { FaTemperatureLow } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaTemperatureHigh } from "react-icons/fa";
import { FaTemperatureHalf } from "react-icons/fa6";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import Highlights from "../../Components/Common/Highlights/Highlights";
const Weather = () => {

    const [data, setData] = useState<any>([])
    const [Icon, setIcon] = useState<any>([])
    const [Error, setError] = useState<string>("")
    const [SearchError, setSearchError] = useState<string>("")
    const [Location, setLocation] = useState<string>("Nairobi")
    const [weatherData, setWeatherData] = useState<any>([])
    const [WeatherIcon, setWeatherIcon] = useState<any>([])
    const [weatherData2, setWeatherData2] = useState<any>([])
    const [WeatherIcon2, setWeatherIcon2] = useState<any>([])
    const [weatherData3, setWeatherData3] = useState<any>([])
    const [WeatherIcon3, setWeatherIcon3] = useState<any>([])
    const [weatherData4, setWeatherData4] = useState<any>([])
    const [WeatherIcon4, setWeatherIcon4] = useState<any>([])
    const [weatherData5, setWeatherData5] = useState<any>([])
    const [WeatherIcon5, setWeatherIcon5] = useState<any>([])
    const [weatherData6, setWeatherData6] = useState<any>([])
    const [WeatherIcon6, setWeatherIcon6] = useState<any>([])
    const [weatherData7, setWeatherData7] = useState<any>([])
    const [WeatherIcon7, setWeatherIcon7] = useState<any>([])

    const handleSearch = (e: any) => {
        setLocation(e.target.value)
    }

    const fetchData = async(e: any) => {
        e.preventDefault()

        if(Location === "") {
            setSearchError("Kindly enter a location.")
        } else {
            try{
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=630ec6679e5afaa746a4d818be324ae1&units=metric`)
                .then((response) => response.json())
                .then((data) => {
                    setData(data)
                    setSearchError("")
                    setIcon(data.weather[0])
                }) 
            } catch (error) {
                setSearchError("")
                setError("Location not found!")
                console.error(error);
            }
        }
    }

    useEffect(() => {

        try {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${Location}&units=metric&cnt=7&appid=630ec6679e5afaa746a4d818be324ae1`) 
            .then((response) => response.json())
            .then((Data) => {
                setWeatherData(Data.list[0])
                setWeatherIcon(Data.list[0].weather[0].icon)
                setWeatherData2(Data.list[1])
                setWeatherIcon2(Data.list[1].weather[0].icon)
                setWeatherData3(Data.list[2])
                setWeatherIcon3(Data.list[2].weather[0].icon)
                setWeatherData4(Data.list[3])
                setWeatherIcon4(Data.list[3].weather[0].icon)
                setWeatherData5(Data.list[4])
                setWeatherIcon5(Data.list[4].weather[0].icon)
                setWeatherData6(Data.list[5])
                setWeatherIcon6(Data.list[5].weather[0].icon)
                setWeatherData7(Data.list[6])
                setWeatherIcon7(Data.list[6].weather[0].icon)
            })
        } catch (error) {
            console.error(error)
        }

    }, [data])

return (
    <div className="capitalize flex flex-col gap-6 items-center justify-center">
        <article>
            <form className="border-b-2 border-black flex items-center py-0.5 rounded-sm w-96" onSubmit={fetchData}>
                <IoSearchSharp size="2rem" />
                <input type="text" name="" id="Input" placeholder='Search Location...' value={Location} onChange={handleSearch} className="border-none outline-0 w-80" />
                <button className="bg-black cursor-pointer text-lg text-white p-2 rounded-sm w-28" onClick={fetchData}>Search</button>
            </form>
            <p className='text-center text-lg text-red-700'>{SearchError}</p>
            <p className='text-center text-lg text-red-700'>{Error}</p>
        </article>
        <article className='flex flex-row gap-8'>
            <section className="mx-auto w-72" >
                <figure className="flex flex-col items-center justify-center gap-1">
                    <h2 className="font-bold text-3xl text-center" >Present</h2>
                    {data.weather ? <h3 className="font-bold text-2xl text-center">{data.weather[0].main}</h3> : null }
                    <img src={`http://openweathermap.org/img/wn/${Icon.icon}@2x.png`} /> 
                    {data.weather ? <p className="Description">{data.weather[0].description}</p> : null }
                    {data.main ? <h3 className="font-bold text-2xl text-center" >{data.main.temp} °C</h3> : null}
                    <figcaption className="flex items-center justify-center gap-1 mx-auto w-52" >
                        <FaMapLocationDot size="2rem" /> {data.main ? <h3>{data.name} </h3> : null}, {data.main ? <h3>{data.sys.country} </h3> : null}
                    </figcaption>
                </figure>
            </section> 
            <section className="flex flex-col gap-10" >
                <h2 className="capitalize font-bold text-2xl text-center">Today's Highlights</h2>
                <div className="grid grid-cols-4 gap-8 justify-center">
                    <Highlights 
                        Icon={<FaTemperatureHalf size="2.5rem" />}
                        Name='Temperature'
                        children={data.main ? <p className="font-bold text-xl" >{data.main.temp} °C</p> : null}
                    />
                    <Highlights 
                        Icon={<FaTemperatureHigh size="2.5rem" />}
                        Name='Highest Temperature'
                        children={data.main ? <p className="font-bold text-xl" >{data.main.temp_max.toFixed()} °C</p> : null}
                    />
                    <Highlights 
                        Icon={<FaTemperatureLow size="2.5rem" />}
                        Name='Lowest Temperature'
                        children={data.main ? <p className="font-bold text-xl" >{data.main.temp_min.toFixed()} °C</p> : null}
                    />
                    <Highlights 
                        Icon={<LiaTemperatureHighSolid size="2.5rem" />}
                        Name='Feels Like'
                        children={data.main ? <p className="font-bold text-xl" >{data.main.feels_like.toFixed()} °C</p> : null}
                    />
                </div>
                <div className="grid grid-cols-4 gap-8 justify-center">
                    <Highlights 
                        Icon={<FaDroplet size="2rem" />}
                        Name='Humidity'
                        children={data.main ? <p className="font-bold text-xl" >{data.main.humidity.toFixed()} %</p> : null}
                    />
                    <Highlights 
                        Icon={<FaGauge size="2rem" />}
                        Name='Pressure'
                        children={data.main ? <p className="font-bold text-xl" >{data.main.pressure.toFixed()} hPa</p> : null}
                    />
                    <Highlights 
                        Icon={<FaWind size="2rem" />}
                        Name='Pressure'
                        children={data.main ? <p className="font-bold text-xl" >{data.wind.speed.toFixed()} m/s</p> : null}
                    />
                    <Highlights 
                        Icon={<FaEye size="2rem" />}
                        Name='Visibility'
                        children={data.main ? <p className="font-bold text-xl" >{data.visibility} km</p> : null}
                    />
                </div>
            </section>
        </article>
        <article className='flex flex-col items-center justify-center gap-8'>
            <h2 className="font-bold text-2xl" >5 Days Forecast</h2>
            <section className="flex gap-3">
                {
                    (!weatherData) ?  "" :(
                        <figure className="border-2 border-black flex flex-col items-center justify-center gap-5 rounded-md h-80 w-48">
                            { weatherData.weather ? <h3 className="font-bold text-2xl" >{weatherData.weather[0].main}</h3> : null}
                            <img src={`http://openweathermap.org/img/wn/${WeatherIcon}@2x.png`} alt="" /> 
                            { weatherData.weather ? <p>{weatherData.weather[0].description}</p> : null }
                            { weatherData.main ? <h3 className="font-bold text-xl">{weatherData.main.temp} °C</h3> : null }
                            <p>{weatherData.dt_txt}</p>
                        </figure>
                    ) 
                }
                {
                    (!weatherData2) ?  "" : (
                        <figure className="border-2 border-black flex flex-col items-center justify-center gap-5 rounded-md h-80 w-48">
                            { weatherData2.weather ? <h3 className="font-bold text-2xl" >{weatherData2.weather[0].main}</h3> : null}
                            <img src={`http://openweathermap.org/img/wn/${WeatherIcon2}@2x.png`} alt="" /> 
                            { weatherData2.weather ? <p>{weatherData2.weather[0].description}</p> : null }
                            { weatherData2.main ? <h3 className="font-bold text-xl">{weatherData2.main.temp} °C</h3> : null }
                            <p>{weatherData2.dt_txt}</p>
                        </figure>
                    )
                }
                {
                    (!weatherData3) ?  "" : (
                        <figure className="border-2 border-black flex flex-col items-center justify-center gap-5 rounded-md h-80 w-48">
                            { weatherData3.weather ? <h3 className="font-bold text-2xl" >{weatherData3.weather[0].main}</h3> : null}
                            <img src={`http://openweathermap.org/img/wn/${WeatherIcon3}@2x.png`} alt="" /> 
                            { weatherData3.weather ? <p>{weatherData3.weather[0].description}</p> : null }
                            { weatherData3.main ? <h3 className="font-bold text-xl">{weatherData3.main.temp} °C</h3> : null }
                            <p>{weatherData3.dt_txt}</p>
                        </figure>
                    ) 
                }
                {
                    (!weatherData4) ?  "" : (
                        <figure className="border-2 border-black flex flex-col items-center justify-center gap-5 rounded-md h-80 w-48">
                            { weatherData4.weather ? <h3 className="font-bold text-2xl" >{weatherData4.weather[0].main}</h3> : null}
                            <img src={`http://openweathermap.org/img/wn/${WeatherIcon4}@2x.png`} alt="" /> 
                            { weatherData4.weather ? <p>{weatherData4.weather[0].description}</p> : null }
                            { weatherData4.main ? <h3 className="font-bold text-xl">{weatherData4.main.temp} °C</h3> : null }
                            <p>{weatherData4.dt_txt}</p>
                        </figure>
                    ) 
                }
                {
                    (!weatherData5) ?  "" : (
                        <figure className="border-2 border-black flex flex-col items-center justify-center gap-5 rounded-md h-80 w-48">
                            { weatherData5.weather ? <h3 className="font-bold text-2xl" >{weatherData5.weather[0].main}</h3> : null}
                            <img src={`http://openweathermap.org/img/wn/${WeatherIcon5}@2x.png`} alt="" /> 
                            { weatherData5.weather ? <p>{weatherData5.weather[0].description}</p> : null }
                            { weatherData5.main ? <h3 className="font-bold text-xl">{weatherData5.main.temp} °C</h3> : null }
                            <p>{weatherData5.dt_txt}</p>
                        </figure>
                    ) 
                }
                {
                    (!weatherData6) ?  "" : (
                        <figure className="border-2 border-black flex flex-col items-center justify-center gap-5 rounded-md h-80 w-48">
                            { weatherData6.weather ? <h3 className="font-bold text-2xl" >{weatherData6.weather[0].main}</h3> : null}
                            <img src={`http://openweathermap.org/img/wn/${WeatherIcon6}@2x.png`} alt="" /> 
                            { weatherData6.weather ? <p>{weatherData6.weather[0].description}</p> : null }
                            { weatherData6.main ? <h3 className="font-bold text-xl">{weatherData6.main.temp} °C</h3> : null }
                            <p>{weatherData6.dt_txt}</p>
                        </figure>
                    ) 
                }
                {
                    (!weatherData7) ?  "" : (
                        <figure className="border-2 border-black flex flex-col items-center justify-center gap-5 rounded-md h-80 w-48">
                            { weatherData7.weather ? <h3 className="font-bold text-2xl" >{weatherData7.weather[0].main}</h3> : null}
                            <img src={`http://openweathermap.org/img/wn/${WeatherIcon7}@2x.png`} alt="" /> 
                            { weatherData7.weather ? <p>{weatherData7.weather[0].description}</p> : null }
                            { weatherData7.main ? <h3 className="font-bold text-xl">{weatherData7.main.temp} °C</h3> : null }
                            <p>{weatherData7.dt_txt}</p>
                        </figure>
                    ) 
                }
            </section> 
        </article>
        </div>
)
}

export default Weather