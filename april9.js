// Q. write a function to print number from 1 to 10.
// var rangeStart = 1;
// var rangeEnd = 10;
// while (rangeStart<=rangeEnd) {
//     console.log(rangeStart);
//     rangeStart++;
// }

// for(initialise; condition; increament){code}

// for(var a = 1; a<=10; a++){
//     console.log(a);
// }
// 1- a=1 ; 1<10 ; true = print 1 ; a++= 2 end
// 2- a=2 ; 2<10 ; true = print 2 ; a++= 3 end
// 1- a=3 ; 3<10 ; true = print 3 ; a++= 4 end


// var rangeStart = 10;
// var rangeEnd = 50;
// for(var a=rangeStart; a<=rangeEnd/2; a++){
//     console.log(a);
// }

// var rangeStart = 11;
// var rangeEnd = 20;
// function rangeNum(a,b) {
//     for(var i =rangeStart; i<=rangeEnd; i+=3)
//     console.log(i);
// }
// rangeNum(rangeStart, rangeEnd);

// function to print even number from 1 to 100
// function rangeNum() {
//     for(var i =1; i<=100; i++)
//     if(i%2==0){
//         console.log(i);
//     }
// }
// rangeNum();

// var rangeStart = 11;
// var rangeEnd = 20;
// function Num(){
//     for(var i =rangeStart; i<=rangeEnd; i++)
//     if(i%2==0){
//         console.log(i);
//     }

// }
// Num(rangeStart,rangeEnd);

// count even number
// var rangeStart = 11;
// var rangeEnd = 20;
// var j=0;
// function countNum(){
//     for(var i =rangeStart; i<=rangeEnd; i++)
//     if(i%2==0){
//         // console.log(i);
//         j++;
//     }


// return j;


// }
// countNum(rangeStart,rangeEnd);
// console.log(' even count = ',j);


// count odd number
var rangeStart = 11;
var rangeEnd = 20;
var j=0;
function countNum(a,b){
    for(var i =a; i<=b; i++)
    if(i%2==1){
        // console.log(i);
        j++;
    }

return j;


}
countNum(rangeStart,rangeEnd);
console.log(' odd count = ',j);
