import { products } from "/js/products.js";




function printProducts(array) {
    const myNode = document.getElementById('wrapper');
    myNode.innerHTML = '';


    array.forEach((item, ind) => {
        const div_wrapper = document.createElement("div");
        div_wrapper.innerHTML =
            ` 
                <div class="forProduct" id="forProducts${ind}">
                    <img src="${item.photo}" class="mt-3"alt="">

                    <h3 class="text-center mt-2">${item.title}</h3>
                    <h5 class="text-center mt-2">${item.price}$</h5>

                    <a class="button" href="#popup${ind}"><button class="buyButton">Buy</button></a>
                        <div id="popup${ind}" class="overlay">
                        <div class="popup">
                            <div class="container">
                            <div class="row">
                                <div class="col-6">
                                    <img src="${item.photo}" alt="">
                                </div>
            
                                <div class="col-6 text-center">
                                <a class="close" href="#">&times;</a>
                                    <h1 class="mt-4">${item.title}</h1>
                                    <h2 class="mt-4">${item.price}$</h2>
                                    <h3 class="mt-4 ">${item.info}</h3>
                                    <h5 class="mt-4 ">Made by</h5>
                                    <h5 class="mt-2 ">${item.author}</h5>
                                    
                                    <button class="mt-4">Add to basket</button>
                                    <button class="mt-4 ms-4 whiteBut">Buy</button>
                                    
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

      let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16); 
      div_back.style.setProperty('background-color', randomColor);


    })

};


printProducts(products);

function forButtons(e){
    let word = e.target.innerText.toLowerCase();
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
            if(arr.includes(input)) printThis.push(item);
            
        })

      (printThis.length == 0) ? printProducts(products) : printProducts(printThis);
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

    let printThis = []; 

    if(beidgeItem) printThis = printThis.concat(beidgeArray); 
    if(blackItem) printThis = printThis.concat(blackArray);
    if(whiteItem) printThis = printThis.concat(whiteArray);
    if(redItem) printThis = printThis.concat(redArray);
    if(greenItem) printThis = printThis.concat(greenArray);
    if(orangeItem) printThis = printThis.concat(orangeArray);
    if(pinkItem) printThis = printThis.concat(pinkArray);
    if(blueItem) printThis = printThis.concat(blueArray);
    if(greyItem) printThis = printThis.concat(greyArray);

    if(printThis.length == 0) printThis = products;
    
    console.log(printThis);

    let from = document.getElementById("from").value; 
    let to = document.getElementById("to").value; 
    if (from !== "" && to !== "" && Number.parseInt(from) >= 0) printThis = printThis.filter(filterByPrice(from, to));

    console.log(printThis);

    let size = document.getElementById("size").value;

    if(size != "choose") printThis = printThis.filter(elem => elem.size == size); 
    console.log(printThis);

    printProducts(printThis);
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

