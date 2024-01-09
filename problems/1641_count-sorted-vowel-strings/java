class Solution {
    public int countVowelStrings(int n) {
        int[] arr = { 1, 1, 1, 1, 1 };
        for (int i = 1; i < n; i++) {
            for (int j = 1; j < 5; j++) {
                arr[j] += arr[j - 1];
            }
        }
        return arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
    }
}