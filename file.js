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
    // let line = document.createElement('hr');
    let remove = document.createElement('button');
    let buttonUp = document.createElement("i");
    let buttonDown = document.createElement("i");
    let elemThree = document.createElement("div");
    let elemFour = document.createElement("div")


    images.src = items[i].image;
    images.style.width = "90px";
    names.textContent = items[i].phone;
    amount.textContent = "$" + items[i].price;
    amount.className = "price"
    remove.textContent = "remove";
    remove.style.border = "none";
    remove.style.marginBottom = "30px"
    remove.style.backgroundColor = "rgb(173, 196, 196)"
    count.innerHTML = 1;
    buttonUp.className = "fa-solid fa-angle-up";
    elemThree.style.marginLeft = "68%";
    buttonUp.style.cursor = "pointer";
    elemThree.className = "three";
    div.className = "cartDiv";

    buttonDown.className = "fa-solid fa-angle-down";
    buttonDown.style.pointer = "cursor"
    count.setAttribute("id", "counts")


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

    // buttonUp.addEventListener("click", function (e) {
    //     e.preventDefault()
    //     numHolder.innerHTML = ++count;
    // });

    // buttonDown.addEventListener("click", function () {
    //     numHolder.innerHTML = --count;
    // });

    remove.addEventListener("click", function (e) {
        e.preventDefault()
        e.target.parentElement.innerHTML = "";
    })
    const carts = document.getElementById('cart')
    const clear = document.getElementById("reset")
    clear.addEventListener("click", function (e) {
        e.preventDefault()
        carts.innerHTML = "";
    })
}
const calcSum = () => {

    const sumPrice = document.getElementsByClassName("price");
    const total = document.getElementById("total");
    let sum = 0;
    for (let i = 0; i < sumPrice.length; i++) {
     const sums=   +sumPrice[i].innerText.slice(1)
        sum = sum + sums
    }
    total.innerText = sum.toFixed(2);
}


const buttonUps = document.getElementsByClassName("fa-angle-up")
for (let i = 0; i < buttonUps.length; i++) {
    buttonUps[i].addEventListener("click", function () {
        const parentElmt = buttonUps[i].parentElement;
        let countElmt = parentElmt.querySelector("#counts");

        countElmt.innerHTML = ++countElmt.innerText;
        const defaultPrice = items[i].price;

        let priceElem = buttonUps[i].parentElement.parentElement.querySelector(".price");
        const increasePrice = +priceElem.innerText.slice(1) + +defaultPrice;
        priceElem.innerHTML = '$' + increasePrice.toFixed(2);
        calcSum()


    })
}


const buttonDowns = document.getElementsByClassName("fa-angle-down")
for (let i = 0; i < buttonDowns.length; i++) {
    buttonDowns[i].addEventListener("click", function () {
        const parentElmt = buttonDowns[i].parentElement;
        let countElmt = parentElmt.querySelector("#counts");
        const defaultPrice = items[i].price;

        let priceElem = buttonDowns[i].parentElement.parentElement.querySelector(".price")
        if (Number(countElmt.innerText) > 1) {
            countElmt.innerHTML = --countElmt.innerText
            const decreasePrice = +priceElem.innerText.slice(1) - +defaultPrice
            priceElem.innerHTML = '$' + decreasePrice.toFixed(2)
            calcSum()

        }

    })
}
calcSum()