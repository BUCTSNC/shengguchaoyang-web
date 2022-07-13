import Item from "antd/lib/list/Item";
import { identity, values } from "lodash";
import moment from "moment";
import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import { WeatherInfo } from "./CurrentWeather";

function GetCurrentWeather() {
    const data = CurrentWeather();
    if (data === null) {
        const str = CurrentWeather();
        return <div>{str}</div>;
    } else {
        console.log(data.main.temp);
        return (
            
            <div className="weather">
                <span className="now-condition">
                    {moment(new Date()).format("HH:DD")}当前天气情况
                </span>
                <span className="position">{"📍北京" + " " + "昌平区"}</span>
                <br></br>
                <span className="temperature">
                    { data.main.temp + "℃"}
                </span>
                <br></br>
                <span className="sky-condition">
                    {data.weather[0].description}
                </span>
                <br></br>
                <span className="fly">南风: 3-4级</span>
                <span className="atmospheric-pressure">
                    大气压: {data.main.pressure}
                </span>
                <br></br>
                <span className="humidity">
                    相对湿度: {data.main.humidity}%
                </span>
                <span className="PM25">PM2.5:61 优</span>
            </div>
           
        );
    }
}

export default GetCurrentWeather;
