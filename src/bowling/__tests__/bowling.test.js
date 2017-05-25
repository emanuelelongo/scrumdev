import score, { scoreFrame, lastFramePins } from '../bowling'

test('should score a simple frame', () => {
    expect(scoreFrame('13', [4, 5])).toEqual({
        pins: [1, 3],
        score: 4
    })
})

test('should score a strike frame', () => {
    expect(scoreFrame('X', [10, 5])).toEqual({
        pins: [10],
        score: 25
    })
})

test('should score a spare frame', () => {
    expect(scoreFrame('3/', [10, 5])).toEqual({
        pins: [3, 7],
        score: 20
    })
    expect(scoreFrame('9/', [5, 8])).toEqual({
        pins: [9, 1],
        score: 15
    })
})

test('should score a hit+miss frame', () => {
    expect(scoreFrame('5-', [10, 5])).toEqual({
        pins: [5, 0],
        score: 5
    })
})

test('should score a double miss frame', () => {
    expect(scoreFrame('--', [10, 5])).toEqual({
        pins: [0, 0],
        score: 0
    })
})

test('should score a miss+hit frame ', () => {
    expect(scoreFrame('-4', [4, 5])).toEqual({
        pins: [0, 4],
        score: 4
    })
})

test('should score a miss+spare frame ', () => {
    expect(scoreFrame('-/', [4, 5])).toEqual({
        pins: [0, 10],
        score: 14
    })
})


test('should parse last frame', () => {
    expect(lastFramePins('XX')).toEqual([10, 10])
    expect(lastFramePins('-X')).toEqual([0, 10])
    expect(lastFramePins('X-')).toEqual([10, 0])
    expect(lastFramePins('34')).toEqual([3, 4])
    expect(lastFramePins('3')).toEqual([3])
})

test('should compute score', () => {
    expect(score('X|X|X|X|X|X|X|X|X|X||XX')).toEqual(300)
})

test('should compute score', () => {
    expect(score('9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||')).toEqual(90)
})

test('should compute score', () => {
    expect(score('5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5')).toEqual(150)
})

test('should compute score', () => {
    expect(score('X|7/|9-|X|-8|8/|-6|X|X|X||81')).toEqual(167)
})

test('should compute score', () => {
    expect(score('X|7/|9-|X|-8|8/|-6|X|X|X||X-')).toEqual(170)
})

test('should compute score', () => {
    expect(score('X|7/|9-|X|-8|8/|-6|X|X|X||--')).toEqual(150)
})

test('should compute score', () => {
    expect(score('X|7/|9-|X|-8|8/|-6|X|X|X||3-')).toEqual(156)
})

test('should compute score', () => {
    expect(score('13|5/|X|7/|6-|X|--|-4|4/|0/||3')).toEqual(103)
})
