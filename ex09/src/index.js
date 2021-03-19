function myBouncer(arr) {
    
    return arr.filter(Boolean);
}

console.log(myBouncer([7, "ate", "", false, 9]));
module.exports = myBouncer;