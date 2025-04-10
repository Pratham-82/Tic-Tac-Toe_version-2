let boxes = document.querySelectorAll('.box');
let winName = document.querySelector('.win-name')
let reset = document.querySelector('.reset');
let sound = document.querySelector('.sound');
let sound2 = document.querySelector('.sound2');
let sound3 = document.querySelector('.sound3');
document.querySelector('.box').addEventListener('click',()=>{
    
})

const winChance = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let x = true;
let count = 0;
let turn = true;
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn){
            box.innerText='O';
            turn = false;
            box.style.color = '#3b31c7';
        }else{
            box.innerText = 'X';
            turn=true
            box.style.color = '#c51e31';
        }
        box.classList.add('ani');
        box.disabled=true;

        count++;
        checkWinner();
        if(count==9 && x){
            winName.innerText = 'Draw';
            sound3.play();
        }
        sound.play();
        console.log(count);
    })
})

    
const checkWinner = ()=>{
    winChance.forEach((win)=>{
        box1 = boxes[win[0]].innerText;
        box2 = boxes[win[1]].innerText;
        box3 = boxes[win[2]].innerText;

        if(box1!=''&&box2!=''&&box3!=''){
            if(box1==box2&&box2==box3){
                x = false;
                winName.innerText = `${box1} Wins Game`;
                boxes.forEach((box)=>{
                    box.disabled = true;
                    box.classList.remove('ani');
                    sound2.play();
                })
            }
        }
    })
}

reset.addEventListener('click',()=>{
    winName.innerText = '';
    x=true;
    boxes.forEach((box)=>{
        box.innerText = '';
        box.disabled = false;
        winName.innerText = ''
        count=0;
        box.classList.remove('ani');

    })
})
