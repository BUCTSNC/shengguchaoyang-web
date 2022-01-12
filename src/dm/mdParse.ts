import marked from "marked";
import { compact, flatten } from "lodash";
import { Definitions } from "octa";

export type TOC = Array<{ id: string, title: string, depth: number; }>;

export const parseMD = (md: string, postUrl: string): string => {
    const ast = marked.lexer(md);
    const cleaned = htmlClean(ast as Definitions.AST);
    const converted = astUrlConvert(cleaned, postUrl);
    const imageNoted = imageNotes(converted);
    return marked.parser(imageNoted);
};

export const imageNotes = (ast: Definitions.AST): Definitions.AST => {
    const tokens = ast.map(token => {
        if (token.type === "image") {
            const content = `<i class="imageNotes">${token.text}</i>`;
            return [
                token,
                {
                    type: "html",
                    raw: content,
                    text: content,
                    pre: false
                }
            ];
        }
        if (token.type === "table") return token;
        if ("tokens" in token) return { ...token, tokens: imageNotes(token["tokens"]!) };
        return token;
    });
    const imageNoted = flatten(tokens as Definitions.AST) as Definitions.AST;
    imageNoted.links = ast.links;
    return imageNoted;
};

export const htmlClean = (ast: Definitions.AST): Definitions.AST => {
    const tokens = compact(ast.map(item => {
        if (item.type === "html") {
            if (item.raw.match(/(<script>|<style>)/)) return null;
            return item;
        }
        if (item.type === "table") return item;
        if ("tokens" in item) {
            const tokens = htmlClean(item.tokens!);
            return { ...item, tokens };
        }
        return item;
    })) as Definitions.AST;
    tokens.links = ast.links;
    return tokens;
};

const convertRelativeUrl = (url: string, postUrl: string) => {
    const { srcUrl, postPrefix } = {
        srcUrl: url.split("\\").join("/"),
        postPrefix: postUrl.split("\\").join("/")
    };
    return srcUrl.match(/^\.\//) ? `/posts/${postPrefix}/${srcUrl}` : srcUrl;
};

export const astUrlConvert = (ast: Definitions.AST, postUrl: string): Definitions.AST => {
    const tokens = ast.map(item => {
        if (item.type === "table") return item;
        if (item.type === "html") {
            const html = item.raw;
            const newHtml = htmlUrlConvert(html, postUrl);
            return { ...item, raw: newHtml, text: newHtml };
        }
        if ("href" in item) {
            const href = convertRelativeUrl(item.href, postUrl);
            return {
                ...item, href
            };
        }
        if ("tokens" in item) {
            const tokens = astUrlConvert(item.tokens!, postUrl);
            return {
                ...item, tokens
            };
        }
        return item;
    }) as Definitions.AST;
    tokens.links = ast.links;
    return tokens;
};

const htmlUrlConvert = (html: string, postUrl: string) => {
    const newHtml = html.replace(/\ src="(.*)"/g, (str, para1) => {
        const newStr = str.replace(para1, convertRelativeUrl(para1, postUrl));
        return newStr;
    }).replace(/\ href="(.*)"/g, (str, para1) => {
        const newStr = str.replace(para1, convertRelativeUrl(para1, postUrl));
        return newStr;
    });
    return newHtml;
};
