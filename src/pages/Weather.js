import { data } from "autoprefixer";
import React,{useState, useEffect} from "react";


function Weather(){



    

    const [temp,setTemp] = useState();


async function getForeCast(){
    // alert("get forecast called");
    const response = await fetch("https://cors-anywhere.herokuapp.com/http://api.weatherapi.com/v1/current.json?key=3e363268548543d7a74173838220603&q=chennai&aqi=no");
    var data = await response.json();

    setTemp(data.current.temp_c)
        
    
    console.log(data);
    console.log(temp);
    // alert(`The temperature in chennai is ${temp} celsius`);

    }
    
    return(
        <div id="Weather" className="h-screen box-border mx-auto">
            <div>
        <br/>
        <h1 className="container font-mono text-gray-700 text-5xl mx-auto text-center font-bold">Welcome to Weather App :)</h1>
        <div className="container mx-auto w-1/2 text-center">
        <br/><br/><br/>
     <button className="container font-mono py-2 px-4 shadow-md no-underline rounded-full bg-white text-orange font-semibold text-sm border-red btn-primary hover:text-orange hover:bg-red-light focus:outline-none active:shadow-none w-1/2 mx-auto" onClick={getForeCast}>Get Chennai Weather</button>
     </div>
     <h3 className="container font-mono text-gray-700 text-m mx-auto text-center"><br/><br/>Click on the above button to fetch the real-time weather data for chennai via API and display it below.</h3><br/><br/>
     {/* <p className="pl-10 mx-auto text-center"><br/><br/><br/>TODO: To make a component which fetches weather data with api and returns to DOM</p> */}
    {temp!=null && 
    <h1 className="container font-mono text-gray-700 text-3xl mx-auto text-center">The Weather in Chennai is <span className="font-bold text-orange-600">{temp}°</span> Celsius.</h1>
    }
    <br/><br/><br/>
    <h3 className="container font-mono text-gray-700 text-m mx-auto text-center"><br/><br/>Adding more functionalities soon...</h3><br/><br/>
    </div>
    </div>

    );

    // sample response
    // {
    //     "location": {
    //         "name": "Chennai",
    //         "region": "Tamil Nadu",
    //         "country": "India",
    //         "lat": 13.08,
    //         "lon": 80.28,
    //         "tz_id": "Asia/Kolkata",
    //         "localtime_epoch": 1646590463,
    //         "localtime": "2022-03-06 23:44"
    //     },
    //     "current": {
    //         "temp_c": 28,
    //         "temp_f": 82.4,
    //         "condition": {
    //             "text": "Mist",
    //             "icon": "//cdn.weatherapi.com/weather/64x64/night/143.png",
    //             "code": 1030
    //         },
    //         "uv": 1
    //     }
    // }

    


}


export default Weather;