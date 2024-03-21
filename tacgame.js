let boxes=document.querySelectorAll(".box");
let winmsg=document.querySelector("#winmsg");
let winnercon=document.querySelector(".winnermsg");
let draw=document.querySelector(".drawmsg");
let drawmag=document.querySelector("#drawmag");
let resetbtn=document.querySelector(".resetbtn");
let newbtn=document.querySelector(".newbtn");
let newbtn2=document.querySelector(".newbtn2");
const winnerpattern =[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let turn=true;
const resetgame=()=>{
    turn=true;
    enablebox();
    winnercon.classList.add("hide");
    draw.classList.add("hide2");
};
boxes.forEach((val)=>{
    val.addEventListener("click",()=>{
        if(turn){
            val.classList.remove("oclr")
            val.classList.add("xclr");
            val.innerText="X";
            turn=false;
        }else{
            val.classList.remove("xclr");
            val.classList.add("oclr");
            val.innerText="O";
            turn=true;
        }
        val.disabled=true;
        checkwinner();
    }) 
})
const disablebox=()=>{
    for(let i of boxes){
        i.disabled=true;
    }
};
const enablebox=()=>{
    for(let i of boxes){
        i.disabled=false;
        i.innerText="";
    }
};
let drawmsg=(()=>{
    drawmag.innerText="Select   NEW GAME    to Be a Winner";
    draw.classList.remove("hide2");
})
let winnermag=((winner)=>{
    winmsg.innerText=`Winner winner chicken dinner to ${winner} player`;
    winnercon.classList.remove("hide");
    disablebox();

})
let count=0;
let checkwinner=()=>{
    count++;
    winnerpattern.forEach((pattern)=>{
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;
        if(posval1!="" && posval2!="" && posval3!=""){
            if(posval1===posval2 && posval2===posval3){
                count=0;
                winnermag(posval1);
            }
        }
    })
    console.log(count);
    if(count===9){
        count=0;
        drawmsg();
    }
}
newbtn.addEventListener("click",resetgame);
newbtn2.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
