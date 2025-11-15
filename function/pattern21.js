let n = parseInt(prompt("Enter a length.."));

for(let i=0; i < n; i++){
    let row ='';
    for(let j=0; j<n; j++){
        if(j>i){
            row +='*';
        } else{
            row +=String.fromCharCode(j+ 65);
        }
        document.write('<br>');
    }
    
    document.write(row);
}

