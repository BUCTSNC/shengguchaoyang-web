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
<<<<<<< HEAD
            <Col xs={0} sm={2} lg={5} xl={5} xxl={5}>
                {props.left}
            </Col>
            <Col xs={24} sm={20} lg={12} xl={12} xxl={12}>
                {props.children}
            </Col>
            <Col xs={0} sm={2} lg={5} xl={5} xxl={5}>
=======
            <Col xs={0} sm={0} lg={0} xl={4} xxl={4}>
                {props.left}
            </Col>
            <Col xs={24} sm={24} lg={24} xl={16} xxl={16}>
                {props.children}
            </Col>
            <Col xs={0} sm={0} lg={0} xl={4} xxl={4}>
>>>>>>> cf60cb99739d21e1228e04720ca79b2d843a10b7
                {props.right}
            </Col>
        </Row>
    );
};

function useContainerWidth() {
    function calc(windowWidth: number) {
        if (windowWidth >= 1600) return 0.75 * windowWidth;
        if (windowWidth <= 576) return 1 * windowWidth;
        const delta = (windowWidth - 576) / (1600 - 576);
        return (0.25 * delta + 0.75) * windowWidth;
    }
    const [width, setWidth] = useState(calc(window.innerWidth));
    useEffect(() => {
        const resizer = () => {
            console.log("resizer called")
            setWidth(calc(window.innerWidth));
        };
        window.addEventListener("resize", resizer);
        return () => {
            window.removeEventListener("resize", resizer);
        };
    }, []);
    return width;
}
