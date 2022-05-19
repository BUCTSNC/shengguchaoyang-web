import React, { useEffect, useRef } from "react";
import { useMobileView } from "../components/Display";

export default function CaroselCard(props: {
    backgroundImage?: string;
    content: JSX.Element | string;
}) {
    const mobileMode = useMobileView();
    const ref = useRef<HTMLDivElement>(null);
    if (ref.current) {
        ref.current.style.height = `${ref.current.clientWidth / 2}px`;
    }
    useEffect(() => {
        const resizer = () => {
            setTimeout(() => {
                if (ref.current) {
                    ref.current.style.height = `${
                        ref.current.clientWidth / 2
                    }px`;
                }
            }, 1000);
        };
        window.addEventListener("resize", resizer);
        return () => window.removeEventListener("resize", resizer);
    }, []);
    return (
        <div
            style={{
                padding: "4px",
                paddingTop: mobileMode ? 16 : 64,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div
                ref={ref}
                style={{
                    backgroundImage: props.backgroundImage
                        ? `url(${props.backgroundImage})`
                        : undefined,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "100%",
                    backgroundColor: "grey",
                    // aspectRatio: "2/1",
                    overflow: "hidden",
                    // maxWidth: "1300px",
                }}
            >
                {props.content}
            </div>
        </div>
    );
}
