const getData1 = (x) => {
	axios.get('https://api.polijunior.com.br/notas/').then(response =>{
		var materia = response.data[x].materia;
		var nota_p1 = response.data[x].nota_p1;
		var peso_p1 = response.data[x].peso_p1;
		var nota_p2 = response.data[x].nota_p2;
		var peso_p2 = response.data[x].peso_p2;
		var peso_p3 = response.data[x].peso_p3;
		var media = response.data[x].media_pretendida;
		var nota_p3 = (media * (peso_p1 + peso_p2 + peso_p3) - nota_p1 * peso_p1 - nota_p2 * peso_p2) / peso_p3;
		document.getElementsByClassName('txt').innerHTML = ""
		if (nota_p3 >= 0 && nota_p3 <= 10){
			document.getElementById('par').innerHTML = 'Você precisa tirar ' + nota_p3.toFixed(2) + ' na P3 para conseguir alcançar ' + media + ' em ' + materia + '.';
		} else if (nota_p3 < 0){
			document.getElementById('par').innerHTML = 'Você já alcançou ' + media + ' em ' + materia + ' apenas com as notas da P1 e da P2. Parabéns!';
		} else{
			document.getElementById('par').innerHTML = 'Infelizmente, mesmo que você tire 10 na P3, você não vai conseguir alcançar ' + media + ' em ' + materia + '.';
		};
	});
};
getBtn0.addEventListener('click', function(event){
		getData1(0);
});
getBtn1.addEventListener('click', function(event){
		getData1(1);
});	
getBtn2.addEventListener('click', function(event){
		getData1(2);
});
getBtn3.addEventListener('click', function(event){
		getData1(3);
});		
getBtn4.addEventListener('click', function(event){
		getData1(4);
});	