// add whatever parameters you deem necessary
function averagePair(arr, targetAverage) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex < rightIndex){
        let averageOfTwoValues = (arr[leftIndex] + arr[rightIndex])/2;
        if(averageOfTwoValues === targetAverage) return true;

        if(averageOfTwoValues > targetAverage){
            rightIndex -= 1;
        }
        
        if(averageOfTwoValues < targetAverage){
            leftIndex += 1;
        }
       
    }
    return false;
}
