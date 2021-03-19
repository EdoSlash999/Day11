function splitArrayInGroups(arr,n){
    var len = Math.max(arr.length/n, n);
    var result = [];
    for (var i = 0; i < n; i++) {
    
      if(len*i<=arr.length) 
        {
            result.push(arr.slice(len*i, len*(i+1)));
        }
    }
    return result;
};

console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
module.exports = splitArrayInGroups;