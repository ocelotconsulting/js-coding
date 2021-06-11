describe('duration', () => {
  // for the given number of milliseconds return the number of hours, minutes, and seconds, ignoring any fractional
  // seconds (no need to round)
  function duration(ms) {
  }

  it('tests', () => {
    expect(duration(8628679)).toBe('2 hours, 23 minutes, 48 seconds')
    expect(duration(363000)).toBe('0 hours, 6 minutes, 3 seconds')
  })
})
