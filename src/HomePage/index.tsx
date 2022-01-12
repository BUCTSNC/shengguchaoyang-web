import { Fire, UpdateRotation } from "@icon-park/react";
import { climbTree } from "octa/lib/ClimbTree";
import React, { useContext } from "react";
import { CateTree } from "../App";
import Container from "../components/Container";
import Links from "./Links";
import Navigation from "./Navigation";
import PostList from "./PostList";

export const HomePage = () => {
    const tree = useContext(CateTree);
    const {posts} = climbTree(tree)
    return <div id='homepage' style={{ width: '100vw' }}>
        <Container>
            <Carousel />
            <Navigation />
            <Links />
            <PostList firstColor="#ed5c5c" secondColor="#6488f2" title="浏览榜单" icon={<UpdateRotation theme="outline" size="24" fill="#ddd"/>} postList={posts.sort((a, b) => a.lastModified - b.lastModified).slice(0,9)} tagAttr="lastModified"/>    
            <PostList firstColor="#ff6348" secondColor="#2591fb" title="热门内容" icon={<Fire theme="outline" size="24" fill="#ddd"/>} postList={posts.sort((a, b) => a.lastModified - b.lastModified).slice(0,9)} />    
        </Container>
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