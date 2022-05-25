import React from "react";
import { useMobileView } from "../components/Display";

export default function CaroselCard(props: {
    backgroundImage?: string;
    content: JSX.Element | string;
}) {
    const mobileMode = useMobileView();
    // const width = useRef(window.innerWidth);
    // const ref = useRef<HTMLDivElement>(null);
    // const location = useLocation();
    // if (ref.current) {
    //     ref.current.style.height = `${ref.current.clientWidth / 2}px`;
    // }
    // useEffect(() => {
    //     const resizer = () => {
    //         setTimeout(() => {
    //             if (ref.current) {
    //                 ref.current.style.height = `${
    //                     ref.current.clientWidth / 2
    //                 }px`;
    //             }
    //         }, 1000);
    //     };
    //     window.addEventListener("resize", resizer);
    //     return () => window.removeEventListener("resize", resizer);
    // }, [width, location.pathname]);
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
