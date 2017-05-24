export default function score(game) {
    const frames = game
        .replace('||', '|')
        .split('|')

    let pins = [parseInt(frames[10][0])||10, parseInt(frames[10][1])||10]
    let total = 0
    for(let i = 9; i >= 0; i--) {
        const res = scoreFrame(frames[i], [pins[0], pins[1]])
        pins = [...res.pins, ...pins]
        total += res.score
    }
    return total
}

export function scoreFrame(frame, nexts) {
    frame = frame.replace(/-/g, '0')

    if(frame === 'X') {
        return {
            pins: [10],
            score: 10 + (nexts[0] || 0) + (nexts[1] || 0),
            bonus: 2
        }
    }

    if(frame.indexOf('/') === 1) {
        const first = parseInt(frame[0])
        return {
            pins: [first, 10-first],
            score: 10 + (nexts[0] || 0),
            bonus: 1
        }
    }

    return {
        pins: [parseInt(frame[0]), parseInt(frame[1])],
        score: parseInt(frame.replace('0', '')),
        bonus: 0
    }
}
