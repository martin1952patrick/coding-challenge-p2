// A string brackets is correctly matched if you can pair every opening brackets
//  up with a later closing bracket, and vice versa . For example ,"(()())" is
//  correctly matched and "(()" and ")(" are not .

//  Implement a function  which takes a string of brackets and return the minimum
//  number of brackets you'd have to add to the string to make it correctly matched

// def match_brackets(s: str) -> int:
// stack = []
// count = 0
// for ch in s:
//     if ch == '(':
//         stack.append(ch)
//     elif ch == ')':
//         if not stack or stack[-1] != '(':
//             count += 1
//         else:
//             stack.pop()
// return count + len(stack)
