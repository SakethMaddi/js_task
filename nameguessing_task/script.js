array=[ "BMW","Audi","Mercedes","Volvo","Jeep","Volkswagen","Kia","Mahindra" ]
let index=Math.random()*array.length
index=Math.round(index)
system_generated_name=array[index]
document.body.style.backgroundColor="Beige"
document.body.style.marginLeft="400px"

let chance=0
function systemguess()
{
    chance+=1
    let ele=document.getElementById("userguess")
    if (ele.value==system_generated_name)
    {
        if (chance==1)
        {
            alert("Your Guess is correct in the first attempt")
        }
        else if(chance==2)
        {
            alert("Your guess is correct in the second attempt")
        }
        else if(chance==3)
        {
            alert("Your guess is correct in the third attempt")
        }
        else
        {
            alert("Thanks for your participation,Try to get in top 3")
        }
    }
}