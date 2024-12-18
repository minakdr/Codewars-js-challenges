/* Variables */


var a = b = 1;


a = 23;

const r = 18;

let arabic_word = 'Hello';

arabic_word = arabic_word * 10

let arabic = null
console.log(arabic);


let fruits = ["banana","apple", "Orange","Orange"];
fruits.push("amina");
fruits.map((el) => {
    el = "Apple"
});

let newFruitsList = fruits.map(() => "Apple");

let newFruitsListFilter = fruits.filter((el) => {
    return el === "Orange"
});


/* fruits.forEach(element => {
    element = element+1;
    console.log(element);
    
}); */


let obj = {
    id: 52,
    name : "Yousra",
    lastName : "Amina",
    phone : "0556125475",
    favoriteFruits : fruits
}


console.log(obj.favoriteFruits[2]);
console.log(fruits,newFruitsListFilter);


function nameOfTheFunction(a,b){

    

    if(a < 5) {
        return null
    } else if( b+a >= 10){
        return 'number is too big'
    }

    return a+b;
}

const sumofNumber = nameOfTheFunction(7,1);

console.log(sumofNumber);
