import { dropRight } from "lodash";
import { Definitions } from "octa";

export const traceToRoot = (category: Definitions.CategoryProps | undefined, categories: Definitions.CategoryProps[]): Definitions.CategoryProps[] => {
    if (category === undefined) {
        return [{
            path: "./", alias: "", childCates: [], childPosts: []
        }];
    }
    else {
        const supCategoryMeta = categories.find(cate => cate.path === getSupCategory(category));
        return [...traceToRoot(supCategoryMeta, categories), category];
    }
};

export const getSupCategory = (directory: Definitions.CategoryProps | Definitions.PostProps | Definitions.FlatPost | Definitions.PostContents) => {
    const path = directory.path;
    if (path === "./") return null;
    const supCate = dropRight(path.split("/")).join("/");
    return Boolean(supCate) ? supCate : "./";
};