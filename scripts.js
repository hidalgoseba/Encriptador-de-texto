const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none";

function validarTexto() {
  let textoEscrito = document.querySelector(".text-area").value;
  let comparar = textoEscrito.match(/^[a-z]*$/);

  if (!comparar || comparar === 0) {
    alert("Solo son permitidas letras minúsculas y sin acentos");
    location.reload();
    return true;
  }
}

function btnEncriptar() {
  if (textArea.value == "") {
    alert("Debe ingresar texto a encriptar");
    location.reload();
  }

  if (!validarTexto()) {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    copia.style.display = "block";
  }
}

function btnDesencriptar() {
  if (textArea.value === "") {
    alert("Debe ingresar texto a desencriptar");
    location.reload();
  }
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
}

function encriptar(palabra) {
  let codigoMatriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  palabra = palabra.toLowerCase();

  for (let i = 0; i < codigoMatriz.length; i++) {
    if (palabra.includes(codigoMatriz[i][0])) {
      palabra = palabra.replaceAll(codigoMatriz[i][0], codigoMatriz[i][1]);
    }
  }
  return palabra;
}

function desencriptar(palabra) {
  let codigoMatriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  palabra = palabra.toLowerCase();

  for (let i = 0; i < codigoMatriz.length; i++) {
    if (palabra.includes(codigoMatriz[i][1])) {
      palabra = palabra.replaceAll(codigoMatriz[i][1], codigoMatriz[i][0]);
    }
  }
  return palabra;
}

function copiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";
  alert("El texto ha sido Copiado");
}
