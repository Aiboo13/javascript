// // 

// // console.log("this is part arrow function");

// // const perpangkatan = (x) => {
// //   // jadi '=>' adalah tanda wajib
// //   return x * x;
// // };


// // console.log('implisin return atau tidak menggunakan return dama function jika perintahnya dalam function pendek atau hanya satu baris');

// // const random = () =>(
// //   Math.floor(Math.random() * 89) + 1
// // );

// // console.log(random());

// let films =[
//   {
//     title : 'jujutsu kaisen',
//     rate : 90,
//   },
//   {
//     title : 'dotor strange',
//     rate : 84,
//   },
//   {
//     title : 'spiderman-noway-home',
//     rate : 83,
//   },
//   {
//     title : 'home alone',
//     rate : 94,
//   },
//   {
//     title : 'home alone 2',
//     rate : 78,
//   },
//   {
//     title : 'kimetsu no yoiba',
//     rate : 91,
//   },
//   {
//     title : 'transformers',
//     rate : 74,
//   }
// ];

// const listFilm = films.map((film) =>{
//   console.log(`judul film ${film.title} dengan rate ${film.rate}`);
// });

// console.log("=======================================================================================")

// const Listfilm = films.map(({title, rate})=> {
//   // yang penting nama nya sama pada array object
//   console.log(`judul film ${title} dengan rate ${rate}`)
// })
// console.log(Listfilm);

// // const pembanding= films.reduce((pembanding1, pembanding2) =>{
// //   if(pembanding1.rate < pembanding2.rate){
// //     // jika tanda ">" mengarah ke pembanding1 dan returnya pembanding 1 maka yang di cari adalh yang terbear
// //     return pembanding1
// //   }
// //   return pembanding2
// // });

// // console.log(pembanding)

// // // console.log("this part for 'map'")

// // // let mapping = films.map((upper) => {
// // //   return upper.title.toUpperCase();
// // // })

// // // let ratting = films.filter((n) => {
// // //   return n.rate >= 90;
// // // })

// // // console.log("combination filter and map");

// // // let Filmbagus = films.filter((film) => film.rate >= 80 ).map( (judul) =>{
// // //   // function di dalam situ tak perlu "=>" jika tidka mau menuliskan function maka di ganti dnegan =>
// // //   console.log(`${judul.title} dengan rate ${judul.rate}`)
// // // } )

// // // console.log("time out and time interval");

// // // setTimeout(() =>{
// // //   console.log("jika pesan ini muncul maka kode di esekusi setelah 3 detik")
// // // }, 3000);

// // // function loop(){
// // //   for(let i= 0; i <= 10000; i++){
// // //     setTimeout(() => {
// // //       console.log(`haloooooooooooooooooooooooooooooooo ${i}`);
// // //     }, i * 500);
// // //   }
// // // }

// // // loop();

// // // console.log("some and every");

// // const Grade = [89,88,79,79,89,93,97,98,96];

// // const sum = Grade.reduce((object1, object2)=>{
// //   return object1 + object2;
// // })
// // console.log(sum)
// // console.log("================")
// // let summ = 0;
// // for (const element of Grade) {
// //   summ += element;
// // }

// // console.log(summ);

// // const Some = Grade.some((nilai) => nilai >= 90 );
// // // beda dari some, every lebih fleksibel jika salah satu dari meraka tidak memenuhi syarat maka output nya tetep true

// // console.log("==================")
// // console.log(`ini bentuk dari method some "${Some}"`)
// // console.log("==================")
// // const every = Grade.every((nilai) => nilai >= 90 );
// // // jadi some itu harus semuanya memenuhi syarat supaya true

// // console.log(`ini bentuk dari method every "${every}"`)

// // 

// // console.log("spereed opertaor pada function");
// // console.log("mengubah array dan objeck menjadi deret parameter");


// // const angka = (1,2,4,5,3,7,8,9);
// const angka1 = [1,2,4,5,3,7,8,9];

// // console.log("'math.max(anga)' function max");

// // console.log(Math.max(angka));

