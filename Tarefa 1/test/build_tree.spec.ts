import { build_tree } from '../src/build_tree/build_tree';
describe("operate.ts", () => {

    test("success", () => {
        expect(build_tree("[A,B] [A,C] [B,G] [C,H] [E,F] [B,D] [C,E]")).toBe("A[[B[[G][D]]][C[[H][E[[F]]]]]]");
    })
    
    test("E2 - Cycle",()=>
    {
        expect(() => build_tree("[A,B] [A,C] [B,D] [D,C]")).toThrow("E2 - Cycle");
    })

    test("E3 - Multiple roots",()=>
    {
        expect(() => build_tree("[A,B] [A,C] [B,D] [D,C] [C,A]")).toThrow("E3 - Multiple roots");
    })

    test("E1 - Mora than two children",()=>{
        expect(() => build_tree("[A,B] [A,C] [A,D]")).toThrow("E1 - Mora than two children");
    })

})