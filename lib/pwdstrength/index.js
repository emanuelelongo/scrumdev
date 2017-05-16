// export default function pwdstrength(str, isAdmin = false) {
//     const minLength = isAdmin ? 10 : 7;

//     if(str.length < minLength)
//         return false;

//     if(str.match(/[a-z]/i) == null)
//         return false;

//     if(str.match(/[0-9]/) == null)
//         return false;

//     if(isAdmin && str.match(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/) == null) {
//         return false;
//     }

//     if(isAdmin && str[str.length-1].match(/[0-9]/) == null) {
//         return false;
//     }

//     return true    
// }
