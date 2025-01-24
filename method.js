console.log("this part for 'foreach'");

const number =[1,2,3,4,5,6,7,8,9,10];

// for (let i = 0; i <= number.length; i++) {
//   console.log(number[i]);
// }

// number.forEach(function(angka){
//   if (angka % 2 == 0) {
//     console.log(angka);
//   }
// })


let films =[
  {
    title : 'jujutsu kaisen',
    rate : 90,
  },
  {
    title : 'dotor strange',
    rate : 8.4,
  },
  {
    title : 'spiderman-noway-home',
    rate : 8.3,
  },
  {
    title : 'home alone',
    rate : 9.4,
  },
  {
    title : 'home alone 2',
    rate : 7.8,
  },
  {
    title : 'kimetsu no yoiba',
    rate : 9.4,
  },
  {
    title : 'transformers',
    rate : .4,
  }
];

// films.forEach(function(film){
//   console.log(`judul film: ${film.title}===== with rate ${film.rate}`)
// })


console.log("this part for 'map'")

let doubleNumber = number.map(function(num){
  if(num % 2 !== 0){
    return num * 10;
  }
})

console.log(doubleNumber)

let Upfilm = films.map(function(upper){
  return upper.title.toUpperCase()
});

console.log(Upfilm)