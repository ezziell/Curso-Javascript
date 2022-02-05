


function calcularNafta(litro, km, valor) {
    return (litro * km) * valor;
 }

 function calcularValor(valor) {
     return calcularNafta().value * valor;
 }

 
 function calcularNaftaTotal(){
     const input1  = document.getElementById("inputvalor");
     const valor = Number(input1.value);
 
     const litro1 = 0.1428571428571429;
 
     const input2 = document.getElementById("inputkm");
     const km = Number(input2.value);
 
     const total = calcularNafta(litro1, km, valor);

     document.getElementById("result").innerHTML = "Para tu realizar un viaje de " + km + "km tendrás que pagar $" + Math.floor(total);

}
 
 
  