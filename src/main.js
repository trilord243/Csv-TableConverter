import Tablecsv from "./TableCsv.js";

const tableRoot = document.querySelector("#csv");
const csvFileInput = document.querySelector("#csvFileInput");
const tablecsv = new Tablecsv(tableRoot);

csvFileInput.addEventListener("change", (e) => {
  Papa.parse(csvFileInput.files[0], {
    //delimiter: ";", Choose the delimeter, by default papa parser will choose the default delimiters ("," ";"  "tabs"  )
    SkipEmptyLines: true,
    complete: (results) => {
      console.log(results);
      tablecsv.update(results.data.slice(1), results.data[0]);
    },
  });
});
// This code is to define a initial data of the table
/*
tablecsv.setHeader(["ID", "Name", "Age"]);

tablecsv.setBody([
  [465, "dom", 35],
  [46, "pene", 45],
  [46, "dom", 35],
  [46, "dom", 35],
]);
*/
const Item = {
  Codigo: "351351",
  Descripcion: "abcde",
  conteo: [56, 2, 3, 4],
  Observacione: "Hola",
};

console.log(Item.Codigo, Item.conteo[0], Item.Observacione);
