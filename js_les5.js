//Задание1

function chessBoard() {
    let divBlock = document.querySelector('.div-block');
    let block;
    let flag = true;

    for (let i = 0; i < 8; i++) {
        for (let k = 0; k < 8; k++) {
            if (k ==0) flag =!flag;
            block = document.createElement('div');

            if (flag) block.className = 'block black';
            else block.className = 'block white';

            divBlock.appendChild(block);

            flag =!flag;
            
        }
    }
}
chessBoard()

//Задание 2

let basket = []
let producs = [
    {name:'холодильник', price:30000},
    {name:'телевизор', price:40000},
    {name:'фен', price:9000},
    {name:'духовка', price:19000}
]

basket.push(producs[0])
basket.push(producs[1])
basket.push(producs[2])
basket.push(producs[3])


function addBasket() {
    let divBasket = document.getElementById('div-basket')

    basket.map(e=> {
    let addProduct = document.createElement('div')
    addProduct.innerHTML = `${e.name} ${e.price}`
    divBasket.appendChild(addProduct)
    })
    
}
addBasket()
