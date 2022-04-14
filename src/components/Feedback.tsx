import React from "react"
import QR from "../logo/feedback.jpg"

export function Feedback() {
    return <div style={{
        display: "flex", flexDirection: "column", alignItems: "center", margin: 8, backgroundColor: "white"
    }}>
        <a style={{
            width: "100%", backgroundColor: "#4470F5", color: "white", fontSize: "1rem", fontWeight: 550, textAlign: "center", padding: 4,letterSpacing:'0.8rem'
        }} href="https://ks.wjx.top/vj/ORxKSZ5.aspx">问题反馈</a>
        <a target="_blank" style={{display:'flex',flexDirection:'row', justifyContent:"center"}} >
        <img style={{ width: "80%" }} src={QR} />
        </a>
        <a target="_blank" style={{ wordWrap: "break-word", maxWidth: "80%", margin: '0 8',cursor:'pointer'}} href='https://ks.wjx.top/vj/ORxKSZ5.aspx'><b>反馈入口</b></a>
        <p style={{ paddingLeft:8,paddingRight:8,margin:4,}}>扫描二维码或者点击上方链接，反馈您的问题，我们第一时间进行补充和修改。或者通过邮箱把你的问题发送到</p>
        <a style={{ wordWrap: "break-word", maxWidth: "80%", margin: 0}} href="mailto:buctsnc@hotmail.com">buctsnc@hotmail.com</a>
        <p style={{ padding: 8,margin:4}}>让我们补充更多的信息。</p>
    </div>
}