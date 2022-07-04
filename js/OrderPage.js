import { orders } from "/js/OrdersArray.js";
import { products } from "/js/products.js"

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
    let title =  document.getElementById('orderTitle').value.trim();
    let description = document.getElementById('description').value;
    let price = document.getElementById('orderPrice').value; 


    console.log(price)
    console.log(description)

    if(description == '' || price== '' || title == ''){
        swal("Oh wait", "Make sure you fill everything!", "warning")
    }
    else {
        orders.push({name: title, price: price, photo: 'picsOther/nophoto.jpg', info: description});
    }

    printOrders(orders);
}

document.getElementById('orderButton').addEventListener('click', createOrder); 


function changeTheme(){
    let value = document.getElementById('exampleRadios1').checked; 
    console.log(document.getElementsByClassName('menu'));

    if(!value){
        document.body.style.backgroundColor = '#353535';
        Array.from(document.getElementsByClassName('menu')).forEach((item) => {
            item.style.color = '#FF00F5'
        })
        Array.from(document.getElementsByClassName('popup')).forEach((item) => {
            item.style.backgroundColor = '#353535'
        })
        Array.from(document.getElementsByClassName('popup')).forEach((item) => {
            item.style.color = '#ffffff'
        })
    }

    else{
        document.body.style.backgroundColor = '#fff8e3';
        Array.from(document.getElementsByClassName('menu')).forEach((item) => {
            item.style.color = 'black'
        })
        Array.from(document.getElementsByClassName('popup')).forEach((item) => {
            item.style.backgroundColor = '#fff8e3'
        })
        Array.from(document.getElementsByClassName('popup')).forEach((item) => {
            item.style.color = 'black'
        })
    }
}

document.getElementById('applySettings').addEventListener('click', changeTheme)
document.getElementById('exampleRadios1').addEventListener('click', changeTheme)
document.getElementById('exampleRadios2').addEventListener('click', changeTheme)