
function cambia_cremas(listindex)
{

document.tortas.cremas.options.length = 0;
switch (listindex)
{

case "PAN CHIPS" :
document.tortas.cremas.options[0]=new Option("-- ELIJA UN TAMAÑO --","-- ELIJA UN TAMAÑO --");
document.tortas.cremas.options[1]=new Option("CHICO","CHICO");
document.tortas.cremas.options[2]=new Option("GRANDE","GRANDE");

break;

case "PAN RELLENO" :
document.tortas.cremas.options[0]=new Option("-- ELIJA UN TAMAÑO --","-- ELIJA UN TAMAÑO --");
document.tortas.cremas.options[1]=new Option("CHICO","CHICO");
document.tortas.cremas.options[2]=new Option("GRANDE","GRANDE");
  
break;

case "PAN FIT" :
document.tortas.cremas.options[0]=new Option("-- ELIJA UN TAMAÑO --","-- ELIJA UN TAMAÑO --");
document.tortas.cremas.options[1]=new Option("CHICO","CHICO");
document.tortas.cremas.options[2]=new Option("GRANDE","GRANDE");

break;

case "PANETONNE" :
document.tortas.cremas.options[0]=new Option("-- ELIJA UN TAMAÑO --","-- ELIJA UN TAMAÑO --");
document.tortas.cremas.options[1]=new Option("CHICO","CHICO");
document.tortas.cremas.options[2]=new Option("GRANDE","GRANDE");

break;

case "BUDIN INGLES" :
document.tortas.cremas.options[0]=new Option("-- ELIJA UN TAMAÑO --","-- ELIJA UN TAMAÑO --");
document.tortas.cremas.options[1]=new Option("UNICO TAMAÑO","UNICO TAMAÑO");

break;

case "BUDIN RELLENO" :
document.tortas.cremas.options[0]=new Option("-- ELIJA UN TAMAÑO --","-- ELIJA UN TAMAÑO --");
document.tortas.cremas.options[1]=new Option("UNICO TAMAÑO","UNICO TAMAÑO");

break;

case "TRONCO DE ARBOL" :
document.tortas.cremas.options[0]=new Option("-- ELIJA UN TAMAÑO --","-- ELIJA UN TAMAÑO --");
document.tortas.cremas.options[1]=new Option("UNICO TAMAÑO","UNICO TAMAÑO");

break;

case "BOMBAS" :
document.tortas.cremas.options[0]=new Option("-- ELIJA UN TAMAÑO --","-- ELIJA UN TAMAÑO --");
document.tortas.cremas.options[1]=new Option("BOMBAS CREMAS X 12","BOMBAS CREMAS X 12");
document.tortas.cremas.options[2]=new Option("BOMBAS MIXTAS X 12","BOMBAS MIXTAS X 12");

break;

case "COMBO NAVIDEÑO" :
document.tortas.cremas.options[0]=new Option("-- ELIJA UN TAMAÑO --","-- ELIJA UN TAMAÑO --");
document.tortas.cremas.options[1]=new Option("PAN RELLENO GRANDE + BUDIN INGLES","PAN RELLENO GRANDE + BUDIN INGLES");
document.tortas.cremas.options[2]=new Option("PAN RELLENO GRANDE + BUDIN RELLENO","PAN RELLENO GRANDE + BUDIN RELLENO");
document.tortas.cremas.options[3]=new Option("PAN CHIPS GRANDE + BUDIN INGLES","PAN CHIPS GRANDE + BUDIN INGLES");
document.tortas.cremas.options[4]=new Option("PAN CHIPS GRANDE + BUDIN RELLENO","PAN CHIPS GRANDE + BUDIN RELLENO");
document.tortas.cremas.options[5]=new Option("COMBO NAVIDAD DOLCE - N°1","COMBO NAVIDAD DOLCE - N°1");
document.tortas.cremas.options[6]=new Option("COMBO NAVIDAD DOLCE - N°2","COMBO NAVIDAD DOLCE - N°2");

break;

}
return true;
}

 //RELLENOS CON BIZCOCHUELO DE VAINILLA + DULCE DE LECHE REPOSTERO + 10 PORCIONES

 function precio(){
   
  let listacremas = document.querySelector("#listacremas").value;
  let cremas = document.querySelector("#cremas").value;  0
   
  
if(listacremas == "PAN CHIPS" && cremas == "CHICO"){
  document.getElementById("salida").innerHTML = "$9800";
}
else if (listacremas == "PAN CHIPS" && cremas == "GRANDE"){
  document.getElementById("salida").innerHTML = "$18500";
}
else if (listacremas == "PAN RELLENO" && cremas == "CHICO"){
  document.getElementById("salida").innerHTML = "$9500";
}
else if (listacremas == "PAN RELLENO" && cremas == "GRANDE"){
  document.getElementById("salida").innerHTML = "$18000";
}
else if (listacremas == "PAN FIT" && cremas == "CHICO"){
  document.getElementById("salida").innerHTML = "$14000";
}
else if (listacremas == "PAN FIT" && cremas == "GRANDE"){
  document.getElementById("salida").innerHTML = "$26200";
}
else if (listacremas == "PANETONNE" && cremas == "CHICO"){
  document.getElementById("salida").innerHTML = "$16500";
}
else if (listacremas == "PANETONNE" && cremas == "GRANDE"){
  document.getElementById("salida").innerHTML = "$31500";
}
else if (listacremas == "BUDIN INGLES" && cremas == "UNICO TAMAÑO"){
  document.getElementById("salida").innerHTML = "$11900";
}
else if (listacremas == "BUDIN RELLENO" && cremas == "UNICO TAMAÑO"){
  document.getElementById("salida").innerHTML = "$10000";
}
else if (listacremas == "TRONCO DE ARBOL" && cremas == "UNICO TAMAÑO"){
  document.getElementById("salida").innerHTML = "$20000";
}
else if (listacremas == "BOMBAS" && cremas == "BOMBAS CREMAS X 12"){
  document.getElementById("salida").innerHTML = "$10000";
}
else if (listacremas == "BOMBAS" && cremas == "BOMBAS MIXTAS X 12"){
  document.getElementById("salida").innerHTML = "$11000";
}
else if (listacremas == "COMBO NAVIDEÑO" && cremas == "PAN RELLENO GRANDE + BUDIN INGLES"){
  document.getElementById("salida").innerHTML = "$26900";
}
else if (listacremas == "COMBO NAVIDEÑO" && cremas == "PAN RELLENO GRANDE + BUDIN RELLENO"){
  document.getElementById("salida").innerHTML = "$25250";
}
else if (listacremas == "COMBO NAVIDEÑO" && cremas == "PAN CHIPS GRANDE + BUDIN INGLES"){
  document.getElementById("salida").innerHTML = "$27150";
}
else if (listacremas == "COMBO NAVIDEÑO" && cremas == "PAN CHIPS GRANDE + BUDIN RELLENO"){
  document.getElementById("salida").innerHTML = "$25500";
}
else if (listacremas == "COMBO NAVIDEÑO" && cremas == "COMBO NAVIDAD DOLCE - N°1"){
  document.getElementById("salida").innerHTML = "$30000";
}
else if (listacremas == "COMBO NAVIDEÑO" && cremas == "COMBO NAVIDAD DOLCE - N°2"){
  document.getElementById("salida").innerHTML = "$57000";
}
else if (listacremas == "PAN CHIPS"){
  document.getElementById("des1").innerHTML = "CHIPS DE CHOCOLATE<br><br>Peso aprox. 450 gr.<br>";
  imagenTorta.innerHTML = '<img src="panchips.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "PAN RELLENO"){
  document.getElementById("des1").innerHTML = "RELLENO DE CREMA PASTELERA Y DULCE DE LECHE<br><br>Peso aprox. 450 gr.";
 imagenTorta.innerHTML = '<img src="panrelleno.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "PAN FIT"){
  document.getElementById("des1").innerHTML = "SIN AZUCAR -  PROTEICO - APTO DIABETICOS<br><br>Peso aprox. 300/400 gr.";
 imagenTorta.innerHTML = '<img src="panfit.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "PANETONNE"){
  document.getElementById("des1").innerHTML = "- LINEA PREMIUM -<br><br>MIX DE FRUTOS SECOS Y GLASE";
 imagenTorta.innerHTML = '<img src="panetone.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "BUDIN INGLES"){
  document.getElementById("des1").innerHTML = "Peso aprox. 300 gr.";
 imagenTorta.innerHTML = '<img src="budini.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "BUDIN RELLENO"){
  document.getElementById("des1").innerHTML = "RELLENO DE DULCE DE LECHE<br><br>Peso aprox. 300 gr.";
 imagenTorta.innerHTML = '<img src="budinr.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "TRONCO DE ARBOL"){
  document.getElementById("des1").innerHTML = "RINDE 10 PORCIONES";
 imagenTorta.innerHTML = '<img src="tronco.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "BOMBAS"){
  document.getElementById("des1").innerHTML = "12 UNIDADES";
  imagenTorta.innerHTML = '<img src="bombasx.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "COMBO NAVIDEÑO" && cremas == "COMBO NAVIDAD DOLCE - N°1"){
  document.getElementById("des1").innerHTML = "MIGAS POR 6 UNIDADES<br><br>1 PAN CHICO A ELECCION (Chips o Relleno)<br><br> 1 BUDIN A ELECCION (Ingles o Relleno)";
  imagenTorta.innerHTML = '<img src="combonav.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "COMBO NAVIDEÑO" && cremas == "COMBO NAVIDAD DOLCE - N°2"){
  document.getElementById("des1").innerHTML = "MIGAS POR 12 UNIDADES<br><br> 1 PANETONNE CHICO<br><br>1 PAN CHICO A ELECCION(Chips  o Relleno)<br><br>1 BUDIN A ELECCION (Ingles o Relleno)";
  imagenTorta.innerHTML = '<img src="combonav.jpg" alt="Torta Rogel" class="imgTorta" />';
}

else{}
}

document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();
    
  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "5493814782259";

  let cliente = document.querySelector("#cliente").value;
  let listacremas = document.querySelector("#listacremas").value;
  let cremas = document.querySelector("#cremas").value;
  let fechas = document.querySelector("#fechas").value;
  let horario = document.querySelector("#horario").value;
  let salida = document.querySelector("#salida").innerHTML;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		--DOLCE TENTAZIONE SIN TACC--%0A
		*PEDIDO*%0A%0A
		*¿Cuál es tu nombre?*%0A
		${cliente}%0A%0A
		*Indica el pedido*%0A
		${listacremas}%0A%0A
		*Indica el tamaño*%0A
		${cremas}%0A%0A
    *FECHA DE ENTREGA*%0A
		${fechas}%0A%0A
    *HORARIO*%0A
		${horario}%0A%0A
    *Precio*%0A
		${salida}%0A%0A`;

  if (cliente === "" || listacremas === "" || cremas === "" || fechas === "" || horario === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});
