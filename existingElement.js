const firstArray = [1, 2, 3, 4, 5];
const secondArray = [2, 4, 6, 8];

function presentElementsArrayFinder(A1, A2) {
    const intersection = A1.filter(element => {
        return A2.includes(element); //includes method do a search in array2 
        //using the element from array1 if the item matched from both array ,
        //than it return the matched item and make a new array using the matched item.
    });
    return intersection;
}



// const result = presentElementsArrayFinder(firstArray, secondArray);
// console.log(presentElementsArrayFinder(firstArray, secondArray)); 

function newArrayFromExistingArray(arrayOne, arrayTwo){
    const intersection = arrayOne.filter(element => {
        return arrayTwo.includes(element);
    });
    return intersection;
}

console.log(newArrayFromExistingArray(firstArray, secondArray));