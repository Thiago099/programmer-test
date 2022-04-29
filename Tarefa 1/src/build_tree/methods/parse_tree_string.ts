export default function parse_tree_string(input:string) : string[][] {
    return input
        // Split the input
        .split(/[\[\]]+/)
        // Clean up whitespace
        .map(x => x.trim())
        // Clean up empty connections
        .filter(x => x.length > 0)
        // Split each connection
        .map(x => x.split(","))
}