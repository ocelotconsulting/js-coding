describe('palindromes', () => {
  // returns true if the string is a palindrom
  // a palindrome is the same string forwards and backwards once you remove all spaces
  function isPalindrome(s) {
  }

  it('tests', () => {
    expect(isPalindrome('abc')).toBe(false)
    expect(isPalindrome('radar')).toBe(true)
    expect(isPalindrome('able was i ere i saw elba')).toBe(true)
  })
})
