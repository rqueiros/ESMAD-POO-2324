// a. Select the element with id "p2" and print it to the console.
const p2 = document.getElementById("p2");
console.log(p2);

// b. Select all paragraphs and print them in the console.
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// c. Select all paragraphs and print their contents.
for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].textContent);
}

// d. Select all elements whose class attribute has the value "red”.
const redElements = document.getElementsByClassName("red");
console.log(redElements);

// e. Select and print a <p> element whose id is "p3”.
const p3 = document.getElementById("p3");
console.log(p3);

// f. Select and print all contents of <p> and <div> elements
const pElements = document.querySelectorAll("p"); // or document.getElementsByTagName("p");, just to show another way to do it
const divElements = document.getElementsByTagName("div");
for (let i = 0; i < pElements.length; i++) {
    console.log(pElements[i].textContent);
}
for (let i = 0; i < divElements.length; i++) {
    console.log(divElements[i].textContent);
}

// g. Select and print the texts of <span> elements.
const spanElements = document.getElementsByTagName("span");
for (let i = 0; i < spanElements.length; i++) {
    console.log(spanElements[i].textContent);
}

// h. Select and print the text of the <span> element inside the <div> element.
const divSpan = document.querySelector("div span");
console.log(divSpan.textContent);

// i. Select and print text from <span> element outside <div> element.
const spanOutsideDiv = document.querySelector("body > span");
console.log(spanOutsideDiv.textContent);
