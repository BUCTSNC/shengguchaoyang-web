export const httpUrl = (url: string) => {
    if(url.match(/^http/)) return url
    return `http://${url}`
}

export default httpUrl