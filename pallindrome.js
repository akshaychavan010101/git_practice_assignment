
function pallindrome(string){
let reverse = "";
for (i=string.length-1; i>=0; i--){
  reverse+=string[i];
}
if(reverse == string){

console.log("Pallindrome");
}else{
console.log("Not a Pallindrome");
  }
}
pallindrome("akshay");