// var marks = [45, 81, 63, 98, 56, 35, 23];

// var sum = 0;

// for(var i = 0; i < marks.length; i++){
//     var element = marks[i];
//     sum = sum + element;
// }
// console.log("total of the marks", sum);

var name3 = [23, 33, 44, 33, 2, 2, 3, 4, 5, 99, 22, 8, 77, 9, 9, 4, 5];

var uniqueName = [];

for(var i = 0; i < name3.length; i++){
    var element = name3[i];
    var index = uniqueName.indexOf(element);
    if(index == -1) {
        uniqueName.push(element);
    }
}
console.log("unique array: ", uniqueName);
