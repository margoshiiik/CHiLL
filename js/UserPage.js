import { products } from "/js/products.js";
import { users } from "/js/users.js";



function printProducts(array) {

    const body = document.getElementById('body');
    body.innerHTML = ''; 
    body.innerHTML = `<div class="row">
    <div class="col-md-3">
            <div class="filterDiv d-none d-md-block">
                <h2 class="f text-center">Filter</h2>
                <details class="mt-2">
                    <summary>Color</summary>
                    <div class="check">
                        <ul>
                            <li>
                                <input type="checkbox" id="black"><label for="">Black</label>
                            </li>
                            <li>
                                <input type="checkbox" id="white"><label for="">White</label>
                            </li>

                            <li>
                                <input type="checkbox" id="beidge"><label for="">Beidge</label>
                            </li>

                            <li>
                                <input type="checkbox" id="red"><label for="">Red</label>
                            </li>

                            <li>
                                <input type="checkbox" id="green"><label for="">Green</label>
                            </li>

                            <li>
                                <input type="checkbox" id="pink"><label for="">Pink</label>
                            </li>

                            <li>
                                <input type="checkbox" id="blue"><label for="">Blue</label>
                            </li>

                            <li>
                                <input type="checkbox" id="orange"><label for="">Orange</label>
                            </li>

                            <li>
                                <input type="checkbox" id="grey"><label for="">Grey</label>
                            </li>
                        </ul>
                    </div>
                </details>
                <details class="mt-2">
                    <summary>Size</summary>
                    <div class="input-group mb-3 mt-2">
                        <label class="input-group-text" for="inputGroupSelect01">Options</label>
                        <select class="form-select" id="size">
                          <option selected value="choose">Choose...</option>
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                          <option value="oneSize">One size</option>
                        </select>
                      </div>
                </details>
                <details class="mt-2">
                    <summary>Price</summary>
                    <div class="text-center">From</div><input type="number" id="from" class="priceInput">
                    <div class="text-center">to</div><input id="to" class="priceInput" type="number">
                </details>
        
                <button class="but mt-3" id="filterButton">Filter</button>
            </div>
    </div>


        <div class="col-md-9">
            
            <div id="wrapper" class="wrapper">
            </div>

        </div>          

</div>`

    const myNode = document.getElementById('wrapper');
    myNode.innerHTML = '';


    array.forEach((item, ind) => {
        const div_wrapper = document.createElement("div");
        div_wrapper.innerHTML =
            ` 
                <div class="forProduct" id="forProducts${ind}">
                    <img src="/${item.photo}" class="mt-3"alt="">

                    <h3 class="text-center mt-2">${item.title}</h3>
                    <h5 class="text-center mt-2">${item.price}$</h5>

                    <a class="button" href="#popup${ind}"><button class="buyButton">Buy</button></a>
                        <div id="popup${ind}" class="overlay">
                        <div class="popup">
                            <div class="container">
                            <div class="row">
                                <div class="col-lg-6">
                                    <img src="/${item.photo}" class="popupPic" alt="">
                                </div>
            
                                <div class="col-lg-6 text-center">
                                <a class="close" href="#">&times;</a>
                                    <h1 class="mt-4">${item.title}</h1>
                                    <h2 class="mt-4">${item.price}$</h2>
                                    <h3 class="mt-4 itemInfo ">${item.info}</h3>
                                    <h5 class="mt-4 ">Made by</h5>
                                    <h5 class="mt-2 ">${item.author}</h5>
                                    
                                    <button class="mt-4" id="addToBasket${ind}">Add to basket</button>
                                    <button class="mt-4 ms-4 whiteBut" id="buyButtonPopup${ind}">Buy</button>
                                    
                                    <img src="/picsOther/heartEmpty.png" id="heart${ind}" class="heart mt-4" alt="">
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
 
      `
     
      myNode.appendChild(div_wrapper);
      let div_back = document.getElementById('forProducts'+ind);
      let img = document.getElementById('heart'+ind);
      
      img.addEventListener('click', () => {
 
        if(img.getAttribute('src') == '/picsOther/heartEmpty.png') {
            img.setAttribute('src', '/picsOther/heart.png'); 
            item.liked = true; 
            console.log(item.liked);
        }
         else{
            img.setAttribute('src', '/picsOther/heartEmpty.png')
            item.liked = false; 
            console.log(item);
         }
        
      });


      document.getElementById('addToBasket' + ind).addEventListener('click', () => {
        

        if(products[ind].tobasket === false) {
            products[ind].tobasket = true; 
            swal("OK!", "This product is added to your basket", "success");
        }
        else swal("Oops", "This product is already in your basket", "warning");
     })

     document.getElementById('buyButtonPopup' + ind).addEventListener('click', () => {
        if(products[ind].tobasket === false) {
            products[ind].tobasket = true; 
            swal("OK!", "This product is added to your basket", "success");
        }
        else swal("Oops", "This product is already in your basket", "warning");
     })

      let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16); 
      div_back.style.setProperty('background-color', randomColor);


    })

};


printProducts(products);

function forButtons(e){
    let word = e.target.innerText.toLowerCase();
    console.log(word)
    if(word==='all') printProducts(products);
    else {
        let printThis = []; 
        products.forEach((item) => {
            let arr = item.tags; 
            if(arr.includes(word)) printThis.push(item);
            
        })

        printProducts(printThis);
    }
}

function forSearchButton(){
    let input = document.getElementById("searchInput").value.trim().toLowerCase();
    console.log(input);

    let printThis = []; 

    products.forEach((item) => {
        let arr = item.tags;
        (arr.includes(input)) ? printThis.push(item) : console.log('ddd')
    })

    console.log(printThis)

    printProducts(printThis);


}

