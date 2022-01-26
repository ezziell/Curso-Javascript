const coupons = [
    {
        name: "3567",
        discount: 20,
    },
    {
        name: "9823",
        discount: 5,
    },
    {
        name: "555",
        discount: 15,
    },
];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/ 100;
  
    return precioConDescuento;
  
  }

  function onClickButtonPriceDiscount() {
           const inputPrice = document.getElementById("InputPrice");
           const priceValue = inputPrice.value;
          
           const inputCoupon = document.getElementById("inputCoupon");
           const couponValue = inputCoupon.value;
      
           
        
           
           

           const isCouponValueValid = function (coupon) {
            return coupon.name === couponValue;
        };
        
        const userCoupon = coupons.find(isCouponValueValid);
        
        if (!userCoupon) {
            alert("El cupón " + couponValue + " no es válido");
        } else {
            const descuento = userCoupon.discount;
            const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        
            const resultP = document.getElementById("ResultP");
            resultP.innerText = "El precio con el descuento del cupón es: $" + precioConDescuento;
        }

    }  