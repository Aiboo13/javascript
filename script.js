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

console.log('pick you eat with code');
console.log('1 = mie');
console.log('2 = ayam');
console.log('3 = bakso');

const masukanKode = prompt('masukan code');

switch(masukanKode){
  case '1':
  console.log('anda memilih mie');
  break;
  case '2':
  console.log('anda memilih ayam');
  break;
  case '3':
  console.log('anda memilih bakso');
  break;
  default:
    console.log('code yang anda masukan tidak ada');
}

