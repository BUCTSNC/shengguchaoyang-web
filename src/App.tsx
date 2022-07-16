import "@icon-park/react/styles/index.css";
// import { Modal } from "antd";
import "antd/dist/antd.css";
import { Definitions } from "octa";
import React, { createContext, useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./App.css";
import { BackgroundGrey } from "./ColorCard";
import { useMobileView } from "./components/Display";
// import SearchPad from "./components/SearchPad";
import Bottom from "./layouts/Bottom";
import { Main } from "./layouts/Main";
import Navibar from "./layouts/Navibar";
import ScrollToTopBtn, { scrollToSmoothly } from "./layouts/ScrollToTopBtn";
import SearchBtn from "./layouts/SearchBtn";
import BackgroundIMG from "./logo/backgroundimg.webp";

export const CateTree = createContext<Definitions.CategoryProps>({
    alias: "root",
    path: ".",
    childCates: [],
    childPosts: [],
});
export const SearchViewCtx = createContext<(value: boolean) => void>(() => {
    return;
});

export const ScrollCtx = createContext<HTMLDivElement | null>(null);

function App() {
    const [tree, setTree] = useState<Definitions.CategoryProps>({
        alias: "root",
        path: ".",
        childCates: [],
        childPosts: [],
    });
    const history = useHistory();
    const viewbox = useRef<HTMLDivElement>(null);
    // const [searchView, searchViewSwitch] = useState(false);
    const mobileMode = useMobileView();
    const location = useLocation();
    useEffect(() => {
        scrollToSmoothly(viewbox.current);
    }, [location.pathname]);
    useEffect(() => {
        fetch("/posts/tree.json")
            .then((res) => res.json() as Promise<Definitions.CategoryProps>)
            .then((data) => {
                return {
                    ...data,
                    childCates: data.childCates.filter(
                        (cate) => cate.alias !== ".workflow"
                    ),
                };
            })
            .then(setTree);
    }, []);
    // console.log(climbTree(tree))
    return (
        <div id="App">
            <CateTree.Provider value={tree}>
                {/* <SearchViewCtx.Provider value={searchViewSwitch}> */}
                <Navibar />
                <div
                    style={
                        mobileMode || location.pathname !== "/"
                            ? {
                                  backgroundColor: BackgroundGrey,
                              }
                            : {
                                  backgroundImage: `url(${BackgroundIMG})`,
                                  backgroundPosition: "center",
                                  backgroundSize: "cover",
                              }
                    }
                >
                    <div
                        className={mobileMode ? "viewboxMobile" : "viewbox"}
                        ref={viewbox}
                    >
                        <ScrollCtx.Provider value={viewbox.current}>
                            <Main />
                            <Bottom />
                        </ScrollCtx.Provider>
                    </div>
                </div>
                <SearchBtn onClick={() => history.push("/search")} />
                <ScrollToTopBtn target={viewbox} />
                {/* <Modal
                        style={{ top: 0 }}
                        visible={searchView}
                        title={null}
                        onCancel={() => searchViewSwitch(false)}
                        closable={false}
                        footer={null}
                        destroyOnClose
                    >
                        <SearchPad onRouting={() => searchViewSwitch(false)} />
                    </Modal>
                </SearchViewCtx.Provider> */}
            </CateTree.Provider>
        </div>
    );
}

export default App;
