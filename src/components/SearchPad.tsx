import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Definitions } from "octa";

// import { getCategories, getPostsMeta, getSearchDB } from "../dm/fetchData";
import { CateTree } from "../App";
import { MetaSearchResult, searchByContent, searchByMeta, sortByDate } from "../dm/searchPost";
import { getSupCategory, traceToRoot } from "../dm/cateParse";
import scrollToTop from "../utils/scrollToTop";

import "./SearchPad.css";
import { climbTree } from "../dm/climbTree";
import { compact, sortBy, uniq } from "lodash";

function SearchResult(props: { postMeta: Definitions.PostProps; categories: Definitions.CategoryProps[], closeModal: () => void; }) {
    const history = useHistory();
    const postMeta = props.postMeta;
    const goToPost = (url: string) => {
        history.push(`/post/${url}`);
    };
    const supCategory = props.categories.find(cate => cate.path === getSupCategory(postMeta));
    const categoryPath = supCategory && traceToRoot(supCategory, props.categories).map(cate => cate.alias).join("/");
    return <div className="result-card" onClick={
        () => {
            props.closeModal();
            scrollToTop();
            goToPost(postMeta.path);
        }
    }>
        <div className="category-path">{categoryPath}</div>
        <div className="post-title">{postMeta.title}</div>
        {postMeta.intro ? <div className="post-intro">{postMeta.intro}</div> : null}
        {postMeta.authors ? <div className="post-authors">作者：{postMeta.authors.map(author => <span key={author}>{author}</span>)}</div> : null}
        {postMeta.tags ? <div className="post-tags">标签：{postMeta.tags.map(tag => <span key={tag}>{tag}</span>)}</div> : null}
        <div>{new Date(postMeta.lastModified).toLocaleDateString()}</div>
    </div>;
}

export function SearchPad(props: { onRouting: () => void; }) {
    const cateTree = useContext(CateTree);
    const { cates, posts } = climbTree(cateTree);
    const [searchDB, setSearchDB] = useState([] as Definitions.FlatPost[]);
    const keywordsRecommend = uniq(compact([...posts.sort(sortByDate).map(post => post.tags).flat(), ...cates.map(cate => cate.alias)]));
    const [userInput, setUserInput] = useState("");
    const [fullContent, setFullContent] = useState(false);
    const [resultByMeta, setResultByMeta] = useState({
        byTitle: [], byIntro: [], byTags: [], byCate: [],
        // byAuthor: [],
    } as MetaSearchResult);
    const [resultByContent, setResultByContent] = useState([] as Definitions.PostProps[]);
    useEffect(() => {
        if (fullContent && searchDB.length === 0) fetch("/posts/searchDB.json").then(res => res.json() as Promise<Definitions.FlatPost[]>).then(setSearchDB);
    }, [fullContent]);
    useEffect(() => {
        const keywords = userInput.split(" ").filter(keyword => keyword.length >= 2);
        const resultByMeta = searchByMeta(keywords, posts, cates);
        const resultByContent = searchByContent(keywords, searchDB, posts);
        setResultByMeta(resultByMeta);
        setResultByContent(resultByContent);
    }, [userInput]);
    return <div id="search-pad">
        <div style={{
            position: "sticky", top: 0, backgroundColor: "#ffffff", zIndex: 300
        }}>
            <div>
                <div onClick={() => setFullContent(false)} className={`${fullContent ? "inactive-switcher" : "active-meta-switcher"} search-switcher`}>
                    快速搜索
                </div>
                <div onClick={() => setFullContent(true)} className={`${fullContent ? "active-full-switcher" : "inactive-switcher"} search-switcher`}>
                    全文搜索
                </div>
            </div>
            <input
                className="search-input"
                type="text"
                id="search-bar"
                placeholder="在此输入关键词"
                value={userInput}
                
                onChange={e => setUserInput(e.target.value)}
            />
        </div>
        {
            userInput === "" ? <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "flex-start",
                // justifyContent: "space-around"
            }}>
                {keywordsRecommend.map(keyword => <div className='tag' key={keyword} style={{
                    // backgroundColor: "#d9d9d9",
                    margin: ".2rem",
                    padding: ".2rem",
                    borderRadius: ".2rem",
                    cursor: "pointer",
                    fontSize:'.9rem',
                    fontWeight:300
                }} onClick={() => setUserInput(keyword)}>{keyword}</div>)}
            </div> : null
        }
        {
            fullContent ?
                <div className="result-container">
                    {
                        resultByContent.length ?
                            resultByContent.map((result, index) => <SearchResult key={index} postMeta={result} categories={cates} closeModal={props.onRouting} />) :
                            null
                    }
                </div> :
                <div className="result-container">
                    {resultByMeta.byTitle.length ?
                        <div className="type-container">
                            <div className="search-type">标题相关</div>
                            {resultByMeta.byTitle.map((result, index) => <SearchResult key={index} postMeta={result} categories={cates} closeModal={props.onRouting} />)}
                        </div>
                        : null}
                    {resultByMeta.byIntro.length ?
                        <div className="type-container">
                            <div className="search-type">介绍相关</div>
                            {resultByMeta.byIntro.map((result, index) => <SearchResult key={index} postMeta={result} categories={cates} closeModal={props.onRouting} />)}
                        </div>
                        : null}
                    {resultByMeta.byTags.length ?
                        <div className="type-container">
                            <div className="search-type">标签匹配</div>
                            {resultByMeta.byTags.map((result, index) => <SearchResult key={index} postMeta={result} categories={cates} closeModal={props.onRouting} />)}
                        </div>
                        : null}
                    {resultByMeta.byCate.length ?
                        <div className="type-container">
                            <div className="search-type">目录匹配</div>
                            {resultByMeta.byCate.map((result, index) => <SearchResult key={index} postMeta={result} categories={cates} closeModal={props.onRouting} />)}
                        </div>
                        : null}
                    {/* {resultByMeta.byAuthor.length ?
                        <div className="type-container">
                            <div className="search-type">作者匹配</div>
                            {resultByMeta.byAuthor.map((result, index) => <SearchResult key={index} postMeta={result} categories={cates} closeModal={props.onRouting} />)}
                        </div>
                        : null} */}
                </div>
        }
    </div>;
}

export default SearchPad;