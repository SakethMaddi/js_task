let players=[{name:"Chinnu",colour:"green",score:0},
    {name:"Bannu",colour:"red",score:0},
    {name:"Nani",colour:"yellow",score:0},
    {name:"Chiku",colour:"blue",score:0}]

let cell_elements=document.getElementById("cell_container")

for(let i=100;i>=1;i--)
{
    let cell=document.createElement("div")
    cell.style.border="1px solid grey"
    cell.id= `cell${i}`
    cell.style.padding="30px"
    if(i%2==0)
    {
        cell.style.backgroundColor="coral"
    }
    cell.textContent=i
    cell_elements.appendChild(cell)
}

let btn_ele=document.getElementById("button_container")
for(let i=0;i<4;i++)
{
    let btn=document.createElement("button")
    btn.textContent=players[i].name + "      "+ players[i].score
    btn.style.backgroundColor=players[i].colour
    btn.style.padding="10px 40px"
    btn.style.color="dark grey"
    btn.onclick=function()
    {
        let num=Math.random()*6
        num=Math.ceil(num)
        let prevscore_cell=document.getElementById(`cell${players[i].score}`)
            let cu_p= document.getElementById(`players${i}`)
            if(cu_p){
                prevscore_cell.removeChild(cu_p)
            }
        players[i].score=players[i].score+num
        btn.textContent=players[i].name + "      "+ players[i].score
        let updated_score=players[i].score
        let cur_cel=document.getElementById(`cell${updated_score}`)
            let cur_player=document.createElement("div")
            cur_player.classList="person"
            cur_player.style.backgroundColor=players[i].colour
            cur_cel.appendChild(cur_player)
            cur_player.id=`players${i}`
    }
    btn_ele.appendChild(btn)
}
