package main

/*
zero  0
one   1
two   2
three 3
four  4
five  5
six   6
seven 7
eight 8
nine  9
*/

func originalDigits(s string) string {
	cnt := make(map[rune]int)
	for _, r := range s {
		cnt[r]++
	}

	arr := make([]int, 10)

	if cnt['z'] > 0 {
		arr[0] = cnt['z']
		cnt['e'] -= cnt['z']
		cnt['r'] -= cnt['z']
		cnt['o'] -= cnt['z']
		cnt['z'] = 0
	}

	if cnt['w'] > 0 {
		arr[2] = cnt['w']
		cnt['t'] -= cnt['w']
		cnt['o'] -= cnt['w']
		cnt['w'] = 0
	}

	if cnt['u'] > 0 {
		arr[4] = cnt['u']
		cnt['f'] -= cnt['u']
		cnt['o'] -= cnt['u']
		cnt['r'] -= cnt['u']
		cnt['u'] = 0
	}

	if cnt['f'] > 0 {
		arr[5] = cnt['f']
		cnt['i'] -= cnt['f']
		cnt['v'] -= cnt['f']
		cnt['e'] -= cnt['f']
		cnt['f'] = 0
	}

	if cnt['x'] > 0 {
		arr[6] = cnt['x']
		cnt['s'] -= cnt['x']
		cnt['i'] -= cnt['x']
		cnt['x'] = 0
	}

	if cnt['v'] > 0 {
		arr[7] = cnt['v']
		cnt['s'] -= cnt['v']
		cnt['e'] -= 2 * cnt['v']
		cnt['n'] -= cnt['v']
		cnt['v'] = 0
	}

	if cnt['g'] > 0 {
		arr[8] = cnt['g']
		cnt['e'] -= cnt['g']
		cnt['i'] -= cnt['g']
		cnt['h'] -= cnt['g']
		cnt['t'] -= cnt['g']
		cnt['g'] = 0
	}

	if cnt['h'] > 0 {
		arr[3] = cnt['h']
		cnt['t'] -= cnt['h']
		cnt['r'] -= cnt['h']
		cnt['e'] -= 2 * cnt['h']
		cnt['h'] = 0
	}

	if cnt['o'] > 0 {
		arr[1] = cnt['o']
	}

	if cnt['i'] > 0 {
		arr[9] = cnt['i']
	}

	var ans []byte
	for i, cnt := range arr {
		for cnt > 0 {
			ans = append(ans, byte(i)+'0')
			cnt--
		}
	}

	return string(ans)
}
