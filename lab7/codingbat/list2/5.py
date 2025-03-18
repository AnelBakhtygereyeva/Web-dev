def sum67(nums):
    total = 0
    inside = False
    for num in nums:
        if num == 6:
            inside = True
        elif num == 7 and inside:
            inside = False
        elif not inside:
            total += num
    return total