'use strict';
// process.stdin.resume();
// process.stdin.setEncoding('utf8');

// let inputString = '';
// let currentLine = 0;


// process.stdin.on('data', inputStding =>{
//     inputString += inputStding;
// }   );

// process.on('SIGINT', function(){
//     process.stdout.write('\n end \n');
//     main();
//     process.exit();
// });

// process.stdin.on('end', _ =>{
//     inputString = inputString.trim().split('\n').map(line =>{   
//         return line.trim();
//     });
//     main();
    
// });


// function readLine(){
//     return inputString[currentLine++];
// }


function printArray(array,size){

    let s=' ';
    for (let index = 0; index < size; index++) {
        s+=array[index]+ " "  ;
        
    }
    console.log(s);
}


// function main(){   
//     let t =parseInt(readLine());

//     for (let index = 0; index < t; index++) {
//         let input_ar0 = readLine().split(' ').map(x => parseInt(x));
//         let n = input_ar0[0];
//         let arr = new Array(n);
//         let input_ar1 = readLine().split(' ').map(x => parseInt(x));

//         for (let j = 0; j < n; j++) 
//             arr[i] = input_ar1[j];

//         let obj = new Solution();
//         obj.quickSort(arr,n)
//         printArray(arr,arr.length);
//         }

// }

class Solution {

    swap(arr ,i ,j){
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }

    partiton (arr ,   low,high ){

        let pivot = arr[high];
        let i = low -1;
        for (let index = i; index < high; index++) {
            const element = arr[index];

            if(pivot > element) {
                i++;
                this.swap(arr,i,index);
            }
            
        }
        i++;
        this.swap(arr,i,high);
        return i;

    }

    quickSort (arr ,  low,high){
        if(low < high){

            let pi = this.partiton(arr,low,high);
            console.log("pi>>>",pi);
            this.quickSort(arr ,low,pi-1);
            this.quickSort(arr ,pi+1,high);
        }
    }
}


let arr = [23,2,423,-1];
let n = 4;
let obj = new Solution();
console.log('input ====>');
printArray(arr,arr.length);
obj.quickSort(arr,0,n)
console.log('outpyt ====>');
printArray(arr,arr.length);