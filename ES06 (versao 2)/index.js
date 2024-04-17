let products = []

const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()

    const txtName = document.querySelector("#txtName").value
    const sltCategory = document.querySelector("#sltCategory").value
    const txtQty = +document.querySelector("#txtQty").value

    if (products.some(product => product.name == txtName)) {
        alert("Produto já existente!")
    } else {
        const newProduct = {
            name: txtName,
            category: sltCategory,
            quantity: txtQty
        }
        products.push(newProduct)
        renderTable()
    }

})

/**
 * Função que vai exibir numa tabela todos os produtos comprados
 */
const renderTable = () => {
    const table = document.querySelector("table")

    // Criar o cabeçalho
    table.innerHTML = "<tr><th>NOME</th><th>CATEGORIA</th><th>QTD</th></tr>"

    for (const product of products) {
        table.innerHTML += `
            <tr>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>${product.quantity}</td>
            </tr>
        `
    }
}


// Funções para os 4 botões

/**
 * Função que vai apresentar o nº de produtos comprados
 */
const btnNProducts = document.querySelector("#btnNProducts")
btnNProducts.addEventListener("click", () => {
    alert(products.length)
})

/**
 * Função que vai apresentar o nº de produtos comprados por categoria
 */
const btnNProductsByCategory = document.querySelector("#btnNProductsByCategory")
btnNProductsByCategory.addEventListener("click", () => {

    const category = prompt("Qual a categoria?")

    const nProducts = products.filter(product => product.category == category).length

    alert(nProducts)
})

/**
 * Função que vai apresentar a quantidade total de produtos comprados
 */
const btnNQty = document.querySelector("#btnNQty")
btnNQty.addEventListener("click", () => {

    let sum = 0

    for (const product of products) {
        sum += product.quantity
    }

    alert(sum)

})

/**
 * Função que vai limpar a tabela
 */
const btnResetProducts = document.querySelector("#btnResetProducts")
btnResetProducts.addEventListener("click", () => {

    if (confirm("Deseja mesmo remover os produtos comprados?")) {
        products = []
        renderTable()
    }
})

/**
 * Função que vai apresentar o nº de produtos comprados
 */
const btnNewCategory = document.querySelector("#btnNewCategory")
btnNewCategory.addEventListener("click", () => {
    const newCategory = prompt("Qual  anova categoria?")

    const sltCategory = document.querySelector("#sltCategory")

    const options = document.querySelectorAll("option")

    const arrOptions = Array.from(options)

    if (arrOptions.some(option => option.text == newCategory)) {
        alert("Categoria ja existente!")
    } else {
        sltCategory.innerHTML += `
    <option value="${newCategory}">${newCategory}</option>
        `
    }

})









