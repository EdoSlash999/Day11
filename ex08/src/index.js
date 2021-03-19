function myMutation(arr) {
    
    
    for (var i = 0; i < arr[1].length; i++) {
    if (arr[0].toLowerCase().indexOf(arr[1].toLowerCase().charAt(i)) != -1) {
        return true;

    }
    else {
        return false;

    }
}
}
    console.log(myMutation(["hello", "Hello"]));

    module.exports = myMutation;

