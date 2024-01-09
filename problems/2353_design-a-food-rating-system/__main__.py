import heapq
from typing import Dict, List, Tuple


class FoodRatings:
    cuisine_data_mapping: Dict[str, List[Tuple[int, str]]]
    food_data_mapping: Dict[str, Tuple[str, int]]

    def __init__(self, foods: List[str], cuisines: List[str], ratings: List[int]):
        self.cuisine_data_mapping = {}
        self.food_data_mapping = {}

        for i in range(len(foods)):
            food, cuisine, rating = foods[i], cuisines[i], ratings[i]
            if cuisine not in self.cuisine_data_mapping:
                self.cuisine_data_mapping[cuisine] = []
            heapq.heappush(self.cuisine_data_mapping[cuisine], (-rating, food))
            self.food_data_mapping[food] = (cuisine, rating)

    def changeRating(self, food: str, newRating: int) -> None:
        cuisine = self.food_data_mapping[food][0]
        heapq.heappush(self.cuisine_data_mapping[cuisine], (-newRating, food))
        self.food_data_mapping[food] = (cuisine, newRating)

    def highestRated(self, cuisine: str) -> str:
        rating, food = self.cuisine_data_mapping[cuisine][0]
        newest_rating = self.food_data_mapping[food][1]
        while rating * -1 != newest_rating:
            heapq.heappop(self.cuisine_data_mapping[cuisine])
            rating, food = self.cuisine_data_mapping[cuisine][0]
            newest_rating = self.food_data_mapping[food][1]
        return food


# Your FoodRatings object will be instantiated and called as such:
# obj = FoodRatings(foods, cuisines, ratings)
# obj.changeRating(food,newRating)
# param_2 = obj.highestRated(cuisine)
