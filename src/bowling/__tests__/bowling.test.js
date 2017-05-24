import score, { scoreFrame } from '../bowling'

test('should return a number score given a string', () => {
    expect(typeof score('')).toEqual('number')
})

test('should score a strike frame', () => {
    expect(scoreFrame('X', [10, 5])).toEqual({
        pins: 10,
        score: 25,
        bonus: 2
    })
})

test('should score a spare frame', () => {
    expect(scoreFrame('3/', [10, 5])).toEqual({
        pins: 3,
        score: 25,
        bonus: 1
    })
    expect(scoreFrame('9/', [10, 5])).toEqual({
        pins: 9,
        score: 10,
        bonus: 1
    })
})

test('should score a miss frame', () => {
    expect(scoreFrame('5-', [10, 5])).toEqual({
        pins: 5,
        score: 5,
        bonus: 0
    })
})

test('should score a double miss frame', () => {
    expect(scoreFrame('--', [10, 5])).toEqual({
        pins: 0,
        score: 0,
        bonus: 0
    })
})
