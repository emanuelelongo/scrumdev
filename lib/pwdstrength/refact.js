const checkMinLength = (str, isAdmin) => {
    const minLength = isAdmin ? 10 : 7;
    return str.length >= minLength;
}

const checkAlpha = (str) => str.match(/[a-z]/i) != null;
const checkDigit = (str) => str.match(/[0-9]/) != null;
const checkSymbols = (str, isAdmin) => !isAdmin || str.match(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) != null;
const checkLastDigit = (str, isAdmin) => !isAdmin 
                                        || str[str.length-1].match(/[0-9]/) != null
                                        || str[str.length-1].match(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) != null;

export function pwdstrength(str, isAdmin = false) {
    return checkMinLength(str, isAdmin)
        && checkAlpha(str)
        && checkDigit(str)
        && checkSymbols(str, isAdmin)
        && checkLastDigit(str, isAdmin);
}

export function pwdstrengthAdmin(str) {
    return pwdstrength(str, true)
}
