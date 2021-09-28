function validarformulario(){
	var i;	
	for (i = 0; i<document.miForm.checkbox.length; i++){			
		if(document.miForm.checkbox[i].checked == true){
			this.calcular();
		}	
	}	
}

function calcular(){
	var num1Element = document.getElementById("num1");
	var num2Element = document.getElementById("num2");
	n1 = num1Element.value;
	n2 = num2Element.value;
	console.log(n1);
	console.log(n2);
	if (isNaN(n1) || isNaN(n2) || n1.length==0 || n2.length == 0){
		alert('Rellena todos los campos con numeros validos');
	}else{
		if (document.getElementById('sumar').checked){
			resultado = parseFloat(n1) + parseFloat(n2);	
		}
		if (document.getElementById('restar').checked){
			resultado = parseFloat(n1) - parseFloat(n2);	
		}
		if (document.getElementById('mul').checked){
			resultado = parseFloat(n1) * parseFloat(n2);
		}
		if (document.getElementById('div').checked){
			resultado = parseFloat(n1) / parseFloat(n2);
		}
		if (document.getElementById('cua').checked){
			resultado = Math.pow(parseFloat(n1), 2);
		}	
		if (document.getElementById('sqrt').checked){
			resultado = Math.sqrt(parseFloat(n1));
		}
		if (document.getElementById('pow').checked){
			resultado = Math.pow(parseFloat(n1), parseFloat(n2));
		}
		console.log(resultado);
		var resultadoElement = document.getElementById("resultado");	
		resultadoElement.innerHTML = 'Resultado = ' + resultado;
		}
	}