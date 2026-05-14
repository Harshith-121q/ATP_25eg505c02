// 4. Find the smallest element in marks array
let a = [10,20,18]
let small = a[0];
for (let i=1;i<a.length;i++){
    if (a[i]< small){
        small = a[i]
    }
   
}
console.log(`smallest number in array is ${small}`) ;


