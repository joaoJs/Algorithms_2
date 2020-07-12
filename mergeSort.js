 function mergeSort(nums) {
   console.log('nums')
   console.log(nums)
  // base case
  if (nums.length < 2) {
    return nums 
  }
  // we need to divide the array 
  const l = nums.length
  const half = Math.floor(l/2)
  const left = nums.slice(0, half)
  const right = nums.slice(half, l)
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)
  // console.log('sortedLeft')
  // console.log(sortedLeft)
  // console.log('sortedRight')
  // console.log(sortedRight)
  return stitch(sortedLeft, sortedRight)
}

function stitch(left, right) {
    // console.log('left')
    // console.log(left)
    // console.log('right')
    // console.log(right)
  const result = []

  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while(left.length) {
    result.push(left.shift())
  }
  while(right.length) {
    result.push(right.shift())
  }
  console.log('reslt')
  console.log(result)
  return result
}




mergeSort([1,5,3,4,2,6])