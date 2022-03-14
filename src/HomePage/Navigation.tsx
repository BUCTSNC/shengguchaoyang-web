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

export default function Navigation() {//卡片布局
    const colors1 = [LightOrange, LightBlue2];
    const colors2 = [StrawBerry, DeepPurpleBlue];
    return <div style={{ display: 'flex', justifyContent: 'center', flexDirection: "row", flexWrap: "wrap" }}><div style={{ display: 'flex', flexDirection: "row", justifyContent: 'center', flexWrap: "wrap" }}>
        {
            colors1.map(color => <Card key={color} color={color} info={{
                title: "校园生活", items: [
                    { title: "办证服务", intro: "身份证/车证/户口本", icon: <Audit theme="outline" size="40" fill="#F2F2F2" /> },
                    { title: "医疗报销", intro: "就诊流程/报销流程", icon: <Hospital theme="outline" size="40" fill="#F2F2F2" /> },
                    { title: "生活购物", intro: "超市/水果/共享商圈", icon: <ShoppingCartOne theme="outline" size="40" fill="#F2F2F2" /> },
                    { title: "上网指南", intro: "缴费/问题/常用网站", icon: <Earth theme="outline" size="40" fill="#F2F2F2" /> },
                    { title: "生活购物", intro: "超市/水果/共享商圈", icon: <ShoppingCartOne theme="outline" size="40" fill="#F2F2F2" /> },
                    { title: "上网指南", intro: "缴费/问题/常用网站", icon: <Earth theme="outline" size="40" fill="#F2F2F2" /> }
                ]
            }} />)

        }
    </div>
        <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'center', alignItems: 'center', flexWrap: "wrap" }}>
            {
                colors2.map(color => <Card key={color} color={color} info={{
                    title: "校园生活", items: [
                        { title: "办证服务", intro: "身份证/车证/户口本", icon: <Audit theme="outline" size="40" fill="#F2F2F2" /> },
                        { title: "医疗报销", intro: "就诊流程/报销流程", icon: <Hospital theme="outline" size="40" fill="#F2F2F2" /> },
                        { title: "生活购物", intro: "超市/水果/共享商圈", icon: <ShoppingCartOne theme="outline" size="40" fill="#F2F2F2" /> },
                        { title: "上网指南", intro: "缴费/问题/常用网站", icon: <Earth theme="outline" size="40" fill="#F2F2F2" /> },
                        { title: "生活购物", intro: "超市/水果/共享商圈", icon: <ShoppingCartOne theme="outline" size="40" fill="#F2F2F2" /> },
                        { title: "上网指南", intro: "缴费/问题/常用网站", icon: <Earth theme="outline" size="40" fill="#F2F2F2" /> }
                    ]
                }} />)

            }

        </div></div>;
}

function Card(props: { info: CardInfo, color: string; }) {//卡片内容
    const { info, color } = props;
    return <div style={{ textAlign: "center", backgroundColor: color, color: "white", padding: '1vw', margin: '1.5vw' }}>
        <div style={{ fontSize: "1.5rem", fontWeight: 600 }}>{info.title}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 50%)" }}>
            {info.items.map((item, index) => <Link key={index} link={item} />)}
        </div>
    </div>;
}

function Link(props: { link: LinkInfo; }) {//链接内容
    const { linkItem } = useStyles();
    const { link } = props;
    return <div style={{ margin: 8, padding: 4, maxWidth: 96 }} className={linkItem}>
        {link.icon}
        <div>{link.title}</div>
        <div>{link.intro}</div>
    </div>;
}
