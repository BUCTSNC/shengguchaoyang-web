import { Search as SearchIcon } from "@icon-park/react";
import { climbTree } from "octa/lib/ClimbTree";
import React, { useContext } from "react";
import { createUseStyles } from 'react-jss';
import { useHistory } from "react-router-dom";
import Logo from '../../src/logo/sgcy.png';
import { CateTree, SearchViewCtx } from "../App";
import { PurpleBlue } from "../ColorCard";
import { ContainerNG } from "../components/Container";
import Parallelogram from "../components/Parallelogram";
import './NaviBar.css';

const useStyles = createUseStyles({
    "categoryOuter": {//导航栏小项外框
        "&:nth-child(1)": {
            borderLeft: ["solid", "0.2vw", "white"]
        },
        borderRight: ["solid", "0.2vw", "white"]
    },
    "categoryInner": {//导航栏小项内框
        "&:hover": {
            borderBottom: ["solid", "3px", "white"],
            alignItems:'center'
        },
        borderBottom: ["solid", "3pt", "transparent"],
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
// const barheight = "4.5vh"
export default function Navibar() {
    
    const { flexRowAround } = useStyles();
    return <div style={{ background: PurpleBlue, width: '100vw',height:48}}>
        <ContainerNG>
            <div className={flexRowAround}>
                <HomeLogo />
                <CategoryBar />
                <SearchInput />
            </div>
        </ContainerNG>
    </div>;
}

function HomeLogo() {
    const history = useHistory();
    const navigate = (url: string) => history.push(url);
    const { flexRowCenter, clickable } = useStyles();
    return <Parallelogram angle={30}
        outerProps={{

            className: `${flexRowCenter} ${clickable} ${'logoBoxoutProps'}`,
            onClick: () => navigate("/")
        }}
        innerProps={{
            className: flexRowCenter
        }}
    >
        <img src={Logo} width='100%' />
        {/* <div style={{ display: 'flex', alignItems: 'center', margin: 4, fontSize: '1.6rem'}}></div> */}
    </Parallelogram>;
}

function CategoryBar() {
    const history = useHistory();
    const navigate = (url: string) => history.push(url);
    const {cates} = climbTree(useContext(CateTree))
    const { categoryInner, categoryOuter, flexRowCenter, clickable } = useStyles();
    const categories = cates.filter(cate => !cate.path.includes("/"));
    const CateItem = (props: { path: string, title: string; }) => <Parallelogram angle={30}
        outerProps={{ className: `${categoryOuter} ${'navigationItemOut'}`}}
        innerProps={{ className: `${categoryInner} ${clickable}`, onClick: () => navigate(props.path)}}
    >
        <div style={{verticalAlign:'center'}}>{props.title}</div>
    </Parallelogram>;
    return <div className={flexRowCenter} style={{alignItems:'center'}}>
        <CateItem path="/" title="首页" />
        {categories.map(cate => <CateItem key={cate.path} path={`/cate/${cate.path}`} title={cate.alias} />)}
    </div>;
}

function SearchInput() {
    const searchViewSwitch = useContext(SearchViewCtx);
    const { flexRowCenter, clickable } = useStyles();
    return <div className={flexRowCenter} style={{ borderRadius: '0.9vw', overflow: "hidden" }} onClick={() => searchViewSwitch(true)}>
        <div className="searchSpace" >点击搜索</div>
        <div className={`${flexRowCenter} ${clickable} ${'searchIconSpace'}`}>
            <SearchIcon className="searchIcon"/>
        </div>
    </div>;
}
