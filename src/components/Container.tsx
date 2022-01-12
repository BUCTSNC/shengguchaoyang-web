import React from "react"

import { Row, Col } from "antd";

export default (props: {children: JSX.Element | JSX.Element[], left?: JSX.Element, right?: JSX.Element}) => {
    return (
    <Row>
        <Col
            xs={0}
            sm={2}
            lg={4} xl={4} xxl={4}
        >
            {props.left}
        </Col>
        <Col
            xs={24}
            sm={20}
            lg={16}
            xl={16}
            xxl={16}
        >
            {props.children}
        </Col>
        <Col
            xs={0}
            sm={2}
            lg={4} xl={4} xxl={4}
        >
            {props.right}
        </Col>
    </Row>
)}