// add whatever parameters you deem necessary
function sameFrequency(integer1, integer2) {
    let integer1ToString = integer1.toString();
    let integer2ToString = integer2.toString();

    let integer1Array = integer1ToString.split('');
    let integer2Array = integer2ToString.split('');

    if (integer1Array.length !== integer2Array.length) return false;

    for(let i = 0; i< integer1Array.length; i++){  // this is O(n^2), make it )(n)
        for(let j = 0; j < integer2Array.length; j++){
            if(integer1Array[i] === integer2Array[j]){
                integer2Array.splice(j, 1);
            }
        }
    }
    if(integer2Array.length === 0){
        return true;
    }
    return false;
}


/*
sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same 
frequency of digits.

Examples:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
Constraints

Time Complexity - O(N + M)
*/
