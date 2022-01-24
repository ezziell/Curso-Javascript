//código del cuadrado
console.group("Cuadrado");
//const ladocuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladocuadrado + " cm");

function perimetrocuadrado(lado){
    return lado * 4;
} 
perimetrocuadrado()
//console.log("el perimetro del cuadrado es : " + perimetrocuadrado + " cm");

function areacuadrado(lado){
    return lado * lado;
}
//console.log("el area del cuadrado es : " + areacuadrado + " cm cuadrados");
console.groupEnd();


// código del triangulo
console.group("Triangulo");
//const ladotriangulo1 = 6;
//const ladotriangulo2 = 6;
//const basetriangulo = 4;
//const alturatriangulo = 5.5;

function perimetrotriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
}
 
function areatriangulo(base, altura){
    return (base * altura) / 2;
  }
   
//console.log(
  //  "los lados del triangulo miden " 
  //  + ladotriangulo1 
    //+ " cm, " 
  //  + ladotriangulo2 
   // + " cm, " 
  //  + basetriangulo 
 //   + "cm"
//);
//console.log("la altura del triangulo es: " + alturatriangulo + " cm");
//console.log("el perimetro del triangulo mide: " + perimetrotriangulo);
//console.log("el area del triangulo mide: " + areatriangulo + " cm")
//console.groupEnd();

// código del círculo 
//console.group("Circulos");
// radio
//const radiocirculo = 4;
//console.log("el radio del circulo es: " + radiocirculo);

// diametro
function diametrocirculo(radio){
    return radio * 2;
}
//console.log("el diametro del circulo es: " + diametrocirculo);
// PI
const PI = Math.PI;
//console.log("pi es igual a.. " + PI)
// circunferencia
function perimetrocirculo(radio){
    const diametro = diametrocirculo(radio);
    return diametro * PI;
}
//console.log("el perimetro del circulo mide: " + perimetrocirculo);
// area
function areacirculo(radio){
  return (radio * radio) * PI;
}
//const areacirculo = (radiocirculo * radiocirculo) * PI;
//console.log("el area del circulo mide: " + areacirculo);
console.groupEnd();

// aqui interactuamos con el html

//cuadrado
function calcularperimetrocuadrado() {
  const input = document.getElementById("inputcuadrado");
  const value = input.value;
  const perimetro = perimetrocuadrado(value);
  document.getElementById("perimetroc").innerHTML = perimetro;
}


function calcularareacuadrado() {
  const input = document.getElementById("inputcuadrado");
  const value = input.value;
  const area = areacuadrado(value);
  document.getElementById("areac").innerHTML = area;
}

// triangulo

function calcularperimetrotriangulo() {
  const input1 = document.getElementById("inputtriangulo1");
  const value1 = Number(input1.value);
  const input2 = document.getElementById("inputtriangulo2");
  const value2 = Number(input2.value);
  const base = document.getElementById("inputtriangulobase");
  const value3 = Number(base.value);
  const perimetro = perimetrotriangulo(value1,value2,value3);
  document.getElementById("perimetrotri").innerHTML = perimetro;
}

function calcularareatriangulo() {
  const input1 = document.getElementById("inputtriangulo1");
  const value1 = Number(input1.value);
  const input2 = document.getElementById("inputtriangulo2");
  const value2 = Number(input2.value);
  const base = document.getElementById("inputtriangulobase");
  const value3 = Number(base.value);
  const area = areatriangulo(value1,value2,value3);
  document.getElementById("areatri").innerHTML = area;
}



//circulo

function calculardiametrocirculo() {
  const input = document.getElementById("inputcirculo");
  const value = input.value;
  const diametro = diametrocirculo(value);
  Math.floor(document.getElementById("diametrocir").innerHTML = diametro);
}

function calcularperimetrocirculo() {
  const input = document.getElementById("inputcirculo");
  const value = input.value;
  const perimetro = perimetrocirculo(value);
  Math.floor(document.getElementById("perimetrocir").innerHTML = perimetro);
}

function calcularareacirculo() {
  const input = document.getElementById("inputcirculo");
  const value = input.value;
  const area = areacirculo(value);
  document.getElementById("areacir").innerHTML = area;
}
