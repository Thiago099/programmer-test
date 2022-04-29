
import Node from "./entities/binary_tree_node"
import parse_tree_string from './methods/parse_tree_string'
import parse_tree from "./methods/parse_tree"

export default function build_tree(input: string): string 
{
    // ERROR Empty input
    if(input.trim().length == 0) throw "E4 - Invalid input"
    
    // Parse the string input
    const parsed = parse_tree_string(input)

    // ERROR More than 3 node connection
    if(parsed.some(item => item.length != 2)) throw "E4 - Invalid input"
    
    // Parse the tree input
    const node_map = parse_tree(parsed)

    // Find the root and if there are more than one roots
    let roots = 0
    let root : Node | null = null
    for(const key in node_map)
    {
        if(node_map[key].root)
        {
            roots++
            root = node_map[key]
        }
    }

    if(roots != 1)
    {
        // ERROR Cyclic tree
        if(roots == 0) throw "E2 - Cycle"
        // ERROR Multiple root tree
        throw "E3 - Multiple roots"
    }

    // ERROR Cycle in the tree
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
