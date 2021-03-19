function mySplice(arr1, arr2, n) {
    var array =[...arr2];
	for (var i = 0; i < arr1.length; i++) {
		array.splice(n, 0, arr1[i]);
	}
	return array;
}

console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["Dell", "Phillips"], ["Samsung", "AOX", "Sony"], 2));
module.exports = mySplice;