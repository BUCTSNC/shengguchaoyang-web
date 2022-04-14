import React from 'react';
import { LightBlue, White } from '../ColorCard';
import SNClogo from "../logo/SNClogo.png"
import Image from '../components/Image';
import BUCTlogo from "../logo/BUCTlogo.png"
import SNCQR from "../logo/SNCQR.jpg"
import wechat from "../logo/wechat.svg"
import "./Bottom.css"

export default function Bottom() {
    return <div className='bottomBox'>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <div style={{margin:"0 2em"}}><img src={BUCTlogo}  width='150em'/></div> 
        <div style={{margin:"0 2em"}}><img src={SNClogo} width='150em' /></div>
        </div>
        <div style={{ textAlign: 'center' }}>
            <div>Copyright &copy; {new Date().getFullYear()} SNC All Right Reversed</div>
            <div className='text'>地址：北京市朝阳区北三环东路15号北京化工大学</div>
            {/* <div className='text'>邮编：100029 联系我们|010-88888888</div> */}
        </div>
        <div className='wechatMap'>
            <div className='wechatIcon'>
            <img src={wechat} height='25rem'></img>
            <div className='text'>更多内容</div>
            <div className='text'>关注公众号</div>
            </div>
            <div ><img src={SNCQR} height='60rem' width='60rem' ></img></div>
        </div>
    </div>
        
}