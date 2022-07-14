import { PostProps } from "octa/lib/Definitions";
import React from "react";
import { useContext } from "react";
import { CateTree } from "../App";
import { getVisitedCount } from "../dm/hotList";
// import { useNavigate} from 'react-router';//es6
import { useHistory } from "react-router-dom"; //es5
import { useMobileView } from "../components/Display";
// import "./bootstrap.min.css"

export default function InfoStream() {
    const cateTree = useContext(CateTree);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const list =
        cateTree.childCates.find((cate) => cate.alias === "我是新生")
            ?.childPosts ?? [];
    const isMobile = useMobileView();
    const columns = list.reduce((current, next, index) => {
        if (isMobile) {
            const columnNo = index % 2;
            if (current.length === 0) {
                return [[next], []];
            } else {
                if (columnNo === 0) {
                    return [[...current[0], next], current[1]];
                } else {
                    return [current[0], [...current[1], next]];
                }
            }
        } else {
            const columnNo = index % 3;
            if (current.length === 0) {
                return [[next], [], []];
            } else {
                if (columnNo === 0) {
                    return [[...current[0], next], current[1], current[2]];
                } else if (columnNo === 1) {
                    return [current[0], [...current[1], next], current[2]];
                } else {
                    return [current[0], current[1], [...current[2], next]];
                }
            }
        }
    }, [] as PostProps[][]);
    return (
        <div id="info-stream">
            {columns.map((column, index) => (
                <div className="info-stream-column" key={index}>
                    {column.map((post) => (
                        <InfoCard key={post.path} post={post} />
                    ))}
                </div>
            ))}
        </div>
    );
}

function InfoCard(props: { post: PostProps }) {
    const navi = useHistory();
    // const navi = useNavigate()
    const { post } = props;
    // console.log(post)
    return (
        <div
            className="info-card"
            onClick={() => {
                navi.push(`/post/${post.path}`);
            }}
        >
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
            <div className="info-card-introduction" style={{ margin: "8px" }}>
                {post.intro}
            </div>
            <div className="info-card-related" style={{ margin: "8px" }}>
                {getVisitedCount(`post/${post.path}`)}阅读 ·{" "}
                {new Date(post.lastModified)
                    .toLocaleDateString()
                    .split("/")
                    .reverse()
                    .join("-")}
                更新
            </div>
            <div className="info-card-tags" style={{ margin: "8px" }}>
                {post.tags?.map((tag, index) => (
                    <div className="info-card-tag pointer" key={index}>
                        <a href="#">{tag}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}
