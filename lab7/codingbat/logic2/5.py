def round_sum(a, b, c):
    def round10(n):
        return (n + 5) // 10 * 10
    return round10(a) + round10(b) + round10(c)