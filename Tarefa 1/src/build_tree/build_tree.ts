
import Node from "./entities/binary_tree_node";

import parse from './methods/parse_tree_string'
import build_structure from "./methods/parse_tree";
export default function build_tree(input: string): string 
{
    if(input.trim().length == 0) throw "E4 - Invalid input";

    const parsed = parse(input)

    if(parsed.some(item => item.length != 2)) throw "E4 - Invalid input"
    
    const tree = build_structure(parsed);

    // find all roots
    let roots = 0
    let root : Node | null = null
    for(const key in tree)
    {
        if(tree[key].root)
        {
            roots++;
            root = tree[key];
        }
    }

    if(roots != 1)
    {
        if(roots == 0) throw "E2 - Cycle";
        throw "E3 - Multiple roots";
    }

    // find cycles
    dfs(root);
    function dfs(node: Node | null) : void
    {
        if(node == null) return;
        if(node.visited) throw "E2 - Cycle";
        node.visited = true;
        dfs(node.left);
        dfs(node.right);
    }

    return root?.toString() ?? "";
}
