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
            const iconList = [
                { icon: 800, emoji: "☀" },
                { icon: 801, emoji: "🌤" },
                { icon: 802, emoji: "⛅" },
                { icon: 803, emoji: "🌥" },
                { icon: 804, emoji: "☁" },
                { icon: 600, emoji: "🌨" },
                { icon: 601, emoji: "❄" },
                { icon: 602, emoji: "❄" },
                { icon: 611, emoji: "🌨" },
                { icon: 612, emoji: "🌨" },
                { icon: 613, emoji: "🌨" },
                { icon: 615, emoji: "🌨" },
                { icon: 616, emoji: "🌨" },
                { icon: 620, emoji: "❄" },
                { icon: 621, emoji: "❄" },
                { icon: 622, emoji: "❄" },
                { icon: 701, emoji: "🌫" },
                { icon: 711, emoji: "🌫" },
                { icon: 721, emoji: "🌫" },
                { icon: 732, emoji: "🌫" },
                { icon: 741, emoji: "🌫" },
                { icon: 751, emoji: "🌫" },
                { icon: 761, emoji: "🌫" },
                { icon: 762, emoji: "🌫" },
                { icon: 771, emoji: "🌫" },
                { icon: 781, emoji: "🌪" },
                { icon: 500, emoji: "🌦" },
                { icon: 501, emoji: "🌦" },
                { icon: 502, emoji: "🌦" },
                { icon: 503, emoji: "🌦" },
                { icon: 504, emoji: "🌦" },
                { icon: 511, emoji: "❄" },
                { icon: 520, emoji: "🌧" },
                { icon: 521, emoji: "🌧" },
                { icon: 522, emoji: "🌧" },
                { icon: 300, emoji: "🌦" },
                { icon: 301, emoji: "🌧" },
                { icon: 302, emoji: "🌧" },
                { icon: 310, emoji: "🌦" },
                { icon: 311, emoji: "🌧" },
                { icon: 312, emoji: "🌧" },
                { icon: 313, emoji: "🌧" },
                { icon: 314, emoji: "🌧" },
                { icon: 321, emoji: "🌧" },
                { icon: 200, emoji: "🌩" },
                { icon: 201, emoji: "⛈" },
                { icon: 202, emoji: "⛈" },
                { icon: 210, emoji: "🌩" },
                { icon: 211, emoji: "⛈" },
                { icon: 212, emoji: "⛈" },
                { icon: 221, emoji: "⛈" },
                { icon: 230, emoji: "🌩" },
                { icon: 231, emoji: "⛈" },
                { icon: 232, emoji: "⛈" },
            ];
            const [emoji] = useState(iconList);
            //console.log(emoji.filter((e) => e.icon == id));
            return emoji.find((e) => e.icon == id)?.emoji ?? "☀";
        }
        return (
            <div className="weather">
                <span className="now-condition">
                    {moment().format("HH:DD")}
                    当前天气情况
                </span>
                <span className="position">{"📍北京" + " " + "昌平区"}</span>
                <br></br>
                <span className="temperature">{data.main.temp + "℃"}</span>
                <br></br>
                <span className="sky-condition">
                    {WeatherIcon(data.weather[0].id) +
                        data.weather[0].description}
                </span>
                <br></br>
                <span className="fly">南风: 3-4级</span>
                <span className="atmospheric-pressure">
                    大气压: {data.main.grnd_level}hpa
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
