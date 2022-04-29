
import Node from "../entities/binary_tree_node";

export default function build_structure(input:string[][]) : {[key: string]: Node}
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

    return tree
    
}