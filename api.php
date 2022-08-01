<?php


$datos = array(

	1 => array(

          "item" => "papas",
          "marca" => "sabritas",
          "precio" => 16.00


	),

	2 => array(

          "item" => "jugo",
          "marca" => "jumex",
          "precio" => 25.00

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

	),

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
          "precio" => 10.00

	)

);

$tipo = $_POST["tipo"];

$data = $_POST["ids"];

if ($tipo == "all") {

		$response = "";

		foreach ($datos as $idProducto => $detalles) {

			$temp = '
				  {
				  	"id":'.$idProducto.',';

		    foreach ($detalles as $index => $value) {

				  $temp.= '"'.$index.'":"'.$value.'",';

		    }

		    $temp = substr($temp, 0, -1);

			$temp .= '},';

		    $response .= $temp;

		    $temp = [];

		}

		$response = "[".substr($response, 0, -1)."]";

		echo $response;


}else{

		// $data = "7,8";

		$data = explode(",", $data);

		$response = "";

		// $response = [];


		foreach ($datos as $idProducto => $detalles) {


			  if (in_array($idProducto, $data)) {

			  		$temp = '
			  		{
			  		"id":'.$idProducto.',';



			  		foreach ($detalles as $index => $value) {

			  			$temp.= '"'.$index.'":"'.$value.'",';


			  		}

		            $temp = substr($temp, 0, -1);

		            $temp .= '},';

			        $response .= $temp;

			   	    $temp = [];

			  }

		}

		$response = "[".substr($response, 0, -1)."]";

		echo $response;

}

 ?>


