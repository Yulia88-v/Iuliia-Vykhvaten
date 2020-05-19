<?php

$json_players=file_get_contents("players.json");
$json_array=json_decode($json_players,true);

echo $json_players;
 echo '<br><br>';

 
print_r($json_array);
 echo '<br><br>';

display_array_recursive($json_array);
function display_array_recursive($json_rec){
	if($json_rec){
		foreach($json_rec as $key=> $value){
			if(is_array($value)){
				display_array_recursive($value);
			}else{
				echo $key.'--'.$value.'<br>';
			}	
		}	
	}	
}	


 ?>
