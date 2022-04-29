
import Node from "../entities/binary_tree_node"
/*
*    Create a tree from the connection info
*/
export default function parse_tree(input:string[][]) : {[key: string]: Node}
{
    const node_map : {[key: string]: Node} = {}

    /* 
    *  Find the node if it is already created otherwise create it
    */
    function match(value:string) : Node 
    {
        if(node_map[value] == undefined)
        {
            const node = new Node(value, null, null)
            node_map[value] = node
            return node
        }
        else
        {
            return node_map[value]
        }
    }

    // Insert the connections on each node
    for(const item of input)
    {
        const [a, b] = item
        const node_a = match(a)
        const node_b = match(b)
        node_a?.add(node_b)
        node_b.root = false
    }

    return node_map
    
}