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
            display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",
            height: '5vh', color: White, backgroundColor: firstColor, padding: "4px 32px", boxShadow: "0 0 8px rgba(0,0,0,0.4)"
        }}>
            {icon}
            <div>{title}</div>
        </div>
        <div style={{
            zIndex: 99, position: "relative", top: -16, backgroundColor: secondColor,
            display: "grid", gridTemplateColumns: "repeat(3, 30%)", gridTemplateRows: "repeat(3, 10vh)", gridGap: 32, padding: 32, justifyContent: "center"
        }}>
            {
                postList.map(post => <div key={post.path} style={{display: "grid", gridTemplateRows: "repeat(10, 10%)", gridTemplateColumns: "repeat(10, 10%)"}} onClick={() => history.push(`post/${post.path}`)} >
                    <div style={{ gridColumn: "1/10", gridRow: "1/10", backgroundColor:'white', padding: 8, display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                        <div style={{ fontSize: "1.2rem" }}><strong>{post.title}</strong></div>
                        <div>{post.intro}</div>
                    </div>
                    <div style={{ gridColumn: "8/11", gridRow: "8/11", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: LightOrange, textAlign: "center", color: White, }}>{(tagAttr && tagAttr in post) ? (tagAttr === "lastModified" ? new Date(post[tagAttr]).toDateString() : post[tagAttr]) : "阅读量：1000"}</div>
                </div>)
            }
        </div>
    </div>;
}