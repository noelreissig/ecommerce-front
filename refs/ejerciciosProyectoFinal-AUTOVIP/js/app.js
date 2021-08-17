var app = new Vue({
  el: "#app",
  data: {
    tipoCambio: "",
  },
});

$.ajax({
  url: "https://ha.edu.uy/api/rates",
  success: function (datosObtenidos) {
    console.log(datosObtenidos.uyu);
    app.tipoCambio = datosObtenidos.uyu;
  },
});

//datosObtenidos es todo el resultado de la url
//con datosObtenidos.uyu accedo a lo que está dentro de la url, valor uyu
