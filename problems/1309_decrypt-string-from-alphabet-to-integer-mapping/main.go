// +build 1701

package main

func freqAlphabets(s string) string {
	var result []byte

	for i := range s {
		ch := s[i]

		switch ch {
		case '#':
			num := ((result[len(result)-2]-'0')*10 + result[len(result)-1] - '0') - 10 + 'j'
			result = result[0 : len(result)-2]
			result = append(result, num)

		default:
			result = append(result, ch)
		}
	}

	for i := range result {
		ch := result[i]

		if ch >= '1' && ch <= '9' {
			result[i] = ch - '1' + 'a'
		}
	}

	return string(result)
}

func main() {
	println(freqAlphabets("10#11#12"))
	println(freqAlphabets("12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"))
}
