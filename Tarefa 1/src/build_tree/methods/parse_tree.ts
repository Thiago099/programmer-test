
import Node from "../entities/binary_tree_node"

export default function parse_tree(input:string[][]) : {[key: string]: Node}
{
    const all_nodes : {[key: string]: Node} = {}

    /* 
    *  Find the node if it is already created otherwise create it
    */
    function match(value:string) : Node 
    {
        if(all_nodes[value] == undefined)
        {
            const node = new Node(value, null, null)
            all_nodes[value] = node
            return node
        }
        else
        {
            return all_nodes[value]
        }
    }

    // build the all_nodes
    for(const item of input)
    {
        const [a, b] = item
        const node_a = match(a)
        const node_b = match(b)
        node_a?.add(node_b)
        node_b.root = false
    }

    return all_nodes
    
}