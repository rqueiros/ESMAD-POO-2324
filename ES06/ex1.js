const products = [
    {
        name: 'Ananás',
        category: 'Fruta',
        quantity: 58
    }
];

const tbody = document.querySelector('table tbody');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // GET VALUES FROM INPUTS
    const newProduct = {};
    newProduct.name = document.getElementById('name').value;
    newProduct.category = document.getElementById('category').value;
    newProduct.quantity = parseInt(document.getElementById('quantity').value);

    // VERIFY IF PRODUCT EXISTS
    const exists = products.find(product => product.name.toLowerCase() == newProduct.name.toLowerCase())
    if (exists) {
        return alert(`O produto ${newProduct.name} já existe!`);
    }

    // ADD NEW PRODUCT TO THE ARRAY
    products.push(newProduct)
    // ADD NEW PRODUCT TO THE TABLE USING THE FUNCTION addToTable
    addToTable(newProduct);
});

function addToTable(product) {
    // CREATE TR
    const tr = document.createElement('tr');
    // CREATE TDs
    const tdName = document.createElement('td');
    tdName.innerHTML = product.name;

    const tdCategory = document.createElement('td');
    tdCategory.innerHTML = product.category;

    const tdQuantity = document.createElement('td');
    tdQuantity.innerHTML = product.quantity;

    tr.append(tdName, tdCategory, tdQuantity);
    // APPEND TO tbody
    tbody.append(tr);
}

function countProducts() {
    alert(`A lista de compras tem ${products.length} produtos!`)
}

function productsPerCategory() {
    const category = prompt('Digite a categoria');

    const productsOnCategory = products.filter(product => product.category.toLowerCase() == category.toLowerCase());

    alert(`A lista de compras tem ${productsOnCategory.length} produtos da categoria '${category}'`);
}

function totalQuantity() {
    let sum = 0;
    for (const product of products) {
        sum += product.quantity;
    }
    alert(`A lista tem de quantidade total ${sum} items`);
}

function clearList() {
    // if products is a const
    products.length = 0;
    // if products is a let
    // products = []
    tbody.innerHTML = '';
}

function addCategory() {
    const categoryName = prompt("Digite a nova categoria");

    const options = document.querySelectorAll('option');

    let exists = false;
    for (const option of options) {
        if (categoryName.toLowerCase() == option.innerText.toLowerCase())
            exists = true;
    }

    if (exists) {
        return alert(`A categoria ${categoryName} já existe`)
    }

    const select = document.getElementById('category');
    const newOption = document.createElement('option');
    newOption.innerText = categoryName;
    select.append(newOption)

}

for (const product of products) {
    addToTable(product);
}