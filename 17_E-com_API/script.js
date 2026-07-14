let products=[];

let cart=JSON.parse(localStorage.getItem("cart")) || [];



fetch("https://fakestoreapi.com/products")

.then(res=>res.json())

.then(data=>{

products=data;

displayProducts(products);

displayCart();

});





function displayProducts(data){


let html="";


data.forEach(product=>{


html+=`

<div class="col-md-3 mb-4">


<div class="card h-100">


<img src="${product.image}"
class="card-img-top">


<div class="card-body text-center">


<h5 class="card-title">

${product.title}

</h5>


<p class="price">

₹ ${product.price}

</p>


<button class="btn cart-btn w-100"
onclick="addToCart(${product.id})">

Add To Cart

</button>


</div>


</div>


</div>


`;

});


document.getElementById("productArea").innerHTML=html;


}







function searchProducts(){


let text=document
.getElementById("searchBox")
.value
.toLowerCase();



let result=products.filter(product=>

product.title.toLowerCase().includes(text)

);



displayProducts(result);


}








function addToCart(id){


let product=products.find(p=>p.id==id);



let item=cart.find(p=>p.id==id);



if(item){

item.quantity++;

}

else{


cart.push({

id:product.id,

title:product.title,

image:product.image,

price:product.price,

quantity:1

});


}


saveCart();


}








function displayCart(){


let html="";

let count=0;



if(cart.length==0){


html=`

<p class="text-center text-muted">

Cart Empty

</p>

`;

}



cart.forEach(item=>{


count+=item.quantity;


html+=`

<div class="card cart-card mb-3 shadow-sm">


<div class="card-body">


<div class="d-flex align-items-center">


<img src="${item.image}"
class="cart-img me-3">


<div>


<h6>

${item.title}

</h6>


<p class="text-success fw-bold">

₹ ${item.price}

</p>



<div class="d-flex align-items-center gap-2">


<button class="btn btn-danger btn-sm"

onclick="changeQty(${item.id},-1)">

-

</button>



<span class="fw-bold">

${item.quantity}

</span>



<button class="btn btn-success btn-sm"

onclick="changeQty(${item.id},1)">

+

</button>



</div>


<button class="btn btn-outline-danger btn-sm mt-2"

onclick="removeItem(${item.id})">

Remove

</button>


</div>


</div>


</div>


</div>


`;


});



document.getElementById("cartArea").innerHTML=html;


document.getElementById("cartCount").innerHTML=count;


}








function changeQty(id,value){


let item=cart.find(p=>p.id==id);


item.quantity+=value;



if(item.quantity<=0){


cart=cart.filter(p=>p.id!=id);


}



saveCart();


}








function removeItem(id){


cart=cart.filter(p=>p.id!=id);


saveCart();


}








function saveCart(){


localStorage.setItem("cart",JSON.stringify(cart));


displayCart();


}
