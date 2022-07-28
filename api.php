<?php

$datos = array(

	1 => array(

          "item" => "papas",
          "marca" => "sabritas",
          "precio" => 16.00


	),

	2 => array(

          "item" => "soda",
          "marca" => "cocacola",
          "precio" => 30.00

	),

	3 => array(

          "item" => "soda",
          "marca" => "cocacola",
          "precio" => 30.00

	),

	4 => array(

          "item" => "donas",
          "marca" => "bimbo",
          "precio" => 20.00

	)

	5 => array(

          "item" => "jamon",
          "marca" => "fut",
          "precio" => 150.00

	),

	6 => array(

          "item" => "queso",
          "marca" => "lala",
          "precio" => 100.00

	),


	7 => array(

          "item" => "medias noches",
          "marca" => "Bimbo",
          "precio" => 30.00

	),

	   8 => array(

          "item" => "Danonino",
          "marca" => "Danone",
          "precio" => 30.00

	)

);


$data = "7,8";

$data = explode(",", $data);

$response = "";

foreach ($datos as $idProducto => $detalles) {

	  if (in_array($idProducto, $data)) {

	  		$temp = `
	  		,{
	  		"id":$idProducto,`;

	  		foreach ($detalles as $index => $value) {

	  			$temp.= `"$index":$value,`;


	  		}

       substr($myString, 0, -1);

	   array_push($response, $temp);

	   $temp = [];

	  }

}

echo json_encode($response);


 ?>


