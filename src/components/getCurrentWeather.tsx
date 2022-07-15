import { isNull } from "lodash";
import moment from "moment";
import React, { useEffect, useState } from "react";
import CurrentWeather, { CurrentAirQualityInfo } from "./CurrentWeather";
import { Spin } from "antd";

export function useSmall(): boolean {
    const [size, setSize] = useState(window.innerWidth);
    useEffect(() => {
        const handler = () => setSize(window.innerWidth)
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler)
    });
    return size <= 1150;
}

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
function aqiLevel(aqi: number) {
    if (aqi === 1) {
        return "优";
    } else if (aqi === 2) {
        return "良";
    } else if (aqi === 3) {
        return "轻度污染";
    } else if (aqi === 4) {
        return "中度污染";
    } else if (aqi === 5) {
        return "重度污染";
    } else return null;
}
function beaufortScale(wind: number) {
    // wind 单位为m/s
    if (wind < 0.2) {
        return 0;
    } else if (wind < 1.5) {
        return 1;
    } else if (wind < 3.3) {
        return 2;
    } else if (wind < 5.4) {
        return 3;
    } else if (wind < 7.9) {
        return 4;
    } else if (wind < 10.7) {
        return 5;
    } else if (wind < 13.8) {
        return 6;
    } else if (wind < 17.1) {
        return 7;
    } else if (wind < 20.7) {
        return 8;
    } else if (wind < 24.4) {
        return 9;
    } else if (wind < 28.4) {
        return 10;
    } else if (wind < 32.6) {
        return 11;
    } else if (wind < 36.9) {
        return 12;
    } else if (wind < 41.4) {
        return 13;
    } else if (wind < 46.1) {
        return 14;
    } else if (wind < 50.9) {
        return 15;
    } else if (wind < 56.0) {
        return 16;
    } else if (wind < 61.2) {
        return 17;
    } else {
        return null;
    }
}

