
export default class Node{
    constructor(
        public value: string, 
        public left: Node | null, 
        public right: Node | null,
        public root: boolean = true,
        public visited: boolean = false
    ){}
    add(value: Node):void{
        if(this.left == null){
            this.left = value
        }
        else if(this.right == null)
        {
            this.right = value
        }
        else {
            throw "E1 - Mora than two children"
        }
    }
    toString():string{
        let left : string | undefined = this.left?.toString()
        let right : string | undefined = this.right?.toString()
        if(left) left = `[${left}]`
        if(right) right = `[${right}]`
        if(left) return `${this.value}[${left}${right ?? ''}]`
        return this.value
    }
}