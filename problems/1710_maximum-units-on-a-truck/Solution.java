import java.util.Arrays;

class Solution {
    public int maximumUnits(int[][] boxTypes, int truckSize) {
        Arrays.sort(boxTypes, (a, b) -> b[1] - a[1]);

        int ret = 0;

        for (int[] boxType : boxTypes) {
            if (truckSize == 0) break;

            int cnt = 0;
            if (boxType[0] <= truckSize) {
                cnt = boxType[0];
                truckSize -= boxType[0];
            } else {
                cnt = truckSize;
                truckSize = 0;
            }

            ret += cnt * boxType[1];
        }

        return ret;
    }
}