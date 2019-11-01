var loop = false
var loop2 = false
var loop3 = false
var loop4 = false
const prijsFris = 2
const prijsBier = 2.5
const prijsWijn = 4
const prijsBal8 = 5
const prijsBal16 = 9
var aantalFris = 0
var aantalBier = 0
var aantalWijn = 0
var aantalBal8 = 0
var aantalBal16 = 0
var bestellingFris = 0
var bestellingBier = 0
var bestellingWijn = 0
var bestellingBitterbal = 0
var totaalAantal = 0
var totaalPrijs = 0
var geenBestelling = 0
var totalPriceFris = 0
var totalPriceBier = 0
var totalPriceWijn = 0
var totalPriceBal8 = 0
var totalPriceBal16 = 0
var bitterbal8 = 0
var bitterbal16 = 0


	while(loop == false){
		var bestelling = prompt("Welke bestelling wilt u toevoegen? \n\nKeuze uit: fris, bier, wijn of snack \n\nTyp 'stop' om af te rekenen").toLowerCase();
		switch(bestelling){


			case "fris":

				loop2=false
				while(loop2 == false){	
					var bestellingFris = prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?");
					if(isNaN(bestellingFris) || bestellingFris == 0){ //isNaN bestellingFris checkt of het ingevoerde een number is of niet
						alert("Dit is geen geldig karakter.");
						bestellingFris = 0			// Dit zet het aantal besteld naar 0 als er geen geldig karakter is gebruikt
					}
					else{
						loop2= true
						geenBestelling = 1	//De var geenBestelling wordt naar 1 gezet omdat er een bestelling is toegevoegd, als geenBestelling 0 is is er niks besteld
						
					}
					
					aantalFris= +aantalFris + +bestellingFris
					totalPriceFris= prijsFris * aantalFris
					document.getElementById("fris").innerHTML= aantalFris+ " x Fris"+ " &#8364; " + totalPriceFris // deze code zorgt ervoor dat de bestelling wordt toegevoegd aan de bon

				}

				

				break;
			
			case "bier":

				loop2=false
				while(loop2 == false){	
					var bestellingBier = prompt("Hoeveel bier wilt u toevoegen aan uw bestelling?");
					if(isNaN(bestellingBier) || bestellingBier == 0){
						alert("Dit is geen geldig karakter.");
						bestellingBier = 0
					}
					else{
						loop2= true
							geenBestelling = 1
						
					}
					aantalBier= +aantalBier + +bestellingBier
					totalPriceBier= prijsBier * aantalBier
					document.getElementById("bier").innerHTML = aantalBier+ " x Bier" + " &#8364; " + totalPriceBier
				}



				break;

			case "wijn":
				loop4=false
				while(loop4 == false){	
					var bestellingWijn = prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling?");
					if(isNaN(bestellingWijn) || bestellingWijn == 0){
						alert("Dit is geen geldig karakter.");
						bestellingWijn = 0 	
					}
					else{
						loop4= true
							geenBestelling = 1;
	
					}
					aantalWijn= +aantalWijn + + bestellingWijn
					totalPriceWijn= prijsWijn * aantalWijn
					document.getElementById("wijn").innerHTML = aantalWijn+ " x Wijn" + " &#8364; " + totalPriceWijn
				}
				break;
			
			case "snack":
				loop2=false
				while(loop2 == false){	
					var bestellingBitterbal = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?");
					
					if(bestellingBitterbal == 8){
						loop2= true
						geenBestelling = 1
						bestellingBitterbal = bitterbal8
						loop3 = false
						while(loop3 == false){
							var bitterbal8 = prompt("Hoeveel bitterbalschalen van 8 stuks wilt u bestellen?");
							if(isNaN(bitterbal8)){
								alert("Dit is geen geldig karakter")
							}
							else{
								loop3= true
								geenBestelling = 1
								document.getElementById("bitterbal8").style.display = "block"; // dit zorgt ervoor dat de bitterballen 8 zichtbaar worden op de bon wanneer er wordt besteld
							
							}

						}
					}

					else if(bestellingBitterbal ==16){
						loop2=true
						geenBestelling = 1
						bestellingBitterbal = bitterbal16
						loop3= false
						while(loop3 == false){
							var bitterbal16 = prompt("Hoeveel bitterbalschalen van 16 stuks wilt u bestellen?");
							if(isNaN(bitterbal16)){
								alert("Dit is geen geldig karakter")
							}
							else{
								loop3= true
								geenBestelling = 1	
								document.getElementById("bitterbal16").style.display = "block";

							}
						}
					}
					

					else {
						alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.");
						bestellingBitterbal = 0
					}
					
					aantalBal8= +aantalBal8 + + bitterbal8
					aantalBal16= +aantalBal16 + + bitterbal16
					totalPriceBal8 = prijsBal8 * aantalBal8
					totalPriceBal16 = prijsBal16 * aantalBal16
					document.getElementById("bitterbal8").innerHTML = aantalBal8+ " x Bitterbal 8" + " &#8364; " + totalPriceBal8
					document.getElementById("bitterbal16").innerHTML = aantalBal16+ " x Bitterbal 16" + " &#8364; " + totalPriceBal16
				}
				
				break;
				
			case "stop":
			console.log(geenBestelling);
				var totaalAantal = +aantalFris + +aantalBier + +aantalWijn + +aantalBal8 + +aantalBal16
				var totaalPrijs = +totalPriceFris + +totalPriceBier + +totalPriceWijn + + totalPriceBal8 + +totalPriceBal16
				// Als geenBestelling 0 is krijg je de melding dat je nog niks hebt besteld
				if(geenBestelling == 0){ 
					alert("U heeft nog niks besteld");
					loop = false
				}

				else{
					loop = true
					document.getElementById("totaal").innerHTML =  totaalAantal + " Totaal: &#8364 "+ totaalPrijs
				}
				break;
				
			default: alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
			break;
		}	
	}
