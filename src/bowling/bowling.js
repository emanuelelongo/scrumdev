export default function score(game) {
    return 0
}

export function scoreFrame(frame, nexts) {
    if(frame === 'X') {
        return {
            pins: 10,
            score: 10 + (nexts[0] || 0) + (nexts[1] || 0),
            bonus: 2
        }
    }

    if(frame.indexOf('/') === 1) {
        return {
            pins: parseInt(frame[0]),
            score: 10 + (nexts[0] || 0),
            bonus: 1
        }
    }

    if(frame.indexOf('-') === 1) {
        return {
            pins: parseInt(frame[0]),
            score: parseInt(frame[0]),
            bonus: 0
        }
    }

    if(frame.indexOf('-') === 0) {
        return {
            pins: 0,
            score: 0,
            bonus: 0
        }
    }
}
