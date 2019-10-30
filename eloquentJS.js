// for ( var x = "#"; x.length < 7; x += "#")
// console.log(x);
// // above is getting to form the pyramid. below is what i did thinking i'd get the same result
// for(var x = 0; x < 8; x++)
// console.log(x);

let size = 8;
let board = "";

for (let y = 0; y < size; y++){
   for (let x = 0; x < size; x++){
        if((x + y) % 2 == 0){
            board += " ";
        } else {
            board += "#"
        }
    }
    board += "\n";
} console.log(board)

// for (var x = 0; x.length == 10; x++){
//     var board = "";

//     if (x % 2 == 0){
//         board = "#";
//     }
//     if (x % 2 == 1){
//         board = "";
//     }
//     console.log(board || x)
// }
