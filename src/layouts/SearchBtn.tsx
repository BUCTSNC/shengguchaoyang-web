import React from "react";

import { Search } from "@icon-park/react";

export function SearchBtn(props: { onClick: () => any; }) {
    return (
        <div
            style={{
                position: "absolute",
                bottom: "calc(10vh + 4.5rem)",
                right: "6vw",
                height: "3.2rem",
                width: "3.2rem",
                backgroundColor: "#4470F5",
                borderRadius: "50%",
                padding: "0.5rem",
                boxShadow: "0 0 2rem #8c8c8c",
                zIndex: 200,
                cursor: "pointer",
                alignContent:"center",
            }}
            onClick={props.onClick}
        >
            <Search theme="outline" size="100%" fill="#FFF" />
        </div>
    );
}

export default SearchBtn;
