var km=121;
var sum=0;
if (km>0){
if (km<=1) {
sum=km*15000;
console.log("so tien phai tra cho 1km la :"+sum);
}else if (km>1 && km<=5) {
    sum=km*13500;
    console.log("so tien phai tra cho tren 1km la :"+sum);
}else if (km>5 && km<120) {
sum = km*11000;
console.log("so tien phai tra cho tren 5km la :"+sum);
}
else if(km>120) {
    var sale=0;
    sale= ((km*11000)*30)/100;
    sum=(km*11000)-sale;
    console.log("so tien phai tra cho tren 120km la :"+sum);
}

}
