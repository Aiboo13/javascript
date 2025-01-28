// // // 

// // // console.log("this is part arrow function");

// // // const perpangkatan = (x) => {
// // //   // jadi '=>' adalah tanda wajib
// // //   return x * x;
// // // };


// // // console.log('implisin return atau tidak menggunakan return dama function jika perintahnya dalam function pendek atau hanya satu baris');

// // // const random = () =>(
// // //   Math.floor(Math.random() * 89) + 1
// // // );

// // // console.log(random());

// // let films =[
// //   {
// //     title : 'jujutsu kaisen',
// //     rate : 90,
// //   },
// //   {
// //     title : 'dotor strange',
// //     rate : 84,
// //   },
// //   {
// //     title : 'spiderman-noway-home',
// //     rate : 83,
// //   },
// //   {
// //     title : 'home alone',
// //     rate : 94,
// //   },
// //   {
// //     title : 'home alone 2',
// //     rate : 78,
// //   },
// //   {
// //     title : 'kimetsu no yoiba',
// //     rate : 91,
// //   },
// //   {
// //     title : 'transformers',
// //     rate : 74,
// //   }
// // ];

// // const listFilm = films.map((film) =>{
// //   console.log(`judul film ${film.title} dengan rate ${film.rate}`);
// // });

// // console.log("=======================================================================================")

// // const Listfilm = films.map(({title, rate})=> {
// //   // yang penting nama nya sama pada array object
// //   console.log(`judul film ${title} dengan rate ${rate}`)
// // })
// // console.log(Listfilm);

// // // const pembanding= films.reduce((pembanding1, pembanding2) =>{
// // //   if(pembanding1.rate < pembanding2.rate){
// // //     // jika tanda ">" mengarah ke pembanding1 dan returnya pembanding 1 maka yang di cari adalh yang terbear
// // //     return pembanding1
// // //   }
// // //   return pembanding2
// // // });

// // // console.log(pembanding)

// // // // console.log("this part for 'map'")

// // // // let mapping = films.map((upper) => {
// // // //   return upper.title.toUpperCase();
// // // // })

// // // // let ratting = films.filter((n) => {
// // // //   return n.rate >= 90;
// // // // })

// // // // console.log("combination filter and map");

// // // // let Filmbagus = films.filter((film) => film.rate >= 80 ).map( (judul) =>{
// // // //   // function di dalam situ tak perlu "=>" jika tidka mau menuliskan function maka di ganti dnegan =>
// // // //   console.log(`${judul.title} dengan rate ${judul.rate}`)
// // // // } )

// // // // console.log("time out and time interval");

// // // // setTimeout(() =>{
// // // //   console.log("jika pesan ini muncul maka kode di esekusi setelah 3 detik")
// // // // }, 3000);

// // // // function loop(){
// // // //   for(let i= 0; i <= 10000; i++){
// // // //     setTimeout(() => {
// // // //       console.log(`haloooooooooooooooooooooooooooooooo ${i}`);
// // // //     }, i * 500);
// // // //   }
// // // // }

// // // // loop();

// // // // console.log("some and every");

// // // const Grade = [89,88,79,79,89,93,97,98,96];

// // // const sum = Grade.reduce((object1, object2)=>{
// // //   return object1 + object2;
// // // })
// // // console.log(sum)
// // // console.log("================")
// // // let summ = 0;
// // // for (const element of Grade) {
// // //   summ += element;
// // // }

// // // console.log(summ);

// // // const Some = Grade.some((nilai) => nilai >= 90 );
// // // // beda dari some, every lebih fleksibel jika salah satu dari meraka tidak memenuhi syarat maka output nya tetep true

// // // console.log("==================")
// // // console.log(`ini bentuk dari method some "${Some}"`)
// // // console.log("==================")
// // // const every = Grade.every((nilai) => nilai >= 90 );
// // // // jadi some itu harus semuanya memenuhi syarat supaya true

// // // console.log(`ini bentuk dari method every "${every}"`)

// // // 

// // // console.log("spereed opertaor pada function");
// // // console.log("mengubah array dan objeck menjadi deret parameter");


// // // const angka = (1,2,4,5,3,7,8,9);
// // const angka1 = [1,2,4,5,3,7,8,9];

// // // console.log("'math.max(anga)' function max");

// // // console.log(Math.max(angka));

// // // console.log("'math.min(anga)' function min");
// // // console.log(Math.min(...angka1));
// // // // pengunaan "..." untuk sebuah array

