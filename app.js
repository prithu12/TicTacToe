console.log("Welcome to tic tac toe");
let audio = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn="X";
let gameovers=false;

const changeTurn=()=>{
    return turn==="X"?"0":"X"
}

const checkwin=()=>{
    let boxtexts=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2],
        [0,3,6],
        [6,7,8],
        [2,5,8],
        [1,4,7],
        [0,4,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Win";
            gameovers = true;
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "200px";
            gameover.play();
            var popup = document.querySelector(".win-popup");
            popup.style.width = "100%";
            document.querySelector('.chickendinner').innerText = "Congratulations!    " +  boxtexts[e[0]].innerText + "   Won the Match";
            let close = document.querySelector(".close");
            close.addEventListener("click", () => {
                popup.style.width = "0%";
            });
        }
    });
    
}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(boxtext.innerText===""){
            boxtext.innerText=turn;
            turn=changeTurn();
            audioTurn.play();
            checkwin();
            if(!gameovers){
                document.getElementsByClassName("info")[0].innerText="turn for"+turn;
                
            }
            
        }
    })
})
let button=document.getElementById("reset");
reset.addEventListener("click",()=>{
    let boxtex=document.querySelectorAll(".boxtext");
    Array.from(boxtex).forEach(element=>{
        element.innerText="";
    });
    turn="X";
    gameovers=false
    document.getElementsByClassName("info")[0].innerText="turn for"+turn;
    document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width="0px";



});
