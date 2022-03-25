import React from 'react';
import { LightBlue, White } from '../ColorCard';

export default function Bottom() {
    return <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", backgroundColor: LightBlue, color: White }}>
        <div>北京化工大学Logo</div>
        <div>学生网络中心Logo</div>
        <div style={{ textAlign: 'center' }}>
            <div>Copyright &copy; {new Date().getFullYear()} SNC All Right Reversed</div>
            <div>地址：北京市朝阳区北三环东路15号北京化工大学</div>
            <div>邮编：100029 联系我们|010-88888888</div>
        </div>
        <div>二维码</div>
    </div>;
}