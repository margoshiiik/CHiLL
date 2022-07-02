import { orders } from "/js/OrdersArray.js";

function printOrders(array) {
        const myNode = document.getElementById('wrapper-for-orders');
        myNode.innerHTML = '';
    
    
        array.forEach((item, ind) => {
            const div_wrapper = document.createElement("div");
            div_wrapper.innerHTML =
                ` 
                    <div class="forProduct" id="forOrder${ind}">
                        <img src="/${item.photo}" class="mt-3"alt="">
    
                        <h3 class="text-center mt-2">${(item.name).toUpperCase()}</h3>
                        <h5 class="text-center mt-2">${item.price}$</h5>
    
                        <a class="button" href="#popup${ind}"><button class="buyButton">Pick</button></a>
                            <div id="popup${ind}" class="overlay">
                            <div class="popupOrder popup">
                                <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 mt-4">
                                        <img src="/${item.photo}" class="mt-5 popupPic"alt="">
                                    </div>
                
                                    <div class="col-lg-6 mt-4 text-center">
                                    <a class="close" href="#">&times;</a>
                                        <h1 class="mt-4">${item.name}</h1>
                                        <h2 class="mt-4">Offered price: ${item.price}$</h2>
                                        <h5 class="mt-4 ">"${item.info}"s</h5>
                                        
                                        <button class="mt-5">Pick order</button>
                                        <button class="mt-4 whiteBut">Chat customer</button>
                                        
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
     
          `
         
          myNode.appendChild(div_wrapper);
    
          let div_back = document.getElementById('forOrder'+ind);
          let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16); 
          div_back.style.setProperty('background-color', randomColor);
    
    
        })
    
};


printOrders(orders); 


function createOrder(){
    let description = document.getElementById('description').value;
    let price = document.getElementById('orderPrice').value; 
    let photo = document.getElementById('photoFile').value; 
    console.log(photo)
    console.log(price)
    console.log(description)

    if(description == '' || price== ''){
        swal("Oh wait", "Make sure you fill everything!", "warning")
    }
    else {
        orders.push({})
    }
}

document.getElementById('orderButton').addEventListener('click', createOrder); 