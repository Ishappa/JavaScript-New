const arr1 = [2,10,51,47];
// const rev = arr1.reverse();//--> it will affetct to the original array

// let rev = arr1.slice().reverse();//-->we can use slice() copy elements from original array and it wont be modified to original array


// below code is without using predefined methods
let rev=[];
for(let i=arr1.length-1;i>=0;i--){
    rev.push(arr1[i]);
   
}
 console.log(`This is original array: ${arr1}`)
 console.log(`This is Reversed array: ${rev}`);