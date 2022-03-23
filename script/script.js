/* LISTA DE PRODUCTOS */
let menuItems = [
    {
        type: "Entradas",
        description: "Rabas",
        price: 1590,
        available: false,
        source: "images/rabas.jpg"
    },
    {
        type: "Entradas",
        description: "Langostinos empanados",
        price: 1600,
        available: true,
        source: "images/langostinos.jpg"
    },
    {
        type: "Entradas",
        description: "Berenjena Parmesana",
        price: 990,
        available: true,
        source: "images/berenjena.jpg"
    },
    {
        type: "Entradas",
        description: "Bruschetta",
        price: 1200,
        available: true,
        source: "images/bruschetta.jpg"
    },
    {
        type: "Entradas",
        description: "Mollejas crocantes",
        price: 1650,
        available: true,
        source: "images/mollejas.jpg"
    },
    {
        type: "Principales",
        description: "Ojo de bife con papas asadas",
        price: 1750,
        available: true,
        source: "images/ojo_de_bife.jpg"
    },
    {
        type: "Principales",
        description: "Pollo a la mostaza con vegetales asados",
        price: 1350,
        available: true,
        source: "images/pollo.jpg"
    },
    {
        type: "Principales",
        description: "Trucha con arroz cremoso",
        price: 1650,
        available: false,
        source: "images/trucha.jpg"
    },
    {
        type: "Principales",
        description: "Entraña con puré rústico",
        price: 1400,
        available: true,
        source: "images/entrania.jpg"
    },
    {
        type: "Principales",
        description: "Ravioles de salmón con salsa de tomates",
        price: 1650,
        available: true,
        source: "images/ravioles.jpg"
    },
    {
        type: "Postres",
        description: "Volcán de chocolate",
        price: 790,
        available: true,
        source: "images/volcan.jpg"
    },
    {
        type: "Postres",
        description: "Creme brulee",
        price: 500,
        available: true,
        source: "images/creme_brulee.jpg"
    },
    {
        type: "Postres",
        description: "Flan casero",
        price: 520,
        available: true,
        source: "images/flan.jpg"
    },
    {
        type: "Postres",
        description: "Ensalada de frutas",
        price: 590,
        available: true,
        source: "images/ensalada_frutas.jpg"
    },
    {
        type: "Postres",
        description: "Cheesecake con frutos del bosque",
        price: 560,
        available: false,
        source: "images/cheseecake.jpg"
    },
    {
        type: "Bebidas",
        description: "Agua sin gas",
        price: 210,
        available: true,
        source: "images/agua.jpg"
    },
    {
        type: "Bebidas",
        description: "Jugo exprimido de naranja",
        price: 400,
        available: true,
        source: "images/exprimido.jpg"
    },
    {
        type: "Bebidas",
        description: "Cerveza Cape Horn",
        price: 560,
        available: false,
        source: "images/cerveza.jpg"
    },
    {
        type: "Bebidas",
        description: "Vino Tinto Amalaya Corte Único",
        price: 1100,
        available: true,
        source: "images/vino_tinto.jpg"
    },
    {
        type: "Bebidas",
        description: "Vino Blanco Norton Cosecha Tardía",
        price: 900,
        available: true,
        source: "images/vino_blanco.jpg"
    },
];

/* VARIABLES */
let rowEntradas = document.querySelector("#row-entradas"),
    rowPrincipales = document.querySelector("#row-principales"),
    rowPostres = document.querySelector("#row-postres"),
    rowBebidas = document.querySelector("#row-bebidas");


/* CLASE PARA CONSTRUIR ITEMS DEL MENU */
class MenuItem {
    constructor(type, description, price, available, source) {
        this.createCard(type, description, price, available, source);
    }
    createCard(type, description, price, available, source) {
        /* CREAR DIV COL. INSERTAR EN DIV ROW (VER TYPE) */
        let divCol = document.createElement("div");
        divCol.classList.add("col-12","col-sm6","col-md-4","col-lg-3");
        switch (type) {
            case "Entradas":
                rowEntradas.appendChild(divCol);
                break;
            case "Principales":
                rowPrincipales.appendChild(divCol);
                break;
            case "Postres":
                rowPostres.appendChild(divCol);
                break;
            case "Bebidas":
                rowBebidas.appendChild(divCol);
                break;
        }

        /* CREAR DIV CARD. INSERTAR EN COL */
        let divCard = document.createElement("div");
        divCard.classList.add("card","mx-auto");
        divCol.appendChild(divCard);

        /* CREAR IMG. INSERTAR EN CARD */
        let cardImg = document.createElement("img");
        cardImg.classList.add("card-img-top");
        cardImg.src = source;
        cardImg.alt = description;
        divCard.appendChild(cardImg); 

        /* CREAR DIV CARD-BODY. INSERTAR EN CARD */
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        divCard.appendChild(cardBody);

        /* CREAR H5 CARD-TITLE. INSERTAR EN CARD-BODY */
        let cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = description;
        cardBody.appendChild(cardTitle);

        /* CREAR P CARD-TEXT. INSERTAR EN CARD-BODY */
        let cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.textContent = `$${price}.-`;
        cardBody.appendChild(cardText);

        /* CREAR A AGREGAR (VER DISABLE). INSERTAR EN CARD-BODY */
        let buttonAdd = document.createElement("a");
        buttonAdd["description"] = description;
        buttonAdd["price"] = price;
        if (!available) {
            buttonAdd.classList.add("agregar", "btn", "btn-secondary","disabled");
            buttonAdd.textContent = "No disponible";
        } else {
            buttonAdd.classList.add("agregar", "btn", "btn-primary");
            buttonAdd.textContent = "Agregar al pedido";
        }
        cardBody.appendChild(buttonAdd);
    }
}

