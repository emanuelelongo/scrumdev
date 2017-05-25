export default function score(game) {
    const frames = game.replace('||', '|').split('|')
        
    let pins = [...lastFramePins(frames[10]), 0, 0]
    let total = 0
    for(let i = 9; i >= 0; i--) {
        const res = scoreFrame(frames[i], [pins[0], pins[1]])
        pins = [...res.pins, ...pins]
        total += res.score
    }
    return total
}

export function lastFramePins(frame) {
    return (frame||'00').split('').map(i => {
        return i == 'X' ? 10: (parseInt(i) || 0)
    })
}

export function scoreFrame(frame, nexts) {
    frame = frame.replace(/-/g, '0')
    if(frame === 'X') {
        return {
            pins: [10],
            score: 10 + nexts[0] + nexts[1]
        }
    }
    if(frame.indexOf('/') === 1) {
        const first = parseInt(frame[0])
        return {
            pins: [first, 10-first],
            score: 10 + nexts[0]
        }
    }
    return {
        pins: [parseInt(frame[0]), parseInt(frame[1])],
        score: parseInt(frame[0]) + parseInt(frame[1])
    }
}
