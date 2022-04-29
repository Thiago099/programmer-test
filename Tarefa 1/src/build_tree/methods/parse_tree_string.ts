export default function parse_tree_string(input:string) : string[][] {
    return input
        .split(/[\[\]]+/)
        .map(x => x.trim())
        .filter(x => x.length > 0)
        .map(x => x.split(","))
}