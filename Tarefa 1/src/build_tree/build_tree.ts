import parse from './methods/parse_tree_string'
import build_structure from "./methods/parse_tree";
export default function build_tree(input: string): string 
{
    if(input.trim().length == 0) throw "E4 - Invalid input";

    const parsed = parse(input)

    if(parsed.some(item => item.length != 2)) throw "E4 - Invalid input"
    
    const root = build_structure(parsed);

    return root?.toString() ?? "";
}
