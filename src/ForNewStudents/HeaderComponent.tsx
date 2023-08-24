//import React from "react";
//import MyCalendar from "./Calendar";
import { isNull } from "lodash";
import moment from "moment";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CurrentWeather from "../components/CurrentWeather";
import { isMobile, useMobileView } from "../components/Display";
import "./c-searchbox.css";
import MyCalendar, { theFirstDayOfSchool } from "./Calendar";
import "./Calendar.css";
import Background from "./img/background.png";
import Circle from "./img/circle.png";
import Line from "./img/line.png";
import Search from "./search.png";
export default function HeaderComponent() {
    const isMobileView = useMobileView();
    return (
        <div id="new-students-header">
            <HeaderImage />
            <SearchBox />
            {isMobileView ? (
                <Timeline />
            ) : (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "16px 64px",
                    }}
                >
                    <Timeline />
                    <MyCalendar />
                </div>
            )}
        </div>
    );
}

function HeaderImage() {
    return (
        <div>
            {isMobile() ? (
                <img
                    src={Background}
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
    const isMobile = useMobileView();
    const [collapse, setCollapse] = useState(true);
    return (
        <div>
            {isMobile ? (
                <>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >
                        <div
                            style={{
                                width: "50%",
                            }}
                            onClick={() => setCollapse(!collapse)}
                        >
                            <WeatherMobile />
                        </div>
                        <div
                            onClick={() => history.push("/search")}
                            style={{
                                height: "49px",
                                backgroundColor: "rgba(0, 84, 255, 1)",
                                width: "50%",
                                justifyContent: "center",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <div
                                style={{
                                    // height: 16,
                                    borderRadius: 16,
                                    // margin: 4,
                                    backgroundColor: "rgba(255,255,255,0.4)",
                                    height: 32,
                                    width: "90%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "0 8px",
                                }}
                            >
                                <i>点击此处搜索</i>
                                <div
                                    style={{
                                        backgroundImage: `url(${Search})`,
                                        backgroundSize: "16px 16px",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        height: 32,
                                        width: 32,
                                    }}
                                ></div>
                            </div>
                            {/* <input
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
                            ></button> */}
                        </div>
                    </div>
                    <div
                        style={
                            collapse
                                ? {
                                      maxHeight: 0,
                                      overflow: "hidden",
                                  }
                                : {
                                      maxHeight: window.innerHeight,
                                  }
                        }
                    >
                        <MyCalendar />
                    </div>
                </>
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

function WeatherMobile() {
    const data = CurrentWeather();
    return (
        <div className="mobile-info">
            {/* <div className="phoneweather"> */}
            <div className="phonedate">{moment().format("YYYY/M/D")}</div>

            <div className="phonestudy">
                第 {moment().diff(theFirstDayOfSchool, "weeks") + 1} 教学周
            </div>

            {/* <div className="phone-p"> */}
            <div className="phone-place">
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
                {"北京" + " " + " " + "昌平区"}
            </div>
            <div className="phone-sky-condition">
                {/**{emoji.find((e) => e.icon == data.weather[0].id)?.emoji ?? "☀"}**/}
                {data.weather[0].description}
                {isNull(data.main.temp)
                    ? "--"
                    : data.main.temp.toFixed(1) + "℃"}
            </div>
            {/* <div className="phone-temperature"></div> */}
            {/* </div> */}
            {/* </div> */}
        </div>
    );
}

function Timeline() {
    const data: { date: Date; title: string; info: string }[] = [
        {
            date: new Date("2022-08-29"),
            title: "报道",
            info: "你需要了解的报道信息都在这里",
        },
        {
            date: new Date("2022-08-30"),
            title: "开学典礼",
            info: "时间：9:00，地点：体育馆",
        },
        {
            date: new Date("2022-09-01"),
            title: "入学教育",
            info: "时间：9:00，地点：体育馆",
        },
        {
            date: new Date("2022-09-03"),
            title: "体检",
            info: "时间：9:00，地点：体育馆",
        },
        {
            date: new Date("2022-09-12"),
            title: "军训",
            info: "时间：9:00，地点：体育馆",
        },
    ]
        .filter((val) => {
            return (
                new Date().getTime() - val.date.getTime() <= 24 * 60 * 60 * 1000
            );
        })
        .slice(0, 5);
    const isMobile = useMobileView();
    return isMobile ? (
        <TimeLineMobile data={data} />
    ) : (
        <TimelinePC data={data} />
    );
}

function TimelinePC(props: {
    data: { date: Date; title: string; info: string }[];
}) {
    const { data } = props;
    return (
        <div
            style={{
                padding: 16,
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(10, 1fr)",
                    gap: 8,
                    borderBottom: "2px solid #0054ff",
                    paddingBottom: 14,
                    minHeight: 192,
                }}
            >
                <div
                    style={{
                        gridColumn: "1/3",
                    }}
                >
                    {/* <TimeLineCard {...data[1]} /> */}
                    <div style={{ height: "100%" }}></div>
                    <div
                        style={{
                            height: "8px",
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundColor: "#0054ff",
                            width: "16px",
                            height: "16px",
                            borderRadius: "8px",
                            margin: "auto",
                        }}
                    ></div>
                </div>
                <div
                    style={{
                        gridColumn: "3/5",
                    }}
                >
                    <TimeLineCard {...data[1]} />
                    <div
                        style={{
                            height: "8px",
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundColor: "#0054ff",
                            width: "16px",
                            height: "16px",
                            borderRadius: "8px",
                            margin: "auto",
                        }}
                    ></div>
                </div>
                <div
                    style={{
                        gridColumn: "5/7",
                    }}
                >
                    {/* <TimeLineCard {...data[1]} /> */}
                    <div style={{ height: "100%" }}></div>
                    <div
                        style={{
                            height: "8px",
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundColor: "#0054ff",
                            width: "16px",
                            height: "16px",
                            borderRadius: "8px",
                            margin: "auto",
                        }}
                    ></div>
                </div>
                <div
                    style={{
                        gridColumn: "7/9",
                    }}
                >
                    <TimeLineCard {...data[3]} />
                    <div
                        style={{
                            height: "8px",
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundColor: "#0054ff",
                            width: "16px",
                            height: "16px",
                            borderRadius: "8px",
                            margin: "auto",
                        }}
                    ></div>
                </div>
                <div
                    style={{
                        gridColumn: "9/11",
                    }}
                >
                    {/* <TimeLineCard {...data[1]} /> */}
                    <div style={{ height: "100%" }}></div>
                    <div
                        style={{
                            height: "8px",
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundColor: "#0054ff",
                            width: "16px",
                            height: "16px",
                            borderRadius: "8px",
                            margin: "auto",
                        }}
                    ></div>
                </div>
            </div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(10, 1fr)",
                    gap: "8px",
                    borderTop: "2px solid #0054ff",
                    paddingTop: "14px",
                    minHeight: 192,
                }}
            >
                <div
                    style={{
                        gridColumn: "1/3",
                    }}
                >
                    <TimeLineCard {...data[0]} />
                </div>
                <div
                    style={{
                        gridColumn: "5/7",
                    }}
                >
                    <TimeLineCard {...data[2]} />
                </div>
                <div
                    style={{
                        gridColumn: "9/11",
                    }}
                >
                    <TimeLineCard {...data[4]} />
                </div>
            </div>
        </div>
    );
}

function TimeLineMobile(props: {
    data: { date: Date; title: string; info: string }[];
}) {
    const { data } = props;
    return (
        <div
            style={{
                padding: 8,
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(6, 1fr)",
                    gap: "8px",
                    borderBottom: "2px solid #0054ff",
                    paddingBottom: "14px",
                    minHeight: 152,
                }}
            >
                <div
                    style={{
                        gridArea: "1/1/1/3",
                    }}
                >
                    {/* <TimeLineCard {...data[1]} /> */}
                    <div style={{ height: "100%" }}></div>
                    <div
                        style={{
                            height: "8px",
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundColor: "#0054ff",
                            width: "16px",
                            height: "16px",
                            borderRadius: "8px",
                            margin: "auto",
                        }}
                    ></div>
                </div>
                <div
                    style={{
                        gridArea: "1/2/1/4",
                    }}
                >
                    <TimeLineCard {...data[1]} />
                    <div
                        style={{
                            height: "8px",
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundColor: "#0054ff",
                            width: "16px",
                            height: "16px",
                            borderRadius: "8px",
                            margin: "auto",
                        }}
                    ></div>
                </div>
                <div
                    style={{
                        gridArea: "1/3/1/5",
                    }}
                >
                    {/* <TimeLineCard {...data[1]} /> */}
                    <div style={{ height: "100%" }}></div>
                    <div
                        style={{
                            height: "8px",
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundColor: "#0054ff",
                            width: "16px",
                            height: "16px",
                            borderRadius: "8px",
                            margin: "auto",
                        }}
                    ></div>
                </div>
                <div
                    style={{
                        gridArea: "1/4/1/6",
                    }}
                >
                    <TimeLineCard {...data[3]} />
                    <div
                        style={{
                            height: "8px",
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundColor: "#0054ff",
                            width: "16px",
                            height: "16px",
                            borderRadius: "8px",
                            margin: "auto",
                        }}
                    ></div>
                </div>
                <div
                    style={{
                        gridArea: "1/5/1/7",
                    }}
                >
                    {/* <TimeLineCard {...data[1]} /> */}
                    <div style={{ height: "100%" }}></div>
                    <div
                        style={{
                            height: "8px",
                        }}
                    ></div>
                    <div
                        style={{
                            backgroundColor: "#0054ff",
                            width: "16px",
                            height: "16px",
                            borderRadius: "8px",
                            margin: "auto",
                        }}
                    ></div>
                </div>
            </div>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(6, 1fr)",
                    gap: "8px",
                    borderTop: "2px solid #0054ff",
                    paddingTop: "14px",
                    minHeight: 152,
                }}
            >
                <div
                    style={{
                        gridColumn: "1/3",
                    }}
                >
                    <TimeLineCard {...data[0]} />
                </div>
                <div
                    style={{
                        gridColumn: "3/5",
                    }}
                >
                    <TimeLineCard {...data[2]} />
                </div>
                <div
                    style={{
                        gridColumn: "5/7",
                    }}
                >
                    <TimeLineCard {...data[4]} />
                </div>
            </div>
        </div>
    );
}

function TimeLineCard(props: { date: Date; title: string; info: string }) {
    const { date, title, info } = props;
    return (
        <div
            style={{
                backgroundColor: "white",
                padding: 8,
                margin: "auto",
                height: "100%",
                boxShadow: "8px 8px 16px #646464",
            }}
        >
            <br />
            <span
                style={{
                    color: "#0054ff",
                    fontSize: "1.2em",
                }}
            >
                {title}，
            </span>
            <span>{info}</span>
        </div>
    );
}
