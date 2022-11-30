export default class {
  /**
   *
   * @param {HTMLTableElement} root The table element which will display csv data
   */
  constructor(root) {
    this.root = root;
  }
  /**
   *
   * @param {string[][]} data  2D array of data to be used as the table body
   * @param {*} headercolums List of headings to be used
   */
  update(data, headercolums = []) {
    this.clear();
    this.setHeader(headercolums);
    this.setBody(data);
  }
  /**
   *Clear all content of the table includin the header
   */

  clear() {
    this.root.innerHTML = "";
  }
  /**
   *
   * @param {string[]} headercolums List of headings to be used
   */
  setHeader(headercolums) {
    this.root.insertAdjacentHTML(
      "afterbegin",
      `
    <thead>
        <tr>
        
        ${headercolums.map((text) => `<th>${text}</th>`).join("")}
        
        </tr>

    
    
    </thead>`
    );
  }
  /**
   *
   * @param {string[][]} data a 2D array of data to be used as the table body
   */
  setBody(data) {
    const rowsHtml = data.map((row) => {
      return `<tr>
        
     ${row.map((text) => `<td> ${text}</td>`).join("")}   
        </tr>`;
    });

    this.root.insertAdjacentHTML(
      "beforeend",
      `
    
    <tbody>
    ${rowsHtml.join("")}
    </tbody>
    
    `
    );
  }
}
