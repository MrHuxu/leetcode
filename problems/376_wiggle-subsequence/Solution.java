class Solution {
    public int wiggleMaxLength(int[] nums) {
        int ret = 1;

        int[][] cnt = new int[nums.length][2];
        cnt[0] = new int[] { 1, 1 };
        for (int i = 1; i < nums.length; i++) {
            cnt[i] = new int[] { 1, 1 };
            for (int j = i - 1; j >= 0; j--) {
                if (nums[i] == nums[j])
                    continue;

                if (nums[i] > nums[j])
                    cnt[i][1] = Math.max(cnt[i][1], cnt[j][0] + 1);

                if (nums[i] < nums[j])
                    cnt[i][0] = Math.max(cnt[i][0], cnt[j][1] + 1);
            }

            ret = Math.max(ret, cnt[i][0]);
            ret = Math.max(ret, cnt[i][1]);
        }

        return ret;
    }

    public static void main(String[] args) {
        System.out.println(new Solution().wiggleMaxLength(new int[] { 84 }));
        System.out.println(new Solution().wiggleMaxLength(new int[] { 1, 7, 4, 9, 2, 5 }));
        System.out.println(new Solution().wiggleMaxLength(new int[] { 1, 17, 5, 10, 13, 15, 10, 5, 16, 8 }));
    }
}