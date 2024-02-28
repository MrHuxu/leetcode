from heapq import heapify
from typing import Dict, List, Set, Tuple
import heapq


class Twitter:

    def __init__(self):
        self.tweet_idx: int = 0
        self.user_tweets: Dict[int, List[Tuple[int, int]]] = {}
        self.following: Dict[int, Set[int]] = {}
        self.changed: Set[int] = set()
        self.user_feed: Dict[int, List[int]] = {}

    def postTweet(self, userId: int, tweetId: int) -> None:
        self.user_tweets.setdefault(userId, []).append((-self.tweet_idx, tweetId))
        self.tweet_idx += 1
        self.changed.add(userId)

    def getNewsFeed(self, userId: int) -> List[int]:
        if userId not in self.changed:
            return self.user_feed.get(userId, [])
        feed, tweet_ids = [], [
            tweet
            for followee_id in self.following.get(userId, [])
            for tweet in self.user_tweets.get(followee_id, [])
        ] + [tweet for tweet in self.user_tweets.get(userId, [])]
        heapify(tweet_ids)
        while len(feed) < 10 and tweet_ids:
            feed.append(heapq.heappop(tweet_ids))
        self.user_feed[userId] = [f[1] for f in feed]
        self.changed.remove(userId)
        return self.user_feed[userId]

    def follow(self, followerId: int, followeeId: int) -> None:
        self.following.setdefault(followerId, set()).add(followeeId)
        self.changed.add(followerId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        if (
            followerId not in self.following
            or followeeId not in self.following[followerId]
        ):
            return
        self.following[followerId].discard(followeeId)
        self.changed.add(followerId)


# Your Twitter object will be instantiated and called as such:
# obj = Twitter()
# obj.postTweet(userId,tweetId)
# param_2 = obj.getNewsFeed(userId)
# obj.follow(followerId,followeeId)
# obj.unfollow(followerId,followeeId)
