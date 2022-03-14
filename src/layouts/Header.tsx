import React, { CSSProperties, useState } from "react";
import { useHistory } from "react-router-dom";

import Container from "../components/Container";
import Image from "../components/Image";
import Parallelogram from "../components/Parallelogram";

import Logo from "../../src/胜古朝阳logo裁剪.jpg";

const FlexCenterRow: CSSProperties = {display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}
 
export default function Header() {
    const history = useHistory();
    const goHome = () => history.push("/");
    const categories = [
        { title: "校园生活", path: "life" },
        { title: "校园风光", path: "buildings" },
        { title: "服务指南", path: "guide" },
        { title: "学习资源", path: "resources" }
    ];
    return (
        <div onClick={goHome} style={{ backgroundColor: "#4470f5" }}>
            <Container>
                <div style={FlexCenterRow}>
                    <Parallelogram angle={30}
                        outerProps={{
                            style: {
                                background: "white",
                                padding: "4px 16px",
                                margin: "0px 16px"
                            }
                        }}
                        innerProps={{
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                color: "#2189e3",
                            }
                        }}>
                        <Image src={Logo} height="5rem" width="4.2rem" />
                        <div style={{ margin: "0 1rem" }}>
                            <div style={{ fontSize: "24px" }}>胜古朝阳</div>
                            <div>学生生活服务指南</div>
                        </div>
                    </Parallelogram>
                    <div style={FlexCenterRow}>
                        <NavigationItem title="首页" path="/" first/>
                        {
                            categories.map(cate => <NavigationItem title={cate.title} path={`c/${cate.path}`} key={cate.path} />)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
}

function NavigationItem (props: { title: string, path: string; first?: boolean }) {
    const history = useHistory();
    return <Parallelogram angle={30}
        outerProps={{
            style: {
                ...(props.first && {borderLeft: "4px solid white"}),
                borderRight: "4px solid white",
                fontSize: "1.6rem",
                padding: "4px 16px",
                color: "white",
                ...FlexCenterRow
            }
        }}
        innerProps={{
            onClick: () => {console.log("test"); history.push('/other')}
        }}
    >
        {props.title}
    </Parallelogram>;
};