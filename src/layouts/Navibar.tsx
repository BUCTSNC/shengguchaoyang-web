import { HamburgerButton, Search as SearchIcon } from "@icon-park/react";
import { climbTree } from "octa/lib/ClimbTree";
import React, { useContext, useState } from "react";
import { createUseStyles } from "react-jss";
import { useHistory, useLocation } from "react-router-dom";
import Logo from "../../src/logo/sgcy.png";
import { CateTree } from "../App";
import { LightBlue, White } from "../ColorCard";
import { ContainerNG } from "../components/Container";
import Display from "../components/Display";
import Parallelogram from "../components/Parallelogram";
import "./NaviBar.css";

const useStyles = createUseStyles({
    categoryOuter: {
        //导航栏小项外框
        "&:nth-child(1)": {
            // borderLeft: ["solid", "0.2vw", "white"],
        },
        // borderRight: ["solid", "0.2vw", "white"],
    },
    categoryInner: {
        //导航栏小项内框
        "&:hover": {
            borderBottom: ["solid", "3px", "white"],
            alignItems: "center",
        },

        borderBottom: ["solid", "3pt", "transparent"],
    },
    activedInner: {
        borderBottom: ["solid", "3px", "white"],
        alignItems: "center",
    },
    flexRowCenter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    flexRowAround: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    clickable: {
        cursor: "pointer",
    },
});

export default function Navibar() {
    return <Display desktop={<NavibarPC />} mobile={<NavibarMobile />} />;
}

function NavibarMobile() {
    const history = useHistory();
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="mobileNavibarBox">
            <div className="mobileNavibar">
                <div
                    className="mobileNavibarLogo"
                    onClick={() => history.push("/")}
                >
                    <img src={Logo} style={{ display: "block", height: 40 }} />
                </div>
                <div
                    className="mobileNavibarcontain"
                    onClick={() => setExpanded(!expanded)}
                >
                    <HamburgerButton size={36} fill={LightBlue} />
                </div>
            </div>

            <BurgerMenu
                expanded={expanded}
                switcher={() => setExpanded(!expanded)}
            />
        </div>
    );
}

function BurgerMenu(props: { expanded: boolean; switcher: () => void }) {
    const history = useHistory();
    const { cates } = climbTree(useContext(CateTree));
    const categories = cates.filter((cate) => !cate.path.includes("/"));
    const location = useLocation();
    return (
        <div
            style={{
                transition: "max-height 0.5s ease-in-out",
                maxHeight: props.expanded ? window.innerHeight : 0,
                overflow: "hidden",
                backgroundColor: White,
            }}
        >
            <div
                className={
                    location.pathname === `/`
                        ? "activeMenuItem"
                        : "inactiveMenuItem"
                }
                onClick={() => {
                    props.switcher();
                    history.push(`/`);
                }}
            >
                首页
            </div>
            <div
                className={
                    location.pathname === `/for-new-students`
                        ? "activeMenuItem"
                        : "inactiveMenuItem"
                }
                onClick={() => {
                    props.switcher();
                    history.push(`/for-new-students`);
                }}
            >
                我是新生
            </div>
            {categories
                .filter((category) => category.alias != "我是新生")
                .map((category) => {
                    return (
                        <div
                            key={category.path}
                            onClick={() => {
                                props.switcher();
                                history.push(`/cate/${category.path}`);
                            }}
                            className={
                                location.pathname === `/cate/${category.path}`
                                    ? "activeMenuItem"
                                    : "inactiveMenuItem"
                            }
                        >
                            {category.alias}
                        </div>
                    );
                })}
        </div>
    );
}

function NavibarPC() {
    const { flexRowAround } = useStyles();
    return (
        <div style={{ backgroundColor: "rgba(0, 84, 255, 1)" }}>
            <ContainerNG>
                <div className={flexRowAround}>
                    <HomeLogo />
                    <CategoryBar />
                    <SearchInput />
                </div>
            </ContainerNG>
        </div>
    );
}

function HomeLogo() {
    const history = useHistory();
    const navigate = (url: string) => history.push(url);
    const { flexRowCenter, clickable } = useStyles();
    return (
        <Parallelogram
            angle={0}
            outerProps={{
                className: `${flexRowCenter} ${clickable} ${"logoBoxoutProps"}`,
                onClick: () => navigate("/"),
            }}
            innerProps={{
                className: flexRowCenter,
            }}
        >
            <img src={Logo} width="100%" />
            {/* <div style={{ display: 'flex', alignItems: 'center', margin: 4, fontSize: '1.6rem'}}></div> */}
        </Parallelogram>
    );
}

function CategoryBar() {
    const history = useHistory();
    const navigate = (url: string) => history.push(url);
    const { cates } = climbTree(useContext(CateTree));
    const {
        categoryInner,
        categoryOuter,
        flexRowCenter,
        clickable,
        activedInner,
    } = useStyles();
    const categories = cates.filter((cate) => !cate.path.includes("/"));
    const location = useLocation();
    const CateItem = (props: {
        path: string;
        title: string;
        actived: boolean;
    }) => (
        <Parallelogram
            angle={30}
            outerProps={{ className: `${categoryOuter} navigationItemOut` }}
            innerProps={{
                className: `${categoryInner} ${
                    props.actived ? activedInner : ""
                } ${clickable}`,
                onClick: () => navigate(props.path),
            }}
        >
            <div style={{ verticalAlign: "center" }}>{props.title}</div>
        </Parallelogram>
    );
    return (
        <div className={flexRowCenter} style={{ alignItems: "center" }}>
            <CateItem
                path="/"
                title="首页"
                actived={location.pathname === "/"}
            />
            <CateItem
                path="/for-new-students"
                title="我是新生"
                actived={location.pathname === "/for-new-students"}
            />
            {categories
                .filter((cate) => (["FWZN","XYSH","XXZY","XYFG"]).includes(cate.path))
                .map((cate) => (
                    <CateItem
                        key={cate.path}
                        path={`/cate/${cate.path}`}
                        title={cate.alias}
                        actived={location.pathname === `/cate/${cate.path}`}
                    />
                ))}
        </div>
    );
}

function SearchInput() {
    // const searchViewSwitch = useContext(SearchViewCtx);
    const history = useHistory();
    const { flexRowCenter, clickable } = useStyles();
    return (
        <div
            className={flexRowCenter}
            style={{ borderRadius: "0.9vw", overflow: "hidden" }}
            onClick={() => history.push("/search")}
        >
            <div className="searchSpace">搜索</div>
            <div
                className={`${flexRowCenter} ${clickable} ${"searchIconSpace"}`}
            >
                <SearchIcon className="searchIcon" />
            </div>
        </div>
    );
}
