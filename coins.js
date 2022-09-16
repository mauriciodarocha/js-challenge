const getChange = (arr) => {
    const sortedValues = arr.sort((a,b)=>{ return a===b ? 0 : a>b ? 1 : -1 })
    let result = 1
    for(let current of sortedValues) {
        if(result<current) {
            return result
        }
        result += current
    }
    return result
}


console.log(getChange([5, 7, 1, 1, 2, 3, 22]))
console.log(getChange([1, 1, 1, 1, 1]))
console.log(getChange([1, 5, 1, 1, 1, 10, 15, 20, 100]))
