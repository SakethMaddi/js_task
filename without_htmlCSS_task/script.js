
let heading_ele=document.createElement("h1")

heading_ele.textContent="Sample of js without HTML,CSS"
heading_ele.style.inlineSize=""
heading_ele.style.marginLeft="30%"
document.body.appendChild(heading_ele)

document.body.appendChild(document.createElement("br"))
let image_ele=document.createElement("img")
image_ele.src="https://www.alcazar.in/UserUploads/Images/Blog/Shih%20Tzu%20Dogs/shih-tzu-dog-relaxing-sofa-living-room.jpg"
image_ele.style.width="500px"
document.body.appendChild(image_ele)
image_ele.style.marginLeft="30%"
document.body.appendChild(document.createElement("br"))

let button1=document.createElement("button")
button1.textContent="Click here to change the image"
let count=0
button1.onclick=function()
{   
    if(count%2!=0){
    image_ele.src="https://images.prismic.io/trustedhousesitters/ca6607b9-9abc-4e06-928b-22d21c46a70b_shih+tzu+6.png?auto=compress,format&rect=0,0,1920,800&w=960&h=400"
    count+=1
    }
    else{
        image_ele.src="https://www.alcazar.in/UserUploads/Images/Blog/Shih%20Tzu%20Dogs/shih-tzu-dog-relaxing-sofa-living-room.jpg"
        count+=1
    }
    
}
button1.style.marginLeft="40%"
document.body.appendChild(button1)
