document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button[onclick='agregar']").addEventListener("click", agregar);
    document.querySelector("button[onclick='descuento']").addEventListener("click", aplicarDescuento);
});

function agregar() {
    let producto = document.getElementById("producto").value;
    let cantidad = parseInt(document.getElementById("cantidad").value) || 0;
    let precio = parseFloat(document.getElementById("precio").value) || 0;
    let total = cantidad * precio;

  
    document.getElementsByName("caja4")[0].value = producto;
    document.getElementsByName("caja5")[0].value = cantidad;
    document.getElementsByName("caja6")[0].value = precio;
    document.getElementsByName("caja7")[0].value = total.toFixed(2);

    document.getElementById("producto").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
}

function aplicarDescuento() {
    let codigo = document.getElementsByName("caja8")[0].value;
    let total = parseFloat(document.getElementsByName("caja7")[0].value) || 0;
    let descuento = 0;

    if (codigo === "30%") {
        descuento = total * 0.30;
    } else if (codigo === "50%") {
        descuento = total * 0.50;
    } else {
        Swal.fire({
            icon: "error",
            title: "error",
            text: "error en el descuento",
          });
    }

    let nuevoTotal = total - descuento;
    document.getElementsByName("caja9")[0].value = nuevoTotal.toFixed(2);
}