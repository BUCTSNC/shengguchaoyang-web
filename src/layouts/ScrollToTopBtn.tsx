import { Up } from "@icon-park/react";
import React from "react";
import { scrollToTop } from "../utils/scrollToTop";



export function ScrollToTopBtn() {
    return (
        <div
            style={{
                position: "absolute",
                bottom: "10vh",
                right: "6vw",
                height: "3.2rem",
                width: "3.2rem",
                backgroundColor: "#4470F5",
                borderRadius: "50%",
                padding: "0.4rem",
                boxShadow: "0 0 2rem #8c8c8c",
                zIndex: 200,
                cursor: "pointer"
            }}
            onClick={scrollToTop}
        >
            <Up theme="outline" size="100%" fill="#FFF" />
        </div>
    );
}

export default ScrollToTopBtn;
