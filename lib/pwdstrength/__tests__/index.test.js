import { pwdstrength, pwdstrengthAdmin } from '../refact'

test('it should have at least 7 characters', () => {
    expect(pwdstrength('aaa')).toBe(false);
})

test('it should have at least one alphabetic characters', () => {
    expect(pwdstrength('12345678')).toBe(false);
})

test('it should have at least one digit', () => {
    expect(pwdstrength('aaaaaaaaaa')).toBe(false);
})

test('it should be an accetaple password', () => {
    expect(pwdstrength('1234567a$')).toBe(true);
})

test('admin password requires at least 10 character', () => {
    expect(pwdstrengthAdmin('1234567')).toBe(false)
})

test('admin password require at least one special character', () => {
    expect(pwdstrengthAdmin('1234567890ABC')).toBe(false)  
})

test('admin password should ends with a number or symbol', () => {
    expect(pwdstrengthAdmin('&1234567890ABC')).toBe(false)
})

test('it should be an accetaple password for admin', () => {
    expect(pwdstrengthAdmin('1234567a$0')).toBe(true);
})

test('it should be an accetaple password for admin', () => {
    expect(pwdstrengthAdmin('1234567a$0')).toBe(true);
})
