// return index of the element in an array as per given argument
// 7. Write a function that receives an array & search element as args and returns the index of that search element in the array. It should return "not found" when search element not found.

function test (arr , arg){
let i = 0;
for(i=0;i<arr.length;i++){
if (arg==arr[i]){
return i ;
}

if (i == arr.length-1 && arg != arr[i]){
return "element not found" ;
}

}
}
let arr = [10,20,30,40,50]
let res = test(arr,20)
console.log(res) ;


