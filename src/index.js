module.exports = function check(str, bracketsConfig) {
   let stack = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        stack.push(bracketsConfig[i].join(''))
    }

    for (let i = 0; i < stack.length; i++) {
        if (str.replace(stack[i], '').length !== str.length) {
            str = str.replace(stack[i], '');
            i = -1;
        }
    }

    return str.length == 0 ? true : false;
}
