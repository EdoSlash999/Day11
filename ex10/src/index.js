function mySplice(arr1, arr2, n) {
  var myArr1 = arr1;
  var myArr2 = arr2;

  myArr2.splice(n, 0, myArr1[2], myArr1[1], myArr1[0]);

  return myArr2;
};

console.log(mySplice([1, 2, 3], [4, 5], 2));
module.exports = mySplice;
