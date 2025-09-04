function flip()
{
    let img= document.getElementById("image")
    let randomNum=Math.random()*100
    randomNum=Math.ceil(randomNum)
    
    if(randomNum%2==0)
    {   
        let head_ele=document.getElementById("count_h")
        let head_count=parseInt(head_ele.textContent)
        head_ele.textContent=head_count+1  
        img.src="https://tools360.net/tool-assets/fun-tools/images/head_coin.png"
    }
    else
    {
        let tail_ele=document.getElementById("count_t")
        let tail_count=parseInt(tail_ele.textContent)
        tail_ele.textContent=tail_count+1
        img.src="https://tools360.net/tool-assets/fun-tools/images/tail_coin.png"
    }
}