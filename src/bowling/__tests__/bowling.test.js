import { score } from '../bowling'

test('should return a number score given a string', () => {
    expect(typeof score('')).toEqual('number')
})