function GetCurrentWeather() {
    const data = CurrentWeather();
    const aqidata = CurrentAirQualityInfo();
    const small = useSmall();
    if (data === null) {
        const str = CurrentWeather();
        return <div>{str}</div>;
    } else {
        if (small) {
            return (
                <div className="small-weather">
                    <Spin spinning={isNull(data.cod)} size="large">
                        <span className="now-condition">
                            {moment().format("HH:DD")}
                            当前天气情况
                        </span>
                        <span className="position">
                            <svg
                                textAnchor="1657816576903"
                                className="icon"
                                viewBox="0 -90 1024 1024"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                p-id="2617"
                                width="1.1em"
                                height="1.2em"
                            >
                                <path
                                    d="M501.8 880.8c-8.1 0-15.4-5-18.2-12.6l-61.3-162.9c-7.5-19.9-22.3-35.7-40.5-43.4-120.6-50.4-197.3-172-190.9-302.5 7.7-158.2 137.8-287.9 296-295.4 178.9-8.2 326.3 134.4 326.3 311 0 125.4-74.8 237.9-190.5 286.6-18.8 7.9-34.1 24.5-42 45.5l-60.7 161c-2.9 7.6-10.1 12.7-18.2 12.7z m0-778.3c-4.4 0-8.7 0.1-13.1 0.3-138.4 6.5-252.1 120-258.9 258.4-5.6 114.2 61.6 220.7 167 264.8 28.1 11.7 50.7 35.6 61.9 65.6L501.8 806l42.4-112.7c11.6-30.9 34.7-55.6 63.3-67.6C708.7 583 774.2 484.6 774.2 374.9c0-150.2-122.2-272.4-272.4-272.4z"
                                    fill="#efefef"
                                    p-id="2618"
                                ></path>
                                <path
                                    d="M501.8 530.6c-85.8 0-155.7-69.8-155.7-155.7S416 219.2 501.8 219.2c85.8 0 155.6 69.8 155.6 155.7s-69.8 155.7-155.6 155.7z m0-272.4c-64.4 0-116.7 52.4-116.7 116.7s52.4 116.7 116.7 116.7c64.4 0 116.7-52.4 116.7-116.7s-52.4-116.7-116.7-116.7zM501.8 958.6c-137.3 0-369.7-20.5-369.7-97.3 0-61.3 145.1-84.5 231.6-92.9 10.8-1.1 20.2 6.8 21.2 17.5 1.1 10.7-6.8 20.2-17.5 21.3C224.8 821 173.5 852 170.9 861.7c5.8 19.8 124.5 58.1 330.8 58.1s325-38.2 330.8-58.7c-3.3-10.9-60-40.5-207.4-53-10.7-0.9-18.6-10.3-17.7-21.1 0.9-10.7 10.1-18.8 21-17.7 90.7 7.7 242.9 29.9 242.9 92.1 0.1 76.7-232.2 97.2-369.5 97.2z"
                                    fill="#efefef"
                                    p-id="2619"
                                ></path>
                            </svg>
                            {"北京" + " " + "昌平区"}
                        </span>
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
                            :{" "}
                            {isNull(data.wind.speed)
                                ? "-"
                                : beaufortScale(data.wind.speed)}
                            -
                            {isNull(data.wind.gust)
                                ? ""
                                : beaufortScale(data.wind.gust)}
                            级
                        </span>
                        <span className="atmospheric-pressure">
                            <svg
                                textAnchor="1657817077969"
                                className="icon"
                                viewBox="200 -100 972 972"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                p-id="3081"
                                width="1.2em"
                                height="1.2em"
                            >
                                <path
                                    d="M470.29427317 586.87598978a35.08766599 35.08766599 0 0 1-35.08766599-35.08766596V230.92258155a35.08766599 35.08766599 0 0 1 70.17533257 0V551.78832382a35.08766599 35.08766599 0 0 1-35.08766659 35.08766597zM610.67783243 665.02280113a35.08766599 35.08766599 0 0 1-35.08766598-35.087666V299.21195178a35.08766599 35.08766599 0 0 1 70.17533255 0v330.72318335a35.08766599 35.08766599 0 0 1-35.08766658 35.08766599zM751.05042698 586.47028857a35.08766599 35.08766599 0 0 1-35.08766599-35.08766597V230.57170512a35.08766599 35.08766599 0 1 1 70.17533197 1e-8v320.81091747a35.08766599 35.08766599 0 0 1-35.08766598 35.08766598z"
                                    p-id="3082"
                                    fill="#efefef"
                                ></path>
                                <path
                                    d="M841.12704497 675.61489043a124.9998108 124.9998108 0 0 1-124.87919708-124.86823175 35.08766599 35.08766599 0 0 1 70.17533254 1e-8 54.70386453 54.70386453 0 1 0 109.39676435 0 35.08766599 35.08766599 0 0 1 70.17533196 0 124.9998108 124.9998108 0 0 1-124.86823176 124.86823174zM380.51370737 675.61489043A124.9998108 124.9998108 0 0 1 255.6345109 550.74665868a35.08766599 35.08766599 0 0 1 70.17533195 0 54.70386453 54.70386453 0 1 0 109.39676434 0 35.08766599 35.08766599 0 0 1 70.17533256 0 124.9998108 124.9998108 0 0 1-124.86823238 124.86823175zM961.62028352 806.46995556H258.04678756a35.08766599 35.08766599 0 0 1 0-70.17533255h703.57349595a35.08766599 35.08766599 0 0 1 0 70.17533255z"
                                    p-id="3083"
                                    fill="#efefef"
                                ></path>
                            </svg>
                            气压:{" "}
                            {isNull(data.main.grnd_level)
                                ? "--"
                                : data.main.grnd_level}
                            hpa
                        </span>
                        <br></br>
                        <span className="humidity">
                            <i className="qi-low-humidity"></i>相对湿度:{" "}
                            {isNull(data.main.humidity)
                                ? "--"
                                : data.main.humidity}
                            %
                        </span>
                        <span className="PM25">
                            <i className="qi-spring-dust"></i>PM2.5{": "}
                            {isNull(aqidata.list[0].components.pm2_5)
                                ? "--"
                                : aqidata.list[0].components.pm2_5.toFixed(
                                      0
                                  )}{" "}
                            {isNull(aqidata.list[0].main.aqi)
                                ? "--"
                                : aqiLevel(aqidata.list[0].main.aqi)}
                        </span>
                    </Spin>
                </div>
            );
        } else {
            return (
                <div className="weather">
                    <Spin spinning={isNull(data.cod)} size="large">
                        <span className="now-condition">
                            {moment().format("HH:DD")}
                            当前天气情况
                        </span>
                        <span className="position">
                            <svg
                                textAnchor="1657816576903"
                                className="icon"
                                viewBox="0 -90 1024 1024"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                p-id="2617"
                                width="1.1em"
                                height="1.2em"
                            >
                                <path
                                    d="M501.8 880.8c-8.1 0-15.4-5-18.2-12.6l-61.3-162.9c-7.5-19.9-22.3-35.7-40.5-43.4-120.6-50.4-197.3-172-190.9-302.5 7.7-158.2 137.8-287.9 296-295.4 178.9-8.2 326.3 134.4 326.3 311 0 125.4-74.8 237.9-190.5 286.6-18.8 7.9-34.1 24.5-42 45.5l-60.7 161c-2.9 7.6-10.1 12.7-18.2 12.7z m0-778.3c-4.4 0-8.7 0.1-13.1 0.3-138.4 6.5-252.1 120-258.9 258.4-5.6 114.2 61.6 220.7 167 264.8 28.1 11.7 50.7 35.6 61.9 65.6L501.8 806l42.4-112.7c11.6-30.9 34.7-55.6 63.3-67.6C708.7 583 774.2 484.6 774.2 374.9c0-150.2-122.2-272.4-272.4-272.4z"
                                    fill="#efefef"
                                    p-id="2618"
                                ></path>
                                <path
                                    d="M501.8 530.6c-85.8 0-155.7-69.8-155.7-155.7S416 219.2 501.8 219.2c85.8 0 155.6 69.8 155.6 155.7s-69.8 155.7-155.6 155.7z m0-272.4c-64.4 0-116.7 52.4-116.7 116.7s52.4 116.7 116.7 116.7c64.4 0 116.7-52.4 116.7-116.7s-52.4-116.7-116.7-116.7zM501.8 958.6c-137.3 0-369.7-20.5-369.7-97.3 0-61.3 145.1-84.5 231.6-92.9 10.8-1.1 20.2 6.8 21.2 17.5 1.1 10.7-6.8 20.2-17.5 21.3C224.8 821 173.5 852 170.9 861.7c5.8 19.8 124.5 58.1 330.8 58.1s325-38.2 330.8-58.7c-3.3-10.9-60-40.5-207.4-53-10.7-0.9-18.6-10.3-17.7-21.1 0.9-10.7 10.1-18.8 21-17.7 90.7 7.7 242.9 29.9 242.9 92.1 0.1 76.7-232.2 97.2-369.5 97.2z"
                                    fill="#efefef"
                                    p-id="2619"
                                ></path>
                            </svg>
                            {"北京" + " " + "昌平区"}
                        </span>
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
                            :{" "}
                            {isNull(data.wind.speed)
                                ? "-"
                                : beaufortScale(data.wind.speed)}
                            -
                            {isNull(data.wind.gust)
                                ? ""
                                : beaufortScale(data.wind.gust)}
                            级
                        </span>
                        <span className="atmospheric-pressure">
                            <svg
                                textAnchor="1657817077969"
                                className="icon"
                                viewBox="200 -100 972 972"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                p-id="3081"
                                width="1.2em"
                                height="1.2em"
                            >
                                <path
                                    d="M470.29427317 586.87598978a35.08766599 35.08766599 0 0 1-35.08766599-35.08766596V230.92258155a35.08766599 35.08766599 0 0 1 70.17533257 0V551.78832382a35.08766599 35.08766599 0 0 1-35.08766659 35.08766597zM610.67783243 665.02280113a35.08766599 35.08766599 0 0 1-35.08766598-35.087666V299.21195178a35.08766599 35.08766599 0 0 1 70.17533255 0v330.72318335a35.08766599 35.08766599 0 0 1-35.08766658 35.08766599zM751.05042698 586.47028857a35.08766599 35.08766599 0 0 1-35.08766599-35.08766597V230.57170512a35.08766599 35.08766599 0 1 1 70.17533197 1e-8v320.81091747a35.08766599 35.08766599 0 0 1-35.08766598 35.08766598z"
                                    p-id="3082"
                                    fill="#efefef"
                                ></path>
                                <path
                                    d="M841.12704497 675.61489043a124.9998108 124.9998108 0 0 1-124.87919708-124.86823175 35.08766599 35.08766599 0 0 1 70.17533254 1e-8 54.70386453 54.70386453 0 1 0 109.39676435 0 35.08766599 35.08766599 0 0 1 70.17533196 0 124.9998108 124.9998108 0 0 1-124.86823176 124.86823174zM380.51370737 675.61489043A124.9998108 124.9998108 0 0 1 255.6345109 550.74665868a35.08766599 35.08766599 0 0 1 70.17533195 0 54.70386453 54.70386453 0 1 0 109.39676434 0 35.08766599 35.08766599 0 0 1 70.17533256 0 124.9998108 124.9998108 0 0 1-124.86823238 124.86823175zM961.62028352 806.46995556H258.04678756a35.08766599 35.08766599 0 0 1 0-70.17533255h703.57349595a35.08766599 35.08766599 0 0 1 0 70.17533255z"
                                    p-id="3083"
                                    fill="#efefef"
                                ></path>
                            </svg>
                            气压:{" "}
                            {isNull(data.main.grnd_level)
                                ? "--"
                                : data.main.grnd_level}
                            hpa
                        </span>
                        <br></br>
                        <span className="humidity">
                            <i className="qi-low-humidity"></i>相对湿度:{" "}
                            {isNull(data.main.humidity)
                                ? "--"
                                : data.main.humidity}
                            %
                        </span>
                        <span className="PM25">
                            <i className="qi-spring-dust"></i>PM2.5{": "}
                            {isNull(aqidata.list[0].components.pm2_5)
                                ? "--"
                                : aqidata.list[0].components.pm2_5.toFixed(
                                      0
                                  )}{" "}
                            {isNull(aqidata.list[0].main.aqi)
                                ? "--"
                                : aqiLevel(aqidata.list[0].main.aqi)}
                        </span>
                    </Spin>
                </div>
            );
        }
    }
}

export default GetCurrentWeather;
