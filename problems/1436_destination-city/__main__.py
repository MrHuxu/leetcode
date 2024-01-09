class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        cities = set([city for pair in paths for city in pair])
        starts = set([pair[0] for pair in paths])
        return (cities - starts).pop()