function filterByPrice(valueFrom, valueTo) {
    return products => products.price >= valueFrom && products.price <= valueTo;
}


function myFilter(){

    let blackArray = _.filter(products, function(item) {
        return item.color.includes('black');
    })
    let whiteArray = _.filter(products, function(item) {
        return item.color.includes('white');
    })
    let beidgeArray = _.filter(products, function(item) {
        return item.color.includes('beidge');
    })
    let redArray = _.filter(products, function(item) {
        return item.color.includes('red');
    })
    let greenArray = _.filter(products, function(item) {
        return item.color.includes('green');
    })
    let orangeArray = _.filter(products, function(item) {
        return item.color.includes('orange');
    })
    let pinkArray = _.filter(products, function(item) {
        return item.color.includes('pink');
    })
    let blueArray = _.filter(products, function(item) {
        return item.color.includes('blue');
    })
    let greyArray = _.filter(products, function(item) {
        return item.color.includes('grey');
    });

    let beidgeItem = document.getElementById('beidge').checked; 
    let blackItem = document.getElementById('black').checked; 
    let whiteItem = document.getElementById('white').checked; 
    let redItem = document.getElementById('red').checked; 
    let greenItem = document.getElementById('green').checked; 
    let orangeItem = document.getElementById('orange').checked; 
    let pinkItem = document.getElementById('pink').checked; 
    let blueItem = document.getElementById('blue').checked; 
    let greyItem = document.getElementById('grey').checked; 

    let printThis = new Set; 

    if(beidgeItem) beidgeArray.forEach((item) => {printThis.add(item)}); 
    if(blackItem)blackArray.forEach((item) => {printThis.add(item)}); ;
    if(whiteItem) whiteArray.forEach((item) => {printThis.add(item)});
    if(redItem) redArray.forEach((item) => {printThis.add(item)});
    if(greenItem) greenArray.forEach((item) => {printThis.add(item)});
    if(orangeItem) orangeArra.forEach((item) => {printThis.add(item)});
    if(pinkItem) pinkArray.forEach((item) => {printThis.add(item)});
    if(blueItem) blueArray.forEach((item) => {printThis.add(item)});
    if(greyItem) greyArray.forEach((item) => {printThis.add(item)});

    

    if(printThis.length == 0) printThis = products;
    
    let arr = Array.from(printThis); 

    let from = document.getElementById("from").value; 
    let to = document.getElementById("to").value; 
    if (from !== "" && to !== "" && Number.parseInt(from) >= 0) arr = arr.filter(filterByPrice(from, to));

    console.log(arr);

    let size = document.getElementById("size").value;

    if(size != "choose") arr = arr.filter(elem => elem.size == size); 
    console.log(arr);

    printProducts(arr);
}

document.getElementById("filterButton").addEventListener('click', myFilter);

document.getElementById('searchButton').addEventListener('click', forSearchButton);
    

document.getElementById('allButton').addEventListener('click', forButtons);
document.getElementById('clothesButton').addEventListener('click', forButtons);
document.getElementById('bagsButton').addEventListener('click', forButtons);
document.getElementById('accessoriesButton').addEventListener('click', forButtons);
document.getElementById('toysButton').addEventListener('click', forButtons);
document.getElementById('decoButton').addEventListener('click', forButtons);
document.getElementById('kitchenButton').addEventListener('click', forButtons);



document.getElementById('openbasketPage').addEventListener('click', () => {
    let body = document.getElementById('body'); 
    body.innerHTML = ''
    let inbasket = []; 

    products.forEach((item) => {
        if(item.tobasket == true) inbasket.push(item)
    });

    inbasket.forEach((item, ind) => {
        const div_wrapper = document.createElement("div");
        div_wrapper.innerHTML =
            ` 
                
                        <div class="popupLike mt-5">
                            <div class="container">
                            <div class="row">
                                <div class="col-lg-6">
                                    <img src="/${item.photo}" class="popupPic mt-3 img-fluid" alt="">
                                </div>
            
                                <div class="col-lg-6 text-center">
                                    <h1 class="mt-4">${item.title}</h1>
                                    <h2 class="mt-4">${item.price}$</h2>
                                    <h3 class="mt-4 itemInfo ">${item.info}</h3>
                                    <h5 class="mt-4 ">Made by</h5>
                                    <h5 class="mt-2 ">${item.author}</h5>
                                    
                                    
                                </div>
                            </div>
                        </div>
        </div>
      `
     
      body.appendChild(div_wrapper);

    })
})

document.getElementById('openLikePage').addEventListener('click', () => {
    console.log(products);

    let body = document.getElementById('body'); 
    body.innerHTML = ''
    let likes = []; 

    products.forEach((item) => {
        if(item.liked == true) likes.push(item)
    });

    console.log(likes)

    likes.forEach((item, ind) => {
        const div_wrapper = document.createElement("div");
        div_wrapper.innerHTML =
            ` 
                
                        <div class="popupLike mt-5">
                            <div class="container">
                            <div class="row">
                                <div class="col-lg-6">
                                    <img src="/${item.photo}" class="popupPic mt-3 img-fluid" alt="">
                                </div>
            
                                <div class="col-lg-6 text-center">
                                    <h1 class="mt-4">${item.title}</h1>
                                    <h2 class="mt-4">${item.price}$</h2>
                                    <h3 class="mt-4 itemInfo ">${item.info}</h3>
                                    <h5 class="mt-4 ">Made by</h5>
                                    <h5 class="mt-2 ">${item.author}</h5>
                                    
                                    
                                </div>
                            </div>
                        </div>
        </div>
      `
     
      body.appendChild(div_wrapper);

    })


});

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


