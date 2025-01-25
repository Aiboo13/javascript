// 

// console.log("this is part arrow function");

// const perpangkatan = (x) => {
//   // jadi '=>' adalah tanda wajib
//   return x * x;
// };


// console.log('implisin return atau tidak menggunakan return dama function jika perintahnya dalam function pendek atau hanya satu baris');

// const random = () =>(
//   Math.floor(Math.random() * 89) + 1
// );

// console.log(random());

let films =[
  {
    title : 'jujutsu kaisen',
    rate : 90,
  },
  {
    title : 'dotor strange',
    rate : 84,
  },
  {
    title : 'spiderman-noway-home',
    rate : 83,
  },
  {
    title : 'home alone',
    rate : 94,
  },
  {
    title : 'home alone 2',
    rate : 78,
  },
  {
    title : 'kimetsu no yoiba',
    rate : 94,
  },
  {
    title : 'transformers',
    rate : 74,
  }
];

console.log("this part for 'map'")

let mapping = films.map((upper) => {
  return upper.title.toUpperCase();
})

let ratting = films.filter((n) => {
  return n.rate >= 90;
})

console.log("combination filter and map");

let Filmbagus = films.filter((film) => film.rate >= 80 ).map((judul) =>{
  console.log(`${judul.title} dengan rate ${judul.rate}`)
} )



// console.log("time out and time interval");

// setTimeout(() =>{
//   console.log("jika pesan ini muncul maka kode di esekusi setelah 3 detik")
// }, 3000);



function loop(){
  for(let i= 0; i <= 10000; i++){
    setTimeout(() => {
      console.log(`haloooooooooooooooooooooooooooooooo ${i}`);
    }, i * 500);
  }
}

// loop();


