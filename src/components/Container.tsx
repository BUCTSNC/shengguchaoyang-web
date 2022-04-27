import React from "react";

import { Row, Col } from "antd";

export const ContainerNG = (props: {
    children: JSX.Element | JSX.Element[] | null;
    width?: `${number}%`;
}) => {
    const width = props.width ?? "70%";
    return (
        <div
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
            <Col xs={0} sm={2} lg={5} xl={5} xxl={5}>
                {props.left}
            </Col>
            <Col xs={24} sm={20} lg={12} xl={12} xxl={12}>
                {props.children}
            </Col>
            <Col xs={0} sm={2} lg={5} xl={5} xxl={5}>
                {props.right}
            </Col>
        </Row>
    );
};
