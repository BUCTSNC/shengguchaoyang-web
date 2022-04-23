import { Definitions } from "octa";
import {
    flatten,
    uniq,
    intersection,
    compact,
    intersectionBy,
    differenceBy,
} from "lodash";
import { getSupCategory } from "./cateParse";

export function sortByDate(a: Definitions.PostProps, b: Definitions.PostProps) {
    return b.lastModified - a.lastModified;
}

function byPostPath(post: { path: string }) {
    return post.path;
}

export interface MetaSearchResult {
    byTitle: Definitions.PostProps[];
    byIntro: Definitions.PostProps[];
    byCate: Definitions.PostProps[];
    // byAuthor: Definitions.PostProps[];
    byTags: Definitions.PostProps[];
}

export function searchByMeta(
    keywords: string[],
    postsMeta: Definitions.PostProps[],
    categories: Definitions.CategoryProps[]
): MetaSearchResult {
    const byTitle = uniq(
        flatten(
            keywords.map((keyword) =>
                postsMeta.filter((post) =>
                    post.title.match(new RegExp(keyword, "i"))
                )
            )
        )
    );
    const byIntro = uniq(
        flatten(
            keywords.map((keyword) =>
                postsMeta.filter((post) =>
                    post.intro?.match(new RegExp(keyword, "i"))
                )
            )
        )
    );
    const byTags = intersectionBy(
        ...keywords.map((keyword) =>
            postsMeta.filter((post) =>
                post.tags
                    ?.map((author) => author.match(new RegExp(keyword, "i")))
                    .reduce((result, item) => result ?? item)
            )
        ),
        byPostPath
    );
    const byCate = intersectionBy(
        ...keywords.map((keyword) =>
            flatten(
                categories
                    .filter((cate) =>
                        cate.alias.match(new RegExp(keyword, "i"))
                    )
                    .map((cate) =>
                        postsMeta.filter(
                            (post) => getSupCategory(post) === cate.path
                        )
                    )
            )
        ),
        byPostPath
    );
    // const byAuthor = intersectionBy(...keywords.map(keyword => postsMeta.filter(post => post.authors?.map(author => author.match(new RegExp(keyword, "i"))).reduce((result, item) => result ?? item))), byPostPath);
    return {
        byTitle: byTitle.sort(sortByDate),
        byIntro: differenceBy(byIntro, byTitle, byPostPath).sort(sortByDate),
        byTags: differenceBy(byTags, byTitle, byIntro, byPostPath).sort(
            sortByDate
        ),
        byCate: differenceBy(byCate, byTitle, byIntro, byTags, byPostPath).sort(
            sortByDate
        ),
        // byAuthor: differenceBy(byAuthor, byTitle, byIntro, byTags, byCate, byPostPath).sort(sortByDate)
    };
}

export function searchByContent(
    keywords: string[],
    postsContent: Definitions.FlatPost[],
    postsMeta: Definitions.PostProps[]
): Definitions.PostProps[] {
    const paths = intersection(
        ...keywords.map((keyword): string[] =>
            postsContent
                .filter((post) =>
                    post.flatContent.match(new RegExp(keyword, "i"))
                )
                .map((post) => post.path)
        )
    );
    const posts = compact(
        paths.map((path) => postsMeta.find((post) => post.path === path))
    ).sort(sortByDate);
    return posts;
}
