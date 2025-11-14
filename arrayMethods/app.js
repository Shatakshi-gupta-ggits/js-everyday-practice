// let arr = [1,2,3,4,6];

// arr.forEach((el)=>{
//      document.write(el);
//      document.write("<br>");

// });

// arr.forEach(function (el){
//     document.write(el);
//          document.write("<br>");

// });
// // let print = function(el){
// //     document.write(el);
// // };
// //   arr.forEach(print);

let arr = [{
    name:"shatakshi",
    marks: 89
},
{
      name:"ishiii",
    marks: 89
},
{
        name:"sanyaa",
    marks: 89
}

];
// let gpa = student.map((el)=>{
//     return el.marks /10;
// })
// arr.forEach((student)=>{
//     document.write(student.marks);
//          document.write("<br>");
// });

// let num = [2,5,6,7,8];

// let double = num.map((el)=>{
//     return el * el;

// });

let nums = [4,6,7,8,4,2,1,55];
// let ans = nums.filter((el) =>{
//     return el%2 == 0;  //even - true, odd -
// })
// reduce method
//let finalVal = nums.reduce((res,el) => res + el);
//console.log(finalVal);

let max = arr.reduce((max, el)=>{
    if(max < el){
        return el;
    } else {
        return max;
    }
});
  console.log(max);