import React, { Component, useContext, useEffect, useState } from "react";

import { useHistory } from "react-router";

import { groupBy } from "lodash";
import { Row, Col, Carousel } from "antd";
import { ShoppingCartOne, MapRoad, Bus, ShowerHead, PhoneTelephone, HospitalTwo, IdCard, Wifi, Tool } from "@icon-park/react";
import { Icon } from "@icon-park/react/lib/runtime";

import Container from "../components/Container";
import Area from "../components/Area";
import MultiLineMenu, { MenuItem } from "../components/MultiLineMenu";
import Image from "../components/Image";

import scrollSmoothly from "../utils/smoothScroll";
import httpUrl from "../utils/httpUrl";

import engine from "../assets/engine.png";
import gym from "../assets/gym.png";
import office from "../assets/office.png";
import laboratory from "../assets/laboratory.png";
import Loveles from "../assets/Loveles.jpg";
import Tree from "../assets/Tree.jpg";
import LightBulb from "../assets/LightBulb.jpg";

import "./Home.css";
import { CateTree } from "../App";
import { climbTree } from "octa/lib/ClimbTree";
import { sortByDate } from "../dm/searchPost";

export default class Home extends Component {
    state: { current: string; navBarHeight: number; };
    readonly firstClassCates = ["校园生活", "服务指南", "校园景观", "常用链接"];

    constructor(props: {}) {
        super(props);
        this.state = { current: this.scrollHandler(), navBarHeight: 0 };
    }

    componentDidMount() {
        document.title = "首页 - 胜古朝阳";
        const navBarHeight = document.getElementById("navbar")!.clientHeight;
        this.setState({ navBarHeight });
        const App = document.getElementById("App");
        App?.addEventListener("scroll", this.scrollHandler);
    }
    componentWillUnmount() {
        const App = document.getElementById("App");
        App?.removeEventListener("scroll", this.scrollHandler);
    }

    scrollHandler = () => {
        const tops =
            this.firstClassCates.map(item => {
                return { name: item, top: document.getElementById(item)?.getBoundingClientRect().top ?? 0 };
            });
        const currentName = tops
            .filter(item => item.top > 0)
            .sort((a, b) => {
                return a.top - b.top;
            }).map(item => item.name)[0];
        this.setState({ current: currentName });
        return currentName;
    };

    render() {
        const firstClassCates: MenuItem[] = this.firstClassCates.map(item => {
            return { name: item, onClick: () => scrollSmoothly(item, this.state.navBarHeight), active: this.state.current === item };
        });
        return (
            <Container>
                <div id="indexView">
                    <FloatNavbar items={firstClassCates} />
                    <NavigationCards />
                    <div style={{ height: "40vh" }}></div>
                </div >
            </Container>
        );
    }
}

function FloatNavbar(props: { items: MenuItem[]; }) {
    const { items } = props;
    return (
        <Area
            id="navbar"
            style={{
                position: "sticky",
                top: 0,
                zIndex: 100
            }}
        >
            <MultiLineMenu items={items}></MultiLineMenu>
        </Area>
    );
}

