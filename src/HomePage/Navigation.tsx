import React from "react";
import { DeepPurpleBlue, LightBlue2, LightOrange, StrawBerry } from "../ColorCard";
import { createUseStyles } from "react-jss";
import { Audit, Earth, Hospital, ShoppingCartOne } from "@icon-park/react";

const useStyles = createUseStyles({
    linkItem: {
        "&:hover": {
            boxShadow: "0 0 32px rgba(0,0,0,0.2)"
        }
    }
});

type LinkInfo = {
    icon: JSX.Element, title: string, intro: string;
};

type CardInfo = {
    title: string, items: LinkInfo[];
};

export default function Navigation() {
    const colors = [LightOrange, LightBlue2, StrawBerry, DeepPurpleBlue];
    return <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
        {
            colors.map(color => <Card key={color} color={color} info={{
                title: "校园生活", items: [
                    { title: "办证服务", intro: "身份证/车证/户口本", icon: <Audit theme="outline" size="48" fill="#ddd" /> },
                    { title: "医疗报销", intro: "就诊流程/报销流程", icon: <Hospital theme="outline" size="48" fill="#ddd" /> },
                    { title: "生活购物", intro: "超市/水果/共享商圈", icon: <ShoppingCartOne theme="outline" size="48" fill="#ddd" /> },
                    { title: "上网指南", intro: "缴费/问题/常用网站", icon: <Earth theme="outline" size="48" fill="#ddd" /> },
                    { title: "生活购物", intro: "超市/水果/共享商圈", icon: <ShoppingCartOne theme="outline" size="48" fill="#ddd" /> },
                    { title: "上网指南", intro: "缴费/问题/常用网站", icon: <Earth theme="outline" size="48" fill="#ddd" /> }
                ]
            }} />)
        }
    </div>;
}

function Card(props: { info: CardInfo, color: string; }) {
    const { info, color } = props;
    return <div style={{ textAlign: "center", backgroundColor: color, color: "white", padding: 16, margin: 16 }}>
        <div style={{ fontSize: "2rem" }}>{info.title}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 50%)" }}>
            {info.items.map((item,index) => <Link key={index} link={item} />)}
        </div>
    </div>;
}

function Link(props: { link: LinkInfo; }) {
    const { linkItem } = useStyles();
    const { link } = props;
    return <div style={{ margin: 16, padding: 8, maxWidth: 96 }} className={linkItem}>
        {link.icon}
        <div>{link.title}</div>
        <div>{link.intro}</div>
    </div>;
}
