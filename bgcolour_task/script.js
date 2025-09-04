let btn0=document.getElementById("green")

let btn1=document.getElementById("pink")

let btn2=document.getElementById("purple")

let btn3=document.getElementById("orange")

arr=["green","pink","purple","orange"]


btn0.style.backgroundColor=arr[0]
btn1.style.backgroundColor=arr[1]
btn2.style.backgroundColor=arr[2]
btn3.style.backgroundColor=arr[3]


document.body.style.backgroundColor="black"
function allinone(colour)
{
    document.body.style.backgroundColor=colour
}