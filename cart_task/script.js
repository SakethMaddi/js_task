document.body.style.backgroundColor="lightblue"

array=["Chicken Biriyani","Mutton Biriyani","Pizza","Sandwidch","Taco","Pasta"]

let item_ele=document.getElementById("items_container")
function displayitems()
{
    for(let i=0;i<array.length;i++)
    {
        let items=document.createElement("p")
        let del_btn=document.createElement("button")
        del_btn.textContent="Delete"
        del_btn.style.border="red 2px solid"
        del_btn.onclick=function()
        {
            array.splice(i,1)
            item_ele.textContent=""
            displayitems()
        }
        items.textContent=array[i]
        items.appendChild(del_btn)
        item_ele.appendChild(items)
    }
}
displayitems()

function additem()
{
    let ele=document.getElementById("user")
    let current_ele=ele.value
    array.push(current_ele)
    item_ele.textContent=""
    ele.value=""
    displayitems()
}