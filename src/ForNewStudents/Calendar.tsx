import Calendar from "react-calendar";
import "./Calendar.css";
import React, { useState } from "react";
import moment from "moment";

export default function MyCalendar() {
    const [value, onChange] = useState(new Date());
    return (
        <div className="cldflame">
            <Calendar
                onChange={onChange}
                value={value}
                calendarType={"US"}
                defaultView={"month"}
                formatDay={(locale, date) => moment(date).format("DD")}
            />
        </div>
    );
}
