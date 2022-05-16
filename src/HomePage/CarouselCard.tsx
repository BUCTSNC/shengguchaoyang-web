import React from "react";
import { useMobileView } from "../components/Display";

export default function CaroselCard(props: {
    backgroundImage?: string;
    content: JSX.Element | string;
}) {
    const mobileMode = useMobileView();
    return (
        <div style={{ padding: mobileMode ? 8 : 16 }}>
            <div
                style={{
                    backgroundImage: props.backgroundImage ?`url(${props.backgroundImage})` : undefined,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "100%",
                    backgroundColor: "grey",
                    aspectRatio: "4/1",
                    overflow: "hidden"
                }}
            >
                {props.content}
            </div>
        </div>
    );
}
