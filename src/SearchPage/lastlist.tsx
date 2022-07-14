/* eslint-disable prefer-const */
import { Definitions } from "octa";
import React from "react";
import { useHistory } from "react-router-dom";
import { getVisitedCount } from "../dm/hotList";
import { Eyes, Fire, UpdateRotation } from "@icon-park/react";
import { useMobileView } from "../components/Display";

export default function PostListSea(props: {
    titleColor: string;
    firstColor: string;
    secondColor: string;
    title: string;
    icon: JSX.Element;
    iconpath: string;
    posts: Definitions.PostProps[];
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
    posts: Definitions.PostProps[];
}) {
    const history = useHistory();
    const { title, posts } = props;
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
                    padding: "8px",
                    backgroundColor: "white",
                }}
            >
                {posts.map((post) => (
                    <div
                        key={post.path}
                        onClick={() => history.push(`post/${post.path}`)}
                    >
                        <div style={{
                            display: "flex", flexDirection: "row", justifyContent: "space-between"
                        }}>
                            <div>{post.title.length <= 10 ? post.title : `${post.title.slice(0, 8)}...`}</div>
                            <div style={{
                                display: "flex", flexDirection: "row", alignContent: "center"
                            }}>
                                <span>
                                    <Fire theme="outline" size="24" fill="#E00"/>
                                </span>
                                <span
                                // style={{
                                //     float: "right",
                                //     fontWeight: "normal",
                                //     width: "10%",
                                // }}
                                >
                                    {getVisitedCount(`post/${post.path}`)}
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
    posts: Definitions.PostProps[];
    tagAttr: "lastModified" | "visited";
}) {
    const history = useHistory();
    const { titleColor, title, iconpath, posts, tagAttr } = props;
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
            {posts.map((post, index) => (
                <div
                    className={index == 8 ? "postCardLast" : "postCard"}
                    key={index}
                    onClick={() => history.push(`post/${post.path}`)}
                >
                    <img
                        src={`${iconpath}/${String(
                            posts.indexOf(post, 0) + 1
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
