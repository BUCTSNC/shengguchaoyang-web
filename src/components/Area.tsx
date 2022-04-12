import React, { CSSProperties } from "react";

export const Area = (props: { id?: string, style?: CSSProperties, cardStyle?: CSSProperties,children?: JSX.Element | JSX.Element[] | null; }) => (
    <div
        id={props.id}
        style={
            { padding: "0 .5rem .5rem .5rem", ...props.style }
        }
    >
        <div style={{
            backgroundColor: "white",
            height: "100%",
            paddingBottom:'1.5rem',
            boxShadow: "0 0 .5rem #d9d9d9",
            ...props.cardStyle
        }}>
            {props.children}
        </div>
    </div >
);

export default Area
