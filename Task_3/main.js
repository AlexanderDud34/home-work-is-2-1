// const students = ["Андрей", "Иван", "Стас"];
// students [50] = "Индекс 50"; 
// console.log(students);


// let college = [  ["Андрей", "Иван", "Стас"], [205, 111, 304]  ];
// let kab = college[1][1] = 112
// console.log(college);




let number = [ 1,2,3,4 ];

const coutLenght = 5;

if ( number.length === coutLenght ) {
    console.log("ok");
} else if ( number.length < coutLenght ) {
    let result = coutLenght - number.length;
    console.log(`Длина вашего массива: ${number.length}. Длину массива нужно увеличить до ${coutLenght}. Прибавьте к массиву значение ${result}`);
}









let person = {
    name: "Tom",
    age: 18,
    hobbies: ["Кушать", "Спать", "Просмотр кино", "Читать книги"],
    contacts: {
        phone: [88005553255, 88905553255],
        email: ["tom@example.com", "tom2@example.com"],
        social: "www.github.com"
    }
}

console.log(`Имя - ${person["name"]}. Возраст - ${person["age"]}`);
console.log(person["hobbies"] [2]);
console.log(person["contacts"]["email"][1]);



















