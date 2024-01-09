package main

func isIsomorphic(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	m1 := make(map[byte]byte)
	m2 := make(map[byte]byte)
	for i := range s {
		if bs, ok1 := m1[s[i]]; ok1 {
			if bt, ok2 := m2[t[i]]; ok2 {
				if bs != t[i] || bt != s[i] {
					return false
				}
			} else {
				return false
			}
		} else {
			if _, ok := m2[t[i]]; ok {
				return false
			}

			m1[s[i]] = t[i]
			m2[t[i]] = s[i]
		}
	}
	return true
}
