import { constant } from "lodash";
import { climbTree } from "octa/lib/ClimbTree";
import { PostProps } from "octa/lib/Definitions";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CateTree } from "../App";
import { getSupCategory, traceToRoot } from "../dm/cateParse";
import "./PostCard.css"

export const PostCard = (props: { post: PostProps; }) => {
    const { post } = props;
    const history = useHistory();
    const { cates } = climbTree(useContext(CateTree));
    const categoryPath = getSupCategory(post);
    const category = categoryPath && cates.find(cate => cate.path === categoryPath) || null;
    const categoryDisplay = category && traceToRoot(category, cates).map(cate => cate.alias);
    // const headimg = post.headerImage
    const imgPath = `/posts/${post.path}/${post.headerImage}`
    return <div className="PostCard" onClick={() => history.push(`/post/${post.path}`)}>
        <div className="PostCard-text">
            <h2 className="PostCard-Title">{post.title}</h2>
            {(categoryDisplay && category) ? <p className="PostCard-Category" onClick={() => `/cate/${category.path}`}>{categoryDisplay}</p> : null}
            {post.intro ? <p className="PostCard-intro">{post.intro}</p> : null}
            <div className="PostCard-info">
                <div>1000 阅读</div>
                <div style={{fontWeight:550}}>·</div>
                <div>2021-10-08 更新</div>
            </div>
            <TagsList tags={post.tags} />
        </div>
        <div className="PostCard-img">
            <div className="Head-img-box" >
                
            {post.headerImage? <img id= 'img' src={imgPath} className='Head-img' alt=""/>:null}
                
                
            </div>

        </div>

        
        
    </div>;
};

export const TagsList = (props: { tags?: string[]; }) => {
    const { tags } = props;
    if (tags === undefined) return null;
    // 加入跳转到搜索界面并输入标签作为关键字的函数
    return <div className="TagsList">
        {tags.map((tag, index) => <div className="TagsList-Tag" key={index} onClick={() => { }}>{tag}</div>)}
    </div>;
};
