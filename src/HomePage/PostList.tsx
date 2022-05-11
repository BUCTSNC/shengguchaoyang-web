/* eslint-disable prefer-const */
import { Definitions } from "octa";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { LightOrange, White } from "../ColorCard";
import { getVisitedCount } from "../dm/hotList";
import { Eyes, Fire, UpdateRotation } from "@icon-park/react";
import { size } from "lodash";

export default function PostList(props: {
    titleColor:string
    firstColor: string;
    secondColor: string;
    title: string;
    icon: JSX.Element;
    iconpath:string;
    postList: Definitions.PostProps[];
    tagAttr: "lastModified" | "visited";
}){
    const [size, resize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const onResize = useCallback(() => {
        resize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, []);
    useEffect(() => {
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, [onResize]);

   return size.width>768 ?  PostListPC(props):PostListMobile(props)
    
}

function PostListPC(props: {
    firstColor: string;
    secondColor: string;
    title: string;
    icon: JSX.Element;
    postList: Definitions.PostProps[];
    tagAttr: "lastModified" | "visited";
}) {
    const history = useHistory();
    const { firstColor, secondColor, icon, title, postList, tagAttr } = props;
    return (
        <div style={{ width: "100%", marginTop: 32, marginBottom: 32 }}>
            <div
                style={{
                    position: "relative",
                    zIndex: 100,
                    margin: "auto",
                    maxWidth: 320,
                    fontSize: "16pt",
                    fontWeight: 550,
                    right: 20,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "5vh",
                    color: White,
                    backgroundColor: firstColor,
                    padding: "4px 32px",
                    boxShadow: "4px 4px 16px rgba(0,0,0,0.6)",
                }}
            >
                {icon}
                <div>{title}</div>
            </div>
            <div
                style={{
                    zIndex: 99,
                    position: "relative",
                    top: -16,
                    backgroundColor: secondColor,
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 30%)",
                    gridTemplateRows: "repeat(3, 6rem)",
                    gridGap: 32,
                    padding: 32,
                    paddingBottom: 48,
                    alignContent: "center",
                    justifyContent: "center",
                }}
            >
                {postList.map((post) => (
                    
                    <div
                        key={post.path}
                        style={{
                            display: "grid",
                            gridTemplateRows: "repeat(10, 10%)",
                            verticalAlign: "top",
                            gridTemplateColumns: "repeat(10, 10%)",
                            cursor: "pointer",
                        }}
                        onClick={() => history.push(`post/${post.path}`)}
                    >
                        <div
                            style={{
                                gridColumn: "1/10",
                                gridRow: "1/10",
                                backgroundColor: "white",
                                padding: 8,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                verticalAlign: "top",
                            }}
                        >
                            <div
                                style={{
                                    fontWeight: 550,
                                    fontSize: "1rem",
                                    display: "inline-block",
                                    verticalAlign: "top",
                                }}
                            >
                                <strong>{post.title}</strong>
                            </div>
                            <div
                                style={{
                                    fontSize: "0.7rem",
                                    color: "#808080",
                                    display: "-webkit-box",
                                    textOverflow: "ellipsis",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 2,
                                    overflow: "hidden",
                                }}
                            >
                                {post.intro}
                            </div>
                        </div>
                        <div
                            style={{
                                gridColumn: "8/11",
                                gridRow: "9/11",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "2rem",
                                fontSize: "0.7rem",
                                backgroundColor: LightOrange,
                                textAlign: "center",
                                color: White,
                                boxShadow: "-5px 5px 4px rgba(0,0,0,0.2)",
                            }}
                        >
                            {tagAttr === "lastModified"
                                ? DateToString(new Date(post.lastModified))
                                : `最近访问：${getVisitedCount(
                                      `post/${post.path}`
                                  )}`}
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

function PostListMobile(props: {
    titleColor: string;
    title: string;
    iconpath:string
    postList: Definitions.PostProps[];
    tagAttr: "lastModified" | "visited";
}){
    const history = useHistory();
    const {titleColor,title,iconpath,postList,tagAttr} = props
    return(
        <div className="postMap">
        <div className="postTitlebox" style={{color:titleColor}}>
            {tagAttr==='lastModified'? <UpdateRotation 
            theme="outline"
            size={24}
            fill={titleColor}></UpdateRotation>:<Fire 
            theme="outline"
            size={24}
            fill={titleColor}></Fire>
            }
            <div className="postTitle">{title}</div>
        </div>
        {postList.map((post)=>(
            <div className="postCard"
            onClick={() => history.push(`post/${post.path}`)}>
                <img src={`${iconpath}/${String(postList.indexOf(post,0)+1)}.png`} className="postRankIcon" ></img>
                <div className="postBox">
                    <div className="postCateBox">
                    <div className="postCate">【{getCate(post.path)}】</div>
                    <div className="postReadCountBox">
                    <Eyes></Eyes>  
                    
                    <div style={{marginLeft:'4px'}}>{getVisitedCount(`post/${post.path}`)} 阅读</div>
                    </div>
                    </div>
                    <div className="postAticleTitle">{post.title}</div>
                    <div className="lastModified">{DateToString(new Date(post.lastModified))} · 更新</div>
                </div>
                
            </div>
        ))}
        </div>
    )
}
function getCate(path:string){
    const cates = ['校园生活','学习资源','校园风光','服务指南'] 
    const catesIndex = ['XYSH','XXZY','XYFG','FWZN']
    for (let  index of catesIndex){
        if(path.indexOf(index)!=-1){
            return cates[catesIndex.indexOf(index)]
        }
    }
    
}