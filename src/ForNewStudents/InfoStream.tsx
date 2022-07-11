import { PostProps } from "octa/lib/Definitions";
import React from "react";
import { useContext } from "react";
import { CateTree } from "../App";
import { getVisitedCount } from "../dm/hotList";
// import { useNavigate} from 'react-router';
// import "./bootstrap.min.css"

export default function InfoStream() {
    const cateTree = useContext(CateTree);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const list = cateTree.childCates.find(cate => cate.alias === "我是新生")?.childPosts??[]
    return (
        <div id="info-stream">
            {list.map((post, index) => (
                <InfoCard key={index} post={post} />
            ))}
        </div>
    );
}

function InfoCard(props: { post: PostProps }) {
    // const navi = useNavigate()
    const { post } = props;
    return (
        <div className="info-card" onClick={()=>{console.log("跳转具体界面")}}>
            <div className="info-card-title">
                <span className="info-card-head-dot"></span>
                <span className="info-card-head-text">{post.title}</span>
            </div>
            {post.headerImage === undefined ? null : (
            <div
                style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    backgroundImage: `url(/posts/${post.path}/${post.headerImage})`,
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            ></div>
            )}
            <div className="info-card-introduction" style={{margin:"8px",}}>{post.intro}</div>
            <div className="info-card-related" style={{margin:"8px",}}>
                {getVisitedCount(`post/${post.path}`)}阅读 ·{" "}
                {new Date(post.lastModified).toLocaleDateString().split('/').reverse().join('-')}更新
            </div>
            <div className="info-card-tags" style={{margin:"8px"}}>
                {post.tags?.map((tag, index) => (
                    <div className="info-card-tag pointer" key={index}><a href="#">{tag}</a></div>
                ))}
            </div>
        </div>
    );
}
