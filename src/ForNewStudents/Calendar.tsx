import Calendar from "react-calendar";
import "./Calendar.css";
import React, { useState } from "react";
import moment from "moment";
import GetCurrentWeather from "../components/getCurrentWeather";

// 天气api doc https://openweathermap.org/current
//返回昌平区json
// https://api.openweathermap.org/data/2.5/weather?lat=40.22&lon=116.23&appid=f1f7c3b827c8a53c5d6b7ab5ccc36123&units=metric&lang=zh_cn
//返回昌平区html
//https://api.openweathermap.org/data/2.5/weather?lat=40.22&lon=116.23&appid=f1f7c3b827c8a53c5d6b7ab5ccc36123&units=metric&lang=zh_cn&mode=html

export default function MyCalendar() {
    const [value, onChange] = useState(new Date());
    const theFirstDayOfSchool = moment("20220701", "YYYYMMDD");
    //手动设置学期起点
    console.log(moment().diff(moment("20220701", "YYYYMMDD"), "weeks"));
    return (
        <>
            <div className="underside">
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/qweather-icons@1.1.1/font/qweather-icons.css"
                ></link>
                <GetCurrentWeather />
                <div className="studytime1">
                    <span className="studytime">
                        <span className="semester">第3学期</span>
                        <br></br>
                        <span className="week">
                            第{moment().diff(theFirstDayOfSchool, "weeks") + 1}
                            教学周
                        </span>
                        <br></br>
                        {/* <span className="timespan">
                    <span className="left-Booktitle"> &lt&lt </span>
                    <span className="datatime">2022年7月1日</span>
                    <span className="right-Booktitle">{"<<"};</span>
                </span> */}
                    </span>
                </div>
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
                        navigationLabel={() =>
                            ` ${moment().format("YYYY年M月D日")}`
                        }
                        minDetail={"month"}
                        onClickDay={undefined}
                    />
                </div>
            </div>
        </>
    );
}
