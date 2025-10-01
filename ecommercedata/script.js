let products_ele=document.getElementById("products")

fetch("https://fakestoreapi.com/products").then(
    function(response){
        return response.json()
    }
).then(
    function(jsonresponse){
        for(let i=1;i<jsonresponse.length;i++){
            let card=document.createElement("div")
            card.classList="card"
            let img_ele=document.createElement("img")
            img_ele.src=jsonresponse[i].image
            img_ele.style.width="200px"
            let p_ele=document.createElement("p")
            p_ele.textContent=jsonresponse[i].title
            card.appendChild(img_ele)
            card.appendChild(p_ele)
            products_ele.appendChild(card)
        }
    }
)