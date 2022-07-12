import Calendar from "react-calendar";
import "./Calendar.css";
import React, { useState } from "react";
import moment from "moment";

// 天气api doc https://openweathermap.org/current
//返回昌平区json
// https://api.openweathermap.org/data/2.5/weather?lat=40.22&lon=116.23&appid=f1f7c3b827c8a53c5d6b7ab5ccc36123&units=metric&lang=zh_cn
//返回昌平区html
//https://api.openweathermap.org/data/2.5/weather?lat=40.22&lon=116.23&appid=f1f7c3b827c8a53c5d6b7ab5ccc36123&units=metric&lang=zh_cn&mode=html
// 返回样例
// {
//     "coord": {
//         "lon": 116.23,
//         "lat": 40.22
//     },
//     "weather": [
//         {
//             "id": 804,
//             "main": "Clouds",
//             "description": "阴，多云",
//             "icon": "04d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 20.81,
//         "feels_like": 20.59,
//         "temp_min": 20.81,
//         "temp_max": 20.81,
//         "pressure": 1005,
//         "humidity": 63,
//         "sea_level": 1005,
//         "grnd_level": 997
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 1.65,
//         "deg": 325,
//         "gust": 2.61
//     },
//     "clouds": {
//         "all": 86
//     },
//     "dt": 1657590206,
//     "sys": {
//         "type": 1,
//         "id": 9609,
//         "country": "CN",
//         "sunrise": 1657572925,
//         "sunset": 1657626327
//     },
//     "timezone": 28800,
//     "id": 2038154,
//     "name": "Changping",
//     "cod": 200
// }
export default function MyCalendar() {
    const [value, onChange] = useState(new Date());
    return (
        <>
            <span className="studytime">
                <span className="semester">第3学期</span>
                <br></br>
                <span className="week">第1教学周</span>
                <br></br>
                {/* <span className="timespan">
                    <span className="left-Booktitle"> &lt&lt </span>
                    <span className="datatime">2022年7月1日</span>
                    <span className="right-Booktitle">{"<<"};</span>
                </span> */}
            </span>
            <div className="cldflame">
                <Calendar
                    onChange={onChange}
                    value={value}
                    calendarType={"US"}
                    defaultView={"month"}
                    formatDay={(locale, date) => moment(date).format("DD")}
                    prevLabel={"<<"}
                    prev2Label={null}
                    nextLabel={">>"}
                    next2Label={null}
                    navigationLabel={({}) =>
                        ` ${moment().format("YYYY年M月D日")}`
                    }
                    minDetail={"month"}
                    onClickDay={undefined}
                />
            </div>
        </>
    );
}
