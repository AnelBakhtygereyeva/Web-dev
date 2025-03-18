def make_chocolate(small, big, goal):
    max_big = min(big, goal // 5)
    if goal - max_big * 5 <= small:
        return goal - max_big * 5
    return -1