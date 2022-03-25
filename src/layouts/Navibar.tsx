import React, { CSSProperties, useContext } from "react";
import { useHistory } from "react-router-dom";
import { PurpleBlue, White } from "../ColorCard";
import Image from "../components/Image";
import Logo from '../logo.svg';
import { createUseStyles } from 'react-jss';
import Parallelogram from "../components/Parallelogram";
import Container from "../components/Container";
import { Search as SearchIcon } from "@icon-park/react";
import { CateTree, SearchViewCtx } from "../App";
import { climbTree } from "octa/lib/ClimbTree";

const useStyles = createUseStyles({
    "categoryOuter": {
        "&:nth-child(1)": {
            borderLeft: ["solid", "4px", "white"]
        },
        borderRight: ["solid", "4px", "white"]
    },
    "categoryInner": {
        "&:hover": {
            borderBottom: ["solid", "4px", "white"]
        },
        borderBottom: ["solid", "4px", "transparent"],
    },
    "flexRowCenter": {
        display: "flex", flexDirection: 'row', justifyContent: "center", alignItems: "center"
    },
    "flexRowAround": {
        display: "flex", flexDirection: 'row', justifyContent: "space-around", alignItems: "center"
    },
    "clickable": {
        cursor: "pointer"
    }
});

export default function Navibar() {
    const { flexRowAround } = useStyles();
    return <div style={{ background: PurpleBlue, width: '100vw' }}>
        <Container>
            <div className={flexRowAround}>
                <HomeLogo />
                <CategoryBar />
                <SearchInput />
            </div>
        </Container>
    </div>;
}

function HomeLogo() {
    const history = useHistory();
    const navigate = (url: string) => history.push(url);
    const { flexRowCenter, clickable } = useStyles();
    return <Parallelogram angle={30}
        outerProps={{
            style: {
                backgroundColor: White,
                padding: "4px 16px",
                margin: "0 16px"
            },
            className: `${flexRowCenter} ${clickable}`,
            onClick: () => navigate("/")
        }}
        innerProps={{
            className: flexRowCenter
        }}
    >
        <Image src={Logo} width='2.1rem' height='2.5rem' />
        <div style={{ display: 'flex', alignItems: 'center', margin: 4, fontSize: '1.6rem' }}>胜古朝阳</div>
    </Parallelogram>;
}

function CategoryBar() {
    const history = useHistory();
    const navigate = (url: string) => history.push(url);
    const {cates} = climbTree(useContext(CateTree))
    const { categoryInner, categoryOuter, flexRowCenter, clickable } = useStyles();
    const categories = cates.filter(cate => !cate.path.includes("/"));
    const CateItem = (props: { path: string, title: string; }) => <Parallelogram angle={30}
        outerProps={{ className: categoryOuter, style: { fontSize: "1rem", color: "white", padding: "4px 16px" } }}
        innerProps={{ className: `${categoryInner} ${clickable}`, onClick: () => navigate(props.path) }}
    >
        {props.title}
    </Parallelogram>;
    return <div className={flexRowCenter}>
        <CateItem path="/" title="首页" />
        {categories.map(cate => <CateItem key={cate.path} path={`/cate/${cate.path}`} title={cate.alias} />)}
    </div>;
}

function SearchInput() {
    const searchViewSwitch = useContext(SearchViewCtx);
    const { flexRowCenter, clickable } = useStyles();
    return <div className={flexRowCenter} style={{ borderRadius: 8, overflow: "hidden" }} onClick={() => searchViewSwitch(true)}>
        <div style={{ width: 192, height: 32, backgroundColor: "white", opacity: 0.4, padding: 8, color: "black", display: "flex", alignItems: "center" }}>点击此处搜索</div>
        <div style={{ width: 32, height: 32, backgroundColor: "black", opacity: 0.4 }} className={`${flexRowCenter} ${clickable}`}>
            <SearchIcon style={{ fontSize: 24, color: "white" }} />
        </div>
    </div>;
}
