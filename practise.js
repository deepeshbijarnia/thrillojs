// const a = {
//     b: 16,
//     play(){
//         console.log(this);
//     }
// }
// a.play();
let arr = new Array(1,"kj",{ij : 4,k : "kj" },["o",6]);
let arro = new Array(10,"kej",{ij : 4,k : "kj" },["o",6]);
arro = arr.concat(arro);
console.log(arro);