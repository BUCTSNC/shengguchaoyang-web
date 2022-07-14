import React from "react";
import MyCalendar from "./Calendar";
import { useHistory } from "react-router-dom";
import "./c-searchbox.css";
import Background from "./img/background.png";
import Circle from "./img/circle.png";
import Line from "./img/line.png";
import Search from "./search.png";
import { isMobile } from "../components/Display";
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
    return (
        <div>
            {isMobile() ? (
                <img
                    src="public\carouseImg\JXUl.png"
                    style={{
                        width: "100%",
                    }}
                ></img>
            ) : null}
        </div>
    );
}

function SearchBox() {
    const history = useHistory();
    return (
        <div>
            {isMobile() ? (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <>
                        <div
                            style={{
                                width: "50%",
                            }}
                        ></div>
                        <div
                            style={{
                                height: "49px",
                                backgroundColor: "rgba(0, 84, 255, 1)",
                                width: "50%",

                                justifyContent: "center",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <input
                                type="text"
                                onClick={() => history.push("/search")}
                                style={{
                                    width: "170px",
                                    height: "25px",
                                    backgroundColor: "#5E93FF",
                                    border: "1px solid #5E93FF",
                                    borderRadius: "16px 0px  0px 16px",
                                }}
                            ></input>
                            <button
                                style={{
                                    width: "25px",
                                    height: "25px",
                                    backgroundColor: "#5E93FF",
                                    border: "1px solid #5E93FF",
                                    borderRadius: " 0px 16px 16px 0px",
                                    backgroundImage: `url(${Search})`,
                                    backgroundSize: "16px 16px",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "1px 3.5px",
                                }}
                                onClick={() => history.push("/search")}
                            ></button>
                        </div>
                    </>
                </div>
            ) : (
                <div>
                  
                        <div
                            id="d"
                            style={{
                                backgroundImage: `url(${Background})`,
                            }}
                        >
                            <div id="inputbox">
                                <input
                                    type="text"
                                    id="input"
                                    placeholder="请输入"
                                    onClick={() => history.push("/search")}
                                ></input>
                                <button
                                    id="b"
                                    onClick={() => history.push("/search")}
                                >
                                    <img src={Circle} id="yuan"></img>
                                    <img src={Line} id="xiexian"></img>
                                </button>
                            </div>
                        </div>
                  
                </div>
            )}
        </div>
    );
}

function Timeline() {
    return null;
}
