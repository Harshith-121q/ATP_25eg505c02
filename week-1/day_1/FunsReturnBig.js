// 5. Write a function that receives 3 number args and  return the big number 
function test(a,b,c)
{
if (a>b && a>c){
return "a is bigger"
}
else if (b>a   && b>c){
return "b is bigger"
}
else if(c>a && c>b){
    return "c is bigger"
}
else {
return "All elements are equal "
} 
}

let res = test(10,10,10)
console.log(res) 
