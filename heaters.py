from typing import List


class Solution:
    def findRadius(self, houses: List[int], heaters: List[int]) -> int:
        houses.sort()
        heaters.sort()
        n_house, n_heater = len(houses), len(heaters)
        ret, house_idx, heater_idx = 0, 0, 0
        while house_idx < n_house and heater_idx < n_heater:
            house, heater = houses[house_idx], heaters[heater_idx]
            if house < heater - ret:
                ret = heater - house
            elif house > heater + ret:
                while (
                    heater_idx < n_heater - 1 and heaters[heater_idx + 1] + ret < house
                ):
                    heater_idx += 1
                    heater = heaters[heater_idx]
                if heater_idx == n_heater - 1:
                    ret = max(ret, houses[-1] - heater)
                    break
                else:
                    if heaters[heater_idx + 1] - house <= house - heater:
                        ret = max(ret, heaters[heater_idx + 1] - house)
                        heater_idx += 1
                    else:
                        ret = max(ret, house - heater)
            house_idx += 1
        return ret


print(Solution().findRadius([1, 2, 3], [2]))
print(Solution().findRadius(houses=[1, 2, 3, 4], heaters=[1, 4]))
print(Solution().findRadius(houses=[1, 5], heaters=[2]))
print(
    Solution().findRadius(
        houses=[474833169, 264817709, 998097157, 817129560],
        heaters=[197493099, 404280278, 893351816, 505795335],
    )
)
