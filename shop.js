let ArrProducts = [
    {
        id:1,
        name:"Aum pulser",
        image:"img1.png",
        price:"500",
        rating:5,

    },

    {
        id:2,
        name:"KNEE BRACES",
        image:"img2.png",
        price:"500",
        rating:5,

    },

    {
        id:3,
        name:"MAT",
        image:"img3.png",
        price:"500",
        rating:5,

    },

    {
        id:4,
        name:"POE",
        image:"img4.jpg",
        price:"500",
        rating:5,

    },

    {
        id:5,
        name:"Sound Box",
        image:"img5.png",
        price:"500",
        rating:5,

    },
];

const body = document.querySelector("body"),
products = document.querySelector(".products"),
addtomycart = document.querySelector(".addtomycart"),
removecart=document.querySelector(".removecart"),
productList = document.querySelector(".productList"),
quantity = document.querySelector(".quantity"),
total = document.querySelector(".total");


let checkOutList = [];
addtomycart.onclick=()=>{
    body.classList.add("active");

};
removecart.onclick=()=>{
    body.classList.remove("active");

};


function onInIt(){
    ArrProducts.forEach((item, key)=>{
        let div = document.createElement("div");
        div.classList.add("item");

        let star ="";
        for(i=0;i<item.rating;i++){
            star += `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
          </svg>`;
          
        }

        div.innerHTML=`
        <img src="images/${item.image}" />
        <div class="name">${item.name}</div>
        <div>${star}</div>
        <div class="price"><small>$</small>${item.price}</div>
        <button onclick="addToCart(${key})"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"/>
</svg>
 Add to Cart </button>
        `;

        products.appendChild(div);
    });
}
onInIt();

function addToCart(Id){
    if(checkOutList[Id] == null){
        checkOutList[Id] = ArrProducts[Id];
        checkOutList[Id].quantity = 1;
    }else{
        checkOutList[Id].quantity +=1;
    }
    reloadCart();

}

function reloadCart(){
    productList.innerHTML="";
    let count =0;
    let totalPrice=0;
    checkOutList.forEach((item,key)=>{
        totalPrice +=parseInt(item.price * item.quantity);
        count += item.quantity;

        let li =document.createElement("li");
        li.innerHTML=`
        <img src="images/${item.image}">
        <div>${item.name}</div>
        <div >${item.price}</div>
        <div>
        <button onclick="changeQuantity(${key},${item.quantity-1})">-</button>
        <div class="count">${item.quantity}</div>
        <button onclick="changeQuantity(${key},${item.quantity+1})">+</button>
        </div>
        `;

        productList.appendChild(li);
    });
    total.innerHTML=`<small>Subtotal(${count} items)$</small>${totalPrice}`;
    quantity.innerHTML=count;

}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete checkOutList[key];
    }
    else{
        checkOutList[key].quantity=quantity;

    }
    reloadCart();
}
