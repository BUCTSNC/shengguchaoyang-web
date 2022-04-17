import { useEffect } from "react"
import { scrollToSmoothly } from "../layouts/ScrollToTopBtn"

export const useBackTop = (target: HTMLElement | null) => {
    useEffect(() => {
        scrollToSmoothly(target, 0)
    }, [])
}