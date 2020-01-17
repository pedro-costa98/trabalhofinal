
$.getJSON("javascript/precos.json", function(json){

	class soma {
		constructor (produto1, produto2, produto3){
			this.prod1 = produto1;
			this.prod2 = produto2;
			this.prod3 = produto3;

		}
		get valor(){
			return this.prod1 + this.prod2 + this.prod3;
		}
	};

	
	let adidasSOMA = new soma(json.adidas[0].preco, json.adidas[1].preco, json.adidas[2].preco);
	let nikeSOMA = new soma(json.nike[0].preco, json.nike[1].preco, json.nike[2].preco);
	let gucciSOMA = new soma(json.gucci[0].preco, json.gucci[1].preco, json.gucci[2].preco);




	document.getElementById("adidasPROD1").innerHTML = json.adidas[0].produto;
	document.getElementById("adidasPRECO1").innerHTML = json.adidas[0].preco;
	
	document.getElementById("adidasPROD2").innerHTML = json.adidas[1].produto;
	document.getElementById("adidasPRECO2").innerHTML = json.adidas[1].preco;


	document.getElementById("adidasPROD3").innerHTML = json.adidas[2].produto;
	document.getElementById("adidasPRECO3").innerHTML = json.adidas[2].preco;

	document.getElementById("adidasSOMA").innerHTML = adidasSOMA.valor;



	/* -----------------------------------------------------------------------*/ 


	document.getElementById("nikePROD1").innerHTML = json.nike[0].produto;
	document.getElementById("nikePRECO1").innerHTML = json.nike[0].preco;

	document.getElementById("nikePROD2").innerHTML = json.nike[1].produto;
	document.getElementById("nikePRECO2").innerHTML = json.nike[1].preco;

	document.getElementById("nikePROD3").innerHTML = json.nike[2].produto;
	document.getElementById("nikePRECO3").innerHTML = json.nike[2].preco;

	document.getElementById("nikeSOMA").innerHTML = nikeSOMA.valor;

	/* -----------------------------------------------------------------------*/ 


	document.getElementById("gucciPROD1").innerHTML = json.gucci[0].produto;
	document.getElementById("gucciPRECO1").innerHTML = json.gucci[0].preco;

	document.getElementById("gucciPROD2").innerHTML = json.gucci[1].produto;
	document.getElementById("gucciPRECO2").innerHTML = json.gucci[1].preco;

	document.getElementById("gucciPROD3").innerHTML = json.gucci[2].produto;
	document.getElementById("gucciPRECO3").innerHTML = json.gucci[2].preco;

	document.getElementById("gucciSOMA").innerHTML = gucciSOMA.valor;


	


	


	
});