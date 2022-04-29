
function validate_square_brackets(input : string){
    let depth = 0;
    for(const char of input)
    {
             if(char == '[') depth++;
        else if(char == ']') depth--;
        if(depth == 0 && char.match(/\w/))  return false
        if(depth < 0) return false;
        if(depth > 1) return false;
    }
    if (depth != 0) return false;
               else return true;
}
/*
*   Parse the string input into a list of connection info
*/
export default function parse_string(input : string) : string[][] {

    // ERROR Empty input
    if(input.trim().length == 0) throw "E4 - Invalid input"
    
    // ERROR in square brackets syntax
    if(!validate_square_brackets(input))   throw "E4 - Invalid input"

    // Split the input into a list of connection info
    const connection_info = input
        // Split the input
        .split(/[\[\]]+/)
        // Clean up whitespace
        .map(x => x.trim())
        // Clean up empty connections
        .filter(x => x.length > 0)
        // Split each connection
        .map(x => x.split(","))

    // ERROR More than 3 node connection
    if(connection_info.some(item => item.length != 2)) throw "E4 - Invalid input"

    return connection_info
}