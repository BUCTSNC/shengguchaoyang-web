import React, { useEffect } from "react";
import HeaderComponent from "./HeaderComponent";
import InfoStream from "./InfoStream";
import "./index.css";

export default function ForNewStudents() {
    useEffect(() => {
        document.title = "我是新生 - 胜古朝阳";
    }, []);
    return (
        <div id="for-new-students">
            <HeaderComponent />
            <InfoStream />
        </div>
    );
}
