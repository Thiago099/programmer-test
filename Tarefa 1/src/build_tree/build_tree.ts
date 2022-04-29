
import parse_string from './methods/parse_string'
import parse_connection_info from "./methods/parse_connection_info"
import find_root from './methods/find_root'

export default function build_tree(input: string): string 
{
    // Parse the string input into a list of connection info
    const connection_info = parse_string(input)
    
    // Create a tree from the connection info
    const node_map = parse_connection_info(connection_info)

    // Validate the tree and find the root
    const root = find_root(node_map)

    // Uses the tree to build the expected string
    return root?.toString() ?? ""
}
