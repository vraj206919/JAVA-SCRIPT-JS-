const productAPI = "https://fakestoreapi.com/products";


let productList = [];



async function fetchProducts(){


    try{


        const response = await fetch(productAPI);


        const result = await response.json();



        productList = result;


        showProducts(productList);



    }

    catch(error){

        console.log(error);

    }


}




function showProducts(products){


    const productArea = document.getElementById("productArea");


    productArea.innerHTML = "";



    products.forEach(product => {



        productArea.innerHTML += `


        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">


            <div class="card h-100 shadow">


                <img 
                src="${product.image}"
                class="card-img-top">


                <div class="card-body">


                    <h5 class="card-title">

                    ${product.title}

                    </h5>



                    <p>

                    Category : ${product.category}

                    </p>



                    



                    <h4 class="price">

                    $${product.price}

                    </h4>




                    <button class="btn cart-btn w-100">

                        Add To Cart

                    </button>



                </div>


            </div>


        </div>


        `;



    });


}




function searchProducts(){


    let searchValue = document
    .getElementById("searchBox")
    .value
    .toLowerCase();



    let filteredProducts = productList.filter(product =>


        product.title
        .toLowerCase()
        .includes(searchValue)



    );



    showProducts(filteredProducts);


}





fetchProducts();