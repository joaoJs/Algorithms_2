import UIKit

// solution that works with duplicates and negative numbers

func sumPairs(_ arr : Array<Int>,_ sum: Int) {
    var count : Int = 0
    var sortedArr = arr
    // first the array is sorted
    sortedArr.sort()
    let arrLength = arr.count
    var visited: [Int: Int] = [:] // keep track of visited elements
    for var index in 0..<arrLength {
        let current = sortedArr[index]
//        if (current > sum) {  // if there are no negative numbers we can uncomment this
//            print(count)
//            return
//        }
        // add current element to dictionary
        if let numCount = visited[current] {
            visited[current] = numCount + 1
        } else {
            visited[current] = 1
        }
        
        let diff = sum - current
        
        // check if there is the right number of the diff Element in dictionary in order to get a pair
        if current == diff, let diffCount = visited[diff], diffCount > 1 { // if current happens to be half of sum
            count += 1
            visited[diff] = diffCount - 2
        } else if current != diff, let diffCount = visited[diff], diffCount > 0, let numCount = visited[current], numCount > 0 { // if current is not sum/2
            count += 1
            visited[diff] = diffCount - 1
            visited[current] = numCount - 1 // visited[diff]
        }
    }
    print(count)
}


sumPairs([1,2,19,10,10,5,15,19,10], 20)
sumPairs([1, 2, 3, 4, 5], 5)
sumPairs([1,2,-3,19,10,10,5,15,19,10,23], 20)