test('Boolean', () => {
    let myBool = true
    expect(myBool).toBeTruthy()
});

test('basic', () => {
    let a = 1
    expect(a).toBe(0);
});

test('destructuring', () => {
    const response = {a: 'a', b: () => {return 'b'}, c: 34}
    const {a, b} = response;
    expect(a).toBe('a')
    expect(b()).toBe('b')
    //c is not available here
});