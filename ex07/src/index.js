function largestNumFromArr(arr){
    var maxNumArray = [];
    for (var i = 0; i < arr.length; i++){
        var maxNum = 0;
        for (var j = 0; j < arr[i].length; j++){
            if (maxNum < arr[i][j]) {
                maxNum = arr[i][j];
            }
    
        }
        maxNumArray.push(maxNum);
    }   
    return maxNumArray;
}

console.log(largestNumFromArr([[4, 9, 1, 3], [13, 35, 18, 26],[32, 35, 97, 39],[1000000, 1001, 857, 1]]));

module.exports = largestNumFromArr;