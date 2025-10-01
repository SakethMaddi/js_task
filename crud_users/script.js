
let card=document.getElementById("card_container")
fetch("https://gorest.co.in/public/v2/users").then(
    function(response){
        return response.json()
    }
).then(
    function(usersdata){
        for(let i=0;i<usersdata.length;i++){
            let card_ele=document.createElement("div")
            card_ele.classList="card_data"
            let p_ele=document.createElement("p")
            p_ele.textContent="Name:"+ usersdata[i].name
            let p1_ele=document.createElement("p")
            p1_ele.textContent="Email:"+ usersdata[i].email
            let p2_ele=document.createElement("p")
            p2_ele.textContent="Gender:"+ usersdata[i].gender
            let p3_ele=document.createElement("p")
            p3_ele.textContent="Status:"+ usersdata[i].status
            card_ele.appendChild(p_ele)
            card_ele.appendChild(p1_ele)
            card_ele.appendChild(p2_ele)
            card_ele.appendChild(p3_ele)
            card.appendChild(card_ele)
        }
    }
)
