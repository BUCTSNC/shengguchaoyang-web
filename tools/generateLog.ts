import { argv, cwd } from "process";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const [logFile] = argv.slice(2)
const file = readFileSync(join(cwd(), logFile), { encoding: "utf-8" })
const targets = file.split("\n")
    .map(log => log.split(" ")[11]).filter(value => typeof value === "string")
    .map(value => value.replace(/\"/g, ""))
    .filter(value => value.match(/(index.md)$/))
    .map(target => target.replace(/(index.md)$/, ""))
    .map(target => target.replace(/^\//, ""))
const visitedCounts: { [path: string]: number } = targets.reduce(
    (logs, next) => {
        if (next in logs) {
            return { ...logs, next: logs[next] + 1 }
        } else {
            return { ...logs, next: 1 }
        }
    }, {}
)
writeFileSync(join(__dirname, "..", "public", "posts", "logs.json"), JSON.stringify(visitedCounts))
