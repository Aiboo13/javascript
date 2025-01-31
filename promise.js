
// callback version
const requestCallback = (url, success, failure) => {
	const delay = Math.floor(Math.random() * 4500) + 500;
	setTimeout(() => {
		if (delay > 4000) {
			failure('Error: Connection Timeout');
		} else {
			success(`Success: ${url} (${delay}ms)`);
		}
	}, delay);
};



// Promise version
const requestPromise = (url) => {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 4500) + 500;
		setTimeout(() => {
			if (delay > 3000) {
				reject('Error: Connection Timeout');
			} else {
				resolve(`Success: ${url} (${delay}ms)`);
			}
		}, delay);
	});
};

async function requestHandler() {
	try {
		let result = await requestPromise('movie.com');
		console.log(result);
	} catch (error) {
		console.log('Pesan Error', error);
	}
}

// requestCallback(`movie.com`, function(response){
// 	// jangan lupa kasih coma 
// 	console.log('success', response);
// 	document.body.style.backgroundColor = "green";
// }, function(error){
// 	console.log('error', error);
// 	document.body.style.backgroundColor = "red";
// });


// requestPromise(`google.com`).then(function(results){
// 	// maksmud dari then ini memasukan ke parameter request Promise
// 	console.log('success', results);
// }).catch(function(error){
// 	// untuk penyambungan catch haru menggunakan titik
// 	console.log('error', error);
// })


console.log('cara menngunkan promise denganbaik');

// requestPromise(`google.com`).then((results)=>{
// 	console.log(results);
// 	console.log("this is page 1");
// 	return requestPromise(`google.com`);
// }).then((results)=>{
// 	console.log(results);
//   console.log("this is page 2");
//   return requestPromise(`gpt.com`);
// }).then((result)=>{
// 	console.log(result);
//   console.log("this is page 3");
// 	return requestPromise(`bootsrap.com`);
// }).catch((error)=>{
// 	console.log(`eroor kawan coba lagi nanti ya`+ error);
// });


const delayColorChange = (color,delay) => {
	return new Promise((resolve) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
}


//  setInterval(() =>{
// 	delayColorChange(`red`,2000)
//  .then(() => delayColorChange(`blue`,2000))
//  .then(() => delayColorChange(`green`,2000))
//  .then(()=> delayColorChange(`yellow`,2000))
//  .then(() => delayColorChange(`magenta`,2000))
//  .then(() => delayColorChange(`pink`,2000))
//  },3000)


const a = async()=> {	
	throw "sori hehehhe"
	// throw ini dibuat kayak pesan erors 
	// return "hello world"
}

a().then((res) =>{
	// jangan lupa isi parameter di argument then
	console.log(res)
}).catch((err) =>{
	// dan jangan lupa juga disini
	console.log(err)
})