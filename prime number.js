
function prime(number){
let factor = 0; 
for (i=1; i<(number**0.5); i++){
 if(number%i==0){
  factor++;

if(factor == 1){
console.log("Prime");
 }else{
console.log("Not a Prime");
}
}
prime(13);