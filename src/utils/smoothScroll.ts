export const scrollSmoothly = (name: string, heightPerverse: number) => {
    const targetCoord = document.getElementById(name)?.getBoundingClientRect();
    if (!targetCoord) return null;
    const { top } = targetCoord;
    const App = document.getElementById("App")!;
    App.scrollBy({
        top: top - heightPerverse, left: 0, behavior: "smooth"
    });
    return null;
};

export default scrollSmoothly