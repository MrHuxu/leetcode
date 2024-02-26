from typing import Dict


class Solution:
    def fractionToDecimal(self, numerator: int, denominator: int) -> str:
        sym = "-" if numerator * denominator < 0 else ""
        numerator, denominator = abs(numerator), abs(denominator)

        i_part = numerator // denominator
        if numerator % denominator == 0:
            return sym + str(i_part)

        f_part, extra = "", numerator % denominator
        visited_extra: Dict[int, int] = {extra: 0}
        while extra != 0:
            extra *= 10
            f_part += str(extra // denominator)
            extra %= denominator
            if extra not in visited_extra:
                visited_extra[extra] = len(f_part)
                continue

            loop_len = len(f_part) - visited_extra[extra]
            f_part = (
                f_part[: len(f_part) - loop_len]
                + f"({f_part[len(f_part) - loop_len:]})"
            )
            return f"{sym}{i_part}.{f_part}"

        return f"{sym}{i_part}.{f_part}"


solution = Solution()
print(solution.fractionToDecimal(1, 6))
print(solution.fractionToDecimal(-50, 8))
