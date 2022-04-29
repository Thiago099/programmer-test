
import Node from "../entities/binary_tree_node";

export default function build_structure(input:string[][]) : Node | null
{
    const tree : {[key: string]: Node} = {};

    function match(value:string) : Node 
    {
        if(tree[value] == undefined)
        {
            const node = new Node(value, null, null);
            tree[value] = node;
            return node;
        }
        else
        {
            return tree[value];
        }
    }

    // build the tree
    for(const item of input)
    {
        const [a, b] = item
        const node_a = match(a);
        const node_b = match(b);
        node_a?.add(node_b);
        node_b.root = false
    }

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
    function dfs(node:Node | null) : void
    {
        if(node == null) return;
        if(node.visited) throw "E2 - Cycle";
        node.visited = true;
        dfs(node.left);
        dfs(node.right);
    }
    return root
}