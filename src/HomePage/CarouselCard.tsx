import React from "react";
import { useMobileView } from "../components/Display";

export default function CaroselCard(props: {
    backgroundImage?: string;
    content: JSX.Element | string;
}) {
    const mobileMode = useMobileView();
    return (
        <div style={{padding:'4px', paddingTop: mobileMode ? 16 : 64,display:'flex',justifyContent:"center",}}>
            <div
                style={{
                    backgroundImage: props.backgroundImage ?`url(${props.backgroundImage})` : undefined,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "100%",
                    backgroundColor: "grey",
                    aspectRatio: "2/1",
                    overflow: "hidden",
                    maxWidth:"1300px",
                }}
            >
                {props.content}
            </div>
        </div>
    );
}
