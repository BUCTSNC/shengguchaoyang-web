import { Fire } from "@icon-park/react";
import { climbTree } from "octa/lib/ClimbTree";
import React, { useContext } from "react";
import { CateTree } from "../App";
import { getVisitedCount } from "../dm/hotList";
import PostListSea from "./lastlist";

export default function LastChange() {
    const tree = useContext(CateTree);
    const { posts } = climbTree(tree);
    return (
        <div>
            <PostListSea
                firstColor="#ff6348"
                titleColor="#FF6348"
                secondColor="#2591fb"
                title="浏览榜单"
                icon={<Fire theme="outline" size="24" fill="#ddd" />}
                iconpath="/hotIcon"
                posts={posts
                    .map((post) => {
                        return {
                            ...post,
                            visited: getVisitedCount(`post/${post.path}`),
                        };
                    })
                    .sort((a, b) => b.visited - a.visited)
                    .slice(0, 9)}
                tagAttr="visited"
            />
        </div>
    );
}
