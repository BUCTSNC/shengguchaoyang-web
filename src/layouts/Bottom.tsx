import React from 'react';
import { LightBlue, White } from '../ColorCard';
import SNClogo from "../logo/SNClogo.png"
import Image from '../components/Image';
import BUCTlogo from "../logo/BUCTlogo.png"
import SNCQR from "../logo/SNCQR.jpg"
import icon from "antd";

export default function Bottom() {
    return <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: LightBlue, color: White }}>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",marginLeft:'8em'}}>
        <div style={{margin:"0 2em"}}><Image src={BUCTlogo} height='3em' width='14em'/></div> 
        <div style={{margin:"0 2em"}}><Image src={SNClogo} height='3em' width='14em' /></div>
        </div>
        <div style={{ textAlign: 'center' }}>
            <div>Copyright &copy; {new Date().getFullYear()} SNC All Right Reversed</div>
            <div>地址：北京市朝阳区北三环东路15号北京化工大学</div>
            <div>邮编：100029 联系我们|010-88888888</div>
        </div>
        <div style={{display:"flex",flexDirection:'row'}}>
            <div style={{width:"4em"}}>
            </div>
            
            <div style={{maxHeight:"100%",maxWidth:"100%",display:"block",marginRight:"10em"}}>
            <Image src={SNCQR} height='4.5em' width='4.5em' /></div>
        </div>
    </div>
        
}