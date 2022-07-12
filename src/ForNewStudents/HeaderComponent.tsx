import React from "react";
import MyCalendar from "./Calendar";

export default function HeaderComponent() {
    return (
        <div id="new-students-header">
            <HeaderImage />
            <SearchBox />
            <Timeline />
            <MyCalendar />
        </div>
    );
}

function HeaderImage() {
    return null;
}

function SearchBox() {
    return null;
}

function Timeline() {
    return null;
}
