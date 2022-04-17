import { Audit, Book, Bookshelf, BuildingFour, Bus, Classroom, DocumentFolder, DoorHandle, Earth, Edit, Hospital, IdCard, Landscape, Like, Photograph, PokeballOne, Printer, ShoppingCartOne, ShoppingMall, SingleBed, Wifi, Word } from "@icon-park/react";
import React from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";
import { DeepPurpleBlue, LightBlue2, LightOrange, StrawBerry } from "../ColorCard";

const useStyles = createUseStyles({
    linkItem: {
        "&:hover": {
            boxShadow: "10px 10px 32px rgba(0,0,0,0.3)",
            cursor: "pointer"
        }
    }
});

type LinkInfo = {
    icon: JSX.Element, title: string, intro: string; src: string;
};

type CardInfo = {
    color: string,
    title: string, items: LinkInfo[];
};

export default function Navigation() {//卡片布局
    const colors1 = [LightOrange, LightBlue2];
    const colors2 = [StrawBerry, DeepPurpleBlue];
    const XYSH: CardInfo = {
        color: LightOrange,
        title: "校园生活",
        items: [
            { title: "交通出行", intro: "班车/公交/地铁", icon: <Bus theme="outline" size="40" fill="#F2F2F2" />, src: "XYSH/BCYY" },
            { title: "宿舍生活", intro: "会客厅/咖啡机/服务中心", icon: <SingleBed theme="outline" size="40" fill="#F2F2F2" />, src: "XYSH/Dormitory_Service" },
            { title: "校园超市", intro: "麦叔的铺子/便利店/购物", icon: <ShoppingCartOne theme="outline" size="40" fill="#F2F2F2" />, src: "XYSH/School_Supermarket" },
            { title: "创享商圈", intro: "大学生创业/业余活动", icon: <ShoppingMall theme="outline" size="40" fill="#F2F2F2" />, src: "XYSH/Chuangxsq" },
            { title: "图书馆", intro: "简介/读者须知/资源检索", icon: <Book theme="outline" size="40" fill="#F2F2F2" />, src: "XYSH/Library_Service" },
            { title: "校医院", intro: "医疗服务/医疗报销", icon: <Hospital theme="outline" size="40" fill="#F2F2F2" />, src: "XYSH/XYY" }
        ]
    }
    const XXZY: CardInfo = {
        color: LightBlue2,
        title: "学习资源",
        items: [
            { title: "校内资源", intro: "学校官网/数字校园", icon: <Bookshelf theme="outline" size="40" fill="#F2F2F2" />, src: "XXZY/XueXiZiYuan#数字校园" },
            { title: "图书资源", intro: "图书查询/资源检索", icon: <DocumentFolder theme="outline" size="40" fill="#F2F2F2" />, src: "XXZY/XueXiZiYuan#图书馆" },
            // { title: "知网服务", intro: "中国知网", icon: <Edit theme="outline" size="40" fill="#F2F2F2" />, src: "XXZY/XueXiZiYuan#文献查询" },
            { title: "自习教位置", intro: "教学楼/图书馆/宿舍楼", icon: <Classroom theme="outline" size="40" fill="#F2F2F2" />, src: "XXZY/XueXiZiYuan#自习位置" },
            { title: "课程网站", intro: "专业课/技能课/科普课", icon: <Earth theme="outline" size="40" fill="#F2F2F2" />, src: "XXZY/XueXiZiYuan#校外学习资源" },
            { title: "手机软件", intro: "外语学习/习惯养成", icon: <Word theme="outline" size="40" fill="#F2F2F2" />, src: "XXZY/XueXiZiYuan#学习软件" }
        ]
    }
    const XYFG: CardInfo = {
        color: DeepPurpleBlue,
        title: "校园风光",
        items: [
            { title: "建筑风光", intro: "学习场所/实验中心/生活楼宇", icon: <BuildingFour theme="outline" size="40" fill="#F2F2F2" />, src: "XYFG/campus building" },
            { title: "自然风景", intro: "青天白日/落日余晖/夜色弥漫", icon: <Landscape theme="outline" size="40" fill="#F2F2F2" />, src: "XYFG/campus landscape" },
            { title: "校园团宠", intro: "野鸭/天鹅/小猫", icon: <PokeballOne theme="outline" size="40" fill="#F2F2F2" />, src: "XYFG/campus pets" },
        ]
    }
    const FWZN: CardInfo = {
        color: StrawBerry,
        title: "服务指南",
        items: [
            { title: "学业发展", intro: "发展服务岗/学在北化", icon: <Audit theme="outline" size="40" fill="#F2F2F2" />, src: "FWZN/AcademicDevelopmentCounseling" },
            { title: "校园网攻略", intro: "连接方式/常用网址/VPN/缴费", icon: <Wifi theme="outline" size="40" fill="#F2F2F2" />, src: "FWZN/XYWGL" },
            { title: "设施报修", intro: "苏东吴物业/中航物业", icon: <DoorHandle theme="outline" size="40" fill="#F2F2F2" />, src: "FWZN/SSBX" },
            { title: "心理咨询", intro: "咨询地点/预约电话", icon: <Like theme="outline" size="40" fill="#F2F2F2" />, src: "FWZN/XLZX" },
            { title: "自助机器", intro: "自助补卡/成绩打印/自助售票/圈存机", icon: <Printer theme="outline" size="40" fill="#F2F2F2" />, src: "FWZN/ZZJQ" },
            { title: "校园卡攻略", intro: "分类/充值/补办/常见问题", icon: <IdCard theme="outline" size="40" fill="#F2F2F2" />, src: "FWZN/XYKGL" }
        ]
    }
    return <div style={{ display: 'flex', justifyContent: 'center', flexDirection: "row", flexWrap: "wrap", marginTop: '3vh' }}>
        <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-around', flexWrap: "wrap" }}>
            <Card info={XXZY} />
            <Card info={FWZN} />
        </div>
        <div style={{ display: 'flex', flexDirection: "row", justifyContent: 'space-around', flexWrap: "wrap" }}>
            <Card info={XYSH} />
            <Card info={XYFG} />
        </div>
    </div>;
}

function Card(props: { info: CardInfo }) {//卡片内容
    const { info } = props;
    return <div style={{ textAlign: "center", backgroundColor: info.color, color: "white", padding: '0.8vw', margin: '0.8vw' }}>
        <div style={{ fontSize: "1.2rem", fontWeight: 600, paddingTop: '4px' }}>{info.title}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 50%)" }}>
            {info.items.map((item, index) => <Link key={index} link={item} />)}
        </div>
    </div>;
}

function Link(props: { link: LinkInfo; }) {//链接内容
    const { linkItem } = useStyles();
    const { link } = props;
    const history = useHistory();
    return <div style={{ margin: 8, padding: 4, maxWidth: 96 }} className={linkItem} onClick={() => history.push(`/post/${link.src}`)}>
        {link.icon}
        <div style={{fontWeight:550}}>{link.title}</div>
        <div style={{color:"#FFFFFF90"}}>{link.intro}</div>
    </div>;
}
