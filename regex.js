const testStr = "Mi chiamo pippo, ho 7 fratelli, mi piace il numero 5 e vado spesso al Parco che dista 8 km da casa mia"

const rgx = /(\d+) (\w+)/g;

// console.log(rgx.test(testStr));

// console.log(testStr.match(rgx));

// // console.log(rgx.exec(testStr));
// // console.log(rgx.exec(testStr));
// // console.log(rgx.exec(testStr));
// // console.log(rgx.exec(testStr));


// // let array;
// // let result = []
// // while ((array = rgx.exec(testStr)) !== null) {
// //     result.push({value: array[0], index: array['index']})
// // }
// // console.log(result);


// let array = [];
// let result = [];

// while(array !== null){
//     array = rgx.exec(testStr);
//     if(array !== null){
//         const match = {
//             value: array[0],
//             index: array['index']
//         }
//         result.push(match);
//     }
// }

//console.log(result);


// let array1 = [];
// let result1 = [];

// while(array1 !== null){
//     array1 = rgx.exec(testStr);
//     if(array1 !== null){
//         console.log(array1)
//         for (let i = 1; i < array1.length; i++) {
//             const element = array1[i];
//             result1.push(element)
//         }
//     }
// }

// console.log(result1)


// function getDate(str) {

//     const rgx = /(\d{1,2})-(\d{1,2})-(\d{4})/;

//     const array = rgx.exec(str);

//     console.log(array)

//     // const month = array[1];
//     // const jsMonth = month - 1;

//     // const day = array[2];

//     // const year = array[3];

//     let [_, month, day, year] = array;

//     const jsMonth = month - 1;

//     return new Date(year, jsMonth, day);
// }

// console.log(getDate("1-30-2003"));


const testStr2 = "Mi chiamo pippo, ho 7 fratelli, 5 sorelle e 3 cani";

const rgx2 = /(?<numero>\d+) (?<parola>\w+)/g;

let array2 = [];
let result2 = [];

while(array2 !== null){
    array2 = rgx2.exec(testStr2);
    if(array2 !== null){
        result2.push(array2['groups']);
    }
}

console.log(result2);