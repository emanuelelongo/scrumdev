import score, { scoreFrame } from '../bowling'

// test('should return a number score given a string', () => {
//     expect(typeof score('')).toEqual('number')
// })

test('should score a strike frame', () => {
    expect(scoreFrame('X', [10, 5])).toEqual({
        pins: [10],
        score: 25,
        bonus: 2
    })
})

test('should score a spare frame', () => {
    expect(scoreFrame('3/', [10, 5])).toEqual({
        pins: [3, 7],
        score: 20,
        bonus: 1
    })
    expect(scoreFrame('9/', [5, 8])).toEqual({
        pins: [9, 1],
        score: 15,
        bonus: 1
    })
})

test('should score a hit+miss frame', () => {
    expect(scoreFrame('5-', [10, 5])).toEqual({
        pins: [5, 0],
        score: 5,
        bonus: 0
    })
})

test('should score a double miss frame', () => {
    expect(scoreFrame('--', [10, 5])).toEqual({
        pins: [0, 0],
        score: 0,
        bonus: 0
    })
})

test('should score a miss+hit frame ', () => {
    expect(scoreFrame('-4', [4, 5])).toEqual({
        pins: [0, 4],
        score: 4,
        bonus: 0
    })
})

test('should ', () => {
    expect(score('X|X|X|X|X|X|X|X|X|X||XX')).toEqual(300)
})

test('should ', () => {
    expect(score('9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||')).toEqual(90)
})

test('should ', () => {
    expect(score('5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5')).toEqual(150)
})

test('should ', () => {
    expect(score('X|7/|9-|X|-8|8/|-6|X|X|X||81')).toEqual(167)
})
