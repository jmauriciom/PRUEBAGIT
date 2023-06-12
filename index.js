function laCajaDePandora(numero) {
  if (numero % 2 === 0) {
    return numero.toString(2); // Convierte el número par a binario y lo retorna
  } else {
    return numero.toString(16); // Convierte el número impar a hexadecimal y lo retorna
  }
}

function obtenerInformacionPersonal() {
  return {
    nombre: "Nombre",
    edad: 25,
    nacionalidad: "Nacionalidad",
  };
}

// Ejemplo de uso
console.log(laCajaDePandora(10)); // Output: '1010' (10 en binario)
console.log(laCajaDePandora(7)); // Output: '7' (7 en hexadecimal)
console.log(obtenerInformacionPersonal());

const MESSI_MESSI_MESSI = (messi) => {
  return messi;
};
