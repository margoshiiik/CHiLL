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
                            <div class="popup">
                                <div class="container">
                                <div class="row">
                                    <div class="col-6">
                                        <img src="/${item.photo}" alt="">
                                    </div>
                
                                    <div class="col-6 text-center">
                                    <a class="close" href="#">&times;</a>
                                        <h1 class="mt-4">${item.name}</h1>
                                        <h2 class="mt-4">Offered price: ${item.price}$</h2>
                                        <h5 class="mt-4 ">"${item.info}"s</h5>
                                        <h5 class="mt-4 "><strong>Customer:</strong> ${item.customer}</h5>
                                        
                                        <button class="mt-5">Pick order</button>
                                        <button class="mt-5 ms-4 whiteBut">Connect with customer</button>
                                        
                                        
                                        
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