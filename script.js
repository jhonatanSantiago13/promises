/*console.log("tarea 1");

setTimeout(()=>{

  console.log("tarea 2");


},2000);

console.log("tarea 3");*/



/*setTimeout(()=>{

	console.log(1);

	setTimeout(()=>{

		console.log(2);

		setTimeout(()=>{

			console.log(3);

		},1000);

	},1000);

},1000);*/

const mayor = (n) =>{

	return new Promise((resolve,reject)=>{

		if(n >= 18){

			resolve("mayor de edad");

		}else{

			reject(new Error("No eres mayor de edad"));
		}


	})

}


const antro = ()=>{

	console.log("bienvenido");
}

/*mayor(18)
	 .then(value=>console.log(value))
	 .then(antro)
	 .catch((e)=> console.error(e));*/

/*setTimeout(()=>{

	console.log(1);

	setTimeout(()=>{

		console.log(2);

		setTimeout(()=>{

			console.log(3);

		},1000);

	},1000);

},1000);*/


const contador = (numero) =>{

	return new Promise(resolve=>{

		setTimeout(()=>{

			console.log(numero);
			resolve();

		},1000);

	})

}


/*contador(1)
		.then(()=>contador(2))
		.then(()=>contador(3))*/

const simple = (tarea)=>{

 	return new Promise(resolve=>{

 		console.log(tarea);

 		resolve();

 	})

}

const complicada = (tarea) =>{

	return new Promise(resolve=>{

		setTimeout(()=>{

			console.log(`${tarea} .....TERMINADA`)

			resolve();

		},3000);

	})

}


const seguimiento = (tarea, sigTarea, tipo) =>{

	return new Promise(resolve=>{

		console.log(tarea);

		if (tipo == "simple"){

			resolve(simple(sigTarea));



		}else if (tipo == "complicada") {

		resolve(complicada(sigTarea));

		}

		// resolve();

	})

}


/*simple("1 tarea")
	  .then(()=>complicada("2 tarea"))
	  .then(()=>simple("3 tarea"))
	  .then(()=>seguimiento("4 tarea","5 tarea","simple"))
	  .then(()=>simple("6 tarea"));*/


const leerTxt = (archivo) =>{

	return new Promise((resolve,reject)=>{

		const file = new XMLHttpRequest();

		file.open('GET',archivo);

		file.onload = ()=>{

			if (file.status === 200){

				resolve(file.responseText);

			}else{

				reject(new Error("error al leer"));


			}

		}

		file.onerror =()=>{

			reject(new Error("Error de red"));

		}

		file.send();



	})

}


const print = m => console.log(m);

const doble = numero => numero * 2;

const toNumber = numero => Number(numero);

/*leerTxt("numero.txt")
		.then(numero=> toNumber(numero))
		.then(doble)
		.then(print);*/


const asincronismo  = async (url)=>{

	try {

		const data = await leerTxt(url);

   		numero = doble(toNumber(data));

   		print(numero);

	} catch(e) {


		console.log(e);
	}

}


// asincronismo("numero.txt");

/*FETCH*/

const getName = (username) =>{

	const url = `https://api.github.com/users/${username}`;

	fetch(url,{

		method: "get"
	})
	.then(data => data.json())
	.then(data=>{

		console.log("con fetch", data.name);

	})


}

// getName("jhonatanSantiago13");


const agetName = async(username) =>{

	try {

		const url = `https://api.github.com/users/${username}`;

		const response = await fetch(url,{
									  method:"get"
								});

		data = await response.json();

		if (data.name != null) {

			console.log(data.name);

		}else{

			console.error(new Error("no se ha encontrado información"));

		}

	} catch(e) {


		console.log(e);
	}


}

agetName("jhonatanSantiago13");


/**/

const message = nombre => console.log(`hola ${nombre}`);

