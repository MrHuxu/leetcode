class Solution:
    def validIPAddress(self, queryIP: str) -> str:
        if "." in queryIP:
            arr = queryIP.split(".")
            return (
                "IPv4"
                if len(arr) == 4 and all(self.validateV4Part(num) for num in arr)
                else "Neither"
            )
        elif ":" in queryIP:
            arr = queryIP.split(":")
            return (
                "IPv6"
                if len(arr) == 8 and all(self.validateV6Part(num) for num in arr)
                else "Neither"
            )
        else:
            return "Neither"

    def validateV4Part(self, s: str) -> bool:
        if not s:
            return False
        if any(ord(ch) < ord("0") or ord(ch) > ord("9") for ch in s):
            return False
        num = int(s)
        if num < 0 or num > 255:
            return False
        return str(num) == s

    def validateV6Part(self, s: str) -> bool:
        if not s or len(s) > 4:
            return False
        return all(
            ord("0") <= ord(ch) <= ord("9")
            or ord("a") <= ord(ch) <= ord("f")
            or ord("A") <= ord(ch) <= ord("F")
            for ch in s
        )
