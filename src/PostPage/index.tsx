import { Calendar, Eyes, Home, Left } from "@icon-park/react";
import { Col, Modal, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { RouteComponentProps, useHistory, useLocation } from "react-router-dom";
import { CateTree, ScrollCtx } from "../App";
import Area from "../components/Area";
import Container from "../components/Container";
import { useMobileView } from "../components/Display";
import { Feedback } from "../components/Feedback";
import { climbTree } from "../dm/climbTree";
import { getMarkdown } from "../dm/fetchData";
import { getVisitedCount } from "../dm/hotList";
import { parseMD, TOC } from "../dm/mdParse";
import "./Post.css";

export function Post(props: RouteComponentProps) {
    const cateTree = useContext(CateTree);
    const { posts: postsMeta } = climbTree(cateTree);
    const [html, setHtml] = useState("");
    const [toc, setToc] = useState([] as TOC);
    const [currentId, setCurrent] = useState("");
    const [tocModal, setTocModal] = useState(false);
    const [postExist, setPostExist] = useState(true);
    const history = useHistory();
    const { postUrl: url } = props.match.params as { postUrl: string };
    const post = postsMeta.find((post) => post.path === url);
    const mobileView = useMobileView();
    const location = useLocation();
    const viewboxEle = useContext(ScrollCtx);
    useEffect(() => {
        let interval: number;
        let failedCount = 0;
        if (location.hash !== "") {
            const id = decodeURI(location.hash.replace(/^#/, ""));
            let targetEle = document.getElementById(id);
            let currentScrollHeight = 0;
            interval = setInterval(() => {
                if (
                    targetEle === null ||
                    Math.abs(
                        currentScrollHeight - (viewboxEle?.scrollHeight ?? 0)
                    ) <= 4
                ) {
                    targetEle = document.getElementById(id);
                    failedCount += 1;
                    if (failedCount >= 10) clearInterval(interval);
                } else {
                    failedCount = 0;
                }
                const delta = () =>
                    (targetEle?.getBoundingClientRect().top ?? 0) - 48 - 16;
                if (Math.abs(delta()) >= 4) {
                    viewboxEle?.scrollBy({ top: delta() });
                } else {
                    clearInterval(interval);
                }
                currentScrollHeight = viewboxEle?.scrollHeight ?? 0;
            }, 1);
        }
        return () => {
            clearInterval(interval);
        };
    }, [location.hash, postExist]);
    useEffect(() => {
        // const resizeHandler = () => (setWidth(window.innerWidth),setHeight(window.innerHeight));
        // window.addEventListener("resize", resizeHandler);
        const { postUrl: url } = props.match.params as { postUrl: string };
        if (postsMeta.find((post) => post.path === url)) {
            getMarkdown(url)
                .then((md) => parseMD(md, url))
                .then(setHtml)
                .then(() => setPostExist(true))
                .catch((err) => {
                    console.log(err);
                    setPostExist(false);
                });
        } else {
            setPostExist(false);
        }
        return () => {
            // window.removeEventListener("resize", resizeHandler);
        };
    }, [props.match.params]);

    useEffect(() => {
        if (postExist) {
            try {
                const headings = generateTOC();
                setToc(headings);
                const scrollHandler = () => {
                    const currentId = headings
                        .map((heading) => {
                            return {
                                id: heading.id,
                                top:
                                    document
                                        .getElementById(heading.id)
                                        ?.getBoundingClientRect().top ??
                                    Infinity,
                            };
                        })
                        .sort((a, b) => b.top - a.top)
                        .filter((value) => value.top - 48 - 16 - 1 <= 0)[0];
                    if (currentId) setCurrent(currentId.id);
                };
                viewboxEle?.addEventListener("scroll", scrollHandler);
                const images = Array.from(
                    document
                        .getElementById("content")
                        ?.getElementsByTagName("img") ?? []
                );
                images.forEach((item) => {
                    item.addEventListener("click", openPicture);
                });
                return () => {
                    images.forEach((item) => {
                        item.removeEventListener("click", openPicture);
                    });
                    viewboxEle?.removeEventListener("scroll", scrollHandler);
                };
            } catch (err) {
                console.log(err);
            }
        }
    }, [html, postExist]);
    useEffect(() => {
        const { postUrl: url } = props.match.params as { postUrl: string };
        document.title =
            (postsMeta.find((post) => post.path === url)?.title ??
                "内容未找到") + " - 胜古朝阳";
    }, [props.match.params]);

    return postExist ? (
        <Container
            right={
                mobileView ? (
                    <></>
                ) : (
                    <div
                        style={{
                            position: "sticky",
                            top: "8px",
                            width: "70%",
                        }}
                    >
                        <Feedback />
                    </div>
                )
            }
        >
            <Row>
                <Col xxl={6} xl={6} lg={0} md={0} sm={0} xs={0}>
                    <Area
                        style={{
                            position: "sticky",
                            top: "8px",
                            width: "100%",
                        }}
                    >
                        <TableOfContent toc={toc} currentId={currentId} />
                    </Area>
                </Col>
                <Col xxl={18} xl={18} lg={22} md={24} sm={24} xs={24}>
                    {mobileView ? (<Area
                            id="tocBar"
                            style={{
                                padding: "0 0 0.5rem",
                                position: "sticky",
                                top: 0,
                                left: 0,
                                zIndex: 100,
                            }}
                            cardStyle={{
                                padding: ".5rem",
                                zIndex: 100,
                                borderLeft: "solid 1rem #0050B3",
                                color: "#0050B3",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                cursor: "pointer",
                                boxShadow: "0 0 1rem #8c8c8c",
                            }}
                        >
                            <div
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    fontSize: "1.2rem",
                                }}
                                onClick={() => {
                                    setTocModal(true);
                                }}
                            >
                                {toc.find((item) => item.id === currentId)
                                    ?.title ?? "文章目录"}
                            </div>
                        </Area>) : null}

                    <Area
                        cardStyle={{
                            padding: ".5rem 1rem",
                            paddingLeft: "1.5rem",
                        }}
                    >
                        {post === undefined ? null : (
                            <>
                                <div id={"title"}>{post.title}</div>
                                <div id="tag">
                                    <div id="lastModified" className="tagItem">
                                        <Calendar className="Icon"></Calendar>{" "}
                                        {new Date(
                                            post.lastModified
                                        ).getFullYear()}
                                        /
                                        {new Date(post.lastModified).getMonth()}
                                        /{new Date(post.lastModified).getDate()}
                                    </div>
                                    <div className="tagItem">|</div>
                                    <div id="author" className="tagItem">
                                        作者：{post.authors?.join(" ")}
                                    </div>
                                    <div className="tagItem">|</div>
                                    <div className="tagItem">
                                        审核：{post.editors?.join(" ")}
                                    </div>
                                </div>
                                <div id="readCounter">
                                    <Eyes className="Icon"></Eyes> 浏览量：
                                    {getVisitedCount(`post/${post.path}`)}
                                </div>
                                <div> </div>
                                <div
                                    id="content"
                                    dangerouslySetInnerHTML={{ __html: html }}
                                ></div>
                            </>
                        )}
                    </Area>
                </Col>
            </Row>

            <Modal
                visible={tocModal}
                title={null}
                footer={null}
                onCancel={() => setTocModal(false)}
            >
                <TableOfContent
                    toc={toc}
                    currentId={currentId}
                    afterScroll={() => setTocModal(false)}
                />
            </Modal>
        </Container>
    ) : (
        <Container>
            <Area cardStyle={{ padding: "1rem" }}>
                <h1>页面不见啦！</h1>
                <p>这篇内容可能暂时没有完成，或者它的路径被改变了。</p>
                <p>你可以尝试以下方法：</p>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#f9f0ff",
                            borderLeft: "solid .2rem #722ed1",
                            padding: ".2rem .5rem",
                            cursor: "pointer",
                            marginRight: "1rem",
                        }}
                        onClick={() => history.goBack()}
                    >
                        <Left theme="outline" color="#000" />
                        返回上一页
                    </div>
                    <div
                        style={{
                            backgroundColor: "#f0f5ff",
                            borderLeft: "solid .2rem #2f54eb",
                            padding: ".2rem .5rem",
                            cursor: "pointer",
                            marginRight: "1rem",
                        }}
                        onClick={() => history.push("/")}
                    >
                        <Home theme="outline" color="#000" />
                        返回主页
                    </div>
                </div>
                <div>或者使用右下角的搜索按钮查找需要的内容</div>
            </Area>
        </Container>
    );
}

export default Post;

function generateTOC() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return Array.from(document.getElementById("content")!.children)
        .filter((html) => html.tagName.match(/^H[1-6]/))
        .map((heading) => {
            const id = heading.id;
            const { innerText: title } = heading as HTMLHeadingElement;
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const depth = Number(heading.tagName.match(/^H([1-6])/)![1]);
            return { id, title, depth };
        });
}

function openPicture(e: MouseEvent) {
    const target = e.target as HTMLImageElement;
    window.open(target.src);
}

function TableOfContent(props: {
    toc: TOC;
    currentId: string;
    afterScroll?: () => any;
}) {
    const { toc } = props;
    const history = useHistory();
    const hashTo = (id: string) =>
        history.push({
            hash: `#${id}`,
        });

    return (
        <>
            <h2 className="catalogueTitle">文章目录</h2>
            <div>
                {toc.map((heading) => {
                    return (
                        <div
                            key={heading.id}
                            style={{
                                paddingLeft: `${heading.depth}rem`,
                            }}
                            onClick={() => hashTo(heading.id)}
                            className={`${
                                heading.id === props.currentId
                                    ? "activeTocItem"
                                    : "inactiveTocItem"
                            } tocItem`}
                        >
                            {heading.title}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
