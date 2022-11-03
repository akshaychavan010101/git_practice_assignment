function prime(num){
let factor = 0; 
for (i=1; i<(num**0.5); i++){
if(num%i==0){
factor++;
 }
if(factor == 1){
console.log("Prime");
 }else{
console.log("Not a Prime");
}
}
prime(13);