import React, { useEffect, useState } from "react";

import { Row, Col } from "antd";

export const ContainerNG = (props: {
    children: JSX.Element | JSX.Element[] | null;
}) => {
    const width = useContainerWidth();
    return (
        <div
            className="ContainerNG"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <div style={{ width }}>{props.children}</div>
        </div>
    );
};

export default (props: {
    children: JSX.Element | JSX.Element[];
    left?: JSX.Element;
    right?: JSX.Element;
}) => {
    return (
        <Row>
            <Col xs={0} sm={0} lg={0} xl={4} xxl={4}>
                {props.left}
            </Col>
            <Col xs={24} sm={24} lg={24} xl={16} xxl={16}>
                {props.children}
            </Col>
            <Col xs={0} sm={0} lg={0} xl={4} xxl={4}>
                {props.right}
            </Col>
        </Row>
    );
};

function useContainerWidth() {
    function calc(windowWidth: number) {
        if (windowWidth >= 1600) return 0.75 * windowWidth;
        if (windowWidth <= 768) return 1 * windowWidth;
        const delta = (windowWidth - 768) / (1600 - 768);
        return (0.25 * delta + 0.75) * windowWidth;
    }
    const [width, setWidth] = useState(calc(window.innerWidth));
    useEffect(() => {
        const resizer = () => {
            // console.log("resizer called")
            setWidth(calc(window.innerWidth));
        };
        window.addEventListener("resize", resizer);
        return () => {
            window.removeEventListener("resize", resizer);
        };
    }, []);
    return width;
}
