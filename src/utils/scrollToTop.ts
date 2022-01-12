export function scrollToTop() {
    return document.getElementById("App")?.scroll({
        top: 0,
        behavior: "smooth"
    })
}

export default scrollToTop