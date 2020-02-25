$(document).ready(function(){			
	$("#select--button").click(function(){
		var category = $("#inputGroupSelect01 option:selected").text();
		$.ajax({
			method: "GET",
			url: "https://jokeapi.p.rapidapi.com/category/" + category,
			headers:{
				"x-rapidapi-host": "jokeapi.p.rapidapi.com",
				"x-rapidapi-key": "d4c39259fbmsh0d547166ed36191p17e7e0jsn08c8d0d7ad58"
			},
			data:{

			},
			beforeSend: function(){
				console.log("ahi lo mando");
			},
			success: function(respuesta){
				console.log(respuesta);
				if(respuesta.type == "single"){
					$("#joketext").text(respuesta.joke);
				} else if (respuesta.type == "twopart") {
					$("#joketext").html(respuesta.setup + '<br>' + '<br>' + '<br>' + respuesta.delivery);
				}
				
				$("#backgroundjoke").css("visibility", "visible");
			},
			error: function(){
				console.log("error");
			}
		})
	});
});
