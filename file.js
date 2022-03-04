let items = [
    {
        image: "https://osta.ng/wp-content/uploads/2021/03/1-791.jpg",
        phone: "Samsung Galaxy s8",
        price: 300.89,

    },

    {
        image: "https://www.gizmochina.com/wp-content/uploads/2019/05/Google-Pixel-3a-XL-300x300.jpg",
        phone: "Google Pixel",
        price: 386.99,

    },

    {
        image: "https://m-cdn.phonearena.com/images/phones/57958-350/Xiaomi-Redmi-Note-2.jpg",
        phone: "Xioami Redmi Note 2",
        price: 296.85,
    },

    {
        image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/40/106189/1.jpg?8869",
        phone: "Samsung Galaxy s7",
        price: 195.45,
    },
]



let pages = document.getElementById("cart");
for (let i = 0; i < items.length; i++) {

    let div = document.createElement("div");
    let images = document.createElement('img');
    let names = document.createElement('h2');
    let count = document.createElement("span")
    let amount = document.createElement("h3");
    let remove = document.createElement('button');
    let buttonUp = document.createElement("i");
    let buttonDown = document.createElement("i");
    let elemThree = document.createElement("div");
    let elemFour = document.createElement("div")


    div.className = "cartDiv";
    images.src = items[i].image;
    images.style.width = "90px";
    names.textContent = items[i].phone;
    count.innerHTML = 1;
    count.setAttribute("id", "counts")
    amount.textContent = "$" + items[i].price;
    amount.className = "price"
    remove.textContent = "remove";
    remove.style.border = "none";
    remove.className = "remove";
    remove.style.marginBottom = "30px"
    remove.style.backgroundColor = "rgb(173, 196, 196)"
    buttonUp.className = "fa-solid fa-angle-up";
    buttonUp.style.cursor = "pointer";
    buttonUp.id = "ups";
    elemThree.className = "three";
    elemThree.style.marginLeft = "68%";
    buttonDown.className = "fa-solid fa-angle-down";
    buttonDown.id = "down";
    buttonDown.style.cursor = "pointer";



    elemFour.appendChild(images);
    elemFour.appendChild(names);
    elemFour.appendChild(amount);
    elemFour.appendChild(remove);
    elemThree.appendChild(buttonUp);
    elemThree.appendChild(count);
    elemThree.appendChild(buttonDown);

    div.appendChild(elemFour)
    div.appendChild(elemThree)

    pages.appendChild(div);


    count = 1
    const numHolder = document.getElementById("counts");
    numHolder.innerHTML = count;



}



const calcSum = () => {

    const sumPrice = document.getElementsByClassName("price");
    const total = document.getElementById("total");
    let sum = 0;
    for (let i = 0; i < sumPrice.length; i++) {
        const sums = +sumPrice[i].innerText.slice(1)
        sum = sum + sums
    }
    total.innerText = sum.toFixed(2);
}
let cartDiv = document.querySelectorAll(".cartDiv")
for (let i = 0; i < cartDiv.length; i++) {
    if (cartDiv.length === 4) {
        cartDiv = 4;
    }
}

const buttonUps = document.querySelectorAll("#ups");
for (let i = 0; i < buttonUps.length; i++) {
    buttonUps[i].addEventListener("click", function () {
        const parentElmt = buttonUps[i].parentElement;
        let countElmt = parentElmt.querySelector("#counts");
        cartDiv = cartDiv + 1;

        countElmt.innerHTML = ++countElmt.innerText;
        const defaultPrice = items[i].price;

        let priceElem = buttonUps[i].parentElement.parentElement.querySelector(".price");
        const increasePrice = +priceElem.innerText.slice(1) + +defaultPrice;
        priceElem.innerHTML = '$' + increasePrice.toFixed(2);
        calcSum()
    })
}



const buttonDowns = document.querySelectorAll("#down")
for (let i = 0; i < buttonDowns.length; i++) {
    buttonDowns[i].addEventListener("click", function () {
        const parentElmt = buttonDowns[i].parentElement;
        const defaultPrice = items[i].price;
        let countElmt = parentElmt.querySelector("#counts");
        let priceElem = buttonDowns[i].parentElement.parentElement.querySelector(".price");
        cartDiv = cartDiv - 1;
        
    
        if (Number(countElmt.innerText) === 1) {
         buttonDowns[i].parentElement.parentElement.remove();
            const defaultPrice = items[i].price;
            const total = document.getElementById("total");
            const reducePrice = +total.innerText - +defaultPrice
            total.innerHTML = '$' + reducePrice.toFixed(2)

        } else {
            countElmt.innerHTML = --countElmt.innerText;
            const decreasePrice = +priceElem.innerText.slice(1) - +defaultPrice
            priceElem.innerHTML = '$' + decreasePrice.toFixed(2)
        }
        calcSum();

        if (cartDiv === 0) {
            console.log(cartDiv)
            const carts = document.getElementById('cart')
            const total = document.getElementById("total");
            const line = document.getElementById("line")

            carts.innerHTML = "";
            total.parentElement.innerHTML = "";
            line.remove()
        }

    })
}




const carts = document.getElementById('cart')
const clear = document.getElementById("reset")
const total = document.getElementById("total");
const line = document.getElementById("line")

clear.addEventListener("click", function (e) {
    e.preventDefault()
    carts.innerHTML = "";
    total.parentElement.innerHTML = "";
    line.remove()
})


const removeBtn = document.querySelectorAll('.remove');
for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", function () {
        cartDiv = cartDiv - 1
        if (cartDiv === 0) {
            const carts = document.getElementById('cart')
            const total = document.getElementById("total");
            const line = document.getElementById("line")

            carts.innerHTML = "";
            total.parentElement.innerHTML = "";
            line.remove()

        } else {
            const defaultPrice = items[i].price;
            const total = document.getElementById("total");
            const reducePrice = +total.innerText - +defaultPrice
            total.innerHTML = '$' + reducePrice.toFixed(2)
            removeBtn[i].parentElement.parentElement.innerHTML = ""

            calcSum()
        }
    })
}
calcSum()

