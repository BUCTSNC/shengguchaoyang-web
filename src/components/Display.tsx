import React, { useEffect, useState } from "react";

export function isMobile(): boolean {
    console.log(window.innerWidth <= window.innerHeight)
    return window.innerWidth <= window.innerHeight;
}

export function useMobileView() {
    const [mobileMode, setMobileMode] = useState(isMobile());
    useEffect(() => {
        const handler = () => setMobileMode(isMobile());
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    });
    // console.log(mobileMode)
    return mobileMode
}

export default function Display(props: {
    desktop: string | JSX.Element | JSX.Element[] | null;
    mobile: string | JSX.Element | JSX.Element[] | null;
}): JSX.Element {
    const mobileMode = useMobileView();
    return <>{mobileMode ? props.mobile : props.desktop}</>;
}
