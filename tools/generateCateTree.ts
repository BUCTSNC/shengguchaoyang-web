import { writeFile } from "fs/promises";
import * as octa from "octa";

octa.scanDir("./public/posts/", "./", null, true).then(async tree => {
    const { posts } = octa.ClimbTree.climbTree(tree);
    const searchDB = await octa.ParseMarkdown.parseAllPosts(posts, "./public/posts").then(octa.GenSearchDB.flattenAllPosts);
    return Promise.all([
        writeFile("./public/posts/tree.json", JSON.stringify(tree), "utf-8"),
        writeFile("./public/posts/searchDB.json", JSON.stringify(searchDB), "utf-8")
    ]);
}).catch(console.log);