function NavigationCards() {
    return <Row>
        <Col
            xxl={16} xl={16}
            lg={24} md={24} sm={24} xs={24}
        >
            <Area>
            <Area id="校园生活">
                <CampusLife />
            </Area>
            <Area id="服务指南">
                <ServiceGuide />
            </Area>
            </Area>
            <Area><Area id="校园景观">
                <CampusSight />
            </Area>
            <Area id="常用链接">
            </Area>
            
                <Links />
            </Area>
        </Col>
        <Col
            xxl={8} xl={8}
            lg={24} md={24} sm={24} xs={24}
        >
            <HeaderCarosel />
            <Area cardStyle={{ padding: ".5rem" }}>
                <h2>近期内容</h2>
                <hr />
                <ArticleList prefix={/(.*)/} amount={10} />
            </Area>
            <Area cardStyle={{ padding: ".5rem" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                    SNC &copy; {new Date().getFullYear() > 2021 ? `2021-${new Date().getFullYear}` : "2021"} All rights reserved.
                </div>
            </Area>
        </Col>
    </Row>;
}

function HeaderCarosel() {
    return <Area>
        <Carousel autoplay>
            <Image src={Loveles} height="30vh" />
            <Image src={Tree} height="30vh" />
            <Image src={LightBulb} height="30vh" />
        </Carousel>
    </Area>;
}

function ArticleList(props: { prefix: RegExp; amount?: number; }) {
    const history = useHistory();
    const goTo = (url: string) => history.push(url);
    const cateTree = useContext(CateTree);
    const { posts } = climbTree(cateTree);
    const recentPosts = posts.filter(post => post.path.match(props.prefix)).sort(sortByDate).slice(0, props.amount ?? 5);
    return <div>
        {
            recentPosts.map(post => <div
                key={post.title}
                style={{ display: "flex", flexDirection: "row", cursor: "pointer", margin: ".2rem" }}
                onClick={() => goTo(`/post/${post.path}`)}
            >
                <div style={{ color: "#1890ff", textAlign: "left", width: "50%" }}>{post.title}</div><div style={{ textAlign: "right", width: "50%" }}>{new Date(post.lastModified).toLocaleDateString()}</div>
            </div>)
        }</div>;
}

function CampusLife() {
    const history = useHistory();
    const goTo = (url: string) => history.push(url);
    return <div style={{ padding: "1rem" }}>
        <h1>校园生活</h1>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
        }}>
            <IconCard IconComponent={ShoppingCartOne} title="生活服务" backgroundColor="#51A2E6" onClick={() => goTo("/post/life/SHFW")} />
            <IconCard IconComponent={MapRoad} title="交通指南" backgroundColor="#31BBDD" onClick={() => goTo("/post/life/JTZN")} />
            <IconCard IconComponent={Bus} title="班车预约" backgroundColor="#DBD76E" onClick={() => goTo("/post/life/BCYY")} />
            <IconCard IconComponent={ShowerHead} title="澡堂预约" backgroundColor="#9ECE7A" onClick={() => goTo("/post/life/ZTYY")} />
        </div>
        <h2 style={{ marginTop: ".5rem" }}>最近更新</h2>
        <ArticleList prefix={/^life/} />
    </div>;
}

function ServiceGuide() {
    const history = useHistory();
    const goTo = (url: string) => history.push(url);
    return <div style={{ padding: "1rem" }}>
        <h1>服务指南</h1>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
        }}>
            <IconCard IconComponent={PhoneTelephone} title="服务电话" fontColor="#52c41a" onClick={() => goTo("/post/life/telephones")} />
            <IconCard IconComponent={HospitalTwo} title="医疗服务" fontColor="#1890ff" onClick={() => goTo("/post/service-guide/JKFW")} />
            <IconCard IconComponent={IdCard} title="补办证件" fontColor="#f5222d" onClick={() => goTo("/post/service-guide/ZJBB")} />
            <IconCard IconComponent={Wifi} title="网络服务" fontColor="#2f54eb" onClick={() => goTo("/post/service-guide/SWFW")} />
            <IconCard IconComponent={Tool} title="设施报修" fontColor="#13c2c2" onClick={() => goTo("/post/service-guide/SSBX")} />
        </div>
        <h2 style={{ marginTop: ".5rem" }}>最近更新</h2>
        <ArticleList prefix={/^service-guide/} />
    </div >;
}

interface IconCardProps {
    IconComponent: Icon, title: string, backgroundColor?: string, fontColor?: string, onClick?: () => void;
}

function IconCard(props: IconCardProps) {
    const { IconComponent, title, backgroundColor = "#fff", fontColor = props.backgroundColor ? "#fff" : "#000", onClick = (() => { }) } = props;
    return <div
        className="icon-card"
        onClick={onClick}
        style={{ margin: "0 .2rem", padding: ".5rem", backgroundColor }}
    >
        <div style={{ padding: "10%" }}>
            <IconComponent theme="outline" size="100%" fill={fontColor} />
        </div>
        <div style={{ width: "100%", textAlign: "center", color: fontColor, fontSize: "1rem" }}>{title}</div>
    </div>;
}

