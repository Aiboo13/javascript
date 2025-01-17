console.log('haiii');

const Nilai = '60';

if (Nilai >= 90) {
  console.log('A');
} else if(Nilai >= 70) {
  console.log('B')
} else if(Nilai >= 65) {
  console.log('C')
} else if(Nilai >= 50) {
  console.log('D')
}


const Ganjilgenap = prompt('isikan angaka');
// prompt mengambil inputan

if (Ganjilgenap % 2 == 0) {
  console.log('number your input is genap');
} else {
  console.log('number your input is ganjil');
}