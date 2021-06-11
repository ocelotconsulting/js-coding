describe('sort objects', () => {
  const alice = {
    name: 'Alice',
    age: 28
  }

  const bob = {
    name: 'Bob',
    age: 22
  }

  const carlos = {
    name: 'Carlos',
    age: 35
  }

  function sortOldestFirst(input) {
    return input
  }

  it('tests', () => {
    expect(sortOldestFirst([alice, bob, carlos])).toEqual([carlos, alice, bob])
  })
})
