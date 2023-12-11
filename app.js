let btns=document.querySelectorAll(".btn")
let reset=document.querySelector(".reset")
let newgamebtn=document.querySelector("#new-btn")
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg");

let turn0=true;

///...........winning poatterns.............

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

//......print O and X into the box.............

btns.forEach((btn)=>{
btn.addEventListener("click",()=>{
    // console.log("heloooo");
    if(turn0){
        btn.innerHTML="O";
        turn0=false;
    }else{
        btn.innerHTML="X";
        turn0=true;
    }
    btn.disabled=true;

    checkWinner(); 
});
});

//........funcction for check winner...........

const checkWinner=()=>{

    for(let pattern of winpatterns){
        let pas1val=btns[pattern[0]].innerHTML;
        let pas2val=btns[pattern[1]].innerHTML;
        let pas3val=btns[pattern[2]].innerHTML;

        if(pas1val !="" && pas2val !="" && pas3val !=""){
            if(pas1val===pas2val && pas2val===pas3val){
                console.log("winner", pas1val);
                showWinner(pas1val);
            }
        }
    }


}

//......after completing the game disbled the button......

const disablebtns=()=>{
    for(let btn of btns){
        btn.disabled=true;
    }
}

//..........winner showing function....................

const showWinner=(winner)=>{
    msg.innerHTML=`congratulation, winner is ${winner}`
    msgcontainer.classList.remove("hide")
    disablebtns();
}

//......for enable the boxes...........

const enablebtns=()=>{
    for(let btn of btns){
        btn.disabled=false;
        btn.innerHTML="";
    }
}


//..........for reset the game...............

const gamereset=()=>{
    turn0=true;
    enablebtns();
    msgcontainer.classList.add("hide")
}

//......new game function................

newgamebtn.addEventListener("click",gamereset)
reset.addEventListener("click",gamereset)

