function cardinalitySort(nums) {
    // Write your code here
    let bin = []
    nums.forEach(i=>{
        bin.push(parseInt(i,10).toString(2))
    })
    console.log(bin)
}
let nums = [1,2,3,4]
console.log(cardinalitySort(nums))