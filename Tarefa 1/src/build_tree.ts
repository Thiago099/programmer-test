
class Node{
    constructor(
        public value: string, 
        public left: Node | null, 
        public right: Node | null,
        public root: boolean = true
    ){}
    add(value: Node){
        if(this.left == null){
            this.left = value;
        }
        else if(this.right == null)
        {
            this.right = value;
        }
        else {
            throw "E1 - Node cant have more than two children";
        }
    }
    toString():string{
        let left : string | undefined = this.left?.toString()
        let right : string | undefined= this.right?.toString()
        if(left) left = `[${left}]`
        if(right) right = `[${right}]`
        if(left) return `${this.value}[${left}${right ?? ''}]`;
        return this.value
    }
}
export function build_tree(inputs:string): string {

    //extract data from the input
    const data = inputs
        .split(/[\s\[\]]+/)
        .map(x => x.trim())
        .filter(x => x.length > 0)
        .map(x => x.split(","));

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
    for(const item of data)
    {
        const [a, b] = item
        const node_a = match(a);
        const node_b = match(b);
        node_a?.add(node_b);
        node_b.root = false
    }
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
        throw "E3 - Multiple roots";
    }
        
    console.table(tree);
    return root?.toString() ?? "";

}
