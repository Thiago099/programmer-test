import { build_tree } from '../src/build_tree';
describe("operate.ts", () => {

    test("case 1", () => {
        expect(build_tree("[A,B] [A,C] [B,G] [C,H] [E,F] [B,D] [C,E]")).toBe("A[[B[[G][D]]][C[[H][E[[F]]]]]]");
    })

    test("case 2", () => {
        expect(build_tree("[A,B] [A,C] [B,G] [C,H] [E,F] [B,D] [C,E] [A,F]")).toBe("A[[B[[G][D]]][C[[H][E[[F]]]]]]");
    })

    test("exception 1",()=>
    {
        expect(()=>build_tree("[A,B] [A,C] [B,D] [D,C]")).toThrow("E3 - Multiple roots");
    })

})