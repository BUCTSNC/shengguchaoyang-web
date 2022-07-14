/* eslint-disable prefer-const */
import { Definitions } from "octa";
import React from "react";
import { useHistory } from "react-router-dom";
import { getVisitedCount } from "../dm/hotList";
import {
    
    Eyes,
    Fire,
    
    UpdateRotation,
} from "@icon-park/react";
import { useMobileView } from "../components/Display";

export default function PostListSea(props: {
    titleColor: string;
    firstColor: string;
    secondColor: string;
    title: string;
    icon: JSX.Element;
    iconpath: string;
    PostListSea: Definitions.PostProps[];
    tagAttr: "lastModified" | "visited";
}) {
    const mobileView = useMobileView();
    return mobileView ? PostListSeaMobile(props) : PostListSeaPC(props);
}

function PostListSeaPC(props: {
    firstColor: string;
    secondColor: string;
    title: string;
    icon: JSX.Element;
    PostListSea: Definitions.PostProps[];
    tagAttr: "lastModified" | "visited";
}) {
    const history = useHistory();
    const { icon, title, PostListSea,tagAttr } = props;
    return (
        <div style={{ width: "214px", marginTop: 32, marginBottom: 32 }}>
            <div
                style={{
                    backgroundColor: "rgb(68, 112, 245)",
                    height: "33.14px",
                    color: "white",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: "4px",
                    letterSpacing: "0.8rem",
                }}
            >
                <div>{title}</div>
            </div>
            <div
                style={{
                    alignContent: "center",
                    justifyContent: "center",
                }}
            >
                {PostListSea.map((post) => (
                    <div
                        key={post.path}
                        style={{
                            backgroundColor: "white",
                        }}
                        onClick={() => history.push(`post/${post.path}`)}
                    >
                        <div style={{}}>
                            <div
                                style={{
                                    padding: "5px",
                                    fontSize: "15px",
                                    height: "44px",
                                }}
                            >
                                <span
                                    style={{
                                        paddingLeft: "15px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {post.title}
                                </span>

                                 
                                <span
                                    style={{
                                        
                                        fontSize: "16pt",
                                        fontWeight: 550,
                                        position:"fixed",
                                        right: 20,
                                        left: "-100px",
                                        alignItems: "center",
                                        height: "5vh",
                                        overflow: "hidden",
                                        filter: " drop-shadow(red 300px 0)",
                                        marginTop:"-4px",
                                    }}
                                >
                                    {icon}
                                </span>
                                <span  style={{
                                    float:"right",
                                    fontWeight:"normal",
                                    width:"10%"
                                }}>
                                {tagAttr === "lastModified"
                                ? DateToString(new Date(post.lastModified))
                                : `${getVisitedCount(
                                      `post/${post.path}`
                                  )}`}
                                  </span>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function DateToString(date: Date) {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

function PostListSeaMobile(props: {
    titleColor: string;
    title: string;
    iconpath: string;
    PostListSea: Definitions.PostProps[];
    tagAttr: "lastModified" | "visited";
}) {
    const history = useHistory();
    const { titleColor, title, iconpath, PostListSea, tagAttr } = props;
    return (
        <div className="postMap">
            <div className="postTitlebox" style={{ color: titleColor }}>
                {tagAttr === "lastModified" ? (
                    <UpdateRotation
                        theme="outline"
                        size={24}
                        fill={titleColor}
                    ></UpdateRotation>
                ) : (
                    <Fire theme="outline" size={24} fill={titleColor}></Fire>
                )}
                <div className="postTitle">{title}</div>
            </div>
            {PostListSea.map((post, index) => (
                <div
                    className={index == 8 ? "postCardLast" : "postCard"}
                    key={index}
                    onClick={() => history.push(`post/${post.path}`)}
                >
                    <img
                        src={`${iconpath}/${String(
                            PostListSea.indexOf(post, 0) + 1
                        )}.png`}
                        className="postRankIcon"
                    ></img>
                    <div className="postBox">
                        <div className="postCateBox">
                            <div className="postCate">
                                【{getCate(post.path)}】
                            </div>
                            <div className="postReadCountBox">
                                <Eyes></Eyes>

                                <div style={{ marginLeft: "4px" }}>
                                    {getVisitedCount(`post/${post.path}`)} 阅读
                                </div>
                            </div>
                        </div>
                        <div className="postAticleTitle">{post.title}</div>
                        <div className="lastModified">
                            {DateToString(new Date(post.lastModified))} · 更新
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
function getCate(path: string) {
    const cates = ["校园生活", "学习资源", "校园风光", "服务指南"];
    const catesIndex = ["XYSH", "XXZY", "XYFG", "FWZN"];
    for (let index of catesIndex) {
        if (path.indexOf(index) != -1) {
            return cates[catesIndex.indexOf(index)];
        }
    }
}
