const productImg = document.querySelector('.card-img-top')
const main = document.querySelector('.main')
const productName = document.querySelector('.card-title')
const productDesc = document.querySelector('.card-text')

function uiCreation (detailsObj) {
    detailsObj.forEach((detail) => {
        div = document.createElement('div')
        var content = `<div class="card" style="width: 18rem;">
        <img src="${detail.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${detail.title}</h5>
          <p class="card-text">${detail.description}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>` 
        div.setAttribute("class", "container");
        div.innerHTML = content;
        main.appendChild(div)
        // card.innerHTML += `<img src="${detail.image}" class="card-img-top" alt="...">
        // <div class="card-body">
        //   <h5 class="card-title">${detail.title}</h5>
        //   <p class="card-text">${detail.description}</p>
        //   <a href="#" class="btn btn-primary">Go somewhere</a>
        // </div>` 
    })
    
}


fetch('https://fakestoreapi.com/products/').then((response) => {
    console.log(response)
    return response.json()
}).then((data => {
    console.log(data)
    uiCreation(data)
    
}))


