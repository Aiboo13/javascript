// console.log('haiii');

// const Nilai = '60';

// if (Nilai >= 90) {
//   console.log('A');
// } else if(Nilai >= 70) {
//   console.log('B')
// } else if(Nilai >= 65) {
//   console.log('C')
// } else if(Nilai >= 50) {
//   console.log('D')
// }


// const Ganjilgenap = prompt('isikan angaka');
// prompt mengambil inputan

// if (Ganjilgenap % 2 == 0) {
//   console.log('number your input is genap');
// } else {
//   console.log('number your input is ganjil');
// }



// console.log('pick you eat with code');
// console.log('1 = mie');
// console.log('2 = ayam');
// console.log('3 = bakso');

// const masukanKode = prompt('masukan code');

// switch(masukanKode){
//   case '1':
//   console.log('anda memilih mie');
//   alert('siip');
//   break;
//   case '2':
//   console.log('anda memilih ayam');
//   break;
//   case '3':
//   console.log('anda memilih bakso');
//   break;
//   default:
//     console.log('code yang anda masukan tidak ada');
// }

// console.log('allhadulillah');

// const Huruf ='jiiiiiiiiiiiiiiiiiiiiiiiiiiiika';

// console.log(Huruf.length)

// alert("blok");

// let Musik=[1,2,3,4,5,6];

// console.log(Musik)

// Musik.pop;
// console.log(Musik);

// const angka=[1,3,4,5,2,11,64,31241,112,243];

// console.log(angka);

// angka.sort();

// console.log(angka)

// console.log(angka.includes(9));
// include untuk mencari nilai
// ternyata java scrip di eksekusi perbaris

// console.log('ARRAY AWAL');
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals);

// console.log('console.log(animals.slice(2));')
// console.log(animals.slice(2));
// console.log(' Expected output: Array ["camel", "duck", "elephant"]');

// console.log('console.log(animals.slice(2, 4));');
// console.log(animals.slice(2, 4));
// console.log('Expected output: Array ["camel", "duck"]');
// Expected output: Array ["camel", "duck"]
// console.log('Expected output: Array ["camel", "duck"]');

// console.log('console.log(animals.slice(1, 5));');
// console.log(animals.slice(1, 5));
// console.log('Expected output: Array ["bison", "camel", "duck", "elephant"]');
// Expected output: Array ["bison", "camel", "duck", "elephant"]


// console.log('console.log(animals.slice(-2));');
// console.log(animals.slice(-2));
// console.log('Expected output: Array ["duck", "elephant"]');
// Expected output: Array ["duck", "elephant"]

// console.log('console.log(animals.slice(2, -1));');
// console.log(animals.slice(2, -1));
// console.log('Expected output: Array ["camel", "duck"]');
// Expected output: Array ["camel", "duck"]

// console.log('console.log(animals.slice());');
// console.log(animals.slice());
// console.log('Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]');
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]



// object
// bisa mengunkan let atau const 

// const orang ={
//   nama : 'cahyahdi',
//   umur : 30,
//   lahir : 'Nganjuk,13-9-1973',
//   alamat : {
//     alamat1 : 'balongan',
//     alamat2 : 'nganjuk'
//   }
// }

// console.log(orang);
// console.log(orang.alamat.alamat1);
// cara mengkases object didalam object


// for (let i = 0; i <= 5; i++) {
//   console.log(i, "i am here");  
// }
// for (let i = 1; i <= 25; i *=5) {
//   console.log(i, "i am here");  
// }

// const three = ["banana", 'water melon', 'cerry', 'apple'];

// for (let i = 0; i < three.length; i++) {
//   console.log(i, three[i]); 
// }

// console.log("nested loop")

// const pilihan = 'abcd';
// // harus menguunkana tanda petik 2

// console.log(pilihan.length);

// for(let i = 1; i < 10; i++){
//   console.log(`${i}, soal nomor ${i}:`);
//   for(let j = 0; j < pilihan.length; j++){
//     console.log(`' ${pilihan[j]}. pilihan Jawaban`)
//   }
// }

// const bangku =[
//   ['andi', 'elsa', 'dimas', 'midah'],
//   ['fajar', 'kiki', 'andre', 'zagi'],
//   ['sahid', 'minas', 'zainal', 'dapa']
// ];

// console.log(bangku.length)

// for(let i = 0; i < bangku.length; i++){
//   const row = bangku[i]
//   console.log(` baris ${i + 1}`);
//   for(let j = 0; j <bangku.length; j++){
//     console.log(`${row[j]}`)
//     lambang dolar untuk memeprmudah pengilan stirng maupun sebuah variabel
//   }
// }


