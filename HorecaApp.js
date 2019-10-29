var loop = false
var loop2 = false
var loop3 = false
const prijsFris = 2
const prijsBier = 2.5
const prijsWijn = 4
var aantalFris = 0
var aantalBier = 0
var aantalWijn = 0



	while(loop == false){
		var bestelling = prompt("Welke bestelling wilt u toevoegen? \n\nKeuze uit: fris, bier of wijn \n\nGerbuik 'stop' om af te rekenen").toLowerCase();
		switch(bestelling){

			case "fris":

				loop2=false
				while(loop2 == false){	
					var bestellingFris = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?");
					if(isNaN(bestellingFris)){
						alert("Dit is geen geldig karakter.");
					}
					else{
						loop2= true
					}
					
					aantalFris= +aantalFris + +bestellingFris
					totalPriceFris= prijsFris * aantalFris
					document.getElementById("fris").innerHTML= aantalFris+ " x Fris"+ " &#8364; " + totalPriceFris

				}



				break;
			
			case "bier":

				loop2=false
				while(loop2 == false){	
					var bestellingBier = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?");
					if(isNaN(bestellingBier)){
						alert("Dit is geen geldig karakter.");
					}
					else{
						loop2= true
					}
					aantalBier= +aantalBier + +bestellingBier
					totalPriceBier= prijsBier * aantalBier
					document.getElementById("bier").innerHTML = "&#8364; " + totalPriceBier
				}



				break;

			case "wijn":

				loop2=false
				while(loop2 == false){	
					var bestellingWijn = prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?");
					if(isNaN(bestellingWijn)){
						alert("Dit is geen geldig karakter.");
					}
					else{
						loop2= true
					}
					aantalWijn= +aantalWijn + + bestellingWijn
					totalPriceWijn= prijsWijn * aantalWijn
					document.getElementById("wijn").innerHTML = "&#8364; " + totalPriceWijn
				}



				break;

			case "stop":
				loop = true
				
				break;

			default: alert("dus smeck haar naar rechts");
			break;
		}
	}
