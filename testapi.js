
const traerAll = () =>{

	const url = "api.php";

	data = new FormData();

	data.append('tipo', 'all');

	fetch(url,{

		method: "post",
		body: data

	})
	.then(response => response.text())
	.then(response =>{

		const datos = JSON.parse(response);

		let cajas = document.querySelector(".cajas");

		datos.forEach( function(value, index) {

			 cajas.innerHTML += `<input type="checkbox" id="${value.item}" class="items" value="${value.id}"><label for="${value.item}">${value.item}</label><br>`;

		});

	})

}


traerAll();

/*CAPTUTRAR LOS CHECKS*/

const boton = document.getElementById("consultar");

    boton.addEventListener("click", ()=>{

	const checks = document.querySelectorAll(".items");

	let items = [];

	Array.from(checks).map((value, index, array)=>{

		if (value.checked == true) {

			items.push(value.value);

		}

	})

	items = items.toString();

	maquetar(items);


})


const maquetar = async (items) =>{

	const data = await getItems(items);

	let tabla = document.querySelector(".tabla");

	tabla.innerHTML = `<tr>
						 <th>ID</th>
						 <th>NOMBRE</th>
						 <th>MARCA</th>
						 <th>PRECIO</th>
					   </tr>`;

	data.forEach((value, index)=>{

		tabla.innerHTML += `<tr>
								<td>${value.id}</td>
								<td>${value.item}</td>
								<td>${value.marca}</td>
								<td>${value.precio}</td>
							</tr>`;

	})
}


const getItems = async (items) =>{

	const url = "api.php";

	data = new FormData();

	data.append("ids", items);

	const response = await fetch(url,{
		method: "post",
		body: data
	})

	data = await response.text();

	const datos = JSON.parse(data);

	// console.log("datos api", datos);

	return datos;

}

