$(document).ready(function() { 
	
			var greenValue = 0;
			var redValue = 0;
			var whiteValue = 0;
			var pinkValue = 0;
			var random = 0;
			
			var win = 0;
			var loss = 0;
			var yourScore = 0;

		

		$("#playbutt").on("click", function() {
			
			yourScore = 0;

			 random = Math.floor(Math.random()*101+19);
			$("#computerNumber").text(random);

			// var yourScore = 0;
			$("#yourNumber").text(yourScore);
			
			greenValue = Math.floor(Math.random()*11+1);
			redValue = Math.floor(Math.random()*11+1);
			whiteValue = Math.floor(Math.random()*11+1);
			pinkValue = Math.floor(Math.random()*11+1);

			// var win = 0;
			// var loss = 0;
		
			
			$("#wins").text(win);
			$("#losses").text(loss);

		});
		

			function hoo() {
			alert("HOOO YOU WON !!");
			win++;
			$("#wins").text(win);
			// reset();
		};

		function haa() {
			alert("HAAA YOU LOST !!");
			loss++;
			$("#losses").text(loss);
			// reset();
		};

		// function reset() {
		// 	var greenValue = 0;
		// 	var redValue = 0;
		// 	var whiteValue = 0;
		// 	var pinkValue = 0;
		// 	var random = 0;
		// 	var yourScore = 0;
		// };
		// 	var random = Math.floor(Math.random()*101+19);
		// 	$("#computerNumber").text(random);
		// 	// var yourScore = 0;
		// 	$("#yourNumber").text(yourScore);
			
		// 	var greenValue = Math.floor(Math.random()*11+1);
		// 	var redValue = Math.floor(Math.random()*11+1);
		// 	var whiteValue = Math.floor(Math.random()*11+1);
		// 	var pinkValue = Math.floor(Math.random()*11+1);
		// };

			
			$("#green").on("click", function() {
				yourScore = yourScore + greenValue;
				// console.log(yourscore);
				$("#yourNumber").text(yourScore);
				
				if (random == yourScore) {
					hoo();
				} else if (random < yourScore) {
					haa();
				};
			}); 

			$("#red").on("click", function() {
				yourScore = yourScore + redValue;
				$("#yourNumber").text(yourScore);


				if (random == yourScore) {
					hoo();
				} else if (random < yourScore) {
					haa();
				};
			});

			$("#white").on("click", function() {
				yourScore = yourScore + whiteValue;
				$("#yourNumber").text(yourScore);


				if (random == yourScore) {
					hoo();
				} else if (random < yourScore) {
					haa();
				};
			});

			$("#pink").on("click", function() {
				yourScore = yourScore + pinkValue;
				$("#yourNumber").text(yourScore);


				if (random == yourScore) {
					hoo();
				} else if (random < yourScore) {
					haa();
				};
			});
		});
	// });	// }); else if (random < yourScore) {
	// });
