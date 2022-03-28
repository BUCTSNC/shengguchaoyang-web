import { Fire, Rugby, UpdateRotation, Wechat } from "@icon-park/react";
import { climbTree } from "octa/lib/ClimbTree";
import React, { useContext } from "react";
import { CateTree } from "../App";
import Container from "../components/Container";
import Links from "./Links";
import Navigation from "./Navigation";
import PostList from "./PostList";
import "./homePage.css";


export const HomePage = () => {
    const tree = useContext(CateTree);
    const {posts} = climbTree(tree)
    return <div id='homepage-bg' style={{ width: '100vw'}}>
        <div id='homepage'>
        <Container>
            <Carousel />
            <Navigation />
            <Links />
            <PostList firstColor="#ed5c5c" secondColor="#6488f2" title="最近更新" icon={<UpdateRotation theme="outline" size="24" fill="#ddd"/>} postList={posts.sort((a, b) => a.lastModified - b.lastModified).slice(0,9)} tagAttr="lastModified"/>    
            <PostList firstColor="#ff6348" secondColor="#2591fb" title="浏览榜单" icon={<Fire theme="outline" size="24" fill="#ddd"/>} postList={posts.sort((a, b) => a.lastModified - b.lastModified).slice(0,9)} />    
        </Container>
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