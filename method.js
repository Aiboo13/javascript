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

let Filmbagus = films.filter((film) => film.rate >= 80 ).map( (judul) =>{
  // function di dalam situ tak perlu "=>" jika tidka mau menuliskan function maka di ganti dnegan =>
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

console.log("some and every");

const Grade = [89,88,79,79,89];
const Some = Grade.some((nilai) => nilai >= 90 );
// jadi some itu harus semuanya memenuhi syarat supaya true
console.log("==================")
console.log(`${Some}`)
console.log("==================")
const every = Grade.every((nilai) => nilai >= 70 );
// beda dari some, every lebih fleksibel jika salah satu dari meraka tidak memenuhi syarat maka output nya tetep true
console.log(`${every}`)
