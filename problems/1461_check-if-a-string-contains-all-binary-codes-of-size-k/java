import java.util.HashSet;
import java.util.Set;

class Solution {
    public boolean hasAllCodes(String s, int k) {
        int cnt = (int) Math.pow(2, k);
        Set<String> binaryCodes = new HashSet<>();
        for (int i = 0; i <= s.length() - k; i++) {
            binaryCodes.add(s.substring(i, i + k));

            if (binaryCodes.size() == cnt)
                return true;
        }

        return false;
    }

    public static void main(String[] args) {
        System.out.println(new Solution().hasAllCodes("00110110", 2));
        System.out.println(new Solution().hasAllCodes("0110", 1));
        System.out.println(new Solution().hasAllCodes("0110", 2));
        System.out.println(new Solution().hasAllCodes(
                "011111011101111000010111100001011010010011010100100111101101011010111011011100110001011010001000100110010000101010000000111000010001011001110011100000100101000011110010000101001111110001001010111000011010011111111100011110000111110101101",
                18));
    }
}