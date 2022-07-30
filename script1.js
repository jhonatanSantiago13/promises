const alumnos = [

	{
 		nombre: "Jhonatan",
 		apellido: "Santiago",
 		calificacion: 9.2
	},

	{
 		nombre: "Claudia",
 		apellido: "Ramirez",
 		calificacion: 9.5
	},

	{
 		nombre: "Pepito",
 		apellido: "perez",
 		calificacion: 5.5
	},

	{
 		nombre: "Karina",
 		apellido: "Hernandez",
 		calificacion: 8.6
	},

	{
 		nombre: "Diego",
 		apellido: "casillas",
 		calificacion: 5.2
	},

	{
 		nombre: "Daniela",
 		apellido: "Maldonado",
 		calificacion: 7.3
	}

]


/*
1. agregar un campo nuevo donde se indica si el alumno aprobo o reprobado en base a su calificación
2  agregar un campo nuevo donde se indique la nota en formato gringo
   5.0 - 5.9 = F
   6.0 - 6.9 = D
   7.0 - 7.9 = C
   8.0 - 8.9 = B
   9.0 - 9.2 = A
   9.3 - 10.0 = A+

3 obtener los alumnos reprobados

4 obtener el promedio de la clase

*/

const reporte = [];

alumnos.map((value, index, array)=>{

	let situacion = "";
	let average 	= "";

	if (value.calificacion >= 6){

		situacion = "Aprobado";

	}else{

		situacion = "Reprobado";

	}

    if ((value.calificacion >= 5.0) && (value.calificacion <= 5.9)){

		average = "F";
    }

    if ((value.calificacion >= 6.0) && (value.calificacion <= 6.9)){
		average = "D";

    }

    if ((value.calificacion >= 7.0) && (value.calificacion <= 7.9)){

 		average = "C";
    }

    if ((value.calificacion >= 8.0) && (value.calificacion <= 8.9)){

		average = "B";
    }

    if ((value.calificacion >= 9.0) && (value.calificacion <= 9.2)){
		average = "A";

    }

    if ((value.calificacion >= 9.3) && (value.calificacion <= 10.00)){

 		average = "A+";
    }

    reporte.push({

    	nombre: value.nombre,
 		apellido: value.apellido,
 		calificacion: value.calificacion,
 		situacion: situacion,
 		average: average

    });

})

// console.log("reporte", reporte);

/*3*/

/*1 OP*/

const reprobados = reporte.filter(value => value.situacion === "Reprobado");

// console.log("reprobados", reprobados);

/*2 OP*/

const reprobados2 = reporte.filter(value => value.calificacion < 6);

// console.log("reprobados2", reprobados2);

/*4*/

/*1 OP*/

const promedio = (reporte.map(val => val.calificacion).reduce((a,b) => a+b)) / reporte.length;

// console.log("promedio", promedio);

/*2 OP*/

let sumatoria = 0;


reporte.forEach((value, index, array)=>{

    sumatoria += value.calificacion;

})

let promedio2 = sumatoria / reporte.length;

// console.log("promedio2", promedio2);

/*PROMESAS*/

/*setTimeout(()=>{

	console.log(1);

	setTimeout(()=>{

		console.log(2);

		setTimeout(()=>{

            console.log(3);

		},1000)

	},1000);

},1000);*/


const mayor = (edad) =>{

	return new Promise((resolve, reject)=>{

		if (edad >= 18){

			resolve("Es mayor de edad");

		}else{

			reject(new Error("No es mayor de edad"));

		}

	})

}

const disco = () =>{

	console.log("Bienvenido");

}

/*mayor(18)
	 .then(value=>console.log(value))
	 .then(disco)
	 .catch((e)=> console.error(e))*/


const contador = (n) =>{

	return new Promise(resolve=>{

		setTimeout(()=>{

            console.log(n);

            resolve();

		},1000)

	})

}

/*contador(1)
		.then(()=>contador(2))
		.then(()=>contador(3));*/


const simple = (tarea) =>{

	return new Promise(resolve=>{

			console.log(tarea);
			resolve();

	})

}

const complicada = (tarea) =>{

	return new Promise(resolve=>{

		setTimeout(()=>{

			console.log(`${tarea} .....Terminada`);

			resolve();

		},3000);

	})

}


const seguimiento = (tarea1, tipo, sigTarea) =>{

	return new Promise(resolve=>{

		console.log(tarea1)

		if (tipo === "simple"){

			resolve(simple(sigTarea));

		} else if (tipo === "complicada") {

			resolve(complicada(sigTarea));
		}

	})

}

/*simple("1 tarea")
	  .then(()=>complicada("2 tarea"))
	  .then(()=>simple("3 tarea"))
	  .then(()=>seguimiento("4 tarea","complicada", "5 tarea",))
	  .then(()=>simple("6 tarea"));*/


const miNombre = () =>{

	return new Promise((resolve,reject)=>{

		const nombre = prompt("escribe tu nombre");

		if (nombre){

			resolve(nombre);

		}else{

			reject(new Error("error al recibir el nombre"));

		}

	})

}

 const msg = nombre => console.log(`Hola ${nombre}`);

 /*miNombre()
 	     .then(nombre=> msg(nombre))
 	     .catch((e)=> console.error(e));*/



const toNumber = n => Number(n);
const doble    = n => n * 2;
const print    = valor => console.log(valor);

const leerTxt = (url) =>{

    return new Promise((resolve, reject)=>{

    	const file = new XMLHttpRequest();

    	file.open("GET", url);

    	file.onload = ()=>{

    		 if (file.status === 200){

    		 	 resolve(file.responseText);

    		 }else{

    		 	reject(new Error("Error al leer el archivo"));

    		 }

    	}


    	file.onerror = ()=>{

    		reject(new Error("Error de red"));

    	}

    	file.send();

    })


}


/*leerTxt("numero.txt")
       .then(value=> toNumber(value))
       .then(doble)
       .then(print);*/


const numeros = async(url) =>{

	try {

		const response = await leerTxt(url);

		numero = toNumber(response);

		numero = doble(numero);

		console.log(numero);

	} catch(e) {

		console.log(e);

	}

}

// numeros("numero.txt");



/*FETCH*/

const usuarioGit = (username) =>{

	const url = `https://api.github.com/users/${username}`;


	fetch(url,{

		method: "get"

	})
	.then(data => data.json())
	.then(data=>{

		 console.log("nombre", data.name);

	})

}

// usuarioGit("jhonatanSantiago13");


const gitAsync = async (username) =>{

	try {
		const url = `https://api.github.com/users/${username}`;

		const response = await fetch(url,{
			method: "get"	
		})

		const data = await response.json();

		if (data.name != null) {

			console.log(data.name);

		}else {
			
           console.error(new Error("no se ha encotrado el ususario"));

		}


	} catch(e) {
		

		console.log(e);
	}


}

gitAsync("jhonatanSantiago13");