/* CREAR ITEMS DEL MENU */

for (const menuItem of menuItems) {
    new MenuItem(menuItem.type, menuItem.description, menuItem.price, menuItem.available, menuItem.source);
}

/* VARIABLES */
let addButtons = document.querySelectorAll(".agregar"),
    orderList = document.querySelector("#pedido"),
    showOrderBtn = document.querySelector("#mostrar"),
    orderContainer = document.querySelector("#container-pedido"),
    counter = document.querySelector("#contador"),
    sendOrder = document.querySelector("#enviar"),
    showTotalCost = document.querySelector("#show-total-cost"),
    front = document.querySelector("#front"),
    showMenuBtn = document.querySelector("#show-menu"),
    alert = document.querySelector("#alert");

console.dir(addButtons);

    /* CLASE PARA CONSTRUIR ITEMS DEL PEDIDO */
class OrderItem {
    constructor(item, precio) {
        this.crearDiv(item, precio);
    }
    crearDiv(item, precio) {
        /* CREAR EL DIV CON LA INFO DEL PRODUCTO */
        let itemContent = document.createElement("div");
        itemContent.innerHTML = `<div class="fw-bold">${item}</div>$${precio}.-`;
        itemContent.classList.add("info-prod","ms-2","me-auto");

        /* CREAR EL BOTON PARA REMOVER EL ITEM */
        let removeBtn = document.createElement("span");
        removeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-octagon-fill" viewBox="0 0 16 16"><path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/></svg>`;
        removeBtn.classList.add("eliminar","badge","bg-danger");

        /* CREAR EL ITEM PARA EL PEDIDO */
        let listItem = document.createElement("li");
        listItem.classList.add("list-group-item","d-flex","justify-content-between","align-items-start");
        
        /* AGREGAR AL ITEM LA INFO DEL PRODUCTO Y EL BOTON REMOVER */
        listItem.appendChild(itemContent);
        listItem.appendChild(removeBtn);
        
        /* AGREGAR AL PEDIDO EL ITEM COMPLETO */
        orderList.appendChild(listItem);
        
        /* AGREGAR FUNCIONALIDAD AL BOTON PARA REMOVER EL ITEM */
        removeBtn.addEventListener("click", () => {
            listItem.classList.add("out-item");
            setTimeout(() => {
                listItem.remove();
                calcCost();
            },800);
        })
    }
}

/* FUNCION PARA MOSTRAR-OCULTAR PEDIDO */
function toggleOrder() {
    orderContainer.classList.toggle("from-up");
    orderContainer.classList.toggle("to-up");
    if (showOrderBtn.textContent == "Ver pedido") {
        orderContainer.classList.toggle("display-none");
        showOrderBtn.classList.add("disabled");
        setTimeout( () => {
            showOrderBtn.classList.remove("disabled");
            showOrderBtn.textContent = "Ocultar pedido";
            sendOrder.classList.toggle("display-none");
        },1000);
    } else {
        sendOrder.classList.toggle("display-none");
        showOrderBtn.classList.add("disabled");
        setTimeout( () => {
            if (showTotalCost.textContent > 0) {
                showOrderBtn.classList.remove("disabled");
            };
            showOrderBtn.textContent = "Ver pedido";
            orderContainer.classList.toggle("display-none");
        },1000);
    };
}

/* FUNCION PARA ACTUALIZAR COSTO TOTAL Y CONTADOR DE ITEMS*/
function calcCost() {
    let infoProducts = document.querySelectorAll(".info-prod"),
        prices = [];
    infoProducts.forEach(el => prices.push(parseFloat(el.innerHTML.split("$").pop().slice(0,-2))));
    counter.textContent = prices.length;
    if (prices.length == 0) {
        toggleOrder();
        showTotalCost.textContent = 0;
        showOrderBtn.classList.add("disabled");
    } else {
        showTotalCost.textContent = prices.reduce((acc,curr) => acc+curr);
    }
}

/* FUNCION PARA MOSTRAR ALERTA DE ITEM AGREGADO */
function showAlert(item) {
    alert.textContent = `Agregado: ${item}`;
    alert.classList.remove("display-none");
    setTimeout(() => {
        alert.classList.add("display-none");
        calcCost();
    },1200);
}

/* AGREGAR FUNCIONALIDAD AL BOTÓN DE VER MENÚ */
showMenuBtn.addEventListener("click", () => {
    front.classList.add("to-up");
})

/* AGREGAR FUNCIONALIDAD A TODOS LOS BOTONES PARA AGREGAR AL PEDIDO */
for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener("click", function() {
        let item = this.description,
            precio = this.price;
        new OrderItem (item,precio);
        showOrderBtn.classList.remove("disabled");
        showAlert(item);
    })
}

/* AGREGAR FUNCIONALIDAD AL BOTON MOSTRAR PEDIDO */
showOrderBtn.addEventListener("click", () => toggleOrder())