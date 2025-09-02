function onIncreament()
{
    let content = document.getElementById("count")
     let number= parseInt(content.textContent)
     content.textContent=number+1

    let value=parseInt(content.textContent)
    if (value>0){
        content.style.color="green"
    
    }else if (value<0){
        content.style.color="red"
    }else {
        content.style.color="black"
    }

}

function onDecreament()
{
    let content = document.getElementById("count")
    let number= parseInt(content.textContent)
    content.textContent = number-1
    let value=parseInt(content.textContent)
    if (value>0){
        content.style.color="green"
    
    }else if (value<0){
        content.style.color="red"
    }else {
        content.style.color="black"
    }
}