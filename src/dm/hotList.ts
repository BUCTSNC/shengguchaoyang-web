import Ajv, { JTDSchemaType } from "ajv/dist/jtd";
const ajv = new Ajv({
    int32range: false
});

type Visited = {
    path: string, count: number
}[]

const schema: JTDSchemaType<Visited> = {
    elements: {
        properties: {
            path: { type: "string" },
            count: { type: "uint32" }
        }
    }
}

const validator = ajv.compile(schema)

let visitedLog: Visited = [];

export function loadHotList() {
    return fetch(`/api/visited/`, {
        mode: "cors"
    })
        .then(res => res.json())
        .then(json => {
            if (validator(json)) return json;
            throw new Error("Invalid data")
        })
        .then(visited => {
            visitedLog = visited
            return visited
        })
        .catch(err => {
            console.log("Can't get visited log.")
            console.log(JSON.stringify(err))
            return null
        })
}

type NanoID = {
    id: string, sign: string
}

const nanoIdSchema: JTDSchemaType<NanoID> = {
    properties: {
        id: { type: "string" },
        sign: { type: "string" }
    }
}

const nanoIdValidator = ajv.compile(nanoIdSchema)

export function getNanoID() {
    return fetch(`/api/visited/nanoid`, {
        mode: "cors"
    })
        .then(res => res.json())
        .then(json => {
            if (nanoIdValidator(json)) return json;
            throw new Error("Invalid data");
        })
        .then(nanoId => {
            localStorage.setItem("id", nanoId.id)
            localStorage.setItem("sign", nanoId.sign)
            return nanoId
        })
        .catch(err => {
            console.log("Failed to get an nanoid, retry later");
            console.log(JSON.stringify(err))
            return null
        })
}

async function loadNanoId() {
    const id = localStorage.getItem("id");
    const sign = localStorage.getItem("sign");
    const nanoId: NanoID = id === null || sign === null ? await getNanoID() ?? { id: "", sign: "" } : { id, sign }
    return nanoId
}

export async function logVisit(url: string) {
    const nanoId = await loadNanoId();
    return fetch(`/api/visited/${url}?id=${nanoId.id}&sign=${nanoId.sign}`, {
        mode: "cors", method: "PUT"
    })
        .then(res => {
            if (res.status === 403) getNanoID();
            return res.ok;
        })
        .catch((err) => {
            console.log(JSON.stringify(err))
            return false
        })
}

export function getVisitedCount(url: string) {
    return visitedLog.find(log => log.path === url)?.count ?? 0
}

export function getMostVisited(filterFn: (log: Visited[number]) => boolean, amount: number) {
    return visitedLog.filter(filterFn)
        .sort((a, b) => b.count - a.count)
        .slice(0, amount)
}

loadHotList();
loadNanoId();
