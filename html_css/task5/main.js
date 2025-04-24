//1.
// let eded = prompt("Bir ədəd daxil edin:");
// if (eded >= 10 && eded <= 99) {
//     alert("Ədəd 2 rəqəmlidir");
// } else {
//     alert("Ədəd 2 rəqəmli deyil");
// }
// //2.

// let num = prompt("Bir ədəd daxil edin:");

// if (num % 2 === 0 && num % 5 === 0) {
//     console.log("Ədəd həm 2-yə, həm də 5-ə bölünür");
// } else {
//     console.log("Ədəd 2 və 5-ə bölünmür");
// }

// let eded = prompt("Bir ədəd daxil edin:");
// let cem = 0;
// for (let i = 1; i <= eded; i++) {
//     cem += i; 
// }
// console.log("1-dən " + eded + "-ə qədər olan ədədlərin cəmi: " + cem);



// let eded = prompt("Bir ədəd daxil edin:");

// let hasil = 1; 
// for (let i = 1; i <= eded; i++) {
//     hasil *= i; 
// }
// alert("1-dən " + eded + "-ə qədər olan ədədlərin hasılı: " + hasil);
// Təsadüfi ədəd 0-dan 50-yə qədər seçirik
////////////////////////////////////////////////////////////////////////////////////
// Təsadüfi ədəd 0-dan 50-yə qədər seçirik
// Təsadüfi ədəd 0-dan 50-yə qədər seçirik
let dogruEded = Math.floor(Math.random() * 51); 
let addimSay = 0; 
let transferMeblegi = 0; 

while (true) {
 
    let eded = prompt("0-dan 50-yə qədər bir eded  daxil edin:");

    eded = parseInt(eded);
    if (eded === dogruEded) {
        addimSay++; 
        alert("Təbriklər! Doğru cavabi tapdiniz.");
        break; 
    } else {
        addimSay++; 
        alert("Yanliş cavab! Yeniden cehd edin.");
    }
}
if (addimSay === 1) {
    transferMeblegi = 1000; 
} else if (addimSay <= 5) {
    transferMeblegi = 750; 
} else if (addimSay <= 9) {
    transferMeblegi = 250; 
} else {
    transferMeblegi = 0; 
}

console.log( addimSay + " addim atdiniz.");
console.log("köçürülən məbləğ: " + transferMeblegi + " manat.");
alert(addimSay + " addim atdiniz.hesabiniza " + transferMeblegi + " manat köçürüləcək.");


///

// let num = prompt("Bir ədəd daxil edin:");

// if (num % 3 === 0 && num % 5 === 0 ) {
//     console.log("fizzbuzz");
//  } else if (num % 5 === 0 ) {
//     console.log("buzz");}
//     else if(num % 3 === 0 ) {
//       console.log("fizz");
// }
// else{
//     console.log("yanlis eded daxil etdin")
// }
