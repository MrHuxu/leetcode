from typing import Dict, Tuple


class UndergroundSystem:

    def __init__(self):
        self.users: Dict[int, Tuple[str, int]] = {}
        self.total_time: Dict[str, Dict[str, int]] = {}
        self.total_cnt: Dict[str, Dict[str, int]] = {}

    def checkIn(self, id: int, stationName: str, t: int) -> None:
        self.users[id] = (stationName, t)

    def checkOut(self, id: int, stationName: str, t: int) -> None:
        start_station, start_time = self.users[id]
        self.total_time.setdefault(start_station, {}).setdefault(stationName, 0)
        self.total_cnt.setdefault(start_station, {}).setdefault(stationName, 0)
        self.total_time[start_station][stationName] += t - start_time
        self.total_cnt[start_station][stationName] += 1
        del self.users[id]

    def getAverageTime(self, startStation: str, endStation: str) -> float:
        return (
            self.total_time[startStation][endStation]
            / self.total_cnt[startStation][endStation]
        )


# Your UndergroundSystem object will be instantiated and called as such:
# obj = UndergroundSystem()
# obj.checkIn(id,stationName,t)
# obj.checkOut(id,stationName,t)
# param_3 = obj.getAverageTime(startStation,endStation)

us = UndergroundSystem()
us.checkIn(45, "Leyton", 3)
us.checkIn(32, "Paradise", 8)
us.checkIn(27, "Leyton", 10)
us.checkOut(45, "Waterloo", 15)
us.checkOut(27, "Waterloo", 20)
us.checkOut(32, "Cambridge", 22)
print(us.getAverageTime("Paradise", "Cambridge"))
