const add = (...param)=>{
    let result=0;
    param.forEach(elem=>result += elem);
    return result;
}
const sub = (...param)=>{
    let result=0;
    param.forEach(elem=>result = (-1)*(result -elem));
    
    return result;
}
module.exports = {
    add, sub
}

// Note = 1. You can also export like this but only use one method in complete file.

// exports.greet = ()=>{
//     console.log("Hello World");
// }

// export const greet = ()=>{
//     console.log("Hello World");
// }
