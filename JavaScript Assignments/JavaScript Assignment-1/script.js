import { data } from "./data.js";

console.log(data);

(function () {

    let table = document.createElement("table");

    for (let i = 0; i < data.length; i++) {
        
        let row = document.createElement("tr");
        let rowData = data[i];

        for(const prop in rowData){
            let cell;
            if(i===0){
                cell = document.createElement("th");
                cell.style.fontWeight = "bold"; // although, th is already bold
            }
            else{
                cell = document.createElement("td");
            }
            let textNode = document.createTextNode(rowData[prop]);
            cell.appendChild(textNode);
            cell.style.border = "2px solid black";
            cell.style.padding = "10px";
            
            row.appendChild(cell);
        }
        
        table.appendChild(row);
        table.style.border = "2px solid";   
        table.style.borderCollapse = "collapse";
        table.style.margin = "auto";   
    }
    document.body.appendChild(table);
    console.log(table);
})()