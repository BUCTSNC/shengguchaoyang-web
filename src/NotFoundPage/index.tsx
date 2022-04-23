import React, { CSSProperties, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "antd";

import Container from "../components/Container";
import Area from "../components/Area";

export default function NotFound() {
    useEffect(() => {
        document.title = "页面未找到 - 胜古朝阳";
    }, []);
    const history = useHistory();
    const goHome = () => history.push("/");
    const btnStyle: CSSProperties = { marginRight: ".5rem" };
    return (
        <Container>
            <Area>
                <div
                    style={{
                        padding: "1rem",
                    }}
                >
                    <h1>页面走丢啦！</h1>
                    <p>无法找到这个页面。</p>
                    <Button
                        type="primary"
                        onClick={history.goBack}
                        style={btnStyle}
                    >
                        返回上一个页面
                    </Button>
                    <Button type="primary" onClick={goHome} style={btnStyle}>
                        返回主页
                    </Button>
                </div>
            </Area>
        </Container>
    );
}
