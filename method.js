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


console.log("time out and time interval");

setTimeout(() =>{
  console.log("jika pesan ini muncul maka kode di esekusi setelah 3 detik")
}, 3000);



function loop(){
  for(let i= 0; i <= 10000; i++){
    setTimeout(() => {
      console.log(i);
    }, i * 500);
  }
}

loop();


