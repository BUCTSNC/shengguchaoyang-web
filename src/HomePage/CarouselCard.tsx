import React from "react";
import { useMobileView } from "../components/Display";

export default function CaroselCard(props: {
    backgroundImage?: string;
    content: JSX.Element | string;
}) {
    const mobileMode = useMobileView();
    return (
        <div
            style={{
                padding: 4,
                paddingTop: mobileMode ? 16 : 32,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    backgroundImage: props.backgroundImage
                        ? `url(${props.backgroundImage})`
                        : undefined,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundColor: "grey",
                    width: mobileMode ? "100vw" : "70vw",
                    height: mobileMode ? "50vw" : "35vw",
                    maxWidth: "100%",
                    overflow: "hidden",
                }}
            >
                {props.content}
            </div>
        </div>
    );
}
