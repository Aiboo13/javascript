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

// 

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

let Musik=[1,2,3,4,5,6];

console.log(Musik)

Musik.pop;
console.log(Musik);

const angka=[1,3,4,5,2,11,64,31241,112,243];

console.log(angka);

angka.sort();

console.log(angka)

console.log(angka.includes(9));
// include untuk mencari nilai
// ternyata java scrip di eksekusi perbaris

console.log('ARRAY AWAL');
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals);

console.log('console.log(animals.slice(2));')
console.log(animals.slice(2));
console.log(' Expected output: Array ["camel", "duck", "elephant"]');

console.log('console.log(animals.slice(2, 4));');
console.log(animals.slice(2, 4));
console.log('Expected output: Array ["camel", "duck"]');
// Expected output: Array ["camel", "duck"]
console.log('Expected output: Array ["camel", "duck"]');

console.log('console.log(animals.slice(1, 5));');
console.log(animals.slice(1, 5));
console.log('Expected output: Array ["bison", "camel", "duck", "elephant"]');
// Expected output: Array ["bison", "camel", "duck", "elephant"]


console.log('console.log(animals.slice(-2));');
console.log(animals.slice(-2));
console.log('Expected output: Array ["duck", "elephant"]');
// Expected output: Array ["duck", "elephant"]

console.log('console.log(animals.slice(2, -1));');
console.log(animals.slice(2, -1));
console.log('Expected output: Array ["camel", "duck"]');
// Expected output: Array ["camel", "duck"]

console.log('console.log(animals.slice());');
console.log(animals.slice());
console.log('Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]');
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]



// object
// bisa mengunkan let atau const 

const orang ={
  nama : 'cahyahdi',
  umur : 30,
  lahir : 'Nganjuk,13-9-1973',
  alamat : {
    alamat1 : 'balongan',
    alamat2 : 'nganjuk'
  }
}

console.log(orang);
console.log(orang.alamat.alamat1);
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

const bangku =[
  ['andi', 'elsa', 'dimas', 'midah'],
  ['fajar', 'kiki', 'andre', 'zagi'],
  ['sahid', 'minas', 'zainal', 'dapa']
];

console.log(bangku.length)

for(let i = 0; i < bangku.length; i++){
  const row = bangku[i]
  console.log(` baris ${i + 1}`);
  for(let j = 0; j <bangku.length; j++){
    console.log(`${row[j]}`)
  }
}


console.log("its time is while");


const password ="sahid";

let quest = prompt("your password");
while(quest !== password){
  quest = prompt("enter your password again")
  // perlu di ingat bagain sini 
}

console.log("your password is corrent")