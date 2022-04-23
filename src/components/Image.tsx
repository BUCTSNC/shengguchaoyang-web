import React from "react";

export default function Image(props: {
    width?: string;
    height: string;
    src: string;
}) {
    const { width = "100%", height, src } = props;
    return (
        <div
            style={{
                width,
                height,
                backgroundImage: `url(${src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
        ></div>
    );
}
