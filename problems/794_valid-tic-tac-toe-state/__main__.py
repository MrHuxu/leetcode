class Solution:
    def validTicTacToe(self, board: List[str]) -> bool:
        cnt_o, cnt_x = 0, 0
        for row in board:
            for ch in row:
                if ch == "X":
                    cnt_x += 1
                if ch == "O":
                    cnt_o += 1
        if cnt_x < cnt_o or cnt_x - cnt_o > 1:
            return False
        succ_ch, succ_x, succ_y = "", 0, 0
        for i in range(3):
            if (
                board[i][0] != " "
                and board[i][0] == board[i][1]
                and board[i][1] == board[i][2]
            ):
                succ_x += 1
                succ_ch = board[i][0]
            if (
                board[0][i] != " "
                and board[0][i] == board[1][i]
                and board[1][i] == board[2][i]
            ):
                succ_y += 1
                succ_ch = board[0][i]
        if succ_x > 1 or succ_y > 1:
            return False
        if not succ_ch:
            if (
                board[0][0] != " "
                and board[0][0] == board[1][1]
                and board[1][1] == board[2][2]
            ):
                succ_ch = board[0][0]
            if (
                board[0][2] != " "
                and board[0][2] == board[1][1]
                and board[1][1] == board[2][0]
            ):
                succ_ch = board[0][2]
        if succ_ch == "X":
            if cnt_o >= cnt_x:
                return False
        if succ_ch == "O":
            if cnt_x > cnt_o:
                return False
        return True