// console.log("its time is while");


// const password ="sahid";

// let quest = prompt("your password");
// while(quest !== password){
//   alert("password salah");
//   quest = prompt("enter your password again");
//   perlu di ingat bagain sini 
// }
// alert("succes");
// console.log("your password is corrent");


// console.log("BREAK");
// // let input = prompt("masukan bebas");
// while (true) {
//   input = prompt("masukan lagi");
//   if(input.toLowerCase() === 'stop') break;
//   // sebuah fungsi harus diikuti tanda kurung buka ()
// }

// alert("sekarang anda memasuki game");
// let maximum = parseInt(prompt("masukan angka batas"));

// while(!maximum){
//   maximum = parseInt(prompt("masukan angka batas"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1; 
// console.log(targetNum);

// let guest = parseInt(prompt('masukan tebakan mu'));
// let tebakan = 1;

// while(parseInt(guest) !== targetNum){
//   tebakan++;
//   if(guest > targetNum){
//     guest = parseInt(prompt("terlalu tinggi tebak lagi..!!"));
//   }else{
//     guest = parseInt(prompt('terlalu rendah tebak lagi'));
//   }
// }
// alert(`selamat.!! tebakan anda benar dengan ${tebakan} kali percobaan`);


// let country = ['indonesia', 'singapure', 'malasia'];

// for(let i of country){
//   let i sudah include si variabel country 
//   console.log(`${i}`);
// }

// let score={
//   dina :90,
//   dino :90,
//   dinu :90,
//   dini :90,
//   dinl :90,
//   dena :90,
//   duna :90,
//   dona :90,
//   dina :90,
// }

// for(let student in score){
//   console.log(`nama ${student} memiliki nilai ${score[student]}`);
// }


// function lemprdadu(){
//   jangan lupa ()
//   console.log(Math.floor(Math.random() * 5) + 1);
//   di dala Math.random() di dalam kurung tidak boleh ada isi nya 
// }

// function tesTagnggal(){
//   console.log('aku lahir di tanggal',Math.ceil(Math.random() * 30) + 1);
// }

// tesTagnggal();
// cara tersebut unutk mengamangil function

// function isi(){
//   prompt("masukan id");
// }

// // isi();
// let Isi = prompt("input your unsername")
// if(Isi == 'admin'){
//   isi();
// }else{
//   alert("succes")
// }

// function note(subject){
//   console.log(`what do you think ${subject}`);
// }

// note(`cat`);

// multiple parameter
// function Num(a = 0,b = 0){
//   let total = a + b;
//   console.log(total);
// }
// Num(9,2);

// return in function

// function penjumlahan (a,b){
//   if(typeof a !== 'number' || typeof b !== 'number'){
//     return `harus angka`;
//   }
//   return a + b;
// }

// scope

// let hewan = 'kucing';

// function scope(){
//   let hewan = 'anjing';
//   console.log(hewan);
// }
// console.log(hewan);
// scope();
// jadi disini console.log akan menampilkan berdasarkan level nya


// let it is scope and const too
// not exist in var 



// function exprescion 
// console.log(`function exprecion`)

// const  exprecion = function yes(a,b){
//   return a + b;
// }

// alert('ini penjumlahan 2 bilangan')
// let bilangan1 =parseInt(prompt("masukan bilangan pertama"));
// let bilangan2 =parseInt(prompt("masukan bilangan kedua"));

// let hasil = exprecion(bilangan1, bilangan2);

// console.log(hasil);

// function in function

// function two(func){
//   func();
//   func();
// }

// function lemparDadu(){
//   let hasil = Math.floor(Math.random() * 6 + 1);
//   console.log(hasil)
// }

// console.log(lemparDadu())
// console.log("pembatas")

// console.log(two(lemparDadu))

// let Sum = parseInt(prompt("mau berapa kali"));

// for(let i = 0; i <= Sum; i++){
//   console.log(lemparDadu())
// }



// console.log("this is part 'this'");

// let Myself= {
//   nama : 'minassahiddin',
//   umur : 19,
//   alamat : 'baleturi',
//   kenalan : function(){
//     return `halo nama saya ${this.nama} umur saya ${this.umur} alamat desa saya ${this.alamat}`
//     jadi this itu untuk memangil methon dalam satu scope
//   }
// }

// console.log(Myself.kenalan())


console.log("this is part  time for try and catch");

function say(msg){
  try {
    console.log(msg.toUpperCase())
  } catch (error) {
    console.log('erorr!!, silahkan masuakn string');
  }
}

let uji = 'awkokwo coba aja'
console.log(uji);

say(uji);
say(uji);
