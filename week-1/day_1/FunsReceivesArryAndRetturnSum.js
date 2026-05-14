// 6. Write a function that receives an array as arg and return their sum
let sum = 0
function sumOfArray(arr){
for (let i=0;i<arr.length;i++){
	sum = sum+arr[i]
}
return sum
}
let arr  = [10,20,30,40,50]
let res = sumOfArray(arr)
console.log(res)




