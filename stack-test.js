/**
 * 解法2：栈
 * 1.构建一个栈
 * 2.依次入栈所有开括号
 * 3.遇到闭括号时与栈顶的开括号匹配
 *   3.1若匹配上，出栈并继续
 *   3.2匹配不上，return false
 * 4.遍历结束后的栈应该为空，否则为无效括号
 */
const isValid = (str) => {
  const bracketsMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const bracketStack = [];
  const openBrackets = Object.keys(bracketsMap);
  const closeBrackets = Object.values(bracketsMap);
  const strArr = Array.from(str)
  for (let i = 0; i < strArr.length; i++) {
    if(openBrackets.indexOf(strArr[i]) !== -1){
      bracketStack.push(strArr[i])
    } else if(closeBrackets.indexOf(strArr[i]) !== -1) {
      const top = bracketStack[bracketStack.length - 1]
      if(bracketsMap[top] == strArr[i]) {
        bracketStack.pop()
      } else {
        return false
      }
    } 
  }
  return bracketStack.length == 0
};

const res = isValid(`var isValid = function(s) {
  var bracketsMap = {
    "(": ")",
    "{": "}",
    "[": "]"
    
  };
  var openBrackets = Object.keys(bracketsMap);
  var closeBrackets = Object.values(bracketsMap);
  var stack = [];
  var sArr = s.split("");
  for (var i = 0; i < sArr.length; i++) {
    if (openBrackets.indexOf(sArr[i]) !== -1) {
      stack.push(sArr[i]);
    } else if (closeBrackets.indexOf(sArr[i]) !== -1) {
      var top = stack[stack.length - 1];
      if (sArr[i] === bracketsMap[top]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}`)
console.log(res)