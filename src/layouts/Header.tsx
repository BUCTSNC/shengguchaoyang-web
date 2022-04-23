import React, { CSSProperties } from "react";
import { useHistory } from "react-router-dom";
import { ContainerNG } from "../components/Container";
import Parallelogram from "../components/Parallelogram";

const FlexCenterRow: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
};

export default function Header() {
    const history = useHistory();
    const goHome = () => history.push("/");
    const categories = [
        { title: "校园生活", path: "life" },
        { title: "校园风光", path: "buildings" },
        { title: "服务指南", path: "guide" },
        { title: "学习资源", path: "resources" },
    ];
    return (
        <div onClick={goHome} style={{ backgroundColor: "#4470f5" }}>
            <ContainerNG>
                <div style={FlexCenterRow}>
                    <Parallelogram
                        angle={30}
                        outerProps={{
                            style: {
                                background: "white",
                                padding: "4px 16px",
                                margin: "0px 16px",
                            },
                        }}
                        innerProps={{
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                color: "#2189e3",
                            },
                        }}
                    >
                        {/* <img src={Logo}  height="100%" /> */}
                    </Parallelogram>
                    <div style={FlexCenterRow}>
                        <NavigationItem title="首页" path="/" first />
                        {categories.map((cate) => (
                            <NavigationItem
                                title={cate.title}
                                path={`c/${cate.path}`}
                                key={cate.path}
                            />
                        ))}
                    </div>
                </div>
            </ContainerNG>
        </div>
    );
}

function NavigationItem(props: {
    title: string;
    path: string;
    first?: boolean;
}) {
    const history = useHistory();
    return (
        <Parallelogram
            angle={30}
            outerProps={{
                className: "navigationItem",
                // style: {
                //     ...(props.first && {borderLeft: "4px solid white"}),

                //     ...FlexCenterRow
                // }
            }}
            innerProps={{
                onClick: () => {
                    console.log("test");
                    history.push("/other");
                },
            }}
        >
            {props.title}
        </Parallelogram>
    );
}
