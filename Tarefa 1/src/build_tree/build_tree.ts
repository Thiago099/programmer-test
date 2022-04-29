import parse from './methods/parse_tree_string'
import build_structure from "./methods/parse_tree";
export function build_tree(inputs:string): string 
{
    const root = build_structure(parse(inputs));
    return root?.toString() ?? "";
}
