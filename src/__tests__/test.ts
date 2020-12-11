test('Boolean', () => {
    let myBool = true
    expect(myBool).toBeTruthy()
});

test('basic', () => {
    let a = 1
    expect(a).toBe(1);
});

test('destructuring', () => {
    const response = {
        a: 'a', b: () => {
            return 'b'
        }, c: 34
    }
    const {a, b} = response;
    expect(a).toBe('a')
    expect(b()).toBe('b')
    //c is not available here
});

test('untyped map', () => {
    const myMap = new Map();
    myMap.set(1, 1)
    myMap.set("eins", 1)
    expect(myMap.get(1)).toBe(1)
    expect(myMap.get("eins")).toBe(1)
})