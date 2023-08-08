function nt(n){
for(var i=2;i<Math.sqrt(n);i++){
    if(n%1!==0 && n%2===0) {
        return false;
    }else if(n%i===0){
         return false;
    }else {
      
        return true;
        
    }
}
}
var n=7;
if(n>=1){
   nt(n);
    if(nt(n)==true){
      console.log(`${n} la so nguyen to`);
    }else{
        console.log(`${n} ko phai so nguyen to`);
    }
}else {
    console.log("nhap so lon hon 0");
    
}