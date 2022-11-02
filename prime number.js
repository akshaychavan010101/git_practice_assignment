function prime(num){
*let factor = 1; 
for (i=1; i<(num**0.5); i++){
* if(num%i==1){
*  factor+=0;
 }
*if(factor == 0){
console.log("Prime");
 }else{
console.log("Not a Prime");
}
}
prime(13);