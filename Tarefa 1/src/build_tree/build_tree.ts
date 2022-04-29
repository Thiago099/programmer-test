
import Node from "./entities/binary_tree_node"
import parse_tree_string from './methods/parse_tree_string'
import parse_tree from "./methods/parse_tree"

export default function build_tree(input: string): string 
{
    if(input.trim().length == 0) throw "E4 - Invalid input"

    const parsed = parse_tree_string(input)

    if(parsed.some(item => item.length != 2)) throw "E4 - Invalid input"
    
    const all_nodes = parse_tree(parsed)

    // find all roots
    let roots = 0
    let root : Node | null = null
    for(const key in all_nodes)
    {
        if(all_nodes[key].root)
        {
            roots++
            root = all_nodes[key]
        }
    }

    if(roots != 1)
    {
        if(roots == 0) throw "E2 - Cycle"
        throw "E3 - Multiple roots"
    }

    // find cycles
    dfs(root)
    function dfs(node: Node | null) : void
    {
        if(node == null) return
        if(node.visited) throw "E2 - Cycle"
        node.visited = true
        dfs(node.left)
        dfs(node.right)
    }

    return root?.toString() ?? ""
}