// // // 

// // // console.log("pengabungan buat obaject dengan object");

// // // const member ={
// // //   name : 'irawan',
// // //   id : 7216378623681,
// // //   password : "irawan 123#"
// // // }

// // // console.log(member)

// // // const plusInfo={
// // //   age : 19,
// // //   addres : "malang"
// // // };


// // // console.log(plusInfo);

// // // const compliteInfo ={...member, ...plusInfo};

// // // console.log(compliteInfo)

// // // // jadi object itu menggunakan kurung kurawal 


// // // console.log("rest parmametr");

// // // const peserta =["rudi", "rudy", "rud i", "bagas", "halo"];

// // // for (const element of peserta) {
// // //   console.log(element)
// // // }

// // // const champion = (gold, silver, brown, ...other) =>{
// // //   // baca sendiri nya
// // //   console.log(`mendali emas di raih oleh ${gold}`);
// // //   console.log(`mendali silver di raih oleh ${silver}`);
// // //   console.log(`mendali kayu di raih oleh ${brown}`);
// // //   console.log(`peserta lainya ${other}`);
// // // }

// // // champion(...peserta)


// // // console.log("distrucktion array atau sama kayak di atas namun tidak mengnakan function")

// // // const [gold, silver, brown, lain] = peserta;

// // // console.log(`kamu mendapatka mendali emas${gold}`)
// // // console.log(silver)
// // // console.log(brown)
// // // console.log(lain)


// // console.log("distruction object");

// // const profile={
// //   name : "haikal",
// //   email : "ajdewyfbcwiubdk@gmail.com",
// //   addres : "west java"
// // }

// // console.log(profile)

// // const {name, email, addres:alamat} = profile;

// // Array.prototype.push(() => {
// //   return `push dinonaktifkan`
// // })

// // console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
// // console.log(angka1)


// // // kesimpulan untuk di dalam kurung kurawal harus sama dnegan yang ada di atas name email adres dll


// const arr = [1,2,34,6,6,7,8];
// // console.log(arr);

// // Array.prototype.pop = function () {
// //   console.log("gabisa")
// //   // ingat baik baik dalam pengunaan prototype
// // };

// // Array.prototype.hapus = function (){
// //   return this.pop()
// //   // untuk memberi function pada hapus seperti function pop
// // }

// // arr.pop();

// // console.log(arr)

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

// const color = makeColor(113,111,90);
// console.log(color.rgb())

// function makeColor(r, g, b) {
//   const color = {}; // Buat objek kosong bernama 'color'

//   color.r = r; // Simpan nilai 'r' ke dalam properti 'r' di objek 'color'
//   color.g = g; // Simpan nilai 'g' ke dalam properti 'g' di objek 'color'
//   color.b = b; // Simpan nilai 'b' ke dalam properti 'b' di objek 'color'

//   // Tambahkan metode 'rgb' ke objek 'color'
//   color.rgb = function () {
//     const { r, g, b } = this; // Destruktur properti 'r', 'g', 'b' dari objek ini (color)
//     return `${r},${g},${b}`; // Gabungkan nilai RGB menjadi string format "r,g,b"
//   };

//   // Tambahkan metode 'hex' ke objek 'color'
//   color.hex = function () {
//     const { r, g, b } = this; // Destruktur properti 'r', 'g', 'b' dari objek ini (color)
//     // Hitung nilai heksadesimal dan ubah ke string hex dengan '#' di depannya
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };

//   return color; // Kembalikan objek 'color', sehingga bisa digunakan di luar fungsi
// }


// function mathh(nilai1,nilai2){
//   const nilai ={ };
//   nilai.nilai1 = nilai1;
//   nilai.nilai2 = nilai2;
//   // nilai diatas ini adalah isi dari object nilai
  
//   nilai.perkalian = function(){
//     const {nilai1,nilai2} = this;
//     const hasil = nilai1 * nilai2;
//     return `${hasil}`;
//   }
//   nilai.penambahan = function(){
//     const {nilai1,nilai2} = this;
//     const hasil = nilai1 + nilai2;
//     return hasil;
//   }
//   return nilai
// }

// const uji = mathh(9,9)
// console.log(uji.penambahan())


// function pangkatPembagian(nilai1,nilai2){
//   const nilai={ };
//   nilai.nilai1 = nilai1;
//   nilai.pangkat = nilai2;

