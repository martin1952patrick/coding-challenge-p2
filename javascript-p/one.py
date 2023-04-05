def match_brackets(s: str) -> int:
    stack = []
    count = 0
    for ch in s:
        if ch == '(':
            stack.append(ch)
        elif ch == ')':
            if not stack or stack[-1] != '(':
                count += 1
            else:
                stack.pop()
    return count + len(stack)
