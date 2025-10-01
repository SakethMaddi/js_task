let num_ele=document.getElementById("number")


let deadline=setInterval(() => {
    num_ele.textContent=parseInt(num_ele.textContent)-1
    if(parseInt(num_ele.textContent)==0)
    {
        clearInterval(deadline)
    }

    
}, 1000);