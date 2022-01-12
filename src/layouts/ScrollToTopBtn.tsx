import React from "react";

import { Up } from "@icon-park/react";

import { scrollToTop } from "../utils/scrollToTop";

export function ScrollToTopBtn() {
    return (
        <div
            style={{
                position: "absolute",
                bottom: "10vh",
                right: "10vw",
                height: "4rem",
                width: "4rem",
                backgroundColor: "#0050b3",
                borderRadius: "50%",
                padding: "1rem",
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
