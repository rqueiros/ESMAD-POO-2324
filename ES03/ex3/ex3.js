/*
<table>
<tr>
<th>school</th>
<th>location</th>
</tr>
<tr>
<td>ESMAD</td>
<td>Vila do Conde</td>
</tr>
</table>
*/

// a. Create the table using the node creation methods (document.createElement).
const table = document.createElement("table");
const tr1 = document.createElement("tr");
const th1 = document.createElement("th");
const th2 = document.createElement("th");
const tr2 = document.createElement("tr");
const td1 = document.createElement("td");
const td2 = document.createElement("td");
const th1Text = document.createTextNode("school");
const th2Text = document.createTextNode("location");
const td1Text = document.createTextNode("ESMAD");
const td2Text = document.createTextNode("Vila do Conde");

th1.appendChild(th1Text);
th2.appendChild(th2Text);
tr1.appendChild(th1);
tr1.appendChild(th2);
table.appendChild(tr1);
td1.appendChild(td1Text);
td2.appendChild(td2Text);
tr2.appendChild(td1);
tr2.appendChild(td2);
table.appendChild(tr2);
document.body.appendChild(table);

// b. Recreate the table using template strings and the innerHTML property.
document.body.innerHTML += `
<table>
<tr>
<th>school</th>
<th>location</th>
</tr>
<tr>
<td>ESMAD</td>
<td>Vila do Conde</td>
</tr>
</table>
`;

// c. Add a new line with the content: ISEP Porto.
const tr3 = document.createElement("tr");
const td3 = document.createElement("td");
const td4 = document.createElement("td");
const td5Text = document.createTextNode("ISEP");
const td6Text = document.createTextNode("Porto");

td3.appendChild(td5Text);
td4.appendChild(td6Text);
tr3.appendChild(td3);
tr3.appendChild(td4);
table.appendChild(tr3);

// d. Change the ESMAD location for the content: Vila do Conde/Póvoa de Varzim.
td2.textContent = "Vila do Conde/Póvoa de Varzim";

// e. Remove table header.
table.removeChild(tr1);