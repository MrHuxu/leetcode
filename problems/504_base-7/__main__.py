class Solution:
    def convertToBase7(self, num: int) -> str:
        if num == 0:
            return "0"
        sym, result, num = "" if num > 0 else "-", "", abs(num)
        while num > 0:
            num, remainder = divmod(num, 7)
            result = str(remainder) + result
        return sym + result
