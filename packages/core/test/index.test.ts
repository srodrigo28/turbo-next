import { somar } from "../src"

test('Deve somar dois números', () => {
    const rs =  somar(2,3)
    expect(rs).toBe(5)
})