//   nilai.perpangkatan= function(){
//     const {nilai1,pangkat} = this;
//     // kenapa pangkat karena object nilai.pangkat bukan nilai2
//     const hasil = nilai1 ** pangkat;
//     return hasil;
//   }
//   nilai.pembagian=function(){
//     const {nilai1,pangkat} = this;
//     const hasil = nilai1 / pangkat;
//     return hasil;

//   }
//   return nilai;
// }

// // const prompt1 = parseInt(prompt("masukan nilai 1"))
// // const promt2 = parseInt(prompt("masukan nilai 2"))
// // // perseint untuk mengubahindputan nomor dlam bentuk strik ke bentuk number
// // const jawab = prompt("pembagian atau perpangkatan'dengan kode ('/'  or '**')'")

// if(jawab == "**"){
//   const pangkat = pangkatPembagian(prompt1,promt2);
//   console.log(pangkat.perpangkatan())
// }else if (jawab == "/"){
//   const pangkat = pangkatPembagian(prompt1,promt2);
//   console.log(pangkat.pembagian())
// }else{
//   console.log("eror");
// }



console.log("constructer function")

function color(r,g,b){
  this.r = r;
  this.g = g;
  this.b = b;
  // di constructer function itu mengunakan this
  // karena mengunakan nya seperti itu harus menggunakan this
}

color.prototype.rgb = function(){
  const {r,g,b} = this;
  return `rgb(${r},${g},${b})`;
  // format tersebut sudah paten untuk css 
}

color.prototype.rgba = function (a = 1.0){
  const {r,g,b} = this;
    // dengan ini pemangilan pada return tak pelu kata this
    return `rgba(${r},${g},${b},${a})`;
    // penulisan rgba sudha paten tidak bisa diganti  
}
// document.body.style.backgroundColor = new color(20, 20, 20).rgb(); // Berfungsi sekarang

// document.body.style.backgroundColor = new color(60,57,77).rgba();

class Color {
  constructor(r,g,b, name){
    // fungsi yang pertama kali dijalankan
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    this.calcHSL();
    }
    Colorname(){
      console.log("this is name color " + this.name)
    }
    innerRgb(){
      const {r,g,b} = this;
      // this ini merujuk pada argument constructor
      return `${r},${g},${b}`
    }
    // membuat method 
    rgb(){
      const {r,g,b} = this;
      // this ini merujuk pada argument constructor
      return `rgb(${this.innerRgb()})`;
      // saat memangil method harus menggunakan kurang buka dan tutup()
    }
    // membuat method
    rgba(a=1.0){
      const {r,g,b} = this;
      // this ini merujuk pada argument constructor
      return `rgba(${r},${g},${b},${a})`;
    }
    // membuat method
    hex(){
      const {r,g,b} = this;
      // this ini merujuk pada argument constructor
      return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    hsl(){
      const {h,s,l} = this;
      return `hsl(${h}, ${s}%, ${l}%)`
    }

    fulllysaturated(){
      const {h,l} = this;
      return `hsl(${h}, 100%, ${l}%)`
    }

    opposite(){
      const {h,s,l} = this;
      const newHue = (h + 180) % 360;
      return `hsl(${newHue}, ${s}%, ${l}%)`;
    }
    
    calcHSL(){
      let { r, g, b } = this;
      // Make r, g, and b fractions of 1
      r /= 255;
      g /= 255;
      b /= 255;
  
      // Find greatest and smallest channel values
      let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
      if (delta == 0) h = 0;
      else if (cmax == r)
        // Red is max
        h = ((g - b) / delta) % 6;
      else if (cmax == g)
        // Green is max
        h = (b - r) / delta + 2;
      // Blue is max
      else h = (r - g) / delta + 4;
  
      h = Math.round(h * 60);
  
      // Make negative hues positive behind 360°
      if (h < 0) h += 360;
      // Calculate lightness
      l = (cmax + cmin) / 2;
  
      // Calculate saturation
      s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  
      // Multiply l and s by 100
      s = +(s * 100).toFixed(1);
      l = +(l * 100).toFixed(1);
      this.h = h;
      this.s = s;
      this.l = l;
    }
  
  
}

const seaColor = new Color(152, 216, 239,"sea");
// // jangan lupa kata kunci new 
// document.body.style.backgroundColor = seaColor.rgba()
// console.log(seaColor.name);
// console.log(seaColor.innerRgb());


// kesimpulan jadi tanda .name method itu ungu maka itu menggunakan tanda kurung buka dan tutup

console.log("hsl srgb")
