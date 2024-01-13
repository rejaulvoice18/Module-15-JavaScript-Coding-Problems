const firstArray = [1, 2, 3, 4, 5];
const secondArray = [2, 4, 6, 8];

var newArray = [];

for(var i = 0; i < firstArray.length; i++){
    
    for(var j = 0; j < secondArray.length; j++){
        var element1 = firstArray[i];
        var element2 = secondArray[j];

        if(element1 == element2){
           newArray.push(element1);
        }
    }
}

console.log(newArray);