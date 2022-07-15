import React, { useCallback, useEffect, useState } from "react";
import BUCTlogo from "../logo/BUCTlogo.png";
import SNClogo from "../logo/SNClogo.png";
import SNCQR from "../logo/SNCQR.jpg";
import wechat from "../logo/wechat.svg";

import "./Bottom.css";

export default function Bottom() {
    const [size, resize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const onResize = useCallback(() => {
        resize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, []);
    useEffect(() => {
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, [onResize]);
    // console.log(size.height, size.width);
    return (
        <div className="bottomBox">
            <div className="bottomContentBox">
                <div
                    className="bottomLeftLogos"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        flexWrap: "wrap",
                        minWidth: "40%",
                        justifyContent: "center",
                    }}
                >
                    <div style={{ margin: "0 1em" }}>
                        <img src={BUCTlogo} width="150em" />
                    </div>
                    <div style={{ margin: "0 1em" }}>
                        <img src={SNClogo} width="150em" />
                    </div>
                </div>
                <div
                    className="bottomMediumText"
                    style={{ textAlign: "center", minWidth: "40%" }}
                >
                    <div>
                        Copyright &copy; {new Date().getFullYear()} SNC All
                        Right Reversed
                    </div>
                    <div className="text">
                        地址：北京市朝阳区北三环东路15号北京化工大学
                    </div>
                    {/* <div className='text'>邮编：100029 联系我们|010-88888888</div> */}
                </div>
                {size.height / size.width >= 1 ? null : (
                    <div className="wechatMap">
                        <div className="wechatIcon">
                            <img src={wechat} height="25rem"></img>
                            <div className="text">更多内容</div>
                            <div className="text">关注公众号</div>
                        </div>
                        <div>
                            <img src={SNCQR} height="60rem" width="60rem"></img>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
