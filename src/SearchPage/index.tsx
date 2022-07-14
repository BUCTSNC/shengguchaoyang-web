import React,{ useContext, useEffect, useState } from "react";
import { Feedback } from "../components/Feedback";
import "./search.css";

import { useHistory } from "react-router-dom";

import { Definitions } from "octa";

import { CateTree } from "../App";
import {
    MetaSearchResult,
    searchByContent,
    searchByMeta,
    sortByDate,
} from "../dm/searchPost";
import { getSupCategory, traceToRoot } from "../dm/cateParse";

import { climbTree } from "../dm/climbTree";
import { compact, uniq } from "lodash";
import LastChange from "./lastChange";

//文字设置为思源黑体
//颜色不一致


function SearchRes(
    props: {
        postMeta: Definitions.PostProps;
        categories: Definitions.CategoryProps[];
        closeModal: () => void;
    }
) {
    const history = useHistory();
    const postMeta = props.postMeta;
    const goToPost = (url: string) => {
        history.push(`/post/${url}`);
    };
    const supCategory = props.categories.find(
        (cate) => cate.path === getSupCategory(postMeta)
    );
    const categoryPath =
        supCategory &&
        traceToRoot(supCategory, props.categories)
            .map((cate) => cate.alias)
            .join("/");

    return (
        <div
        onClick={() => {
            goToPost(postMeta.path);
        }}
        >
            <ul className="list ">
                <div className="postcard">
                    <div >{categoryPath}</div>
                    <div >{postMeta.title}</div>
                    {postMeta.intro ? (
                        <div >{postMeta.intro}</div>
                    ) : null}
                </div>
            </ul>
        </div>
    )
}
export default function SearchPage(
    props: { onRouting: () => void }
) { 
    const cateTree = useContext(CateTree);
    const { cates, posts } = climbTree(cateTree);
    const [searchDB, setSearchDB] = useState([] as Definitions.FlatPost[]);
    const [userInput, setUserInput] = useState("");
    const [fullContent, setFullContent] = useState(false);
    const [resultByMeta, setResultByMeta] = useState({
        byTitle: [],
        byIntro: [],
        byTags: [],
        byCate: [],
    } as MetaSearchResult);
    const [resultByContent, setResultByContent] = useState(
        [] as Definitions.PostProps[]
    );
    useEffect(() => {
        if (fullContent && searchDB.length === 0)
            fetch("/posts/searchDB.json")
                .then((res) => res.json() as Promise<Definitions.FlatPost[]>)
                .then(setSearchDB);
    }, [fullContent]);
    useEffect(() => {
        const keywords = userInput
            .split(" ")
            .filter((keyword) => keyword.length >= 2);
        const resultByMeta = searchByMeta(keywords, posts, cates);
        const resultByContent = searchByContent(keywords, searchDB, posts);
        setResultByMeta(resultByMeta);
        setResultByContent(resultByContent);
    }, [userInput]);
    const allResults = [...resultByMeta.byCate,...resultByMeta.byTitle,...resultByMeta.byIntro,...resultByMeta.byTags]
    const allTags = allResults.map(meta => meta.tags).flat(1).reduce((current, tag) => {
        if(tag === undefined) return current
        if (current.includes(tag)) return current
        return [tag,...current]
    },[] as string[])

    return (
        <div>
            <div id="left_self"><LastChange/></div>
            
            <div id="right_self">
                <Feedback />
            </div>
            <div id="center_self">
                {/* 搜索框 */}

                <div className="searchInput">
                    <input
                        type="text"
                        className="input"
                        placeholder="请输入"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                    ></input>
                </div>

                {/* 标签 */}

                <div className="spanMeta">
                    <div className="parent">
                        {allTags.map((items) => {
                            return (
                                <div key={items} className="tagcard" 
                                onClick={() => setUserInput(items)}
                                >
                                    {items}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 帖子 */}
                
                <div >
                <div >
                    {resultByMeta.byTitle.length ? (
                        <div className="postcards">
                            {resultByMeta.byTitle.map((result, index) => (
                                <SearchRes
                                    key={index}
                                    postMeta={result}
                                    categories={cates}
                                    closeModal={props.onRouting}
                                />
                            ))}
                        </div>
                    ) : null}
                    {resultByMeta.byIntro.length ? (
                        <div className="postcards">
                            {resultByMeta.byIntro.map((result, index) => (
                                <SearchRes
                                    key={index}
                                    postMeta={result}
                                    categories={cates}
                                    closeModal={props.onRouting}
                                />
                            ))}
                        </div>
                    ) : null}
                    {resultByMeta.byTags.length ? (
                        <div className="postcards">
                            {resultByMeta.byTags.map((result, index) => (
                                <SearchRes
                                    key={index}
                                    postMeta={result}
                                    categories={cates}
                                    closeModal={props.onRouting}
                                />
                            ))}
                        </div>
                    ) : null}
                    {resultByMeta.byCate.length ? (
                        <div className="postcards">
                            {resultByMeta.byCate.map((result, index) => (
                                <SearchRes
                                    key={index}
                                    postMeta={result}
                                    categories={cates}
                                    closeModal={props.onRouting}
                                />
                            ))}
                        </div>
                    ) : null}
                    </div>
                </div>
                   
            </div>
        </div>
    );
}
