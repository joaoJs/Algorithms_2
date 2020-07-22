import UIKit


// this solution does not work if the pairs are made of the same number (in case it's k/2 + k/2)
func pairs(_ k: Int,_ arr: [Int]) {
    var count : Int = 0
    var start = 0
    var sortedArr = arr
    sortedArr.sort()
    var end = sortedArr.count - 1
    
    while (start <= end) {
        let sum : Int = sortedArr[start] + sortedArr[end]
        if sum == k {
            //print(start)
            count += 1
            start += 1
            end += 1
        }
        else if sum < k {
            start += 1
        }
        else {
            end -= 1
        }
    }
    
    print(count)
}

pairs(5,[1,2,3,4,5])