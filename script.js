
let numbers=[];
for(i=1;i<=100;i++){
     numbers.push(i);
}

function namef (){
    let result=numbers.filter(div);
    return result; 
    function div (num){
     return num%5==0;
     }  
}
// console.log(namef())


function add( array){

let sum=(previousValue,currentValue)=>previousValue+currentValue;
return numbers.reduce(sum)

}
console.log(add(namef()))