// ulduzlar

// var col = 5;
// var row = 4;
// var a = "";

// for (let i = 0; i < col; i++) {
//     for(let j = 0; j < row; j++){
//         a += "* "
//     }
//     a +="\n"
// }

// console.log(a);

//ici bos ulduzzlar
// var col = 5;
// var row = 4;
// var a = "";

// for(let i = 0; i < col; i++){
//     for(let j = 0; j < row; j++){
//         if (j == 0 || j == 3 || i == 0 || i == 4) {
//             a += "* "
//         }
//         else{
//             a+= "  "
//         }
//     }
//     a+="\n"
// }
// console.log(a);


//yer deyisme

// let num1 = +prompt("Birinci ededi daxil edin: ")
// let num2 = +prompt("Ikinci ededi daxil edin: ")

// num1 = num1+num2;
// num2 = num1-num2;
// num1 = num1-num2;
// console.log(num1, num2);

// let a = +prompt("Nece ededli array isteyirsiz?")
// let arr=[]
// for(let j =0; j<a;j++){
//     arr[j]=+prompt(`${j+1} elemnti daxil edin`)
// }
// console.log(arr)
// let counter = 0;
// for(let i = 0; i < arr.length; i++ ){
//     if(arr[i]%2==0){5
//         console.log(`Cut elementler ${arr[i]}`)
//         counter++;
//     }
// }
// console.log(`Cutlerin sayi ${counter}`)

//Tek ededlerin sayi

// let b = +prompt("Nece ededli massiv isteyirsiniz")
// let arr= [];

// for(let i = 0; i < b; i++){
//     arr[i] = +prompt(`${i+1} elementi daxil edin `)
// }

// let counter = 0
// for (let j = 0; j < arr.length; j++) {
//     if(arr[j] % 2 != 0){
//         console.log(arr[j]);
//         counter++;
//     }
// }
// console.log(`Tek ededlerin sayi ${counter}`);


//Array

let b = +prompt("enter a number")
let a = "";
for(let i = 1; i <= b; i++){
    for (let j = 1; j <= i; j++) {
        a += j + " " 
    }
    a += "\n"
}

console.log(a);








































