// // console.log("'math.min(anga)' function min");
// // console.log(Math.min(...angka1));
// // // pengunaan "..." untuk sebuah array

// // 

// // console.log("pengabungan buat obaject dengan object");

// // const member ={
// //   name : 'irawan',
// //   id : 7216378623681,
// //   password : "irawan 123#"
// // }

// // console.log(member)

// // const plusInfo={
// //   age : 19,
// //   addres : "malang"
// // };


// // console.log(plusInfo);

// // const compliteInfo ={...member, ...plusInfo};

// // console.log(compliteInfo)

// // // jadi object itu menggunakan kurung kurawal 


// // console.log("rest parmametr");

// // const peserta =["rudi", "rudy", "rud i", "bagas", "halo"];

// // for (const element of peserta) {
// //   console.log(element)
// // }

// // const champion = (gold, silver, brown, ...other) =>{
// //   // baca sendiri nya
// //   console.log(`mendali emas di raih oleh ${gold}`);
// //   console.log(`mendali silver di raih oleh ${silver}`);
// //   console.log(`mendali kayu di raih oleh ${brown}`);
// //   console.log(`peserta lainya ${other}`);
// // }

// // champion(...peserta)


// // console.log("distrucktion array atau sama kayak di atas namun tidak mengnakan function")

// // const [gold, silver, brown, lain] = peserta;

// // console.log(`kamu mendapatka mendali emas${gold}`)
// // console.log(silver)
// // console.log(brown)
// // console.log(lain)


// console.log("distruction object");

// const profile={
//   name : "haikal",
//   email : "ajdewyfbcwiubdk@gmail.com",
//   addres : "west java"
// }

// console.log(profile)

// const {name, email, addres:alamat} = profile;

// Array.prototype.push(() => {
//   return `push dinonaktifkan`
// })

// console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
// console.log(angka1)


// // kesimpulan untuk di dalam kurung kurawal harus sama dnegan yang ada di atas name email adres dll


const arr = [1,2,34,6,6,7,8];
// console.log(arr);

// Array.prototype.pop = function () {
//   console.log("gabisa")
//   // ingat baik baik dalam pengunaan prototype
// };

// Array.prototype.hapus = function (){
//   return this.pop()
//   // untuk memberi function pada hapus seperti function pop
// }

// arr.pop();

// console.log(arr)

console.log("factory function")

const hex = (r,g,b) => {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  // slice harus kecil semua
}

hex(123,456,345);

const rgb = (r,g,b) => {
  return `${r} ${g} ${b}`
}

  function makeColor (r,g,b){
  const color = {};

  color.r = r;
  color.g = g;
  color.b = b;

  color.rgb = function() {
    const {r,g,b} = this;
    return `${r},${g},${b}`
  }
  color.hex = function(){
    const {r,g,b} = this;
    // dengan ini pemangilan pada return tak pelu kata this
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    // slice harus kecil semua
  }
  return color;
  // terhubung pada const color 
}

const color = makeColor(113,111,90);
console.log(color.rgb())

function makeColor(r, g, b) {
  const color = {}; // Buat objek kosong bernama 'color'

  color.r = r; // Simpan nilai 'r' ke dalam properti 'r' di objek 'color'
  color.g = g; // Simpan nilai 'g' ke dalam properti 'g' di objek 'color'
  color.b = b; // Simpan nilai 'b' ke dalam properti 'b' di objek 'color'

  // Tambahkan metode 'rgb' ke objek 'color'
  color.rgb = function () {
    const { r, g, b } = this; // Destruktur properti 'r', 'g', 'b' dari objek ini (color)
    return `${r},${g},${b}`; // Gabungkan nilai RGB menjadi string format "r,g,b"
  };

  // Tambahkan metode 'hex' ke objek 'color'
  color.hex = function () {
    const { r, g, b } = this; // Destruktur properti 'r', 'g', 'b' dari objek ini (color)
    // Hitung nilai heksadesimal dan ubah ke string hex dengan '#' di depannya
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  return color; // Kembalikan objek 'color', sehingga bisa digunakan di luar fungsi
}
