function sayIt(str) {
    if (str) {
        let sentence = str;
        return function (nextStr) {
            if (nextStr) {
                sentence += ` ${nextStr}`;
                return arguments.callee;
            } else {
                return sentence;
            }
        }
    }
    else {
        return false
    }
}
console.log(sayIt('my')('name', 'is')('Jonathan')()); //'my name is Jonathan'
console.log(sayIt('Hello')('how')('are')('you')()); //'Hello how are you'