function CampusSight() {
    const [page, setPage] = useState("North");
    const history = useHistory();
    const goTo = (url: string) => history.push(url);
    const pages: { [pageName: string]: JSX.Element; } = {
        North: <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
        }}>
            <PhotoCard src={engine} title="工程训练中心" onClick={() => goTo("/post/life/school-map/GongChengLou")} />
            <PhotoCard src={gym} title="体育馆" onClick={() => goTo("/post/life/school-map/TiYuGuan")} />
            <PhotoCard src={laboratory} title="实验楼" onClick={() => goTo("/post/life/school-map/ShiYanLou")} />
            <PhotoCard src={office} title="后勤楼" onClick={() => goTo("/post/life/school-map/HouQinLou")} />
        </div>,
        East: <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
        }}>
            <PhotoCard src={engine} title="工程训练中心" onClick={() => goTo("/post/life/school-map/GongChengLou")} />
            <PhotoCard src={gym} title="体育馆" onClick={() => goTo("/post/life/school-map/TiYuGuan")} />
            <PhotoCard src={laboratory} title="实验楼" onClick={() => goTo("/post/life/school-map/ShiYanLou")} />
            <PhotoCard src={office} title="后勤楼" onClick={() => goTo("/post/life/school-map/HouQinLou")} />
        </div>
    };
    return <div style={{ padding: "1rem" }}>
        <h1>校园景观</h1>
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row"
        }}>
            <div onClick={() => setPage("North")} className={`${page === "North" ? "active-btn" : "inactive-btn"} page-btn`}>北区</div>
            <div onClick={() => setPage("East")} className={`${page === "East" ? "active-btn" : "inactive-btn"} page-btn`}>东区</div>
        </div>
        {pages[page]}
    </div>;
};

function PhotoCard(props: { src: string, title: string, onClick?: () => void, height?: string; }) {
    return <div style={{ padding: ".5rem", width: "100%", cursor: "pointer" }} onClick={props.onClick ?? (() => { })}>
        <Image height={props.height ?? "20vh"} src={props.src}></Image>
        <div style={{ width: "100%", textAlign: "center" }}>{props.title}</div>
    </div>;
}

interface Link { linkType: string, department: string, url: string; }
interface GroupedLinks {
    [groupName: string]: Link[];
}

function Links() {
    const [page, setPage] = useState("");
    const [linkTypes, setLinkTypes] = useState([] as string[]);
    const [groupedLinks, setLinks] = useState({} as GroupedLinks);
    useEffect(() => {
        fetch("/dbs/links.json")
            .then(res => res.json())
            .catch(() => ([]))
            .then(async (links: Link[]) => {
                const grouped_links = groupBy(links, "linkType");
                const link_types = Object.keys(grouped_links);
                setPage(link_types[0]);
                setLinkTypes(link_types);
                setLinks(grouped_links);
            });
    }, []);
    return <div style={{ padding: "1rem" }}>
        <h1>链接</h1>
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row"
        }}>
            {linkTypes.map(linkType => {
                return <div
                    key={linkType}
                    onClick={() => setPage(linkType)}
                    className={`${page === linkType ? "active-btn" : "inactive-btn"} page-btn`}>
                    {linkType}
                </div>;
            })}
        </div>
        <Row style={{
            textAlign: "center",
            backgroundColor: "#f5f5f5",
        }}>
            {groupedLinks[page]?.map(link => {
                return <Col
                    key={link.department}
                    className="links"
                    span={8}
                    style={{ padding: ".5rem", cursor: "pointer" }}
                    onClick={() => window.open(httpUrl(link.url))}
                    color="#69c0ff"
                >
                    {link.department}
                </Col>;
            })}
        </Row>
    </div>;
}
