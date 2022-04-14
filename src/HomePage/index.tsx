import { Fire, UpdateRotation } from "@icon-park/react";
import { climbTree } from "octa/lib/ClimbTree";
import React, { useContext, useEffect } from "react";
import { CateTree } from "../App";
import { ContainerNG } from "../components/Container";
import { getVisitedCount } from "../dm/hotList";
import "./homePage.css";
import Links from "./Links";
import Navigation from "./Navigation";
import PostList from "./PostList";


export const HomePage = () => {
    const tree = useContext(CateTree);
    const {posts} = climbTree(tree)
    useEffect(() => {
        document.title = "首页 - 胜古朝阳";
    }, []);
    return <div id='homepage-bg' style={{ width: '100vw'}}>
        <div id='homepage'>
        <ContainerNG>
            <Carousel />
            <Navigation />
            <Links />
            <PostList firstColor="#ed5c5c" secondColor="#6488f2" title="最近更新" icon={<UpdateRotation theme="outline" size="24" fill="#ddd"/>} postList={posts.sort((a, b) => b.lastModified - a.lastModified).slice(0,9)} tagAttr="lastModified"/>    
            <PostList firstColor="#ff6348" secondColor="#2591fb" title="浏览榜单" icon={<Fire theme="outline" size="24" fill="#ddd"/>} postList={posts.map(post => {
                return {
                    ...post, visited: getVisitedCount(`post/${post.path}`)
                }
            }).sort((a, b) => b.visited - a.visited).slice(0, 9)} tagAttr="visited" />
        </ContainerNG>
        </div>
    </div>;
};

// 轮播图
function Carousel() {
    return null;
}

// 校园生活
function SchoolLife() {
    return null;
}

// 最近更新
function Latest() {
    return null;
}

// 热门榜单
function MostVisited() {
    return null;
}

export default HomePage;