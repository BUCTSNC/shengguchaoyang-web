import { AlignTextCenter, AlignTextTop, AlignTop, Display, FutureBuildTwo } from "@icon-park/react";
import { Definitions } from "octa";
import { FlatPost } from "octa/lib/Definitions";
import React from "react";
import { useHistory } from "react-router-dom";
import { LightOrange, White } from "../ColorCard";

export default function PostList(props: {
    firstColor: string, secondColor: string, title: string, icon: JSX.Element, postList: Definitions.PostProps[]; tagAttr?: keyof Definitions.PostProps;
}
) {
    const history = useHistory();
    const { firstColor, secondColor, icon, title, postList, tagAttr } = props;
    return <div style={{ width: "100%", marginTop: 64 }}>
        <div style={{
            position: "relative",
            zIndex: 100,
            margin: "auto", maxWidth: 320,
            fontSize:'16pt',
            fontWeight:550,
            right:20,
            display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",
            height: '5vh', color: White, backgroundColor: firstColor, padding: "4px 32px", boxShadow: "4px 4px 16px rgba(0,0,0,0.6)"
        }}>
            {icon}
            <div>{title}</div>
        </div>
        <div style={{
            zIndex: 99, position: "relative", top: -16,backgroundColor: secondColor,
            display: "grid", gridTemplateColumns: "repeat(3, 30%)", gridTemplateRows: "repeat(3, 10vh)", gridGap: 32, padding: 32, alignContent:'center',justifyContent: "center"
        }}>
            {
                postList.map(post => <div key={post.path} style={{display: "grid", gridTemplateRows: "repeat(10, 10%)",verticalAlign:"top", gridTemplateColumns: "repeat(10, 10%)"}} onClick={() => history.push(`post/${post.path}`)} >
                    <div style={{ gridColumn: "1/10", gridRow: "1/10", backgroundColor:'white', padding: 8, display: "flex", flexDirection: "column", justifyContent: "flex-start",verticalAlign:"top"}}>
                        <div style={{ fontSize: "1.1rem", display: "inline-block",verticalAlign:"top"}}><strong>{post.title}</strong></div>
                        <div style={{fontSize:"0.7rem",color:"#808080",display:"-webkit-box",textOverflow:'ellipsis',WebkitBoxOrient:"vertical",WebkitLineClamp:2,overflow:"hidden"}}>{post.intro}</div>
                    </div>
                    <div style={{ gridColumn: "8/11", gridRow: "9/11", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",height:"1.8rem",fontSize:"0.8rem", backgroundColor: LightOrange, textAlign: "center", color: White,boxShadow:"-5px 5px 4px rgba(0,0,0,0.2)" }}>{(tagAttr && tagAttr in post) ? (tagAttr === "lastModified" ? new Date(post[tagAttr]).toLocaleDateString() : post[tagAttr]) : "阅读量：1000"}</div>
                </div>)
                
            }
        </div>
    </div>
    
}