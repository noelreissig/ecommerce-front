var salesApp = new Vue({
  el: "#sales",
  data: {
    cars: [],
    years: [],
    brands: [],
    currency: "",
    yearSelected: "",
    brandSelected: "",
  },

  methods: {
    filter: function () {
      getCars();
      console.log("btn-filter getCars clicked and detected with Vue");
      getBrands();
      console.log("btn-filter getBrands clicked and detected with Vue");
    },
  },
});

//currencies
$.ajax({
  url: "https://ha.edu.uy/api/rates",
  success: function (data) {
    salesApp.currency = data.uyu;
  },
});

// years selector/list
// option 1

for (var i = 2021; i >= 1980; i--) {
  salesApp.years.push(i);
}

/* option 2  function reverse()
var listOfYears = [];
for (var i = 1950; i <=2021; i++){
    listOfYears.push(i);
}
salesApp.years = listOFYears.reverse();

*/

//here I'm looking into the cars
function getCars() {
  var yearsFiltered = salesApp.yearSelected;

  $.ajax({
    url: "https://ha.edu.uy/api/cars" + yearsFiltered,
    success: function (data) {
      console.log(data);
      salesApp.cars = data;
    },
  });
}
getCars(); //calling the function

/* filter with jquery

$("#btn-filter").on("click", function () {
  console.log("btn-filter was clicked and detected jquery");
});

*/

//looking into the brands
function getBrands() {
  $.ajax({
    url: "https://ha.edu.uy/api/brands",
    success: function (data) {
      console.log(data);
      salesApp.brands = data;
    },
  });
}
getBrands(); //calling the function
