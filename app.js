function filterOutFalsy (elem, elem2) {
 return !!elem ? elem : elem2

}
    console.log(filterOutFalsy(0, 500))
    console.log(filterOutFalsy(false, 10))
    console.log(filterOutFalsy(true, 'Dog'))

    function arrLength (arr){
        return arr[arr.length-1];
    }


    console.log(arrLength([1, 2, 'dog']))
    
    function arrSum (num) {
        let sum = 0
        for (let i = 0; i <= num; ++i) {
            sum = sum + i;
        }
        return sum;
    }
    
    console.log(arrSum(4))

