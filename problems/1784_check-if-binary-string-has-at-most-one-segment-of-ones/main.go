package main

func checkOnesSegment(s string) bool {
	var cnt int
	var at1 bool
	if s[0] == '1' {
		cnt = 1
		at1 = true
	}

	for i := 1; i < len(s); i++ {
		if s[i] == '0' {
			at1 = false
		} else {
			if s[i] == '1' && !at1 {
				at1 = true
				cnt++

				if cnt > 1 {
					return false
				}
			}
		}
	}

	return true
}

func main() {
	println(checkOnesSegment("110"))
	println(checkOnesSegment("101"))
}
