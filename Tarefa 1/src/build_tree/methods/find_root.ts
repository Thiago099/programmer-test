
/*
*    Validate the tree and find the root
*/
import Node from "../entities/binary_tree_node"
export default function find_root(node_map : {[key : string] : Node}) : Node | null
{
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

    return root
}