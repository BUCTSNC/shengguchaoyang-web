import { Button } from "antd";
import { Definitions } from "octa";
import { climbTree } from "octa/lib/ClimbTree";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { CateTree } from "../App";
import Container, { ContainerNG } from "../components/Container";
import { Feedback } from "../components/Feedback";
import { PostCard } from "../components/PostCard";
import "./CategoryPage.css";

export const CategoryPage = () => {
    const history = useHistory();
    const { category: categoryPath } = useParams<{ category: string }>();
    const categoriesChain = categoryPath.split("/");
    const { cates } = climbTree(useContext(CateTree));
<<<<<<< HEAD
    // const width = window.innerWidth;
=======
>>>>>>> cf60cb99739d21e1228e04720ca79b2d843a10b7
    const parseCategory = (): Definitions.CategoryProps | undefined => {
        const cate = cates.find((cate) => cate.path === categoryPath);
        return cate;
    };
    const [size, resize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const onResize = useCallback(() => {
        resize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, []);
    useEffect(() => {
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, [onResize]);
    const [categoryInfo, setCategory] = useState<
        Definitions.CategoryProps | undefined
    >(parseCategory());
    useEffect(() => {
        setCategory(parseCategory);
    }, [categoryPath, cates]);
    useEffect(() => {
        document.title = `${categoryInfo?.alias} - 胜古朝阳`;
    }, [categoryInfo?.alias]);
    return (
<<<<<<< HEAD
        <Container
            right={
                size.width/size.height < 1 ? (
                    <> </>
                ) : (
                    <div style={{ top: 8, position: "sticky" ,width:'70%'}}>
                        <Feedback />
=======
        <ContainerNG>
            <Container
                right={
                    size.width / size.height < 1 ? (
                        <> </>
                    ) : (
                        <div style={{ top: 8, position: "sticky" }}>
                            <Feedback />
                        </div>
                    )
                }
            >
                {categoryInfo === undefined ? (
                    <div>
                        <p>未能找到目录{categoryPath}，你可以尝试：</p>
                        <Button
                            type="primary"
                            onClick={() => {
                                const upLevelCategory = categoriesChain.slice(
                                    0,
                                    categoriesChain.length
                                );
                                history.push(
                                    `/cate/${upLevelCategory.join("/")}`
                                );
                            }}
                        >
                            返回上级目录
                        </Button>
                        <Button
                            type="primary"
                            onClick={() => history.push("/")}
                        >
                            返回主页
                        </Button>
                        <Button type="primary" onClick={history.goBack}>
                            返回上一个页面
                        </Button>
>>>>>>> cf60cb99739d21e1228e04720ca79b2d843a10b7
                    </div>
                ) : (
                    <div className="CategoryPage">
                        {/* 多级目录导航，未启用 */}
                        {/* <div>
                        {
                            traceToRoot(categoryInfo, cates).map(
                                (category, index) => <div key={index} onClick={() => history.push(`/cate/${category.path}`)}>
                                    {category.alias}
                                </div>
                            )
                        }
                    </div> */}
                        {/* <h2>{categoryInfo.alias}</h2> */}
                        <div>
                            {categoryInfo.childPosts.map((post, index) => (
                                <PostCard key={index} post={post}></PostCard>
                            ))}
                        </div>
                        {/* 子目录导航，未启用 */}
                        {/* <h3>子目录</h3>
                    <div>
                        {
                            categoryInfo.childCates.map(
                                (cate, index) => <div key={index} onClick={() => history.push(`/cate/${cate.path}`)}>{cate.alias}</div>
                            )
                        }
                    </div> */}
                    </div>
                )}
            </Container>
        </ContainerNG>
    );
};
