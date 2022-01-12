import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Modal } from 'antd';

import SearchPad from './components/SearchPad';
import SearchBtn from './layouts/SearchBtn';
import ScrollToTopBtn from './layouts/ScrollToTopBtn';

import './App.css';
import "antd/dist/antd.css";
import '@icon-park/react/styles/index.css';
import { Definitions } from 'octa';
import Navibar from './layouts/Navibar';
import Bottom from './layouts/Bottom';
import HomePage from './HomePage';
import Post from './views/Post';
import About from './views/About';
import NotFound from './views/NotFound';

export const CateTree = createContext<Definitions.CategoryProps>({ alias: "root", path: ".", childCates: [], childPosts: [] });
export const SearchViewCtx = createContext((viewable: boolean) => { });

function App() {
  const [tree, setTree] = useState<Definitions.CategoryProps>({
    alias: "root", path: ".", childCates: [], childPosts: []
  });
  const [searchDB, setSearchDB] = useState<Definitions.FlatPost[]>([]);
  const [searchView, searchViewSwitch] = useState(false);
  useEffect(() => {
    fetch("/posts/tree.json").then(res => res.json() as Promise<Definitions.CategoryProps>).then(setTree);
  }, []);
  return (
    <div id="App">
      <CateTree.Provider value={tree}>
        <SearchViewCtx.Provider value={searchViewSwitch}>
          <Router>
            <Navibar />
            {/* <Main></Main> */}
            <Route path="/" exact component={HomePage} />
            <Route path="/post/:postUrl*" component={Post} />
            <Route path="/about" exact component={About} />
            {/* <Route path="/*" component={NotFound} /> */}
            <SearchBtn onClick={() => searchViewSwitch(true)} />
            <ScrollToTopBtn />
            <Modal
              style={{ top: 0 }}
              visible={searchView}
              title={null} onCancel={() => searchViewSwitch(false)}
              closable={false}
              footer={null}
              destroyOnClose
            >
              <SearchPad onRouting={() => searchViewSwitch(false)} />
            </Modal>
          </Router>
          <Bottom />
        </SearchViewCtx.Provider>
      </CateTree.Provider>
    </div>
  );
}

export default App;
