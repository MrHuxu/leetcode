package main

func openLock(deadends []string, target string) int {
	dead := make(map[string]bool)
	for _, deadend := range deadends {
		if deadend == "0000" {
			return -1
		}

		dead[deadend] = true
	}
	used := map[string]bool{"0000": true}

	queue := [][]interface{}{{"0000", 0}}
	for len(queue) > 0 {
		item := queue[0]
		queue = queue[1:]
		status, cnt := item[0].(string), item[1].(int)
		if status == target {
			return cnt
		}

		nextStatus := bfs(status, used)
		for _, s := range nextStatus {
			if used[s] || dead[s] {
				continue
			}

			if s == target {
				return cnt + 1
			}

			used[s] = true
			queue = append(queue, []interface{}{
				s, cnt + 1,
			})
		}
	}
	return -1
}

func bfs(status string, used map[string]bool) (ret []string) {
	for i := 0; i < 4; i++ {
		orig := status[i]
		bs := []byte(status)

		var next byte
		if orig == '9' {
			next = '0'
		} else {
			next = orig + 1
		}
		bs[i] = next
		if tmp := string(bs); !used[tmp] {
			ret = append(ret, tmp)
		}

		if orig == '0' {
			next = '9'
		} else {
			next = orig - 1
		}
		bs[i] = next
		if tmp := string(bs); !used[tmp] {
			ret = append(ret, tmp)
		}
	}
	return
}
