package question_67;

class Solution67 {
    public String addBinary(String a, String b) {
        char[] l;
        char[] s;
        if (a.length() > b.length()) {
            l = a.toCharArray();
            s = b.toCharArray();
        } else {
            l = b.toCharArray();
            s = a.toCharArray();
        }

        char[] sum = new char[l.length];
        int carry = 0;
        for (int i = 0; i < l.length; i++) {
            carry += l[l.length - 1 - i] - '0';
            if (i < s.length) carry += s[s.length - 1 - i] - '0';

            sum[sum.length - 1 - i] = (Character.forDigit(carry % 2, 10));
            carry = carry / 2;
        }

        String res = new String(sum);
        return carry > 0 ? "1" + res : res;
    }
}
