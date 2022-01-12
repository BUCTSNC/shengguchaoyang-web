// import { Definitions } from "octa";

// export const getCategories = async (): Promise<Definitions.CategoryProps[]> => {
//     return fetch("/posts/categories.json")
//         .then(res => res.json()) as Promise<Definitions.CategoryProps[]>;
// };

// export const getPostsMeta = async (): Promise<Definitions.PostProps[]> => {
//     return fetch("/posts/postsMeta.json")
//         .then(res => res.json()) as Promise<Definitions.PostProps[]>;
// };

// export const getSearchDB = async (): Promise<{ postID: string, flatContent: string; }[]> => {
//     return fetch("/posts/searchDB.json")
//         .then(res => res.json()) as Promise<{ postID: string, flatContent: string; }[]>;
// };

export const getMarkdown = async (path: string): Promise<string> => {
    return fetch(`/posts/${path}/index.md`)
        .then(res => res.text());
};

export const getUUID = async (path: string): Promise<string> => {
    return fetch(`/posts/${path}/.uuid`)
        .then(res => res.text());
};
