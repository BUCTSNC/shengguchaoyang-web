import '@icon-park/react/styles/index.css';
import { Modal } from 'antd';
import "antd/dist/antd.css";
import { Definitions } from 'octa';
import React, { createContext, useEffect, useState } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import About from './AboutPage';
import './App.css';
import { CategoryPage } from './CategoryPage';
import SearchPad from './components/SearchPad';
import HomePage from './HomePage';
import Bottom from './layouts/Bottom';
import Navibar from './layouts/Navibar';
import ScrollToTopBtn from './layouts/ScrollToTopBtn';
import SearchBtn from './layouts/SearchBtn';
import NotFound from './NotFoundPage';
import Post from './PostPage';

export const CateTree = createContext<Definitions.CategoryProps>({ alias: "root", path: ".", childCates: [], childPosts: [] });
export const SearchViewCtx = createContext((viewable: boolean) => { });

function App() {
  const [tree, setTree] = useState<Definitions.CategoryProps>({
    alias: "root", path: ".", childCates: [], childPosts: []
  });
  const location = useLocation();
  const [searchView, searchViewSwitch] = useState(false);
  useEffect(() => {
    fetch("/posts/tree.json").then(res => res.json() as Promise<Definitions.CategoryProps>).then(setTree);
  }, []);
  return (
    <div id="App">
      <CateTree.Provider value={tree}>
        <SearchViewCtx.Provider value={searchViewSwitch}>
            <div style={{position:"sticky",top:0,zIndex:100}}>
            <Navibar />
            </div>
            <div id="main">
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/post/:postUrl*" component={Post} />
              <Route path="/cate/:category*" component={CategoryPage} />
              <Route path="/about" exact component={About} />
              <Route path="*" component={NotFound} />
            </Switch>
            </div>
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
          <Bottom />
        </SearchViewCtx.Provider>
      </CateTree.Provider>
    </div>
  );
}

export default App;
