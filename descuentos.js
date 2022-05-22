const preciooriginal = 100;
const descuento = 15;

function calcularpreciocondescuento(precio, descuento) {
    const porcentajedescuento = 100 - descuento;
    const preciocondescuento = (precio * porcentajedescuento) / 100;

    return preciocondescuento;
}

function onclickdescuento() {
    const inputprice = document.getElementById("inputprice");
    const pricevalue = inputprice.value;

    const inputdiscount = document.getElementById("inputdiscount");
    const discountvalue = inputdiscount.value;

    const preciocondescuento = calcularpreciocondescuento(pricevalue, discountvalue);

    const resultp = document.getElementById("resultp");
    resultp.innerText = "El precio con descuento son: $" + preciocondescuento;
}



//console.log({
  //  preciooriginal, 
 //   descuento, 
//    porcentajedescuento, 
  //  preciocondescuento,
//});