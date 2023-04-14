// var arrayList = ['banana', 'orange','watermelon','apple'];
// var flagforFruit = false;

// for(var i=0; i<arrayList.length; i++){
//     console.log(arrayList[i]);
// }

// for(var i=0; i< arrayList.length; i++){
//     if (arrayList[i]== 'apple') {
//         flagforFruit = true;
//     }
// }
// if (flagforFruit==false) {
//     console.log('fruit is not in list');
// } else {
//     console.log('fruit is in list');
// }

// function findMax(arr) {
//     var max = arr[0];
//     if(arr[1]> max){
//         max= arr[1];
//     }
//     return max;
// }
// var arr= [34,54];
// console.log(findMax(arr));

// function findMax(arr) {
//     var max = arr[0];
//     for(var i =1; i<arr.length; i++){
//        if(arr[i]> max){
//         max= arr[i];
//        }
//     }
//     return max;
// }
// var arr1= [34,100,54,134,89,67,1,62];
// console.log(findMax(arr1));

function findMax(arr) {
    var max = arr[0];
    for(var i =1; i<arr.length; i++){
       if(arr[i]< max){
        max= arr[i];
       }
    }
    return max;
}
var arr1= [34,100,54,134,89,67,1,62];
console.log(findMax(arr1));


function popup(){
    alert('login successful')
}















