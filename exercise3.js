// Part 1

// let xValue = 10;
// while (xValue > 0) {
//     console.log(xValue);
//     xValue -= 0.5;
// }


// Part2
// let num = 1;

// while (num <= 100) {
//     if (num%2 ===1) {
//         console.log(num);   
//     }
//     num++;
// }

// Part3
// const inputReceive = (n) => {
//     let i = 1;
//     let num = "";
//     while( i <= n ) {
//         num += `[${i}]`;
//         i++;
//     }
//     console.log(num);
// }

// inputReceive(10);

// Part4
const sumOfN = (n) => {
    let num = 0;
    let i = 1;
    while (i <= n) {
        num += i;
        i++;
    }
    console.log(num);
    return num;   
}

sumOfN(19);

