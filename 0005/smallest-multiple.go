package main

import "fmt"
import "math"

func main(){
	const amount = 20
	primes := []int{2, 3, 5, 7, 11, 13, 17, 19, 23}
	a := make([]int, 0)
	var result = 1
	var i = 0
	var check = true
	var limit = math.Sqrt(amount)
	for primes[i] <= amount {
		a = append(a, 1)
		if check{
			if float64(primes[i]) <= limit {
				a[i] = int(math.Floor( math.Log(amount) / math.Log(float64(primes[i]) )))
			}  else {
				check = false
			}
		}
		result = result *  int(math.Pow(float64(primes[i]), float64(a[i])))
		i = i + 1
	}

	fmt.Println(result)
}