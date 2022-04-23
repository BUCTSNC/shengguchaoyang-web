import { Col, Row } from "antd";
import React, { MouseEventHandler } from "react";

import "./MultiLineMenu.css";

export type MenuItem = {
    name: string;
    onClick: MouseEventHandler<HTMLDivElement>;
    active: boolean;
};

export const MultiLineMenu = (props: { items: MenuItem[] }) => (
    <Row gutter={[8, 8]} style={{ padding: ".5rem" }}>
        {props.items.map((item, index) => {
            return (
                <Col key={index} xxl={3} xl={4} lg={4} md={6} sm={8} xs={8}>
                    <div
                        className={`menuItem ${
                            item.active ? "activedItem" : "inactiveItem"
                        }`}
                        onClick={item.onClick}
                    >
                        {item.name}
                    </div>
                </Col>
            );
        })}
    </Row>
);

export default MultiLineMenu;
