import React from "react";
import MyCalendar from "./Calendar";
import { useHistory } from "react-router-dom";
import "./c-searchbox.css";
import Background from "./img/background.png";
import Circle from "./img/circle.png";
import Line from "./img/line.png";
import Search from "./search.png";
import { isMobile, useMobileView } from "../components/Display";
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
            <span
                style={{
                    color: "#0054ff",
                    fontSize: "1.2em",
                }}
            >
                {date.getMonth() + 1}月{date.getDate()}日
            </span>
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
