const shopList = ["Latte", "Carne", "Banane", "Formaggio", "Lattuga"];
console.log(shopList)
let i = 0;

const lista = document.getElementById('lista')

while (i < shopList.length) {
    lista.innerHTML += `<li>${shopList[i]}</li>`;
    i++;
}