describe('anagrams', () => {
  // returns true if the two strings are anagrams (have the same letters but in different order) of one another
  // no need to remove whitespace
  function areAnagrams(s1, s2) {
  }

  it('tests', () => {
    expect(areAnagrams('abc', 'cba')).toBe(true)
    expect(areAnagrams('abc', 'abc')).toBe(false)
  })
})
