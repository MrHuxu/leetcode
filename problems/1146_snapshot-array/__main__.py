from ast import List


class SnapshotArray:

    def __init__(self, length: int):
        self.snap_id = 0
        self.data: List[List[List[int]]] = [[] for _ in range(length)]

    def set(self, index: int, val: int) -> None:
        if len(self.data[index]) == 0 or self.data[index][-1][0] != self.snap_id:
            self.data[index].append([self.snap_id, val])
        else:
            self.data[index][-1][1] = val

    def snap(self) -> int:
        self.snap_id += 1
        return self.snap_id - 1

    def get(self, index: int, snap_id: int) -> int:
        left, right = 0, len(self.data[index]) - 1
        while left <= right:
            mid = (left + right) // 2
            if self.data[index][mid][0] <= snap_id:
                left = mid + 1
            else:
                right = mid - 1
        return self.data[index][right][1] if right >= 0 else 0


# Your SnapshotArray object will be instantiated and called as such:
# obj = SnapshotArray(length)
# obj.set(index,val)
# param_2 = obj.snap()
# param_3 = obj.get(index,snap_id)
snapshotArray = SnapshotArray(3)
snapshotArray.set(0, 5)
snapshotArray.snap()
snapshotArray.set(0, 6)
print(snapshotArray.get(0, 0))
