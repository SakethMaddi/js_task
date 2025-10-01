let sentence_ele=document.getElementById("sentence")
let formated_sentence=sentence_ele.textContent.split("").map(function(each){
    return `<span>${each}</span>`
})
sentence_ele.innerHTML=formated_sentence.join('')

let user_input_ele=document.getElementById("user_input")

let all_span_elements=document.querySelectorAll("span")
document.body.addEventListener('keydown',function(e)
{
    if(e.key!=="Tab" && e.key!=="Shift" && e.key!=="Backspace")
    {
        user_input_ele.value=user_input_ele.value+e.key
    }
    else if (e.key=="Backspace"){
        user_input_ele.value=user_input_ele.value.splice(user_input_ele.value.length,1)
    }
    let cur_val=user_input_ele.value
    for(let i=0;i<cur_val.length;i++)
    {
        if (cur_val[i]==all_span_elements[i].textContent)
        {
            all_span_elements[i].style.color="green"
        }
        else{
            all_span_elements[i].style.color="red"
        }
    }
    for(let i=cur_val.length;i<all_span_elements.length;i++)
    {
        all_span_elements[i].style.color="black"
    }
})
