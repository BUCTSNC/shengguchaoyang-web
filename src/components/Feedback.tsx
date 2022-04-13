import React from "react"
import QR from "../logo/SNCQR.jpg"

export function Feedback() {
    return <div style={{
        display: "flex", flexDirection: "column", alignItems: "center", margin: 8, backgroundColor: "white"
    }}>
        <div style={{
            width: "100%", backgroundColor: "#4470F5", color: "white", fontSize: "1rem", fontWeight: 550, textAlign: "center", padding: 4,letterSpacing:'0.8rem'
        }}>问题反馈</div>
        <img style={{ width: "80%" }} src={QR} />
        <p style={{ padding: 8,margin:8}}>关注公众号，反馈您的问题，我们第一时间进行补充和修改。或者通过邮箱把你的问题发送到</p>
        <a style={{ wordWrap: "break-word", maxWidth: "80%", margin: 0 }} href="mailto:buctsnc@hotmail.com">buctsnc@hotmail.com</a>
        <p>让我们补充更多的信息。</p>
    </div>
}