import React, { CSSProperties, useContext } from "react";
import { useHistory } from "react-router-dom";
import { PurpleBlue, White } from "../ColorCard";
import Image from "../components/Image";
import Logo from '../../src/胜古朝阳logo裁剪.jpg';
import { createUseStyles } from 'react-jss';
import Parallelogram from "../components/Parallelogram";
import Container from "../components/Container";
import { Search as SearchIcon } from "@icon-park/react";
import { SearchViewCtx } from "../App";
import { size } from "lodash";

const useStyles = createUseStyles({
    "categoryOuter": {//导航栏小项外框
        "&:nth-child(1)": {
            borderLeft: ["solid", "4px", "white"]
        },
        borderRight: ["solid", "4px", "white"]
    },
    "categoryInner": {//导航栏小项内框
        "&:hover": {
            borderBottom: ["solid", "3px", "white"]
        },
        borderBottom: ["solid", "3pt", "transparent"],
    },
    "flexRowCenter": {
        display: "flex", flexDirection: 'row', justifyContent: "center", alignItems: "center"
    },
    "flexRowAround": {
        display: "flex", flexDirection: 'row', justifyContent: "space-around", alignItems: "center",height:'4.5vh'
    },
    "clickable": {
        cursor: "pointer"
    }
});

export default function Navibar() {
    const { flexRowAround } = useStyles();
    return <div style={{ background: PurpleBlue, width: '100vw',height:'4.5vh'}}>
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
        <Image src={Logo} width='8rem' height='2.8em' />
        {/* <div style={{ display: 'flex', alignItems: 'center', margin: 4, fontSize: '1.6rem'}}></div> */}
    </Parallelogram>;
}

function CategoryBar() {
    const history = useHistory();
    const navigate = (url: string) => history.push(url);
    const { categoryInner, categoryOuter, flexRowCenter, clickable } = useStyles();
    const categories = [
        { path: 'school_life', title: '校园生活' },
        { path: 'service_guide', title: '服务指南' },
        { path: 'school_buildings', title: '校园风光' },
        { path: 'learning_resource', title: '学习资源' }
    ];
    const CateItem = (props: { path: string, title: string; }) => <Parallelogram angle={30}
        outerProps={{ className: categoryOuter, style: { fontSize: "13pt",fontWeight:550, width:'8vw',color: "white",height:'3vh',textAlign:'center',padding:'0 2rem'} }}
        innerProps={{ className: `${categoryInner} ${clickable}`, onClick: () => navigate(props.path) }}
    >
        {props.title}
    </Parallelogram>;
    return <div className={flexRowCenter}>
        <CateItem path="/" title="首页" />
        {categories.map(cate => <CateItem key={cate.path} path={`/cate/${cate.path}`} title={cate.title} />)}
    </div>;
}

function SearchInput() {
    const searchViewSwitch = useContext(SearchViewCtx);
    const { flexRowCenter, clickable } = useStyles();
    return <div className={flexRowCenter} style={{ borderRadius: 24, overflow: "hidden" }} onClick={() => searchViewSwitch(true)}>
        <div style={{ width: '8vw', height: '3vh', backgroundColor: "rgba(255, 255, 255,0.2)",display: "flex",alignItems:'center',paddingLeft:30,fontSize:'16px',verticalAlign:'middle',color:'white' }}>点击此处搜索</div>
        <div style={{ width: '2.5vw', height: '3vh', backgroundColor: "#070FF2", opacity: 1 }} className={`${flexRowCenter} ${clickable}`}>
            <SearchIcon style={{ fontSize: 24, color: "white" }} />
        </div>
    </div>;
}
