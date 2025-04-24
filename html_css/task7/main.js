//1.Fibanocci
// function generateFibonacciSeries(numTerms){
//     let fibSeries=[];
//     fibSeries.push(0);
//     fibSeries.push(1);
//     for(let i=2;i<numTerms;i++){
//         fibSeries.push(fibSeries[i -1]+fibSeries[i-2]);

//     }
//     return fibSeries;
// }
// const numTerms=prompt("Araligi daxil edin");
// const fibSeries=generateFibonacciSeries(numTerms);
// console.log(`Fibanacci sirasi ${numTerms} araliqda:`,fibSeries);

//2.*************************************************************
// Radiana çevirən funksiya
// function degreesToRadians(degrees) {
//     return degrees * (Math.PI / 180);
// }
// function convertToSin(number) {
//     const cosValue = Math.cos(degreesToRadians(number));
//     const sinValue = Math.sin(degreesToRadians(90 - number));
//     return sinValue;
// }
// function handleKeyboardInput() {
//     const input = parseFloat(prompt("Dərəcə ilə rəqəm daxil edin:"));
//     if (!isNaN(input)) {
//         const sinValue = convertToSin(input);
//         console.log(`${input}-in sinus dəyəri: ${sinValue}`);
//     } else {
//         console.error("Düzgün rəqəm daxil edin.");
//     }
// }
// handleKeyboardInput();
//3.******************************************************************
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
const number = 5;
const result = factorial(number);
console.log(`${number}-in faktoriali: ${result}-dir.`);




































