import build_tree from '../src/build_tree/build_tree'
describe("build_tree.ts", () => {

    test("Success", () => {
        expect(build_tree("[A,B] [A,C] [B,G] [C,H] [E,F] [B,D] [C,E]"))
            .toBe("A[[B[[G][D]]][C[[H][E[[F]]]]]]")
    })
    
    test("E1 - More than two children",()=>{
        expect(() => build_tree("[A,B] [A,C] [A,D]"))
            .toThrow("E1 - More than two children")
    })

    test("E2 - Cycle",()=>
    {
        expect(() => build_tree("[A,B] [B,C] [C,B]"))
            .toThrow("E2 - Cycle")

        expect(() => build_tree("[A,B] [A,C] [C,A]"))
            .toThrow("E2 - Cycle")
    })

    test("E3 - Multiple roots",()=>
    {
        expect(() => build_tree("[A,B] [C,D]"))
            .toThrow("E3 - Multiple roots")
    })

    test("E4 - Invalid input",()=>{

        expect(() => build_tree("[A,B,C]"))
            .toThrow("E4 - Invalid input")

        expect(() => build_tree(""))
            .toThrow("E4 - Invalid input")

        expect(() => build_tree("[A,B] B,C]"))
            .toThrow("E4 - Invalid input")

        expect(() => build_tree("[A,[B,C]]"))
            .toThrow("E4 - Invalid input")

        expect(() => build_tree("[A,B] B,C"))
            .toThrow("E4 - Invalid input")
    })
    

})