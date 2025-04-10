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
let count = 0;
let turn = true
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

        checkWinner();
        sound.play();
        count++;
        // console.log(count);
        draw()
    })
})

    


let draw = ()=>{
    if(count==9){
        winName.innerText = 'Draw';
        sound3.volume = 0.7;
        sound3.play();
    }
}
const checkWinner = ()=>{
    winChance.forEach((win)=>{
        // console.log(boxes[win[0]].innerText,boxes[win[1]].innerText,boxes[win[2]].innerText);
        box1 = boxes[win[0]].innerText;
        box2 = boxes[win[1]].innerText;
        box3 = boxes[win[2]].innerText;

        if(box1!=''&&box2!=''&&box3!=''){
            if(box1==box2&&box2==box3){
                // console.log(`${box1} is winner`);
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
    boxes.forEach((box)=>{
        box.innerText = '';
        box.disabled = false;
        winName.innerText = ''
        count=0;
        box.classList.remove('ani');

    })
})