class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        if len(hand) % groupSize != 0:
            return False
        hand_ = sorted([[k, v] for k, v in Counter(hand).items()], key=lambda x: x[0])
        while hand_:
            if groupSize > len(hand_):
                return False
            for i in range(groupSize):
                if i == 0 or hand_[i][0] == hand_[i - 1][0] + 1:
                    hand_[i][1] -= 1

                    if i > 0 and not hand_[i][1] and hand_[i - 1][1]:
                        return False
                else:
                    return False
            while hand_ and not hand_[0][1]:
                hand_ = hand_[1:]
        return True
