import UIKit

func pairs(_ k: Int,_ arr: [Int]) {
    var count : Int = 0
    var start = arr.count - 2
    var sortedArr = arr
    sortedArr.sort()
    var end = sortedArr.count - 1
    
    while (end >= start && start >= 0) {
        
        let diff : Int = sortedArr[end] - sortedArr[start]
        if diff == k {
            count += 1
            start -= 1
            end -= 1
        }
        else if diff < k {
            start -= 1
        }
        else {
            end -= 1
        }
    }
    
    print(count)
}

pairs(2,[1,3,5,8,6,4,2])