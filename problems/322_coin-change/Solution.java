import java.util.HashMap;
import java.util.Map;

class Solution {
    public int coinChange(int[] coins, int amount) {
        Map<Integer, Integer> dp = new HashMap<>();
        dp.put(0, 0);

        for (int coin : coins)
            dp.put(coin, 1);

        for (int i = 1; i <= amount; i++) {
            if (dp.containsKey(i))
                continue;

            for (int j = 0; j < coins.length; j++) {
                if (i - coins[j] >= 0 && i - coins[j] <= amount && dp.containsKey(coins[j])
                        && dp.get(coins[j]) != -1
                        && dp.containsKey(i - coins[j]) && dp.get(i - coins[j]) != -1) {
                    dp.put(i, dp.containsKey(i) ? Math.min(dp.get(i), dp.get(coins[j]) + dp.get(i - coins[j]))
                            : dp.get(coins[j]) + dp.get(i - coins[j]));
                }
            }

            dp.putIfAbsent(i, -1);
        }

        return dp.getOrDefault(amount, -1);
    }

    public static void main(String[] args) {
        System.out.println(new Solution().coinChange(new int[] { 1, 2, 5 }, 11));
        System.out.println(new Solution().coinChange(new int[] { 2 }, 3));
        System.out.println(new Solution().coinChange(new int[] { 1 }, 0));
        System.out.println(new Solution().coinChange(new int[] { 186, 419, 83, 408 }, 6249));
    }
}