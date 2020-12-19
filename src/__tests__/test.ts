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

it('typed map', () => {
  const stringIntMap: Record<string, number> = {}
  stringIntMap["niklas"] = 20
  stringIntMap["bernd"] = 25

  expect(stringIntMap["niklas"]).toBe(20)
  expect(stringIntMap["bernd"]).toBe(25)

});

it('filter array', () => {
  const values = [1, 2, 3, 4, 5, 6, 7]
  const filtered = values.filter(item => item > 3);
  expect(filtered).toEqual([4, 5, 6, 7])
});

test('merge objects', () => {
  const firstObject = {a: 1}
  const secondObjecet = {b: 2}
  const merged = {...firstObject, ...secondObjecet, c: 3}
  expect(merged).toEqual({a: 1, b: 2, c: 3})
})

class MyType {
  key: number
  value: string
}

test('list groupingBy field (std lib does not provide an easier solution)', () => {
  const list: Array<MyType> = [
    {key: 1, value: 'first1'},
    {key: 1, value: 'first2'},
    {key: 2, value: 'second1'},
    {key: 2, value: 'second2'}]
  const grouped = list.reduce((r, a) => {
    r[a.key] = [...r[a.key] || [], a]
    return r
  }, {})

  expect(grouped).toHaveLength(2)
  expect(grouped[1]).toContain({key: 1, value: 'first1'})
  expect(grouped[1]).toContain({key: 1, value: 'first2'})
  expect(grouped[2]).toContain({key: 2, value: 'second1'})
  expect(grouped[2]).toContain({key: 2, value: 'second2'})
})