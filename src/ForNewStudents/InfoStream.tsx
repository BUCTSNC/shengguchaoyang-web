import { PostProps } from "octa/lib/Definitions";
import React from "react";
import { useContext } from "react";
import { CateTree } from "../App";
import { getVisitedCount } from "../dm/hotList";

export default function InfoStream() {
    const cateTree = useContext(CateTree);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const list = cateTree.childCates.find(cate => cate.alias === "我是新生")!.childPosts
    return (
        <div id="info-stream">
            {list.map((post, index) => (
                <InfoCard key={index} post={post} />
            ))}
        </div>
    );
}

function InfoCard(props: { post: PostProps }) {
    const { post } = props;
    return (
        <div className="info-card">
            <div className="info-card-title">{post.title}</div>
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
            <div className="info-card-introduction">{post.intro}</div>
            <div className="info-card-related">
                {getVisitedCount(`post/${post.path}`)}阅读 ·{" "}
                {new Date(post.lastModified).toLocaleDateString()}更新
            </div>
            <div className="info-card-tags">
                {post.tags?.map((tag, index) => (
                    <div className="info-card-tag" key={index}>{tag}</div>
                ))}
            </div>
        </div>
    );
}
