import Op from '../op'

test('adds 1 + 2 to equal 3', () => {
    const op = new Op()
    expect(op.sum(1, 2)).toBe(3)
})
