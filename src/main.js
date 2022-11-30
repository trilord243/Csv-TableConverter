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
