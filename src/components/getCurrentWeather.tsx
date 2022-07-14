import { isNull } from "lodash";
import moment from "moment";
import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
function GetCurrentWeather() {
    const data = CurrentWeather();
    if (data === null) {
        const str = CurrentWeather();
        return <div>{str}</div>;
    } else {
        //console.log(data.main.temp);
        function WeatherIcon(id: number) {
            // 注释掉emoji原始设计
            // const iconList = [
            //     { icon: 800, emoji: "☀" },
            //     { icon: 801, emoji: "🌤" },
            //     { icon: 802, emoji: "⛅" },
            //     { icon: 803, emoji: "🌥" },
            //     { icon: 804, emoji: "☁" },
            //     { icon: 600, emoji: "🌨" },
            //     { icon: 601, emoji: "❄" },
            //     { icon: 602, emoji: "❄" },
            //     { icon: 611, emoji: "🌨" },
            //     { icon: 612, emoji: "🌨" },
            //     { icon: 613, emoji: "🌨" },
            //     { icon: 615, emoji: "🌨" },
            //     { icon: 616, emoji: "🌨" },
            //     { icon: 620, emoji: "❄" },
            //     { icon: 621, emoji: "❄" },
            //     { icon: 622, emoji: "❄" },
            //     { icon: 701, emoji: "🌫" },
            //     { icon: 711, emoji: "🌫" },
            //     { icon: 721, emoji: "🌫" },
            //     { icon: 732, emoji: "🌫" },
            //     { icon: 741, emoji: "🌫" },
            //     { icon: 751, emoji: "🌫" },
            //     { icon: 761, emoji: "🌫" },
            //     { icon: 762, emoji: "🌫" },
            //     { icon: 771, emoji: "🌫" },
            //     { icon: 781, emoji: "🌪" },
            //     { icon: 500, emoji: "🌦" },
            //     { icon: 501, emoji: "🌦" },
            //     { icon: 502, emoji: "🌦" },
            //     { icon: 503, emoji: "🌦" },
            //     { icon: 504, emoji: "🌦" },
            //     { icon: 511, emoji: "❄" },
            //     { icon: 520, emoji: "🌧" },
            //     { icon: 521, emoji: "🌧" },
            //     { icon: 522, emoji: "🌧" },
            //     { icon: 300, emoji: "🌦" },
            //     { icon: 301, emoji: "🌧" },
            //     { icon: 302, emoji: "🌧" },
            //     { icon: 310, emoji: "🌦" },
            //     { icon: 311, emoji: "🌧" },
            //     { icon: 312, emoji: "🌧" },
            //     { icon: 313, emoji: "🌧" },
            //     { icon: 314, emoji: "🌧" },
            //     { icon: 321, emoji: "🌧" },
            //     { icon: 200, emoji: "🌩" },
            //     { icon: 201, emoji: "⛈" },
            //     { icon: 202, emoji: "⛈" },
            //     { icon: 210, emoji: "🌩" },
            //     { icon: 211, emoji: "⛈" },
            //     { icon: 212, emoji: "⛈" },
            //     { icon: 221, emoji: "⛈" },
            //     { icon: 230, emoji: "🌩" },
            //     { icon: 231, emoji: "⛈" },
            //     { icon: 232, emoji: "⛈" },
            // ];
            const iconList = [
                { icon: 800, emoji: "qi-sunny-fill" },
                { icon: 801, emoji: "qi-few-clouds-fill" },
                { icon: 802, emoji: "qi-partly-cloudy-fill" },
                { icon: 803, emoji: "qi-cloudy-fill" },
                { icon: 804, emoji: "qi-overcast-fill" },
                { icon: 600, emoji: "qi-light-snow-fill" },
                { icon: 601, emoji: "qi-moderate-snow-fill" },
                { icon: 602, emoji: "qi-heavy-snow-fill" },
                { icon: 611, emoji: "qi-sleet-fill" },
                { icon: 612, emoji: "qi-sleet-fill" },
                { icon: 613, emoji: "qi-sleet-fill" },
                { icon: 615, emoji: "qi-rain-and-snow-fill" },
                { icon: 616, emoji: "qi-rain-and-snow-fill" },
                { icon: 620, emoji: "qi-shower-snow-fill" },
                { icon: 621, emoji: "qi-shower-snow-fill" },
                { icon: 622, emoji: "qi-shower-snow-fill" },
                { icon: 701, emoji: "qi-mist-fill" },
                { icon: 711, emoji: "qi-spring-dust" },
                { icon: 721, emoji: "qi-haze-fill" },
                { icon: 731, emoji: "qi-sand-dust" },
                { icon: 741, emoji: "qi-heavy-fog-fill" },
                { icon: 751, emoji: "qi-sand-fill" },
                { icon: 761, emoji: "qi-dust-fill" },
                { icon: 762, emoji: "qi-mudflow" },
                { icon: 771, emoji: "qi-typhoon" },
                { icon: 781, emoji: "qi-tornado" },
                { icon: 500, emoji: "qi-light-rain-fill" },
                { icon: 501, emoji: "qi-moderate-rain-fill" },
                { icon: 502, emoji: "qi-heavy-rain-fill" },
                { icon: 503, emoji: "qi-extreme-rain-fill" },
                { icon: 504, emoji: "qi-storm-fill" },
                { icon: 511, emoji: "qi-freezing-rain-fill" },
                { icon: 520, emoji: "qi-shower-rain-fill" },
                { icon: 521, emoji: "qi-heavy-shower-rain-fill" },
                { icon: 522, emoji: "qi-heavy-shower-rain-fill" },
                { icon: 300, emoji: "qi-drizzle-rain-fill" },
                { icon: 301, emoji: "qi-moderate-rain-fill" },
                { icon: 302, emoji: "qi-heavy-rain-fill" },
                { icon: 310, emoji: "qi-shower-rain-fill" },
                { icon: 311, emoji: "qi-shower-rain-fill" },
                { icon: 312, emoji: "qi-heavy-shower-rain-fill" },
                { icon: 313, emoji: "qi-heavy-shower-rain-fill" },
                { icon: 314, emoji: "qi-heavy-shower-rain-fill" },
                { icon: 321, emoji: "qi-heavy-shower-rain-fill" },
                { icon: 200, emoji: "qi-thundershower-fill" },
                { icon: 201, emoji: "qi-heavy-thunderstorm-fill" },
                { icon: 202, emoji: "qi-thunderstorm" },
                { icon: 210, emoji: "qi-thundershower-fill" },
                { icon: 211, emoji: "qi-heavy-thunderstorm-fill" },
                { icon: 212, emoji: "qi-thunderstorm" },
                { icon: 221, emoji: "qi-thunder-rain" },
                { icon: 230, emoji: "qi-thundershower-fill" },
                { icon: 231, emoji: "qi-heavy-thunderstorm-fill" },
                { icon: 232, emoji: "qi-thunder-rain" },
            ];
            const [emoji] = useState(iconList);
            //console.log(emoji.filter((e) => e.icon == id));
            return emoji.find((e) => e.icon == id)?.emoji ?? "☀";
        }
        function windDirection(deg: number) {
            if (deg < 22.5) {
                return "北风";
            } else if (deg < 47.5) {
                return "东北风";
            } else if (deg < 112.5) {
                return "东风";
            } else if (deg < 157.5) {
                return "东南风";
            } else if (deg < 202.5) {
                return "南风";
            } else if (deg < 247.5) {
                return "西南风";
            } else if (deg < 292.5) {
                return "西风";
            } else if (deg < 337.5) {
                return "西北风";
            } else {
                return "北风";
            }
        }
        return (
            <div className="weather">
                <span className="now-condition">
                    {moment().format("HH:DD")}
                    当前天气情况
                </span>
                <span className="position">{"📍北京" + " " + "昌平区"}</span>
                <br></br>
                <p className="temperature">
                    {isNull(data.main.temp)
                        ? "--"
                        : data.main.temp.toFixed(1) + "℃"}
                </p>
                <p className="sky-condition">
                    <i className={WeatherIcon(data.weather[0].id)}></i>
                    {/* {WeatherIcon(data.weather[0].id) + */}
                    {data.weather[0].description}
                </p>
                <span className="fly">
                    <i className="qi-coastal-event"></i>
                    {isNull(data.wind.deg)
                        ? "--"
                        : windDirection(data.wind.deg)}
                    : 3-4级
                </span>
                <span className="atmospheric-pressure">
                    大气压:{" "}
                    {isNull(data.main.grnd_level) ? "--" : data.main.grnd_level}
                    hpa
                </span>
                <br></br>
                <span className="humidity">
                    <i className="qi-low-humidity"></i>相对湿度:{" "}
                    {isNull(data.main.humidity) ? "--" : data.main.humidity}%
                </span>
                <span className="PM25">
                    <i className="qi-spring-dust"></i>PM2.5:61 优
                </span>
            </div>
        );
    }
}

export default GetCurrentWeather;
