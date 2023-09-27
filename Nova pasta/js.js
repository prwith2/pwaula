
const nmrs = [5,48,65,33,12,79,8,44,1,2,3,4,6,7,8,9,10,11,13,15]
const result = []
nmrs.map( (num) => {
    if(num%2==0){
    result.push(num)
    }
})


console.log(result)