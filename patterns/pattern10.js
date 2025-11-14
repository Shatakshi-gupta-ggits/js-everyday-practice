const size = 10;
for (let i= size; i>=size -1; i++){
    let row="";
    for(let j= size; j >= Math.abs(i); j++){
        row +='*';
    }
    document.write(row);
    document.write("<br>");
}