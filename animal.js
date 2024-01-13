var depth = 22;
var animal = 0;

if(depth<=10){
    animal = depth * 50;
}
else if(depth <= 20){
    var firstPart = 10 * 50;
    var remaining = depth - 10;
    var thirdPart = remaining * 100;
    animal = firstPart + thirdPart;
}
else{
    var firstPart = 10 * 50;
    var secondPart = 10 * 100;
    var remaining = depth - 20;
    var thirdPart = remaining * 300;
    animal = firstPart + secondPart + thirdPart;
}

console.log(animal);
