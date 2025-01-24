// 

console.log("this is part arrow function");

const perpangkatan = (x) => {
  // jadi '=>' adalah tanda wajib
  return x * x;
};


console.log('implisin return atau tidak menggunakan return dama function jika perintahnya dalam function pendek atau hanya satu baris');

const random = () =>(
  Math.floor(Math.random() * 89) + 1
);



