// Задание 1
let numbers =[[13, 4], [4, 6], [5, 9]];
for (let item of numbers){
    console.log(`[${item}] количество элементов в массиве ${item.length}`)
}

let sum = 0

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++){
        sum += numbers[i][j];
    }
}
console.log(sum);



// Задание 2

const players = [   {name: "John1", nickname: "John1123"},
                    {name: "John2", nickname: "John1223"},
                    {name: "John3", nickname: "John1323"} ];

for (let player of players)
{
    console.log(`Name ${player["name"]}.`);
}

for (let player of players)
{
    player["nickname"] += "John";
    console.log(`nick: ${player["nickname"]}`);
}


    // Задание 3





    

