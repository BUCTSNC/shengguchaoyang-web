import React from "react";

import { Search } from "@icon-park/react";

export function SearchBtn(props: { onClick: () => any; }) {
    return (
        <div
            style={{
                position: "absolute",
                bottom: "calc(10vh + 6rem)",
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
            onClick={props.onClick}
        >
            <Search theme="outline" size="100%" fill="#FFF" />
        </div>
    );
}

export default SearchBtn;
