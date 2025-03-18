def wrap(string, width):
    lines = []
    for i in range(0, len(string), width):
        lines.append(string[i:i + width])
    return '\n'.join(lines)

string = input()
width = int(input())
    
result = wrap(string, width)
print(result)
