import React, { useEffect, useState } from "react";

export function isMobile(): boolean {
    return window.innerWidth <= window.innerHeight;
}

export function useMobileView() {
    const [mobileMode, setMobileMode] = useState(isMobile());
    useEffect(() => {
        const handler = () => setMobileMode(isMobile());
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    });
    console.log(mobileMode)
    return mobileMode
}

export default function Display(props: {
    desktop: string | JSX.Element | JSX.Element[] | null;
    mobile: string | JSX.Element | JSX.Element[] | null;
}): JSX.Element {
    const [mobileMode, setMobileMode] = useState(isMobile());
    useEffect(() => {
        const handler = () => setMobileMode(isMobile());
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
        
    });
    return <>{isMobile() ? props.mobile : props.desktop}</>;
}
