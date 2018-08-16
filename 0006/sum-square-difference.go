package main

import "fmt"

func main(){
    const amount = 100
    var sum = amount * ( amount + 1) / 2
    var sumOfSquares = (2 * amount + 1) * (amount + 1) * amount / 6
    fmt.Println(sum * sum - sumOfSquares)
}
