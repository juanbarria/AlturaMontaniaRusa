rotulo.innerHTML = "Indique la altura de la persona: ";
let datoAltura = document.getElementById("datoAltura");
let btnAcceso = document.getElementById("btnAcceso");
btnAcceso.addEventListener("click", () => {
  let alturaPermitida : number = 1.3;
  let alturaPersona : number = datoAltura.value;
  if (alturaPersona <= alturaPermitida) {
    console.log("La persona no puede subir al juego");
  } else {
    console.log("La persona puede subir al juego");
  }
});
