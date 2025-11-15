// var i= 1;
// while(i<=5){
//     document.write("Heyyy   ");
//     i++;
// }

// 1
// 2 3
// 4 5 6
// 7 8 9 10

let row = parseInt(prompt("Enter a num.."));
var k = 1;
function printPattern(row){

for(i =1; i<=row; i++){
    for(j=1; j<=i; j++){
        document.write(k +" ");
    k++;
    }
    document.write('<br>');

}
}
printPattern(row);