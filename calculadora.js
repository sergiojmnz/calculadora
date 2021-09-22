var base;
var altura;
var area;

function calcular(){
	var num1Element = document.getElementById("num1");
	var num2Element = document.getElementById("num2");
	n1 = num1Element.value;
	n2 = num2Element.value;
	console.log(n1);
	console.log(n2);

	if (document.getElementById('sumar').checked){
		alert('suma seleccionada');
		parseInt("n1", 1);
		parseInt("n2", 2);
		resultado = n1 + n2;
		console.log(resultado);
	}

	

	

	var resultadoElement = document.getElementById("resultado");
	
	resultadoElement.innerHTML = 'Resultado = ' + resultado;
}
