def check_braces(filename):
    with open(filename, 'r') as f:
        code = f.read()

    stack = []
    i = 0
    n = len(code)
    line_no = 1
    state = 'normal'
    
    while i < n:
        char = code[i]
        
        if char == '\n':
            line_no += 1
            
        if state == 'normal':
            if i + 1 < n and code[i:i+2] == '//':
                state = 'comment_single'
                i += 1
            elif i + 1 < n and code[i:i+2] == '/*':
                state = 'comment_multi'
                i += 1
            elif char == "'":
                state = 'string_single'
            elif char == '"':
                state = 'string_double'
            elif char == '`':
                state = 'string_backtick'
            elif char in '{[(':
                stack.append((char, line_no))
            elif char in '}])':
                if not stack:
                    print(f"Extra closing bracket '{char}' at line {line_no}")
                    return False
                top_char, top_line = stack.pop()
                if top_char == '${' and char == '}':
                    state = 'string_backtick'
                else:
                    if (top_char == '{' and char != '}') or \
                       (top_char == '[' and char != ']') or \
                       (top_char == '(' and char != ')'):
                        print(f"Mismatch: '{top_char}' from line {top_line} closed by '{char}' at line {line_no}")
                        return False
        elif state == 'comment_single':
            if char == '\n':
                state = 'normal'
        elif state == 'comment_multi':
            if i + 1 < n and code[i:i+2] == '*/':
                state = 'normal'
                i += 1
        elif state == 'string_single':
            if char == '\\':
                i += 1
            elif char == "'":
                state = 'normal'
        elif state == 'string_double':
            if char == '\\':
                i += 1
            elif char == '"':
                state = 'normal'
        elif state == 'string_backtick':
            if char == '\\':
                i += 1
            elif i + 1 < n and code[i:i+2] == '${':
                state = 'normal'
                stack.append(('${', line_no))
                i += 1
            elif char == '`':
                state = 'normal'
            
        i += 1

    if stack:
        for char, line in stack:
            print(f"Unclosed '{char}' from line {line}")
        return False
    else:
        print("All brackets/braces are correctly matched!")
        return True

import os

def check_all_files():
    src_dir = '/Users/siva2004/Desktop/AdonSolution/src'
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith('.jsx') or file.endswith('.js'):
                filepath = os.path.join(root, file)
                print(f"Checking {filepath}...")
                check_braces(filepath)

if __name__ == '__main__':
    check_all_files()
