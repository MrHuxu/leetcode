class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        altitude, max_altitude = 0, 0
        for g in gain:
            altitude, max_altitude = altitude + g, max(max_altitude, altitude + g)
            
        return max_altitude
        