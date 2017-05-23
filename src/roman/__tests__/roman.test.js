import { convertToRoman, decompose } from '../roman'

test('should return a string given a number', () => {
    expect(typeof convertToRoman(123)).toEqual('string')
})

test('should convert to a basic roman symbol', () => {
    expect(convertToRoman(1)).toEqual('I')
    expect(convertToRoman(2)).toEqual('II')
    expect(convertToRoman(3)).toEqual('III')
    expect(convertToRoman(4)).toEqual('IV')
    expect(convertToRoman(5)).toEqual('V')
    expect(convertToRoman(6)).toEqual('VI')
    expect(convertToRoman(7)).toEqual('VII')
    expect(convertToRoman(8)).toEqual('VIII')
    expect(convertToRoman(9)).toEqual('IX')
    expect(convertToRoman(10)).toEqual('X')
    expect(convertToRoman(50)).toEqual('L')
    expect(convertToRoman(100)).toEqual('C')
    expect(convertToRoman(1000)).toEqual('M')
})

test('should decompose a number', () => {
    expect(decompose(1000)).toEqual({high:1000, low: 0})
    expect(decompose(9999)).toEqual({high:9000, low:999})
    expect(decompose(100)).toEqual({high: 100,low: 0})
    expect(decompose(999)).toEqual({high: 900,low: 99})
    expect(decompose(10)).toEqual({high: 10,low: 0})
    expect(decompose(99)).toEqual({high: 90,low: 9})
    expect(decompose(1)).toEqual({high: 1,low: 0})
    expect(decompose(9)).toEqual({high: 9,low: 0})
})

test('should convert a two digit number', () => {
    expect(convertToRoman(11)).toEqual('XI')
    expect(convertToRoman(13)).toEqual('XIII')
    expect(convertToRoman(50)).toEqual('L')
    expect(convertToRoman(58)).toEqual('LVIII')
})

test('should convert a three or more digit number', () => {
    expect(convertToRoman(100)).toEqual('C')
    expect(convertToRoman(101)).toEqual('CI')
    expect(convertToRoman(110)).toEqual('CX')
    expect(convertToRoman(120)).toEqual('CXX')
    expect(convertToRoman(125)).toEqual('CXXV')
    expect(convertToRoman(220)).toEqual('CCXX')
    expect(convertToRoman(350)).toEqual('CCCL')
    expect(convertToRoman(999)).toEqual('CMXCIX')
    expect(convertToRoman(1000)).toEqual('M')
    expect(convertToRoman(2002)).toEqual('MMII')
    expect(convertToRoman(3052)).toEqual('MMMLII')
    expect(convertToRoman(4999)).toEqual('MMMMCMXCIX')
})
