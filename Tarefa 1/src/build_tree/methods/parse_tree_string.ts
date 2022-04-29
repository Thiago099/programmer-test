export default function parse_tree_string(input:string) : string[][] {
    return input
        // split the result
        .split(/[\[\]]+/)
        // clean up whitespace
        .map(x => x.trim())
        // clean up empty connections
        .filter(x => x.length > 0)
        // split each connection
        .map(x => x.split(","))
}