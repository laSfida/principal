document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("calcular").addEventListener("click", function () {
      var comensalesInput = document.getElementById("comensales");
      var comensales = parseInt(comensalesInput.value);

      // Validar si el campo comensales está vacío o no es un número
      if (isNaN(comensales) || comensales <= 0) {
          alert("Por favor, ingresa un número válido de comensales.");
          return; // Detener la ejecución si el campo no es válido
      }

      var seguridad = parseInt(document.getElementById("segu").value) || 0;
      var cam = parseInt(document.getElementById("cam").value) || 0;

      var desayuno = document.getElementById("desayuno").querySelector("input").checked ? 1 : 0;
      var almuerzo = document.getElementById("almuerzo").querySelector("input").checked ? 1 : 0;
      var merienda = document.getElementById("merienda").querySelector("input").checked ? 1 : 0;
      var cena = document.getElementById("cena").querySelector("input").checked ? 1 : 0;
      var torta = document.getElementById("torta").querySelector("input").checked ? 1 : 0;
      var choco = document.getElementById("choco").querySelector("input").checked ? 1 : 0;
      var barra = document.getElementById("barra").querySelector("input").checked ? 1 : 0;
      var chop = document.getElementById("chop").querySelector("input").checked ? 1 : 0;
      var dj = document.getElementById("dj").querySelector("input").checked ? 1 : 0;
      var maitre = document.getElementById("maitre").querySelector("input").checked ? 1 : 0;
      var cocinero = document.getElementById("cocinero").querySelector("input").checked ? 1 : 0;
      var mesaSillas = document.getElementById("mesaSillas").querySelector("input").checked ? 1 : 0;
      var living = document.getElementById("living").querySelector("input").checked ? 1 : 0;
      var vajilla = document.getElementById("vajilla").querySelector("input").checked ? 1 : 0;
      var blancos = document.getElementById("blancos").querySelector("input").checked ? 1 : 0;

      const costoDesayuno = 15; //continental
      const costoAlmuerzo = 30; //con bebidas
      const costoMerienda = 10;
      const costoCena = 35; //
      const costoCandy = 15;
      const costoChoco = 10;
      const costoBarra = 30;
      const costoCerveza = 10;
      const costoDj = 25;
      const costoSeguridad = 30;
      const costoMozos = 25;
      const costoMaitre = 40;
      const costoCocineros = 35;
      const costoMesas = 10;
      const costoLiving = 12;
      const costoVajilla = 10;
      const costoBlancos = 5;

      const precioDesayuno = desayuno * costoDesayuno;
      const precioAlmuerzo = almuerzo * costoAlmuerzo;
      const precioMerienda = merienda * costoMerienda;
      const precioCena = cena * costoCena;
      const precioCandy = torta * costoCandy;
      const precioChoco = choco * costoChoco;
      const precioBarra = barra * costoBarra;
      const precioCerveza = chop * costoCerveza;
      const precioDj = dj * costoDj;
      const precioMaitre = maitre * costoMaitre;
      const precioCocinero = cocinero * costoCocineros;
      const precioMesas = mesaSillas * costoMesas;
      const precioLiving = living * costoLiving;
      const precioVajilla = vajilla * costoVajilla;
      const precioBlancos = blancos * costoBlancos;
      const precioSeguridad = seguridad * costoSeguridad;
      const preciosMozos = cam * costoMozos;
      var total = (comensales * (precioDesayuno + precioAlmuerzo + precioMerienda + precioCena)) +
          (precioCandy + precioChoco + precioBarra + precioCerveza + precioDj + precioMaitre + precioCocinero) +
          (precioMesas + precioLiving + precioVajilla + precioBlancos) +
          (precioSeguridad + preciosMozos);

      // Obtener el valor de venta del dólar
      fetch("https://dolarapi.com/v1/dolares/blue")
        .then(response => response.json())
        .then(data => {
          const valorDolarVenta = data.venta;
          const totalFinal = total * valorDolarVenta;
          var resultadoElement = document.getElementById("resultado");
          resultadoElement.innerHTML = "El presupuesto aprox. es: $<strong>" + totalFinal.toFixed(2) + "</strong>";
          resultadoElement.classList.add("resultadoEstilo"); // Agregar clase de estilo al elemento
        })
        .catch(error => {
          console.error('Error:', error);
          document.getElementById("resultado").innerHTML = "Se ha producido un error. Por favor, inténtalo de nuevo más tarde.";
        });
  });

  document.getElementById("clear").addEventListener("click", function () {
      document.getElementById("resultado").innerHTML = "";
  });
});
