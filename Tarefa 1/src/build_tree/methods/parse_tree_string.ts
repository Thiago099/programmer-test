export default function parse(input:string) : string[][] {
    return input
        .split(/[\[\]]+/)
        .map(x => x.trim())
        .filter(x => x.length > 0)
        .map(x => x.split(","));
}