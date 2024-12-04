
function cambia_cremas(listindex)
{
  return true;
}

function precio(){
   
let listacremas = document.querySelector("#listacremas").value;
   
  
if(listacremas == "PAN CHIPS - CHICO"){
  document.getElementById("salida").innerHTML = "$9800";
  document.getElementById("des1").innerHTML = "CHIPS DE CHOCOLATE<br><br>Peso aprox. 450 gr.<br>";
  imagenTorta.innerHTML = '<img src="panchips.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "PAN CHIPS - GRANDE"){
  document.getElementById("salida").innerHTML = "$18500";
  document.getElementById("des1").innerHTML = "CHIPS DE CHOCOLATE<br><br>Peso aprox. 750/850 gr.<br>";
  imagenTorta.innerHTML = '<img src="panchips.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "PAN RELLENO - CHICO"){
  document.getElementById("salida").innerHTML = "$9500";
  document.getElementById("des1").innerHTML = "RELLENO DE CREMA PASTELERA Y DULCE DE LECHE<br><br>Peso aprox. 450 gr.";
 imagenTorta.innerHTML = '<img src="panrelleno.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "PAN RELLENO - GRANDE"){
  document.getElementById("salida").innerHTML = "$18000";
  document.getElementById("des1").innerHTML = "RELLENO DE CREMA PASTELERA Y DULCE DE LECHE<br><br>Peso aprox. 750/850 gr.";
 imagenTorta.innerHTML = '<img src="panrelleno.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "PAN FIT - CHICO"){
  document.getElementById("salida").innerHTML = "$14000";
  document.getElementById("des1").innerHTML = "SIN AZUCAR -  PROTEICO - APTO DIABETICOS<br><br>Peso aprox. 300/400 gr.";
 imagenTorta.innerHTML = '<img src="panfit.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "PAN FIT - GRANDE"){
  document.getElementById("salida").innerHTML = "$26200";
  document.getElementById("des1").innerHTML = "SIN AZUCAR -  PROTEICO - APTO DIABETICOS<br><br>Peso aprox. 500/600 gr.";
 imagenTorta.innerHTML = '<img src="panfit.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "PANETONNE - CHICO"){
  document.getElementById("salida").innerHTML = "$16500";
  document.getElementById("des1").innerHTML = "- LINEA PREMIUM -<br><br>MIX DE FRUTOS SECOS Y GLASE";
 imagenTorta.innerHTML = '<img src="panetone.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "PANETONNE - GRANDE"){
  document.getElementById("salida").innerHTML = "$31500";
  document.getElementById("des1").innerHTML = "- LINEA PREMIUM -<br><br>MIX DE FRUTOS SECOS Y GLASE";
 imagenTorta.innerHTML = '<img src="panetone.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "BUDIN INGLES"){
  document.getElementById("salida").innerHTML = "$11900";
  document.getElementById("des1").innerHTML = "Peso aprox. 300 gr.";
 imagenTorta.innerHTML = '<img src="budini.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "BUDIN RELLENO"){
  document.getElementById("salida").innerHTML = "$10000";
  document.getElementById("des1").innerHTML = "RELLENO DE DULCE DE LECHE<br><br>Peso aprox. 300 gr.";
 imagenTorta.innerHTML = '<img src="budinr.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "PACK N°1 - A"){
  document.getElementById("salida").innerHTML = "$26900";
  document.getElementById("des1").innerHTML = "PAN RELLENO GRANDE + BUDIN INGLES";
 imagenTorta.innerHTML = '<img src="" alt="" class="imgTorta" />';
}
else if (listacremas == "PACK N°1 - B"){
  document.getElementById("salida").innerHTML = "$25250";
  document.getElementById("des1").innerHTML = "PAN RELLENO GRANDE + BUDIN RELLENO";
 imagenTorta.innerHTML = '<img src="" alt="" class="imgTorta" />';
}
else if (listacremas == "PACK N°2 - A"){
  document.getElementById("salida").innerHTML = "$27150";
  document.getElementById("des1").innerHTML = "PAN CHIPS GRANDE + BUDIN INGLES";
 imagenTorta.innerHTML = '<img src="" alt="" class="imgTorta" />';
}
else if (listacremas == "PACK N°2 - B"){
  document.getElementById("salida").innerHTML = "$25500";
  document.getElementById("des1").innerHTML = "PAN CHIPS GRANDE + BUDIN RELLENO";
 imagenTorta.innerHTML = '<img src="" alt="" class="imgTorta" />';
}
else if (listacremas == "TRONCO DE ARBOL"){
  document.getElementById("salida").innerHTML = "$20000";
  document.getElementById("des1").innerHTML = "RINDE 10 PORCIONES";
 imagenTorta.innerHTML = '<img src="tronco.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "BOMBAS CREMAS X 12"){
  document.getElementById("salida").innerHTML = "$10000";
  document.getElementById("des1").innerHTML = "12 UNIDADES";
 imagenTorta.innerHTML = '<img src="bombasx.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "BOMBAS MIXTAS X 12"){
  document.getElementById("salida").innerHTML = "$11000";
  document.getElementById("des1").innerHTML = "12 UNIDADES";
 imagenTorta.innerHTML = '<img src="bombasx.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "COMBO NAVIDAD DOLCE - N°1"){
  document.getElementById("salida").innerHTML = "$30000";
  document.getElementById("des1").innerHTML = "MIGAS POR 6 UNIDADES<br><br>1 PAN CHICO A ELECCION (Chips o Relleno)<br><br> 1 BUDIN A ELECCION (Ingles o Relleno)";
 imagenTorta.innerHTML = '<img src="combonav.jpg" alt="Torta Rogel" class="imgTorta" />';
}
else if (listacremas == "COMBO NAVIDAD DOLCE - N°2"){
  document.getElementById("salida").innerHTML = "$57000";
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
  *FECHA DE ENTREGA*%0A
  ${fechas}%0A%0A
  *HORARIO*%0A
  ${horario}%0A%0A
  *Precio*%0A
  ${salida}%0A%0A`;

  if (cliente === "" || listacremas === "" || fechas === "" || horario === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});

