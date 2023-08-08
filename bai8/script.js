var i=1;
var n=100;
var s=0;
sum(n);
console.log(s);
function sum(n) {
 s+=1/i;
 i++;  

if(i<n){
sum(n);
}

}


