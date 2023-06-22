/**
 * find next number 
 * [1,2,3,4,7,5] ==> [1,2,3,5,4,7]
 */

function nextPermutation(arr){
    // take last element and find first small number from last
    // [1,2,3,4,7,5] ==> last ele = 5, first small = 4
    let len = arr.length;
    let smallIdx = 0;
    let len = arr.length;
    let smallIdx = 0;
    for(let i = len-2; i>=0; i--){
        if(arr[len-1] > arr[i]){
            smallIdx = i;
        }
    }(let i = len-2; i>=0; i--){
        if(arr[len-1] > arr[i]){
            smallIdx = i;
        }
    }
    
    // swap found small and last number
    // [1,2,3,4,7,5] ==> [1,2,3,5,7,4]
    [arr[],,] =  
    
    // reverse the i+1 (smallest's Index + 1) to n elements
    // [1,2,3,5,7,4] ==> [1,2,3,5,4,7]
    
}